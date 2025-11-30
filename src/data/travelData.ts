// Re-export from comprehensive data files
export { type StateData, allIndianStates as indianStates } from './allStatesData';
export { indianCities, citiesByState } from './citiesData';

// Import back for use in this file
import { allIndianStates as indianStates } from './allStatesData';

// City travel data for trip companion feature
interface CityData {
  name: string;
  state: string;
  hotels: { name: string; price: string }[];
  restaurants: { name: string; type: string }[];
}

interface TripData {
  distance: number;
  busFare: string;
  trainFare: string;
  flightFare: string;
  busTime: string;
  trainTime: string;
  flightTime: string;
}

const cityData: Record<string, CityData> = {
  "mumbai": { name: "Mumbai", state: "Maharashtra", hotels: [{ name: "Hotel Sea Princess", price: "₹3000-5000" }, { name: "The Taj Mahal Palace", price: "₹15000-25000" }, { name: "FabHotel Prime", price: "₹1500-2500" }], restaurants: [{ name: "Britannia & Co", type: "Parsi Cuisine" }, { name: "Trishna", type: "Seafood" }, { name: "Café Mondegar", type: "Continental" }] },
  "delhi": { name: "Delhi", state: "Delhi", hotels: [{ name: "Hotel The Royal Plaza", price: "₹4000-6000" }, { name: "The Leela Palace", price: "₹18000-30000" }, { name: "FabHotel Prime", price: "₹1800-2800" }], restaurants: [{ name: "Karim's", type: "Mughlai" }, { name: "Indian Accent", type: "Modern Indian" }, { name: "Paranthe Wali Gali", type: "Street Food" }] },
  "bangalore": { name: "Bangalore", state: "Karnataka", hotels: [{ name: "The Oberoi", price: "₹12000-20000" }, { name: "Hotel Empire", price: "₹2500-4000" }, { name: "Treebo Trend", price: "₹1500-2500" }], restaurants: [{ name: "MTR", type: "South Indian" }, { name: "Toit", type: "Brewery" }, { name: "Koshy's", type: "Continental" }] },
  "chennai": { name: "Chennai", state: "Tamil Nadu", hotels: [{ name: "ITC Grand Chola", price: "₹10000-18000" }, { name: "Hotel Savera", price: "₹3000-5000" }, { name: "FabHotel", price: "₹1200-2000" }], restaurants: [{ name: "Murugan Idli Shop", type: "South Indian" }, { name: "Dakshin", type: "Regional South Indian" }, { name: "Annalakshmi", type: "Vegetarian" }] },
  "kolkata": { name: "Kolkata", state: "West Bengal", hotels: [{ name: "The Oberoi Grand", price: "₹9000-15000" }, { name: "Hotel Hindusthan International", price: "₹3500-5500" }, { name: "Treebo Trend", price: "₹1500-2500" }], restaurants: [{ name: "Peter Cat", type: "Continental" }, { name: "Arsalan", type: "Biryani" }, { name: "Flurys", type: "Bakery" }] },
  "hyderabad": { name: "Hyderabad", state: "Telangana", hotels: [{ name: "Taj Falaknuma Palace", price: "₹35000-50000" }, { name: "Hotel Sohail Grand", price: "₹2500-4000" }, { name: "FabHotel", price: "₹1300-2200" }], restaurants: [{ name: "Paradise Biryani", type: "Biryani" }, { name: "Chutneys", type: "South Indian" }, { name: "Bawarchi", type: "North Indian" }] },
  "pune": { name: "Pune", state: "Maharashtra", hotels: [{ name: "JW Marriott", price: "₹8000-14000" }, { name: "Hotel Sunderban", price: "₹2500-4000" }, { name: "Treebo Trend", price: "₹1400-2300" }], restaurants: [{ name: "Vaishali", type: "South Indian" }, { name: "Shabree", type: "Maharashtrian" }, { name: "Malaka Spice", type: "Asian" }] },
  "ahmedabad": { name: "Ahmedabad", state: "Gujarat", hotels: [{ name: "The House of MG", price: "₹6000-10000" }, { name: "Hotel Royal Highness", price: "₹2000-3500" }, { name: "FabHotel", price: "₹1200-2000" }], restaurants: [{ name: "Agashiye", type: "Gujarati Thali" }, { name: "Manek Chowk", type: "Street Food" }, { name: "Gopi Dining Hall", type: "Vegetarian" }] },
  "jaipur": { name: "Jaipur", state: "Rajasthan", hotels: [{ name: "Taj Rambagh Palace", price: "₹25000-40000" }, { name: "Hotel Pearl Palace", price: "₹2000-3500" }, { name: "Zostel Jaipur", price: "₹600-1200" }], restaurants: [{ name: "Laxmi Mishtan Bhandar", type: "Rajasthani Sweets" }, { name: "Chokhi Dhani", type: "Traditional Rajasthani" }, { name: "Handi Restaurant", type: "North Indian" }] },
  "kochi": { name: "Kochi", state: "Kerala", hotels: [{ name: "Taj Malabar Resort", price: "₹12000-20000" }, { name: "Eighth Bastion Hotel", price: "₹3000-5000" }, { name: "Fort House Hotel", price: "₹1800-3000" }], restaurants: [{ name: "Kayees Rahmathulla Cafe", type: "Biryani" }, { name: "Dhe Puttu", type: "Kerala Breakfast" }, { name: "Oceanos", type: "Seafood" }] },
  "goa": { name: "Goa", state: "Goa", hotels: [{ name: "Taj Exotica", price: "₹15000-25000" }, { name: "Pousada By The Beach", price: "₹3500-6000" }, { name: "Zostel Goa", price: "₹700-1500" }], restaurants: [{ name: "Fisherman's Wharf", type: "Goan Seafood" }, { name: "Vinayak Family Restaurant", type: "Goan Thali" }, { name: "Martin's Corner", type: "Seafood" }] }
};

// Calculate trip data between cities (simplified matrix)
const calculateTripData = (source: string, destination: string): TripData | null => {
  const distances: Record<string, Record<string, number>> = {
    "mumbai": { "delhi": 1400, "bangalore": 980, "chennai": 1340, "kolkata": 2000, "pune": 150, "goa": 580, "jaipur": 1170, "ahmedabad": 530, "kochi": 1420, "hyderabad": 710 },
    "delhi": { "mumbai": 1400, "bangalore": 2160, "chennai": 2200, "kolkata": 1470, "pune": 1460, "goa": 1870, "jaipur": 280, "ahmedabad": 940, "kochi": 2710, "hyderabad": 1580 },
    "bangalore": { "mumbai": 980, "delhi": 2160, "chennai": 350, "kolkata": 1880, "pune": 840, "goa": 560, "jaipur": 2050, "ahmedabad": 1490, "kochi": 540, "hyderabad": 570 },
    "chennai": { "mumbai": 1340, "delhi": 2200, "bangalore": 350, "kolkata": 1670, "pune": 1180, "goa": 710, "jaipur": 2100, "ahmedabad": 1660, "kochi": 690, "hyderabad": 630 },
    "kolkata": { "mumbai": 2000, "delhi": 1470, "bangalore": 1880, "chennai": 1670, "pune": 1960, "goa": 1950, "jaipur": 1550, "ahmedabad": 2040, "kochi": 2350, "hyderabad": 1500 },
    "pune": { "mumbai": 150, "delhi": 1460, "bangalore": 840, "chennai": 1180, "kolkata": 1960, "goa": 460, "jaipur": 1230, "ahmedabad": 670, "kochi": 1270, "hyderabad": 560 },
    "goa": { "mumbai": 580, "delhi": 1870, "bangalore": 560, "chennai": 710, "kolkata": 1950, "pune": 460, "jaipur": 1530, "ahmedabad": 1050, "kochi": 730, "hyderabad": 660 },
    "jaipur": { "mumbai": 1170, "delhi": 280, "bangalore": 2050, "chennai": 2100, "kolkata": 1550, "pune": 1230, "goa": 1530, "ahmedabad": 660, "kochi": 2600, "hyderabad": 1460 },
    "ahmedabad": { "mumbai": 530, "delhi": 940, "bangalore": 1490, "chennai": 1660, "kolkata": 2040, "pune": 670, "goa": 1050, "jaipur": 660, "kochi": 2080, "hyderabad": 1070 },
    "kochi": { "mumbai": 1420, "delhi": 2710, "bangalore": 540, "chennai": 690, "kolkata": 2350, "pune": 1270, "goa": 730, "jaipur": 2600, "ahmedabad": 2080, "hyderabad": 1120 },
    "hyderabad": { "mumbai": 710, "delhi": 1580, "bangalore": 570, "chennai": 630, "kolkata": 1500, "pune": 560, "goa": 660, "jaipur": 1460, "ahmedabad": 1070, "kochi": 1120 }
  };

  const dist = distances[source]?.[destination] || distances[destination]?.[source];
  if (!dist) return null;

  return {
    distance: dist,
    busFare: `₹${Math.round(dist * 0.8)}-${Math.round(dist * 1.2)}`,
    trainFare: `Sleeper: ₹${Math.round(dist * 0.6)}, 3AC: ₹${Math.round(dist * 1.0)}`,
    flightFare: `₹${Math.round(dist * 3.5)}-${Math.round(dist * 5.5)}`,
    busTime: `${Math.round(dist / 50)}-${Math.round(dist / 40)} hours`,
    trainTime: `${Math.round(dist / 60)}-${Math.round(dist / 50)} hours`,
    flightTime: `${Math.round(dist / 600)}-${Math.round(dist / 500)} hours`
  };
};

// Extract source and destination from query
const extractLocations = (query: string): { source: string; destination: string } | null => {
  const lowerQuery = query.toLowerCase();
  
  // Pattern: "from X to Y"
  const fromToMatch = lowerQuery.match(/from\s+([a-z]+)\s+to\s+([a-z]+)/);
  if (fromToMatch) {
    return { source: fromToMatch[1], destination: fromToMatch[2] };
  }
  
  // Pattern: "X to Y"
  const toMatch = lowerQuery.match(/([a-z]+)\s+to\s+([a-z]+)/);
  if (toMatch && (lowerQuery.includes("travel") || lowerQuery.includes("trip") || lowerQuery.includes("plan"))) {
    return { source: toMatch[1], destination: toMatch[2] };
  }
  
  return null;
};

// Validate if location is Indian city/state
const isValidIndianLocation = (location: string): boolean => {
  const validLocations = Object.keys(cityData).concat(Object.keys(indianStates));
  return validLocations.includes(location);
};

export const getChatbotResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Check for trip planning intent
  const locations = extractLocations(query);
  if (locations) {
    const { source, destination } = locations;
    
    // Validate locations
    if (!isValidIndianLocation(source) || !isValidIndianLocation(destination)) {
      return "❌ Please enter valid Indian states or cities.\n\nSupported cities: Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Kochi, Goa\n\nExample: 'Plan my trip from Mumbai to Goa'";
    }
    
    const tripData = calculateTripData(source, destination);
    if (!tripData) {
      return "🤔 Sorry, I don't have route information for this journey yet. Try other major cities!";
    }
    
    const sourceCity = cityData[source];
    const destCity = cityData[destination];
    
    if (!sourceCity || !destCity) {
      return "🤔 Sorry, I need more detailed information about these cities. Try: Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, Kochi, Goa";
    }
    
    return `✈️ **Trip Summary: ${sourceCity.name} to ${destCity.name}**

📍 **Travel Route:** ${sourceCity.name}, ${sourceCity.state} → ${destCity.name}, ${destCity.state}
📏 **Distance:** ${tripData.distance} km

💰 **TRAVEL COSTS:**
🚌 Bus: ${tripData.busFare}
🚆 Train: ${tripData.trainFare}
✈️ Flight: ${tripData.flightFare}

⏱️ **TRAVEL TIME:**
🚌 Bus: ${tripData.busTime}
🚆 Train: ${tripData.trainTime}
✈️ Flight: ${tripData.flightTime}

🏨 **HOTELS IN ${destCity.name.toUpperCase()}:**
${destCity.hotels.map((h, i) => `${i + 1}. ${h.name} - ${h.price}`).join("\n")}

🍽️ **TOP RESTAURANTS:**
${destCity.restaurants.map((r, i) => `${i + 1}. ${r.name} (${r.type})`).join("\n")}

Have a great trip! 🎉`;
  }
  
  // Check for greetings
  if (lowerQuery.match(/hello|hi|hey|namaste/)) {
    return "🙏 Namaste! I'm your AI Travel Guide for India. Ask me about any state, attractions, food, culture, or plan trips between cities!";
  }

  // Check for state-specific queries
  for (const [key, state] of Object.entries(indianStates)) {
    if (lowerQuery.includes(key) || lowerQuery.includes(state.name.toLowerCase())) {
      
      if (lowerQuery.includes("food") || lowerQuery.includes("eat") || lowerQuery.includes("cuisine")) {
        return `🍛 **${state.name} Cuisine:**\n\n${state.food.join(", ")}\n\nThese dishes are must-try when visiting ${state.name}!`;
      }
      
      if (lowerQuery.includes("attraction") || lowerQuery.includes("visit") || lowerQuery.includes("place") || lowerQuery.includes("see")) {
        return `🏛️ **Top Attractions in ${state.name}:**\n\n${state.attractions.map((a, i) => `${i + 1}. ${a}`).join("\n")}\n\nThese are the most popular tourist destinations in ${state.name}!`;
      }
      
      if (lowerQuery.includes("culture") || lowerQuery.includes("tradition") || lowerQuery.includes("heritage")) {
        return `🎭 **Culture of ${state.name}:**\n\n${state.culture}`;
      }
      
      if (lowerQuery.includes("itinerary") || lowerQuery.includes("plan") || lowerQuery.includes("trip") || lowerQuery.includes("days")) {
        return `📅 **${state.name} Travel Itinerary:**\n\n${state.itinerary.map(day => `\n${day}`).join("\n")}\n\n**Best time to visit:** ${state.bestTime}`;
      }
      
      if (lowerQuery.includes("weather") || lowerQuery.includes("when") || lowerQuery.includes("time")) {
        return `🌤️ **Best Time to Visit ${state.name}:**\n\n${state.bestTime}\n\nThis is when the weather is most pleasant for tourism!`;
      }
      
      // General state info
      return `✨ **${state.name}** (Capital: ${state.capital})\n\n${state.culture}\n\n🏛️ **Top Attractions:**\n${state.attractions.slice(0, 3).join(", ")}\n\n🍛 **Must-try Food:**\n${state.food.slice(0, 3).join(", ")}\n\n🌤️ **Best Time:**\n${state.bestTime}\n\nAsk me more about attractions, food, culture, or itinerary!`;
    }
  }

  // General queries
  if (lowerQuery.includes("help") || lowerQuery.includes("what can you do")) {
    return "🤖 I can help you with:\n\n• Information about all 36 Indian states & UTs\n• Tourist attractions and places to visit\n• Local cuisine and food recommendations\n• Cultural insights and traditions\n• Travel itineraries and trip planning\n• **Plan trips between cities** (Bus/Train/Flight costs, hotels, restaurants)\n• Best time to visit\n• Weather information\n\nTry: 'Plan my trip from Mumbai to Goa' or 'Tell me about Sikkim'";
  }

  return "🤔 I'd love to help! Try asking me about:\n\n• Any Indian state or UT (e.g., 'Tell me about Kerala' or 'About Ladakh')\n• Attractions (e.g., 'What to see in Rajasthan?')\n• Food (e.g., 'What food to try in Punjab?')\n• **Trip planning** (e.g., 'Plan trip from Pune to Kochi')\n• Travel between cities (e.g., 'From Mumbai to Goa')\n\nI have information about all 36 states & union territories of India!";
};
