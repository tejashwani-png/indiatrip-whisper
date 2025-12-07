import { nlpService } from './nlpService';
import { getChatbotResponse } from '../data/travelData';
import { generateItinerary, getTravelTips } from './itineraryGenerator';
import { getDestinationInfo } from '../data/metroDestinations';
import { allIndianStates } from '../data/allStatesData';
import { correctLocation } from './grammarCorrection';

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
      response = `📅 **${days}-Day ${correctedLocation.charAt(0).toUpperCase() + correctedLocation.slice(1)} Itinerary**\n\n${itinerary}${tips}`;
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
  
  // Handle location info requests for metro cities
  if (!response && location) {
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
    }
  }
  
  // Fallback to original getChatbotResponse
  if (!response) {
    response = getChatbotResponse(correctedQuery || query);
  }
  
  // Handle greetings
  if (nlpAnalysis.intent === 'greeting') {
    response = "🙏 Namaste! I'm **BharatExplore Bot** - your AI pathfinder for India.\n\nI can help you with:\n• Travel itineraries (e.g., 'Plan 2 day trip to Odisha')\n• City/State information\n• Food & cuisine recommendations\n• Attractions & places to visit\n• Culture, history & festivals\n• Best time to visit\n• Travel tips\n\nJust ask naturally - I understand grammar variations and spelling mistakes too! 😊";
  }
  
  // Handle closing
  if (nlpAnalysis.intent === 'closing') {
    response = "🙏 Thank you for exploring India with me! Have a wonderful journey. Feel free to come back anytime for travel assistance!";
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
