// Itinerary generator for detailed day-wise travel plans

import { allIndianStates } from '../data/allStatesData';
import { getLocationData } from '../data/allDistrictsData';
import { getDestinationInfo } from '../data/metroDestinations';

// Format location name properly
function formatLocationName(name: string): string {
  return name.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join(' ');
}

// Detailed itineraries for popular destinations (1-7 days)
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
    5: [
      "**Day 1: Bhubaneswar Temple City**",
      "• Lingaraja Temple → Mukteshwar → Rajarani → Brahmeshwar",
      "• Evening: Nandankanan Zoo (white tigers)",
      "",
      "**Day 2: Puri Pilgrimage**",
      "• Jagannath Temple → Beach → Gundicha Temple → Markets",
      "",
      "**Day 3: Konark Heritage**",
      "• Sun Temple → Chandrabhaga Beach → Ramachandi Temple",
      "• Afternoon: Raghurajpur artist village",
      "",
      "**Day 4: Chilika Lake & Nature**",
      "• Full day boat safari in Chilika",
      "• Dolphin spotting & bird watching",
      "• Visit Kalijai Temple on island",
      "",
      "**Day 5: Tribal Odisha**",
      "• Drive to tribal villages near Rayagada",
      "• Experience authentic tribal culture",
      "• Return with local handicrafts"
    ],
    7: [
      "**Day 1: Bhubaneswar - Temple City**",
      "• Explore ancient temples and caves",
      "",
      "**Day 2: Puri - Holy City**",
      "• Jagannath Temple & beach experience",
      "",
      "**Day 3: Konark - Sun Temple**",
      "• UNESCO Heritage exploration",
      "",
      "**Day 4: Chilika Lake**",
      "• Boat safari, dolphins, birds",
      "",
      "**Day 5: Cuttack & Silver City**",
      "• Barabati Fort, Silver filigree shopping",
      "",
      "**Day 6: Tribal Experience**",
      "• Visit tribal villages and markets",
      "",
      "**Day 7: Shopping & Departure**",
      "• Buy handicrafts, Pattachitra, textiles"
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
    ],
    5: [
      "**Day 1: Kochi Heritage**",
      "• Fort Kochi, Chinese Fishing Nets, Jewish Town",
      "",
      "**Day 2: Munnar Hills**",
      "• Tea gardens, Mattupetty, Eravikulam",
      "",
      "**Day 3: Thekkady Wildlife**",
      "• Periyar Tiger Reserve boat safari",
      "• Spice plantation tour",
      "",
      "**Day 4: Alleppey Backwaters**",
      "• Full day houseboat cruise",
      "• Overnight on backwaters",
      "",
      "**Day 5: Kovalam Beach**",
      "• Beach relaxation, lighthouse",
      "• Ayurvedic spa experience"
    ],
    7: [
      "**Day 1-2: Kochi & Fort Kochi**",
      "• Heritage walk, Kathakali, Jewish Town",
      "",
      "**Day 3-4: Munnar Hills**",
      "• Tea estates, Eravikulam, Top Station",
      "",
      "**Day 5: Thekkady**",
      "• Periyar sanctuary, spice gardens",
      "",
      "**Day 6: Alleppey**",
      "• Houseboat cruise overnight",
      "",
      "**Day 7: Kovalam/Trivandrum**",
      "• Beach, Padmanabhaswamy Temple"
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
    ],
    5: [
      "**Day 1: Jaipur**",
      "• Amber Fort, City Palace, Hawa Mahal",
      "",
      "**Day 2: Jaipur to Jodhpur**",
      "• Drive via Ajmer & Pushkar",
      "• Evening: Blue City exploration",
      "",
      "**Day 3: Jodhpur**",
      "• Mehrangarh Fort, Umaid Bhawan, markets",
      "",
      "**Day 4: Jaisalmer**",
      "• Golden Fort, Patwon ki Haveli",
      "• Sam dunes sunset camel safari",
      "",
      "**Day 5: Jaisalmer to Udaipur**",
      "• Lake Pichola, City Palace, sunset"
    ],
    7: [
      "**Day 1-2: Jaipur**",
      "• Complete Pink City exploration",
      "",
      "**Day 3: Pushkar & Ajmer**",
      "• Brahma Temple, ghats, lake",
      "",
      "**Day 4: Jodhpur**",
      "• Mehrangarh, Blue City",
      "",
      "**Day 5: Jaisalmer**",
      "• Golden Fort, desert safari",
      "",
      "**Day 6-7: Udaipur**",
      "• Lake Pichola, palaces, temples"
    ],
    10: [
      "**Day 1-2: Jaipur (Pink City)**",
      "• Amber Fort, City Palace, Hawa Mahal, Nahargarh",
      "",
      "**Day 3: Pushkar**",
      "• Brahma Temple, ghats, camel fair (Nov)",
      "",
      "**Day 4-5: Jodhpur (Blue City)**",
      "• Mehrangarh Fort, Umaid Bhawan, markets",
      "",
      "**Day 6-7: Jaisalmer (Golden City)**",
      "• Golden Fort, havelis, Sam dunes camping",
      "",
      "**Day 8-9: Udaipur (City of Lakes)**",
      "• Lake Pichola, City Palace, temples",
      "",
      "**Day 10: Mount Abu**",
      "• Dilwara Temples, Sunset Point"
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
    ],
    3: [
      "**Day 1: North Goa Beaches**",
      "• Candolim, Baga, Anjuna exploration",
      "• Evening: Chapora Fort sunset",
      "",
      "**Day 2: Heritage & Panjim**",
      "• Old Goa churches (UNESCO)",
      "• Fontainhas Latin Quarter walk",
      "• Mandovi River cruise evening",
      "",
      "**Day 3: South Goa**",
      "• Palolem Beach paradise",
      "• Cola Beach secret cove",
      "• Cabo de Rama Fort"
    ],
    5: [
      "**Day 1: Arrival & North Goa**",
      "• Calangute, Baga, Fort Aguada",
      "",
      "**Day 2: North Goa Adventure**",
      "• Water sports, Anjuna market",
      "• Chapora sunset",
      "",
      "**Day 3: Heritage Day**",
      "• Old Goa, Panjim, Fontainhas",
      "",
      "**Day 4: South Goa**",
      "• Palolem, Agonda beaches",
      "",
      "**Day 5: Dudhsagar & Spice**",
      "• Dudhsagar Falls, spice plantation"
    ],
    7: [
      "**Day 1-2: North Goa Beaches**",
      "• Calangute, Baga, Candolim, nightlife",
      "",
      "**Day 3: Anjuna & Vagator**",
      "• Flea market, Chapora Fort",
      "",
      "**Day 4: Heritage**",
      "• Old Goa churches, Panjim",
      "",
      "**Day 5-6: South Goa**",
      "• Palolem, Agonda, Cola Beach",
      "",
      "**Day 7: Adventure**",
      "• Dudhsagar Falls, spice plantation"
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
    ],
    5: [
      "**Day 1: Shimla**",
      "• Mall Road, Ridge, Christ Church",
      "",
      "**Day 2: Shimla to Manali**",
      "• Scenic drive via Kullu Valley",
      "",
      "**Day 3: Manali**",
      "• Hadimba Temple, Vashisht, Old Manali",
      "",
      "**Day 4: Adventure Day**",
      "• Solang Valley, Rohtang (permit)",
      "",
      "**Day 5: Kullu & Return**",
      "• Kullu temples, shopping"
    ],
    7: [
      "**Day 1-2: Shimla**",
      "• Heritage walking, Kufri snow",
      "",
      "**Day 3: Shimla to Manali**",
      "• Scenic drive through mountains",
      "",
      "**Day 4-5: Manali**",
      "• Temples, Solang, Rohtang",
      "",
      "**Day 6: Dharamshala/McLeodganj**",
      "• Dalai Lama temple, Bhagsu Falls",
      "",
      "**Day 7: Return**",
      "• Tibetan market shopping"
    ],
    10: [
      "**Day 1-2: Shimla**",
      "• Mall Road, Kufri, Chail",
      "",
      "**Day 3-4: Manali**",
      "• Hadimba, Vashisht, Old Manali",
      "",
      "**Day 5: Rohtang/Atal Tunnel**",
      "• Snow adventure",
      "",
      "**Day 6-7: Dharamshala/McLeodganj**",
      "• Dalai Lama temple, Bhagsu, Triund",
      "",
      "**Day 8: Dalhousie**",
      "• Khajjiar (Mini Switzerland)",
      "",
      "**Day 9-10: Kasol & Manikaran**",
      "• Parvati Valley, hot springs"
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
    ],
    3: [
      "**Day 1: Old Delhi Heritage**",
      "• Red Fort, Jama Masjid, Chandni Chowk",
      "",
      "**Day 2: New Delhi**",
      "• Qutub Minar, Humayun's Tomb, India Gate",
      "",
      "**Day 3: Spiritual & Modern**",
      "• Lotus Temple, Akshardham, Hauz Khas"
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
    ],
    5: [
      "**Day 1: Haridwar**",
      "• Temples and Ganga Aarti",
      "",
      "**Day 2: Rishikesh**",
      "• Rafting, ashrams, cafes",
      "",
      "**Day 3: Mussoorie**",
      "• Queen of Hills exploration",
      "",
      "**Day 4: Nainital**",
      "• Naini Lake, Mall Road, Snow View",
      "",
      "**Day 5: Jim Corbett**",
      "• Safari in tiger reserve"
    ],
    7: [
      "**Day 1-2: Haridwar & Rishikesh**",
      "• Spiritual experience, rafting",
      "",
      "**Day 3-4: Mussoorie**",
      "• Hill station leisure",
      "",
      "**Day 5-6: Nainital**",
      "• Lake district exploration",
      "",
      "**Day 7: Corbett**",
      "• Wildlife safari"
    ]
  },
  "mumbai": {
    1: [
      "**Day 1: Mumbai Highlights**",
      "• Morning: Gateway of India & Taj",
      "• Ferry to Elephanta Caves",
      "• Lunch: Britannia & Co",
      "• Marine Drive sunset walk",
      "• Evening: Chowpatty street food",
      "• Night: Colaba Causeway shopping"
    ],
    2: [
      "**Day 1: South Mumbai**",
      "• Gateway of India, Elephanta Caves ferry",
      "• CST Station (UNESCO), Crawford Market",
      "• Marine Drive Queen's Necklace",
      "",
      "**Day 2: Cultural Mumbai**",
      "• Dhobi Ghat, Haji Ali Dargah",
      "• Siddhivinayak Temple",
      "• Bandra-Worli Sea Link drive",
      "• Bandstand promenade & Bandra cafes"
    ]
  },
  "varanasi": {
    1: [
      "**Day 1: Varanasi Spiritual Experience**",
      "• Pre-dawn: Boat ride on Ganges",
      "• Watch cremation at Manikarnika Ghat",
      "• Kashi Vishwanath Temple",
      "• Walk through old city lanes",
      "• Lunch: Banarasi street food",
      "• Evening: Grand Ganga Aarti at Dashashwamedh"
    ],
    2: [
      "**Day 1: Varanasi Ghats**",
      "• Sunrise boat ride",
      "• Ghat walking tour",
      "• Kashi Vishwanath Temple",
      "• Evening: Ganga Aarti",
      "",
      "**Day 2: Sarnath & Heritage**",
      "• Morning: Sarnath (Buddha's first sermon)",
      "• Dhamek Stupa, museum",
      "• Afternoon: Ramnagar Fort",
      "• Evening: Silk weaving tour"
    ],
    3: [
      "**Day 1: Ghats & Temples**",
      "• Boat ride, ghats, Kashi Vishwanath",
      "",
      "**Day 2: Sarnath**",
      "• Buddhist pilgrimage, museums",
      "",
      "**Day 3: Culture & Craft**",
      "• Silk weaving, Ramnagar Fort, final aarti"
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
    ],
    5: [
      "**Day 1: Leh Arrival & Rest**",
      "• Acclimatize, Leh Market, Shanti Stupa",
      "",
      "**Day 2: Leh Sightseeing**",
      "• Leh Palace, Hemis Monastery, Thiksey",
      "",
      "**Day 3: Nubra Valley**",
      "• Khardung La, Diskit, Hunder dunes",
      "",
      "**Day 4: Pangong Lake**",
      "• Via Chang La, lake camping",
      "",
      "**Day 5: Return to Leh**",
      "• Local monastery, departure"
    ],
    7: [
      "**Day 1-2: Leh & Acclimatization**",
      "• Rest, local sightseeing",
      "",
      "**Day 3: Monasteries**",
      "• Hemis, Thiksey, Shey",
      "",
      "**Day 4-5: Nubra Valley**",
      "• Khardung La, Diskit, Turtuk village",
      "",
      "**Day 6: Pangong Lake**",
      "• Full day at the magical lake",
      "",
      "**Day 7: Return & Departure**",
      "• Shopping, local food"
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
    ],
    5: [
      "**Day 1: Port Blair**",
      "• Cellular Jail, Anthropological Museum",
      "",
      "**Day 2-3: Havelock**",
      "• Radhanagar, Elephant Beach, diving",
      "",
      "**Day 4: Neil Island**",
      "• Natural rock formations, beaches",
      "",
      "**Day 5: Port Blair**",
      "• Ross Island, North Bay, departure"
    ],
    7: [
      "**Day 1: Port Blair**",
      "• Cellular Jail & city exploration",
      "",
      "**Day 2-4: Havelock Island**",
      "• Diving, snorkeling, beach time",
      "",
      "**Day 5-6: Neil Island**",
      "• Peaceful beaches, natural bridge",
      "",
      "**Day 7: Port Blair**",
      "• Ross Island, departure"
    ]
  }
};

// Generate itinerary for a single location
export function generateItinerary(location: string, days: number): string {
  const loc = location.toLowerCase().trim();
  
  // Check if we have detailed itinerary for exact days
  if (detailedItineraries[loc] && detailedItineraries[loc][days]) {
    return detailedItineraries[loc][days].join("\n");
  }
  
  // Check if we have any itinerary for this location
  if (detailedItineraries[loc]) {
    const availableDays = Object.keys(detailedItineraries[loc]).map(Number);
    const closest = availableDays.reduce((prev, curr) => 
      Math.abs(curr - days) < Math.abs(prev - days) ? curr : prev
    );
    
    const itinerary = detailedItineraries[loc][closest];
    let note = '';
    if (days > closest) {
      note = `\n\n💡 *Showing ${closest}-day base plan. For additional ${days - closest} days, you can:*\n• Revisit favorite spots\n• Explore nearby towns\n• Day trips to surrounding attractions\n• Relax and enjoy local experiences`;
    } else if (days < closest) {
      note = `\n\n💡 *Condensed from ${closest}-day plan. Prioritize based on your interests.*`;
    }
    
    return itinerary.join("\n") + note;
  }
  
  return "";
}

// Generate dynamic itinerary from location data
export function generateDynamicItinerary(location: string, days: number): string {
  const loc = location.toLowerCase().trim();
  
  // Get location data from various sources
  let locData = getLocationData(loc);
  if (!locData) {
    const metroData = getDestinationInfo(loc);
    if (metroData) {
      locData = {
        name: metroData.name,
        state: 'India',
        type: 'city' as const,
        attractions: metroData.attractions,
        food: metroData.food,
        culture: metroData.culture,
        bestTime: metroData.bestTime,
        tips: metroData.tips
      };
    }
  }
  if (!locData) {
    const stateData = allIndianStates[loc];
    if (stateData) {
      locData = {
        name: stateData.name,
        state: stateData.name,
        type: 'city' as const,
        attractions: stateData.attractions,
        food: stateData.food,
        culture: stateData.culture,
        bestTime: stateData.bestTime,
        tips: []
      };
    }
  }
  
  if (!locData) return "";
  
  const attractions = locData.attractions || [];
  const food = locData.food || [];
  
  let result = '';
  const attractionsPerDay = Math.max(2, Math.ceil(attractions.length / days));
  
  for (let d = 1; d <= days; d++) {
    result += `**Day ${d}:**\n`;
    const startIdx = (d - 1) * attractionsPerDay;
    const dayAttractions = attractions.slice(startIdx, startIdx + attractionsPerDay);
    
    const timeSlots = ['Morning', 'Afternoon', 'Evening'];
    dayAttractions.forEach((attr, i) => {
      result += `• ${timeSlots[i] || 'Later'}: ${attr}\n`;
    });
    
    if (dayAttractions.length === 0 && d <= days) {
      result += `• Explore local markets, try street food\n`;
      result += `• Visit nearby attractions or day trips\n`;
    }
    
    // Add food recommendation for some days
    if (d <= food.length && d % 2 === 0) {
      result += `• Try: ${food[d - 1]}\n`;
    }
    
    result += '\n';
  }
  
  result += `🍛 **Must-try Food:** ${food.slice(0, 5).join(', ')}\n`;
  result += `🌤️ **Best Time:** ${locData.bestTime}`;
  
  return result;
}

// Generate multi-destination itinerary
export function generateMultiDestinationItinerary(destinations: string[], totalDays: number): string {
  if (destinations.length === 0 || totalDays < destinations.length) {
    return "";
  }
  
  // Distribute days among destinations
  const baseDaysPerDest = Math.floor(totalDays / destinations.length);
  let extraDays = totalDays % destinations.length;
  
  const distribution: { dest: string; days: number }[] = destinations.map(dest => {
    const days = baseDaysPerDest + (extraDays > 0 ? 1 : 0);
    if (extraDays > 0) extraDays--;
    return { dest, days };
  });
  
  let result = '';
  let currentDay = 1;
  
  for (let i = 0; i < distribution.length; i++) {
    const { dest, days } = distribution[i];
    const formattedDest = formatLocationName(dest);
    
    // Get destination info
    let destData = getLocationData(dest);
    if (!destData) {
      const metroData = getDestinationInfo(dest);
      if (metroData) {
        destData = {
          name: metroData.name,
          state: 'India',
          type: 'city' as const,
          attractions: metroData.attractions,
          food: metroData.food,
          culture: metroData.overview || metroData.culture,
          bestTime: metroData.bestTime,
          tips: metroData.tips
        };
      }
    }
    if (!destData) {
      const stateData = allIndianStates[dest];
      if (stateData) {
        destData = {
          name: stateData.name,
          state: stateData.name,
          type: 'city' as const,
          attractions: stateData.attractions,
          food: stateData.food,
          culture: stateData.culture,
          bestTime: stateData.bestTime,
          tips: []
        };
      }
    }
    
    const attractions = destData?.attractions || [];
    const food = destData?.food || [];
    
    // Separator for each destination
    if (i > 0) {
      result += `\n---\n\n`;
    }
    
    result += `📍 **${formattedDest}** (${days} day${days > 1 ? 's' : ''})\n\n`;
    
    // Check if we have a pre-built itinerary
    const preBuilt = generateItinerary(dest, days);
    if (preBuilt && !preBuilt.includes('💡')) {
      // Use pre-built but adjust day numbers
      const adjustedItinerary = preBuilt.replace(/\*\*Day (\d+)/g, (_, num) => {
        return `**Day ${currentDay + parseInt(num) - 1}`;
      });
      result += adjustedItinerary + '\n';
    } else {
      // Generate dynamic itinerary
      const attractionsPerDay = Math.max(2, Math.ceil(attractions.length / days));
      
      for (let d = 0; d < days; d++) {
        result += `**Day ${currentDay + d}:** ${formattedDest}\n`;
        const startIdx = d * attractionsPerDay;
        const dayAttractions = attractions.slice(startIdx, startIdx + attractionsPerDay);
        
        const timeSlots = ['Morning', 'Afternoon', 'Evening'];
        dayAttractions.forEach((attr, idx) => {
          result += `• ${timeSlots[idx] || 'Later'}: ${attr}\n`;
        });
        
        if (dayAttractions.length === 0) {
          result += `• Explore local attractions and markets\n`;
        }
        
        // Add travel note for last day of destination (except last destination)
        if (d === days - 1 && i < distribution.length - 1) {
          const nextDest = formatLocationName(distribution[i + 1].dest);
          result += `• Evening: Travel to ${nextDest}\n`;
        }
        
        result += '\n';
      }
      
      if (food.length > 0) {
        result += `🍛 **Try in ${formattedDest}:** ${food.slice(0, 3).join(', ')}\n`;
      }
    }
    
    currentDay += days;
  }
  
  // Add travel tips
  result += `\n---\n\n💡 **Travel Tips:**\n`;
  result += `• Book inter-city transport in advance\n`;
  result += `• Keep buffer time for unexpected delays\n`;
  result += `• Pack according to varying climates\n`;
  result += `• Try local cuisine at each destination`;
  
  return result;
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
    ],
    "himachal pradesh": [
      "🧥 Carry warm clothes even in summer",
      "🚗 Book Rohtang Pass permits in advance",
      "📍 Roads can be blocked in monsoon",
      "🏔️ Altitude can affect some people",
      "☕ Try local Himachali cuisine and chai"
    ],
    "uttarakhand": [
      "🙏 Dress modestly for temple visits",
      "🏞️ Book rafting in advance at Rishikesh",
      "📸 Beatles Ashram entry fee applies",
      "⛰️ Carry warm clothes for hill stations",
      "🚶 Comfortable walking shoes essential"
    ],
    "varanasi": [
      "🌅 Sunrise boat ride is magical",
      "🙏 Ganga Aarti at Dashashwamedh daily 7 PM",
      "👟 Wear comfortable shoes for ghat walking",
      "🛍️ Buy Banarasi silk directly from weavers",
      "📸 Ask before photographing rituals"
    ]
  };
  
  if (tips[loc]) {
    return `\n\n💡 **Travel Tips:**\n${tips[loc].join("\n")}`;
  }
  
  return "";
}
