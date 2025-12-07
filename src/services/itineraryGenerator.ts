// Itinerary generator for detailed day-wise travel plans

import { allIndianStates } from '../data/allStatesData';

// Detailed itineraries for popular destinations
const detailedItineraries: Record<string, Record<number, string[]>> = {
  "odisha": {
    1: [
      "**Day 1: Bhubaneswar Temple Trail**",
      "• Morning: Visit Lingaraja Temple (6 AM - oldest temple, architectural marvel)",
      "• 9 AM: Mukteshwar Temple (gem of Odishan architecture)",
      "• 11 AM: Rajarani Temple & Brahmeshwar Temple",
      "• Lunch: Try authentic Dalma & Pakhala at local restaurant",
      "• Afternoon: Udaygiri & Khandagiri Caves (ancient Jain rock-cut caves)",
      "• Evening: Shopping at Ekamra Haat for handloom & handicrafts",
      "• Dinner: Chhena Poda (Odisha's famous cheesecake)"
    ],
    2: [
      "**Day 1: Puri - The Holy City**",
      "• Morning: Jagannath Temple darshan (wake up early for less crowd)",
      "• Late Morning: Golden Beach walk & Swargadwar",
      "• Lunch: Traditional Odia Thali near Grand Road",
      "• Afternoon: Explore local markets for Pattachitra paintings",
      "• Evening: Sunset at Puri Beach, try Dahi Bara Aloo Dum",
      "",
      "**Day 2: Konark & Chilika**",
      "• Early Morning: Drive to Konark Sun Temple (UNESCO Heritage)",
      "• 9 AM: Explore the chariot-shaped temple architecture",
      "• Visit Chandrabhaga Beach nearby",
      "• Lunch: Seafood at Konark",
      "• Afternoon: Chilika Lake boat ride (dolphins, migratory birds)",
      "• Evening: Return to Bhubaneswar/Puri"
    ],
    3: [
      "**Day 1: Bhubaneswar Heritage**",
      "• Morning: Lingaraja Temple, Mukteshwar Temple",
      "• Afternoon: Udaygiri-Khandagiri Caves",
      "• Evening: State Museum & Ekamra Haat shopping",
      "",
      "**Day 2: Puri Sacred Tour**",
      "• Morning: Jagannath Temple darshan",
      "• Late Morning: Sudarshan Crafts Village",
      "• Lunch: Famous Puri Temple prasad",
      "• Afternoon: Raghurajpur artist village (Pattachitra art)",
      "• Evening: Beach sunset & local street food",
      "",
      "**Day 3: Konark & Coastal Beauty**",
      "• Morning: Konark Sun Temple (arrive by 7 AM)",
      "• 10 AM: ASI Museum & Chandrabhaga Beach",
      "• Lunch: Seafood at Konark Panthanivas",
      "• Afternoon: Pipili (appliqué work village)",
      "• Evening: Return journey with Odia sweets"
    ],
    4: [
      "**Day 1: Temple City Bhubaneswar**",
      "• Lingaraja Temple → Mukteshwar → Rajarani → Brahmeshwar",
      "• Afternoon: Nandankanan Zoological Park (white tigers)",
      "",
      "**Day 2: Puri Pilgrimage**",
      "• Jagannath Temple → Beach → Gundicha Temple → Markets",
      "",
      "**Day 3: Konark & Heritage**",
      "• Sun Temple → Chandrabhaga Beach → Ramachandi Temple",
      "• Afternoon: Raghurajpur → Pipili",
      "",
      "**Day 4: Chilika & Departure**",
      "• Morning: Chilika Lake boat safari",
      "• Dolphin spotting & bird watching",
      "• Lunch: Fresh Chilika prawns",
      "• Return with souvenirs"
    ]
  },
  "kerala": {
    1: [
      "**Day 1: Kochi Heritage Walk**",
      "• Morning: Fort Kochi walking tour",
      "• Chinese Fishing Nets (sunrise view)",
      "• St. Francis Church & Santa Cruz Basilica",
      "• Jewish Synagogue & Jew Town",
      "• Lunch: Kerala Sadhya at Fort House",
      "• Evening: Kathakali performance at Kerala Kathakali Centre",
      "• Dinner: Seafood at Fort Kochi restaurant"
    ],
    2: [
      "**Day 1: Alleppey Backwaters**",
      "• Morning: Board houseboat at Alleppey",
      "• Cruise through palm-fringed canals",
      "• Traditional Kerala lunch on boat",
      "• Evening: Sunset over backwaters",
      "• Overnight stay on houseboat",
      "",
      "**Day 2: Kumarakom & Kochi**",
      "• Morning: Vembanad Lake views",
      "• Visit Kumarakom Bird Sanctuary",
      "• Drive to Kochi for Fort Kochi tour",
      "• Evening: Chinese Fishing Nets, local markets"
    ],
    3: [
      "**Day 1: Munnar Hills**",
      "• Drive to Munnar (scenic route)",
      "• Tea Museum & tea garden walk",
      "• Mattupetty Dam & Echo Point",
      "• Evening: Eravikulam National Park edge",
      "",
      "**Day 2: Backwater Cruise**",
      "• Drive to Alleppey",
      "• Afternoon: Houseboat check-in",
      "• Cruise through Kuttanad region",
      "• Overnight on houseboat",
      "",
      "**Day 3: Kochi Culture**",
      "• Morning: Disembark at Alleppey",
      "• Drive to Kochi",
      "• Fort Kochi heritage walk",
      "• Kathakali show evening"
    ]
  },
  "rajasthan": {
    1: [
      "**Day 1: Jaipur Pink City**",
      "• Morning: Amber Fort (elephant/jeep ride)",
      "• Photo stop: Jal Mahal",
      "• City Palace & Jantar Mantar",
      "• Hawa Mahal photo from café opposite",
      "• Evening: Johari Bazaar shopping",
      "• Dinner: Dal Baati Churma at Chokhi Dhani"
    ],
    2: [
      "**Day 1: Jaipur Heritage**",
      "• Morning: Amber Fort (arrive 8 AM)",
      "• Nahargarh Fort (panoramic views)",
      "• Lunch: Traditional thali",
      "• City Palace & Hawa Mahal",
      "• Evening: Johri Bazaar for gems/textiles",
      "",
      "**Day 2: Jaipur-Jodhpur Express**",
      "• Early drive to Jodhpur (5 hrs)",
      "• Mehrangarh Fort (afternoon)",
      "• Jaswant Thada",
      "• Blue City walking tour",
      "• Evening: Clock Tower market, Mirchi Vada"
    ],
    3: [
      "**Day 1: Jaipur**",
      "• Amber Fort → City Palace → Jantar Mantar → Hawa Mahal",
      "",
      "**Day 2: Jodhpur**",
      "• Drive to Jodhpur → Mehrangarh Fort → Blue City → Umaid Bhawan",
      "",
      "**Day 3: Jaisalmer**",
      "• Drive to Jaisalmer → Golden Fort → Patwon ki Haveli",
      "• Evening: Sam Sand Dunes camel safari & sunset"
    ]
  },
  "goa": {
    1: [
      "**Day 1: North Goa Beach Hop**",
      "• Morning: Calangute Beach sunrise",
      "• Baga Beach water sports",
      "• Lunch: Tito's Lane shacks",
      "• Afternoon: Anjuna Flea Market (Wed)",
      "• Vagator Beach & Chapora Fort sunset",
      "• Evening: Thalassa Greek restaurant",
      "• Night: Tito's or Mambo's clubbing"
    ],
    2: [
      "**Day 1: North Goa**",
      "• Candolim Beach → Fort Aguada → Baga Beach",
      "• Water sports at Calangute",
      "• Chapora Fort sunset",
      "• Night: Club crawl in Baga-Tito's Lane",
      "",
      "**Day 2: Old Goa & South**",
      "• Morning: Basilica of Bom Jesus (UNESCO)",
      "• Se Cathedral & Church of St. Francis",
      "• Lunch: Goan fish curry at Panjim",
      "• Afternoon: Palolem Beach",
      "• Sunset: Cola Beach"
    ]
  },
  "himachal pradesh": {
    2: [
      "**Day 1: Shimla**",
      "• Morning: Mall Road walk",
      "• Christ Church & Ridge",
      "• Jakhu Temple (Hanuman statue)",
      "• Evening: Scandal Point sunset",
      "",
      "**Day 2: Kufri & Departure**",
      "• Morning: Kufri adventure activities",
      "• Fagu Snow Point (winter)",
      "• Return via Shimla"
    ],
    3: [
      "**Day 1: Shimla**",
      "• Mall Road → Christ Church → Jakhu Temple",
      "",
      "**Day 2: Manali Drive**",
      "• Scenic drive to Manali (8 hrs)",
      "• Evening: Old Manali cafes",
      "",
      "**Day 3: Manali**",
      "• Hadimba Temple → Solang Valley → Rohtang Pass (permit needed)"
    ]
  },
  "delhi": {
    1: [
      "**Day 1: Delhi Highlights**",
      "• Morning: India Gate sunrise",
      "• Red Fort (Mughal architecture)",
      "• Jama Masjid & Chandni Chowk food walk",
      "• Lunch: Paranthe Wali Gali",
      "• Humayun's Tomb (UNESCO)",
      "• Qutub Minar evening",
      "• Dinner: Hauz Khas Village"
    ],
    2: [
      "**Day 1: Old Delhi**",
      "• Red Fort → Jama Masjid → Chandni Chowk street food",
      "• Afternoon: Raj Ghat → India Gate",
      "• Evening: Connaught Place",
      "",
      "**Day 2: New Delhi**",
      "• Morning: Qutub Minar",
      "• Humayun's Tomb",
      "• Lotus Temple",
      "• Akshardham Temple (evening light show)"
    ]
  },
  "maharashtra": {
    2: [
      "**Day 1: Mumbai City**",
      "• Gateway of India → Taj Mahal Palace",
      "• Elephanta Caves ferry (morning)",
      "• Marine Drive sunset",
      "• Chowpatty Beach street food",
      "",
      "**Day 2: Iconic Mumbai**",
      "• Dhobi Ghat → Crawford Market",
      "• Siddhivinayak Temple",
      "• Lunch: Britannia & Co",
      "• Bandra-Worli Sea Link drive",
      "• Evening: Bandstand promenade"
    ]
  },
  "karnataka": {
    2: [
      "**Day 1: Bangalore**",
      "• Lalbagh Botanical Garden",
      "• Cubbon Park → Vidhana Soudha",
      "• Lunch: MTR for traditional breakfast",
      "• UB City Mall → Commercial Street shopping",
      "• Evening: Indiranagar pub hopping",
      "",
      "**Day 2: Mysore Day Trip**",
      "• Drive to Mysore (3.5 hrs)",
      "• Mysore Palace (royal grandeur)",
      "• Chamundi Hills & Brindavan Gardens",
      "• Return to Bangalore evening"
    ]
  },
  "tamil nadu": {
    2: [
      "**Day 1: Chennai**",
      "• Marina Beach sunrise",
      "• Kapaleeshwarar Temple",
      "• San Thome Cathedral",
      "• Lunch: Filter coffee & dosa at Murugan Idli Shop",
      "• Evening: DakshinaChitra heritage village",
      "",
      "**Day 2: Mahabalipuram**",
      "• Shore Temple (UNESCO)",
      "• Five Rathas & Arjuna's Penance",
      "• Beach lunch at seafood shack",
      "• Tiger Cave & Crocodile Bank",
      "• Return to Chennai"
    ]
  },
  "west bengal": {
    2: [
      "**Day 1: Kolkata Heritage**",
      "• Victoria Memorial (museum)",
      "• St. Paul's Cathedral",
      "• Howrah Bridge view from Mallick Ghat",
      "• Lunch: Peter Cat for Chelo Kebab",
      "• College Street book market",
      "• Evening: Park Street for dinner",
      "",
      "**Day 2: Cultural Kolkata**",
      "• Kalighat Temple morning",
      "• Mother House (Mother Teresa's tomb)",
      "• South Park Street Cemetery",
      "• Flurys for afternoon tea",
      "• Marble Palace (heritage)",
      "• Evening: Princep Ghat sunset"
    ]
  },
  "uttarakhand": {
    2: [
      "**Day 1: Haridwar**",
      "• Har Ki Pauri Ganga Aarti (evening)",
      "• Mansa Devi Temple cable car",
      "• Chandi Devi Temple",
      "• Local market & street food",
      "",
      "**Day 2: Rishikesh**",
      "• Drive to Rishikesh (30 min)",
      "• Triveni Ghat morning prayers",
      "• Laxman Jhula & Ram Jhula",
      "• Beatles Ashram exploration",
      "• Café hopping in Tapovan",
      "• Evening: Parmarth Niketan Aarti"
    ],
    3: [
      "**Day 1: Haridwar**",
      "• Ganga Aarti → Temple visits → Markets",
      "",
      "**Day 2: Rishikesh Adventure**",
      "• River rafting (16km stretch)",
      "• Lunch at Little Buddha Café",
      "• Evening: Beatles Ashram",
      "",
      "**Day 3: Mussoorie**",
      "• Drive to Mussoorie (3 hrs)",
      "• Mall Road → Kempty Falls → Gun Hill"
    ]
  },
  "punjab": {
    2: [
      "**Day 1: Amritsar Spirituality**",
      "• Golden Temple (early morning for peaceful darshan)",
      "• Langar (free community meal)",
      "• Jallianwala Bagh memorial",
      "• Lunch: Kesar Da Dhaba (since 1916)",
      "• Partition Museum",
      "• Evening: Wagah Border ceremony",
      "",
      "**Day 2: Amritsar Heritage**",
      "• Morning: Golden Temple again for sunrise",
      "• Durgiana Temple (mini Golden Temple)",
      "• Ram Bagh Gardens",
      "• Shopping: Phulkari & Juttis",
      "• Lunch: Amritsari Kulcha & Chole",
      "• Explore Hall Bazaar"
    ]
  },
  "telangana": {
    2: [
      "**Day 1: Hyderabad Heritage**",
      "• Charminar (iconic monument)",
      "• Laad Bazaar bangles shopping",
      "• Mecca Masjid",
      "• Lunch: Paradise Biryani",
      "• Chowmahalla Palace",
      "• Evening: Hussain Sagar (Necklace Road)",
      "",
      "**Day 2: Golconda & Culture**",
      "• Golconda Fort (morning clap test)",
      "• Qutb Shahi Tombs",
      "• Lunch: Café Bahar",
      "• Salar Jung Museum",
      "• Evening: Ramoji Film City (optional)"
    ]
  },
  "gujarat": {
    2: [
      "**Day 1: Ahmedabad Heritage**",
      "• Sabarmati Ashram (Gandhi's home)",
      "• Adalaj Stepwell",
      "• Hutheesing Jain Temple",
      "• Lunch: Traditional Gujarati Thali",
      "• Kankaria Lake evening",
      "• Night: Heritage walk in old city",
      "",
      "**Day 2: Lothal & Modhera**",
      "• Lothal (Indus Valley site)",
      "• Modhera Sun Temple",
      "• Rani ki Vav (UNESCO stepwell)",
      "• Return via local dhaba dinner"
    ]
  },
  "assam": {
    2: [
      "**Day 1: Guwahati**",
      "• Kamakhya Temple (early morning)",
      "• Umananda Island (ferry)",
      "• Lunch: Assamese thali",
      "• Assam State Zoo",
      "• Evening: Brahmaputra river cruise",
      "",
      "**Day 2: Kaziranga Express**",
      "• Early drive to Kaziranga (4 hrs)",
      "• Elephant safari (morning)",
      "• Rhino spotting in central range",
      "• Jeep safari (afternoon)",
      "• Return to Guwahati"
    ]
  },
  "ladakh": {
    3: [
      "**Day 1: Leh Acclimatization**",
      "• Rest and hydrate (essential at 11,500 ft)",
      "• Light walk: Leh Market, Leh Palace",
      "• Shanti Stupa sunset",
      "• Ladakhi dinner: Thukpa & Momos",
      "",
      "**Day 2: Nubra Valley**",
      "• Drive via Khardung La (world's highest motorable road)",
      "• Diskit Monastery & Giant Buddha",
      "• Hunder sand dunes & Bactrian camels",
      "• Overnight in Nubra",
      "",
      "**Day 3: Pangong Lake**",
      "• Drive to Pangong Tso (4-5 hrs)",
      "• Famous 3 Idiots location",
      "• Picnic by the color-changing lake",
      "• Return to Leh"
    ]
  },
  "sikkim": {
    2: [
      "**Day 1: Gangtok**",
      "• MG Marg walking tour",
      "• Enchey Monastery",
      "• Tashi Viewpoint (Kanchenjunga views)",
      "• Do Drul Chorten",
      "• Evening: Local momos at MG Marg",
      "",
      "**Day 2: Tsomgo Lake & Nathula**",
      "• Early start for Tsomgo Lake",
      "• Yak ride by the frozen lake",
      "• Nathula Pass (Indo-China border)",
      "• Baba Harbhajan Singh Temple",
      "• Return to Gangtok"
    ]
  },
  "andaman and nicobar": {
    3: [
      "**Day 1: Port Blair**",
      "• Cellular Jail (morning tour)",
      "• Light & Sound show (evening)",
      "• Corbyn's Cove Beach",
      "• Anthropological Museum",
      "",
      "**Day 2: Havelock Island**",
      "• Ferry to Havelock (2.5 hrs)",
      "• Radhanagar Beach (Asia's best beach)",
      "• Snorkeling at Elephant Beach",
      "• Sunset at beach",
      "",
      "**Day 3: Scuba & Return**",
      "• Scuba diving at Lighthouse",
      "• Kalapathar Beach",
      "• Return ferry to Port Blair"
    ]
  }
};

// Generate itinerary for a location
export function generateItinerary(location: string, days: number): string {
  const loc = location.toLowerCase();
  
  // Check if we have detailed itinerary
  if (detailedItineraries[loc] && detailedItineraries[loc][days]) {
    const itinerary = detailedItineraries[loc][days];
    return itinerary.join("\n");
  }
  
  // Check if we have any itinerary for this location
  if (detailedItineraries[loc]) {
    const availableDays = Object.keys(detailedItineraries[loc]).map(Number);
    const closest = availableDays.reduce((prev, curr) => 
      Math.abs(curr - days) < Math.abs(prev - days) ? curr : prev
    );
    
    const itinerary = detailedItineraries[loc][closest];
    const note = days > closest 
      ? `\n\n💡 *Showing ${closest}-day plan. You can extend by revisiting favorites or nearby attractions.*`
      : `\n\n💡 *Showing ${closest}-day plan. Adjust based on your interests.*`;
    
    return itinerary.join("\n") + note;
  }
  
  // Generate from state data
  const stateData = allIndianStates[loc];
  if (stateData && stateData.itinerary) {
    let result = `📅 **${days}-Day ${stateData.name} Itinerary**\n\n`;
    
    const baseItinerary = stateData.itinerary;
    const daysToShow = Math.min(days, baseItinerary.length);
    
    for (let i = 0; i < daysToShow; i++) {
      result += `${baseItinerary[i]}\n\n`;
    }
    
    if (days > baseItinerary.length) {
      result += `**Day ${baseItinerary.length + 1} onwards:** Explore local markets, nearby towns, or revisit favorite spots.\n\n`;
    }
    
    result += `\n🍛 **Must-try Food:** ${stateData.food.slice(0, 4).join(", ")}`;
    result += `\n🌤️ **Best Time:** ${stateData.bestTime}`;
    result += `\n\n💡 *Ask me for specific city recommendations or detailed day plans!*`;
    
    return result;
  }
  
  return "";
}

// Get travel tips for location
export function getTravelTips(location: string): string {
  const loc = location.toLowerCase();
  const tips: Record<string, string[]> = {
    "odisha": [
      "🕐 Jagannath Temple: Non-Hindus cannot enter the inner sanctum",
      "👗 Dress modestly for temples (cover shoulders & knees)",
      "📸 Photography prohibited inside Konark Sun Temple main area",
      "🚗 Hire local guides at temples for better insights",
      "🍛 Don't miss the Mahaprasad at Jagannath Temple (holy food)"
    ],
    "kerala": [
      "🚤 Book houseboats in advance during peak season",
      "🌧️ Carry umbrella - can rain anytime",
      "🛵 Rent a scooter for exploring Kochi",
      "💆 Try authentic Ayurvedic massage",
      "🦐 Best seafood at local toddy shops (kallu shappu)"
    ],
    "rajasthan": [
      "☀️ Summer is extremely hot (avoid April-June)",
      "🏰 Book fort stays for royal experience",
      "🐫 Negotiate camel safari prices beforehand",
      "💧 Carry water bottles always",
      "🎨 Buy handicrafts directly from artisans"
    ],
    "ladakh": [
      "⛰️ First day acclimatization is CRUCIAL",
      "💊 Carry Diamox for altitude sickness",
      "📱 Limited network beyond Leh",
      "⛽ Fuel up at Leh - no petrol stations ahead",
      "🎫 ILP required for Nubra, Pangong (apply in Leh)"
    ],
    "goa": [
      "🏖️ Avoid beaches during monsoon (June-Sept)",
      "🛵 Rent scooter for beach hopping",
      "🍻 Feni (local liquor) is a must-try",
      "🌅 North Goa = parties, South Goa = peaceful",
      "🐚 Wednesday Anjuna flea market is famous"
    ]
  };
  
  if (tips[loc]) {
    return `\n\n**💡 Travel Tips for ${loc.charAt(0).toUpperCase() + loc.slice(1)}:**\n${tips[loc].join("\n")}`;
  }
  
  return "";
}
