import { nlpService } from './nlpService';
import { getChatbotResponse } from '../data/travelData';
import { generateItinerary, getTravelTips, generateMultiDestinationItinerary, generateDynamicItinerary } from './itineraryGenerator';
import { getDestinationInfo } from '../data/metroDestinations';
import { allIndianStates } from '../data/allStatesData';
import { getLocationData, searchLocations, getAllLocationNames, getLocationsByState } from '../data/allDistrictsData';
import { correctLocation, extractMultipleLocations } from './grammarCorrection';
import { allIndianLocations, calculateTripData, getAllLocationsForDropdown } from '../data/tripPlannerLocations';

// Format location name properly
function formatLocationName(name: string): string {
  return name.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}

// Get trip planner data for a location
function getTripPlannerInfo(location: string): any {
  const locKey = location.toLowerCase().trim().replace(/\s+/g, ' ');
  
  // Try exact match
  if (allIndianLocations[locKey]) {
    return allIndianLocations[locKey];
  }
  
  // Try with spaces replaced
  const keyWithSpaces = locKey.replace(/-/g, ' ');
  if (allIndianLocations[keyWithSpaces]) {
    return allIndianLocations[keyWithSpaces];
  }
  
  // Search through all locations
  for (const [key, data] of Object.entries(allIndianLocations)) {
    if (key.includes(locKey) || data.name.toLowerCase().includes(locKey)) {
      return data;
    }
  }
  
  return null;
}

// Get comprehensive info about any location (combined from all sources)
function getAnyLocationInfo(location: string): any {
  const loc = correctLocation(location.toLowerCase().trim());
  
  // Check trip planner data first (has hotels, restaurants)
  const tripData = getTripPlannerInfo(loc);
  if (tripData) {
    // Merge with district data if available for attractions/culture
    const districtData = getLocationData(loc);
    if (districtData) {
      return { 
        ...districtData, 
        ...tripData, 
        hotels: tripData.hotels,
        restaurants: tripData.restaurants,
        source: 'combined' 
      };
    }
    return { ...tripData, source: 'tripPlanner' };
  }
  
  // Check district data (most comprehensive for attractions)
  const districtData = getLocationData(loc);
  if (districtData) return { ...districtData, source: 'district' };
  
  // Check metro destinations
  const metroData = getDestinationInfo(loc);
  if (metroData) return { ...metroData, source: 'metro' };
  
  // Check state data
  const stateData = allIndianStates[loc];
  if (stateData) return { ...stateData, source: 'state' };
  
  return null;
}

// Format hotels info
function formatHotelsInfo(hotels: any[]): string {
  if (!hotels || hotels.length === 0) return '';
  return hotels.map((h, i) => `${i + 1}. **${h.name}** - ${h.price}`).join('\n');
}

// Format restaurants info
function formatRestaurantsInfo(restaurants: any[]): string {
  if (!restaurants || restaurants.length === 0) return '';
  return restaurants.map((r, i) => `${i + 1}. **${r.name}** (${r.type})`).join('\n');
}

// Generate response for any location query
function generateLocationResponse(locationData: any, intent: string): string {
  const name = locationData.name || 'This destination';
  
  switch (intent) {
    case 'hotel_query':
    case 'accommodation_query':
    case 'stay_query':
      if (locationData.hotels) {
        return `🏨 **Hotels in ${name}:**\n\n${formatHotelsInfo(locationData.hotels)}\n\n💡 Prices are approximate and may vary by season. Book in advance for best rates!`;
      }
      return `🏨 **Accommodation in ${name}:**\n\nVarious hotels and guesthouses available. Check online booking platforms for current prices and availability.`;
    
    case 'restaurant_query':
    case 'dining_query':
    case 'eat_query':
      if (locationData.restaurants) {
        return `🍽️ **Top Restaurants in ${name}:**\n\n${formatRestaurantsInfo(locationData.restaurants)}\n\n${locationData.food ? `\n🍛 **Famous Dishes:** ${locationData.food.slice(0, 5).join(', ')}` : ''}`;
      }
      return `🍽️ **Dining in ${name}:**\n\n${locationData.food?.map((f: string, i: number) => `${i + 1}. ${f}`).join('\n') || 'Local cuisine available at various restaurants.'}`;
    
    case 'food_query':
      let foodResponse = `🍛 **${name} Cuisine:**\n\n`;
      if (locationData.food) {
        foodResponse += locationData.food.map((f: string, i: number) => `${i + 1}. ${f}`).join('\n');
      }
      if (locationData.restaurants) {
        foodResponse += `\n\n🍽️ **Where to Eat:**\n${formatRestaurantsInfo(locationData.restaurants)}`;
      }
      foodResponse += `\n\n${locationData.culture?.split('.')[0] || ''}.`;
      return foodResponse;
    
    case 'attraction_query':
      return `🏛️ **Top Attractions in ${name}:**\n\n${locationData.attractions?.map((a: string, i: number) => `${i + 1}. ${a}`).join('\n') || 'Many local attractions'}\n\n🌤️ **Best Time:** ${locationData.bestTime || 'Year-round'}`;
    
    case 'culture_query':
    case 'history_query':
      return `🎭 **${name} - Culture & Heritage:**\n\n${locationData.culture || locationData.overview || 'Rich cultural heritage'}\n\n📍 **State:** ${locationData.state || 'India'}`;
    
    case 'timing_query':
      return `🌤️ **Best Time to Visit ${name}:**\n\n${locationData.bestTime || 'October to March'}\n\n💡 **Tips:**\n${locationData.tips?.map((t: string) => `• ${t}`).join('\n') || '• Plan ahead for best experience'}`;
    
    case 'tips_query':
      return `💡 **Travel Tips for ${name}:**\n\n${locationData.tips?.map((t: string) => `• ${t}`).join('\n') || '• Carry essentials\n• Book accommodation in advance'}\n\n🌤️ **Best Time:** ${locationData.bestTime || 'October to March'}`;
    
    case 'district_query':
      if (locationData.source === 'state' && locationData.name) {
        const districts = getLocationsByState(locationData.name);
        if (districts.length > 0) {
          return `📍 **Districts/Cities in ${name}:**\n\n${districts.slice(0, 15).map((d, i) => `${i + 1}. ${d.name}`).join('\n')}\n\n${districts.length > 15 ? `...and ${districts.length - 15} more!` : ''}\n\nAsk me about any specific district for detailed info!`;
        }
      }
      // Fall through to general info
    
    default:
      // General comprehensive info with hotels & restaurants
      let fullResponse = `✨ **${name}**\n📍 ${locationData.state || (locationData.capital ? `Capital: ${locationData.capital}` : 'India')}\n\n`;
      
      if (locationData.overview || locationData.culture) {
        fullResponse += `${locationData.overview || locationData.culture}\n\n`;
      }
      
      if (locationData.attractions) {
        fullResponse += `🏛️ **Top Attractions:**\n${locationData.attractions.slice(0, 5).map((a: string, i: number) => `${i + 1}. ${a}`).join('\n')}\n\n`;
      }
      
      if (locationData.food) {
        fullResponse += `🍛 **Famous Food:** ${locationData.food.slice(0, 5).join(', ')}\n\n`;
      }
      
      if (locationData.hotels) {
        fullResponse += `🏨 **Where to Stay:**\n${formatHotelsInfo(locationData.hotels)}\n\n`;
      }
      
      if (locationData.restaurants) {
        fullResponse += `🍽️ **Where to Eat:**\n${formatRestaurantsInfo(locationData.restaurants)}\n\n`;
      }
      
      fullResponse += `🌤️ **Best Time:** ${locationData.bestTime || 'October to March'}\n\n`;
      fullResponse += `💡 Ask me about attractions, food, hotels, restaurants, or plan an itinerary!`;
      
      return fullResponse;
  }
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
  
  // Extract all locations from query (for multi-destination)
  const multipleLocations = extractMultipleLocations(correctedQuery);
  
  // Extract location from entities
  const locationEntity = nlpAnalysis.entities.find(e => e.type === 'LOCATION');
  const location = locationEntity?.value || '';
  const correctedLocation = correctLocation(location);
  
  let response = '';
  
  // ========================================
  // TRAVEL COST BETWEEN TWO PLACES - DO NOT MODIFY
  // This uses the existing getChatbotResponse from travelData.ts
  // ========================================
  const hasTravelCostIntent = 
    (correctedQuery.includes('from') && correctedQuery.includes('to')) ||
    (correctedQuery.includes('cost') && correctedQuery.includes('travel')) ||
    (correctedQuery.includes('fare') || correctedQuery.includes('ticket')) ||
    (correctedQuery.includes('bus') || correctedQuery.includes('train') || correctedQuery.includes('flight'));
  
  if (hasTravelCostIntent && nlpAnalysis.entities.some(e => e.type === 'SOURCE') && nlpAnalysis.entities.some(e => e.type === 'DESTINATION')) {
    // Use existing travel cost feature - DO NOT MODIFY
    const existingResponse = getChatbotResponse(query);
    if (existingResponse && !existingResponse.includes('🤔')) {
      return {
        response: existingResponse,
        nlpMetadata: {
          intent: 'travel_cost',
          confidence: nlpAnalysis.confidence,
          entities: nlpAnalysis.entities,
          sentiment: nlpAnalysis.sentiment,
          context: nlpAnalysis.context
        }
      };
    }
  }
  
  // ========================================
  // MULTI-DESTINATION ITINERARY (e.g., "10 day trip to goa rajasthan and manali")
  // ========================================
  if (multipleLocations.length >= 2 && nlpAnalysis.days) {
    const days = nlpAnalysis.days;
    const itinerary = generateMultiDestinationItinerary(multipleLocations, days);
    if (itinerary) {
      response = `📅 **${days}-Day Multi-Destination Itinerary**\n📍 Covering: ${multipleLocations.map(formatLocationName).join(' → ')}\n\n${itinerary}`;
    }
  }
  
  // ========================================
  // SINGLE DESTINATION ITINERARY (e.g., "plan 2 day trip to mumbai")
  // ========================================
  if (!response && (nlpAnalysis.intent === 'itinerary' || nlpAnalysis.intent === 'trip_planning') && location) {
    const days = nlpAnalysis.days || 2;
    
    // Try detailed itinerary first
    let itinerary = generateItinerary(correctedLocation, days);
    
    if (!itinerary) {
      // Try dynamic generation from location data
      itinerary = generateDynamicItinerary(correctedLocation, days);
    }
    
    if (itinerary) {
      const tips = getTravelTips(correctedLocation);
      response = `📅 **${days}-Day ${formatLocationName(correctedLocation)} Itinerary**\n\n${itinerary}${tips}`;
    } else {
      // Fallback: generate from any available location data
      const locData = getAnyLocationInfo(correctedLocation);
      if (locData) {
        response = `📅 **${days}-Day ${locData.name} Itinerary**\n\n`;
        
        const attractions = locData.attractions || [];
        const attractionsPerDay = Math.ceil(attractions.length / days);
        
        for (let d = 1; d <= days; d++) {
          response += `**Day ${d}:**\n`;
          const startIdx = (d - 1) * attractionsPerDay;
          const dayAttractions = attractions.slice(startIdx, startIdx + attractionsPerDay);
          
          if (dayAttractions.length >= 1) response += `• Morning: ${dayAttractions[0]}\n`;
          if (dayAttractions.length >= 2) response += `• Afternoon: ${dayAttractions[1]}\n`;
          if (dayAttractions.length >= 3) response += `• Evening: ${dayAttractions[2]}\n`;
          if (dayAttractions.length === 0) response += `• Explore local markets and culture\n`;
          response += '\n';
        }
        
        response += `🍛 **Must-try Food:** ${locData.food?.slice(0, 4).join(', ') || 'Local specialties'}`;
        response += `\n🌤️ **Best Time:** ${locData.bestTime || 'October to March'}`;
        if (locData.tips) {
          response += `\n\n💡 **Tips:**\n${locData.tips.slice(0, 3).map((t: string) => `• ${t}`).join('\n')}`;
        }
      }
    }
  }
  
  // ========================================
  // DISTRICT QUERY (e.g., "districts in tamil nadu")
  // ========================================
  if (!response && (correctedQuery.includes('district') || correctedQuery.includes('cities in') || correctedQuery.includes('towns in'))) {
    const locData = getAnyLocationInfo(correctedLocation);
    if (locData) {
      response = generateLocationResponse(locData, 'district_query');
    }
  }
  
  // ========================================
  // LOCATION INFO QUERIES (food, attractions, culture, etc.)
  // ========================================
  if (!response && location) {
    const locData = getAnyLocationInfo(correctedLocation);
    
    if (locData) {
      response = generateLocationResponse(locData, nlpAnalysis.intent);
    }
  }
  
  // ========================================
  // FALLBACK TO ORIGINAL CHATBOT RESPONSE
  // This includes the travel cost feature - DO NOT MODIFY
  // ========================================
  if (!response) {
    response = getChatbotResponse(correctedQuery || query);
  }
  
  // ========================================
  // SPECIAL INTENTS
  // ========================================
  
  // Greeting
  if (nlpAnalysis.intent === 'greeting') {
    response = "🙏 Namaste! I'm **BharatExplore Bot** - your AI travel guide for India.\n\n" +
      "I can help you with:\n" +
      "• 📅 **Itineraries:** \"Plan 5 day trip to Kerala\" or \"10 day trip to goa rajasthan manali\"\n" +
      "• 🏛️ **Attractions:** \"Places to visit in Jaipur\"\n" +
      "• 🍛 **Food:** \"Famous food of Hyderabad\"\n" +
      "• 🏨 **Hotels:** \"Hotels in Mumbai\" (with price ranges)\n" +
      "• 🍽️ **Restaurants:** \"Restaurants in Delhi\"\n" +
      "• 🎭 **Culture:** \"Culture of Rajasthan\"\n" +
      "• 📍 **Districts:** \"Districts in Tamil Nadu\"\n" +
      "• 🚗 **Travel Cost:** \"Trip from Mumbai to Goa\" (Bus/Train/Flight fares)\n\n" +
      "I cover all 28 States, 8 UTs, and 400+ cities with hotels & restaurants!\n" +
      "I understand typos and informal language too! 😊";
  }
  
  // Help
  if (nlpAnalysis.intent === 'help') {
    response = "🤝 **I can help you with:**\n\n" +
      "📅 **Day-wise Itineraries:**\n" +
      "• \"Plan 3 day trip to Kerala\"\n" +
      "• \"7 day itinerary for Rajasthan\"\n" +
      "• \"10 day trip to goa rajasthan and manali\"\n\n" +
      "📍 **Location Information:**\n" +
      "• \"Tell me about Varanasi\"\n" +
      "• \"Districts in Karnataka\"\n" +
      "• \"Food in Lucknow\"\n\n" +
      "🏨 **Accommodation & Dining:**\n" +
      "• \"Hotels in Jaipur\" (with prices)\n" +
      "• \"Restaurants in Goa\"\n" +
      "• \"Where to stay in Mumbai\"\n\n" +
      "🚗 **Travel Between Cities:**\n" +
      "• \"Trip from Delhi to Agra\" (with bus/train/flight costs)\n" +
      "• \"Travel from Mumbai to Goa\"\n\n" +
      "I understand natural language, typos, and Hinglish too!";
  }
  
  // Closing
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
