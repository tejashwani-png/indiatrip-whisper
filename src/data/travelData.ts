export interface StateData {
  name: string;
  capital: string;
  attractions: string[];
  food: string[];
  culture: string;
  bestTime: string;
  itinerary: string[];
}

export const indianStates: Record<string, StateData> = {
  "delhi": {
    name: "Delhi",
    capital: "New Delhi",
    attractions: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Humayun's Tomb", "Akshardham Temple"],
    food: ["Chole Bhature", "Butter Chicken", "Parathas", "Street Chaat", "Kebabs"],
    culture: "Delhi is a perfect blend of ancient heritage and modern culture. It's known for its Mughal architecture, bustling markets, and diverse cuisine.",
    bestTime: "October to March (Winter season)",
    itinerary: [
      "Day 1: Visit India Gate, explore Connaught Place, Red Fort",
      "Day 2: Qutub Minar, Humayun's Tomb, Lotus Temple",
      "Day 3: Akshardham Temple, shopping at Chandni Chowk"
    ]
  },
  "maharashtra": {
    name: "Maharashtra",
    capital: "Mumbai",
    attractions: ["Gateway of India", "Marine Drive", "Ajanta Caves", "Ellora Caves", "Lonavala", "Elephanta Caves"],
    food: ["Vada Pav", "Pav Bhaji", "Misal Pav", "Puran Poli", "Modak"],
    culture: "Home to Bollywood, Maharashtra blends coastal beauty with rich Maratha heritage. Known for festivals like Ganesh Chaturthi.",
    bestTime: "November to February",
    itinerary: [
      "Day 1: Gateway of India, Marine Drive, Colaba",
      "Day 2: Elephanta Caves, Haji Ali",
      "Day 3: Lonavala hill station"
    ]
  },
  "rajasthan": {
    name: "Rajasthan",
    capital: "Jaipur",
    attractions: ["Hawa Mahal", "Amber Fort", "Jaisalmer Fort", "Udaipur Lakes", "Mehrangarh Fort", "City Palace"],
    food: ["Dal Baati Churma", "Laal Maas", "Ghewar", "Ker Sangri", "Pyaaz Kachori"],
    culture: "Land of maharajas with stunning forts, palaces, and desert landscapes. Rich in folk music and traditional art.",
    bestTime: "October to March",
    itinerary: [
      "Day 1: Jaipur - Hawa Mahal, City Palace, Amber Fort",
      "Day 2: Jodhpur - Mehrangarh Fort, Umaid Bhawan",
      "Day 3: Jaisalmer - Desert safari, Jaisalmer Fort"
    ]
  },
  "kerala": {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    attractions: ["Backwaters of Alleppey", "Munnar Tea Gardens", "Periyar Wildlife Sanctuary", "Kovalam Beach", "Fort Kochi"],
    food: ["Appam with Stew", "Sadya", "Karimeen Fry", "Puttu", "Kerala Parotta"],
    culture: "God's Own Country - known for Ayurveda, backwaters, and Kathakali dance. Rich in traditions and natural beauty.",
    bestTime: "September to March",
    itinerary: [
      "Day 1: Kochi - Fort Kochi, Chinese Fishing Nets",
      "Day 2: Munnar - Tea gardens, viewpoints",
      "Day 3: Alleppey - Houseboat cruise in backwaters"
    ]
  },
  "goa": {
    name: "Goa",
    capital: "Panaji",
    attractions: ["Baga Beach", "Basilica of Bom Jesus", "Fort Aguada", "Dudhsagar Falls", "Anjuna Beach", "Old Goa Churches"],
    food: ["Fish Curry", "Bebinca", "Vindaloo", "Xacuti", "Feni"],
    culture: "Former Portuguese colony with beautiful beaches, vibrant nightlife, and unique Indo-Portuguese architecture.",
    bestTime: "November to February",
    itinerary: [
      "Day 1: North Goa beaches - Baga, Calangute, Anjuna",
      "Day 2: Old Goa churches, Panaji city tour",
      "Day 3: South Goa - Palolem Beach, Fort Aguada"
    ]
  },
  "tamil nadu": {
    name: "Tamil Nadu",
    capital: "Chennai",
    attractions: ["Meenakshi Temple", "Mahabalipuram", "Ooty", "Rameshwaram", "Kanyakumari", "Marina Beach"],
    food: ["Idli", "Dosa", "Chettinad Chicken", "Sambar", "Filter Coffee"],
    culture: "Ancient Dravidian culture with magnificent temples, classical music and dance traditions.",
    bestTime: "November to February",
    itinerary: [
      "Day 1: Chennai - Marina Beach, temples",
      "Day 2: Mahabalipuram - Shore Temple, stone carvings",
      "Day 3: Madurai - Meenakshi Temple"
    ]
  },
  "karnataka": {
    name: "Karnataka",
    capital: "Bangalore",
    attractions: ["Mysore Palace", "Hampi", "Coorg", "Bangalore Palace", "Gokarna", "Jog Falls"],
    food: ["Bisi Bele Bath", "Mysore Pak", "Ragi Mudde", "Neer Dosa", "Mangalore Buns"],
    culture: "Rich heritage of empires with UNESCO sites, coffee plantations, and tech capital Bangalore.",
    bestTime: "October to February",
    itinerary: [
      "Day 1: Bangalore - Lalbagh, Cubbon Park",
      "Day 2: Mysore - Mysore Palace, Chamundi Hills",
      "Day 3: Hampi - Ancient ruins, temples"
    ]
  },
  "west bengal": {
    name: "West Bengal",
    capital: "Kolkata",
    attractions: ["Victoria Memorial", "Howrah Bridge", "Darjeeling", "Sundarbans", "Kalimpong", "Digha Beach"],
    food: ["Rosogolla", "Macher Jhol", "Mishti Doi", "Sandesh", "Kosha Mangsho"],
    culture: "Cultural capital of India with literary heritage, Durga Puja festivities, and colonial architecture.",
    bestTime: "October to March",
    itinerary: [
      "Day 1: Kolkata - Victoria Memorial, Howrah Bridge",
      "Day 2: Darjeeling - Tea gardens, Toy Train",
      "Day 3: Sundarbans - Mangrove safari"
    ]
  }
};

export const getChatbotResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Check for greetings
  if (lowerQuery.match(/hello|hi|hey|namaste/)) {
    return "🙏 Namaste! I'm your AI Travel Guide for India. Ask me about any state, attractions, food, culture, or travel plans!";
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
    return "🤖 I can help you with:\n\n• Information about all Indian states\n• Tourist attractions and places to visit\n• Local cuisine and food recommendations\n• Cultural insights and traditions\n• Travel itineraries and trip planning\n• Best time to visit\n• Weather information\n\nJust ask me about any state!";
  }

  return "🤔 I'd love to help! Try asking me about:\n\n• A specific state (e.g., 'Tell me about Kerala')\n• Attractions (e.g., 'What to see in Rajasthan?')\n• Food (e.g., 'What food to try in Maharashtra?')\n• Travel plans (e.g., 'Plan a trip to Goa')\n\nI have information about all Indian states!";
};