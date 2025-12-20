import { nlpService } from './nlpService';
import { getChatbotResponse } from '../data/travelData';
import { generateItinerary, getTravelTips } from './itineraryGenerator';
import { getDestinationInfo } from '../data/metroDestinations';
import { allIndianStates } from '../data/allStatesData';
import { getLocationData, searchLocations } from '../data/allDistrictsData';
import { correctLocation } from './grammarCorrection';

// Format location name properly
function formatLocationName(name: string): string {
  return name.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}

// Enhanced chatbot response with NLP integration
export async function getEnhancedChatbotResponse(
  query: string,
  conversationHistory: { role: string; content: string }[] = []
): Promise<{
  response: string;
  nlpMetadata: {
    intent: string;
    confidence: number;
    entities: { type: string; value: string }[];
    sentiment: { label: string; score: number };
    context: any;
  };
}> {
  // Process message through NLP pipeline
  const nlpAnalysis = await nlpService.processMessage(query, conversationHistory);
  const correctedQuery = nlpAnalysis.correctedQuery;
  
  // Extract location from entities
  const locationEntity = nlpAnalysis.entities.find(e => e.type === 'LOCATION');
  const location = locationEntity?.value || '';
  const correctedLocation = correctLocation(location);
  
  let response = '';
  
  // Handle itinerary requests
  if (nlpAnalysis.intent === 'itinerary' && location) {
    const days = nlpAnalysis.days || 2;
    const itinerary = generateItinerary(correctedLocation, days);
    
    if (itinerary) {
      const tips = getTravelTips(correctedLocation);
      response = `📅 **${days}-Day ${formatLocationName(correctedLocation)} Itinerary**\n\n${itinerary}${tips}`;
    } else {
      // Try district/city data
      const locData = getLocationData(correctedLocation);
      if (locData) {
        response = `📅 **${days}-Day ${locData.name} Itinerary**\n\n`;
        response += `**Day 1:**\n`;
        locData.attractions.slice(0, 3).forEach((a, i) => {
          response += `• ${['Morning', 'Afternoon', 'Evening'][i]}: ${a}\n`;
        });
        if (days >= 2 && locData.attractions.length > 3) {
          response += `\n**Day 2:**\n`;
          locData.attractions.slice(3, 6).forEach((a, i) => {
            response += `• ${['Morning', 'Afternoon', 'Evening'][i]}: ${a}\n`;
          });
        }
        response += `\n🍛 **Must-try Food:** ${locData.food.join(', ')}`;
        response += `\n🌤️ **Best Time:** ${locData.bestTime}`;
        response += `\n\n💡 **Tips:**\n${locData.tips.map(t => `• ${t}`).join('\n')}`;
      } else {
        // Fallback to state data
        const stateData = allIndianStates[correctedLocation];
        if (stateData) {
          response = `📅 **${days}-Day ${stateData.name} Plan**\n\n`;
          response += stateData.itinerary.slice(0, days).join('\n\n');
          response += `\n\n🍛 **Must-try:** ${stateData.food.slice(0, 4).join(', ')}`;
          response += `\n🌤️ **Best Time:** ${stateData.bestTime}`;
        }
      }
    }
  }
  
  // Handle location info requests - check all data sources
  if (!response && location) {
    // First check metro destinations (detailed data)
    const destInfo = getDestinationInfo(correctedLocation);
    
    if (destInfo) {
      if (nlpAnalysis.intent === 'food_query') {
        response = `🍛 **${destInfo.name} Cuisine:**\n\n${destInfo.food.map((f, i) => `${i + 1}. ${f}`).join('\n')}\n\n${destInfo.culture.split('.')[0]}.`;
      } else if (nlpAnalysis.intent === 'attraction_query') {
        response = `🏛️ **Top Attractions in ${destInfo.name}:**\n\n${destInfo.attractions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n🌤️ **Best Time:** ${destInfo.bestTime}`;
      } else if (nlpAnalysis.intent === 'culture_query' || nlpAnalysis.intent === 'history_query') {
        response = `🎭 **${destInfo.name} - Culture & History:**\n\n${destInfo.culture}\n\n📜 **History:** ${destInfo.history}`;
      } else if (nlpAnalysis.intent === 'timing_query') {
        response = `🌤️ **Best Time to Visit ${destInfo.name}:**\n\n${destInfo.bestTime}\n\n💡 **Tips:**\n${destInfo.tips.map(t => `• ${t}`).join('\n')}`;
      } else if (nlpAnalysis.intent === 'tips_query') {
        response = `💡 **Travel Tips for ${destInfo.name}:**\n\n${destInfo.tips.map(t => `• ${t}`).join('\n')}\n\n🌤️ **Best Time:** ${destInfo.bestTime}`;
      } else {
        // General info
        response = `✨ **${destInfo.name}**\n\n${destInfo.overview}\n\n🏛️ **Top Attractions:**\n${destInfo.attractions.slice(0, 5).map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n🍛 **Famous Food:** ${destInfo.food.slice(0, 5).join(', ')}\n\n🌤️ **Best Time:** ${destInfo.bestTime}\n\n💡 Ask me about specific attractions, food, culture, or plan an itinerary!`;
      }
    } else {
      // Check district/city data
      const locData = getLocationData(correctedLocation);
      
      if (locData) {
        if (nlpAnalysis.intent === 'food_query') {
          response = `🍛 **${locData.name} Cuisine:**\n\n${locData.food.map((f, i) => `${i + 1}. ${f}`).join('\n')}\n\n${locData.culture.split('.')[0]}.`;
        } else if (nlpAnalysis.intent === 'attraction_query') {
          response = `🏛️ **Top Attractions in ${locData.name}:**\n\n${locData.attractions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n🌤️ **Best Time:** ${locData.bestTime}`;
        } else if (nlpAnalysis.intent === 'culture_query' || nlpAnalysis.intent === 'history_query') {
          response = `🎭 **${locData.name} - Culture & Heritage:**\n\n${locData.culture}\n\n📍 **State:** ${locData.state}`;
        } else if (nlpAnalysis.intent === 'timing_query') {
          response = `🌤️ **Best Time to Visit ${locData.name}:**\n\n${locData.bestTime}\n\n💡 **Tips:**\n${locData.tips.map(t => `• ${t}`).join('\n')}`;
        } else if (nlpAnalysis.intent === 'tips_query') {
          response = `💡 **Travel Tips for ${locData.name}:**\n\n${locData.tips.map(t => `• ${t}`).join('\n')}\n\n🌤️ **Best Time:** ${locData.bestTime}`;
        } else {
          // General info for any location
          response = `✨ **${locData.name}**\n📍 ${locData.state}\n\n${locData.culture}\n\n🏛️ **Top Attractions:**\n${locData.attractions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n🍛 **Famous Food:** ${locData.food.join(', ')}\n\n🌤️ **Best Time:** ${locData.bestTime}\n\n💡 **Tips:**\n${locData.tips.map(t => `• ${t}`).join('\n')}`;
        }
      } else {
        // Check state data
        const stateData = allIndianStates[correctedLocation];
        if (stateData) {
          if (nlpAnalysis.intent === 'food_query') {
            response = `🍛 **${stateData.name} Cuisine:**\n\n${stateData.food.map((f, i) => `${i + 1}. ${f}`).join('\n')}\n\n${stateData.culture.split('.')[0]}.`;
          } else if (nlpAnalysis.intent === 'attraction_query') {
            response = `🏛️ **Top Attractions in ${stateData.name}:**\n\n${stateData.attractions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n🌤️ **Best Time:** ${stateData.bestTime}`;
          } else if (nlpAnalysis.intent === 'culture_query' || nlpAnalysis.intent === 'history_query') {
            response = `🎭 **${stateData.name} - Culture:**\n\n${stateData.culture}`;
          } else {
            response = `✨ **${stateData.name}**\n📍 Capital: ${stateData.capital}\n\n${stateData.culture}\n\n🏛️ **Top Attractions:**\n${stateData.attractions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n🍛 **Famous Food:** ${stateData.food.join(', ')}\n\n🌤️ **Best Time:** ${stateData.bestTime}`;
          }
        }
      }
    }
  }

  // Handle trip planning between two places
  if (!response && nlpAnalysis.intent === 'trip_planning') {
    const sourceEntity = nlpAnalysis.entities.find(e => e.type === 'SOURCE');
    const destEntity = nlpAnalysis.entities.find(e => e.type === 'DESTINATION');
    
    if (sourceEntity && destEntity) {
      const source = correctLocation(sourceEntity.value);
      const dest = correctLocation(destEntity.value);
      const sourceData = getLocationData(source) || getDestinationInfo(source);
      const destData = getLocationData(dest) || getDestinationInfo(dest);
      
      if (destData) {
        response = `🚗 **Trip from ${formatLocationName(source)} to ${formatLocationName(dest)}**\n\n`;
        response += `📍 **About ${formatLocationName(dest)}:**\n`;
        if ('overview' in destData) {
          response += `${destData.overview}\n\n`;
        } else if ('culture' in destData) {
          response += `${destData.culture}\n\n`;
        }
        response += `🏛️ **Must Visit:**\n${destData.attractions.slice(0, 5).map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\n`;
        response += `🍛 **Must Try:** ${destData.food.slice(0, 4).join(', ')}\n\n`;
        response += `🌤️ **Best Time:** ${destData.bestTime}`;
      }
    }
  }
  
  // Fallback to original getChatbotResponse
  if (!response) {
    response = getChatbotResponse(correctedQuery || query);
  }
  
  // Handle greetings
  if (nlpAnalysis.intent === 'greeting') {
    response = "🙏 Namaste! I'm **BharatExplore Bot** - your AI travel guide for India.\n\nI have information on:\n• All 28 States & 8 Union Territories\n• 700+ Cities, Districts & Towns\n• Metro Cities, Hill Stations, Beaches\n• Pilgrimages, Wildlife & Adventure\n\nJust ask me:\n• \"Plan 2 day trip to Varanasi\"\n• \"Tell me about Tirupati\"\n• \"Best food in Lucknow\"\n• \"Places to visit in Meghalaya\"\n\nI understand natural language, typos, and even Hinglish! 😊";
  }
  
  // Handle closing
  if (nlpAnalysis.intent === 'closing') {
    response = "🙏 Thank you for exploring India with me! Have a wonderful journey. Feel free to come back anytime for travel assistance!";
  }
  
  // Handle help intent
  if (nlpAnalysis.intent === 'help') {
    response = "🤝 **I can help you with:**\n\n";
    response += "📅 **Itineraries:** \"Plan 3 day trip to Kerala\"\n";
    response += "🏛️ **Attractions:** \"Places to visit in Jaipur\"\n";
    response += "🍛 **Food:** \"Famous food of Hyderabad\"\n";
    response += "🎭 **Culture:** \"Culture of Rajasthan\"\n";
    response += "🌤️ **Best Time:** \"When to visit Ladakh\"\n";
    response += "💡 **Tips:** \"Travel tips for Goa\"\n";
    response += "🚗 **Trip Planning:** \"Trip from Delhi to Agra\"\n\n";
    response += "I cover all Indian states, UTs, metros, and 700+ cities/towns!";
  }
  
  // Add sentiment-aware touch for frustrated users
  if (nlpAnalysis.sentiment.label === 'NEGATIVE' && nlpAnalysis.sentiment.score > 0.7) {
    if (response.includes('🤔')) {
      response = response.replace('🤔', '😊');
      response += '\n\n💡 Let me help you better! Try asking:\n• "Plan 2 day trip to Kerala"\n• "Tell me about Jaipur"\n• "Best food in Goa"';
    }
  }
  
  // Add context awareness for follow-ups
  if (nlpAnalysis.context.isFollowUp && nlpAnalysis.context.suggestedContext) {
    response = `📍 ${nlpAnalysis.context.suggestedContext}\n\n` + response;
  }

  return {
    response,
    nlpMetadata: {
      intent: nlpAnalysis.intent,
      confidence: nlpAnalysis.confidence,
      entities: nlpAnalysis.entities,
      sentiment: nlpAnalysis.sentiment,
      context: nlpAnalysis.context
    }
  };
}
