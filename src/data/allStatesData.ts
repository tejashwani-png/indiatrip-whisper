// Complete data for all 28 states and 8 union territories of India
export interface StateData {
  name: string;
  capital: string;
  attractions: string[];
  food: string[];
  culture: string;
  bestTime: string;
  itinerary: string[];
}

export const allIndianStates: Record<string, StateData> = {
  // Existing 8 states (expanded)
  "delhi": {
    name: "Delhi",
    capital: "New Delhi",
    attractions: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple", "Humayun's Tomb", "Akshardham Temple"],
    food: ["Chole Bhature", "Butter Chicken", "Parathas", "Street Chaat", "Kebabs"],
    culture: "Delhi is a perfect blend of ancient heritage and modern culture. It's known for its Mughal architecture, bustling markets, and diverse cuisine.",
    bestTime: "October to March (Winter season)",
    itinerary: ["Day 1: Visit India Gate, explore Connaught Place, Red Fort", "Day 2: Qutub Minar, Humayun's Tomb, Lotus Temple", "Day 3: Akshardham Temple, shopping at Chandni Chowk"]
  },
  "maharashtra": {
    name: "Maharashtra",
    capital: "Mumbai",
    attractions: ["Gateway of India", "Marine Drive", "Ajanta Caves", "Ellora Caves", "Lonavala", "Elephanta Caves"],
    food: ["Vada Pav", "Pav Bhaji", "Misal Pav", "Puran Poli", "Modak"],
    culture: "Home to Bollywood, Maharashtra blends coastal beauty with rich Maratha heritage. Known for festivals like Ganesh Chaturthi.",
    bestTime: "November to February",
    itinerary: ["Day 1: Gateway of India, Marine Drive, Colaba", "Day 2: Elephanta Caves, Haji Ali", "Day 3: Lonavala hill station"]
  },
  "rajasthan": {
    name: "Rajasthan",
    capital: "Jaipur",
    attractions: ["Hawa Mahal", "Amber Fort", "Jaisalmer Fort", "Udaipur Lakes", "Mehrangarh Fort", "City Palace"],
    food: ["Dal Baati Churma", "Laal Maas", "Ghewar", "Ker Sangri", "Pyaaz Kachori"],
    culture: "Land of maharajas with stunning forts, palaces, and desert landscapes. Rich in folk music and traditional art.",
    bestTime: "October to March",
    itinerary: ["Day 1: Jaipur - Hawa Mahal, City Palace, Amber Fort", "Day 2: Jodhpur - Mehrangarh Fort, Umaid Bhawan", "Day 3: Jaisalmer - Desert safari, Jaisalmer Fort"]
  },
  "kerala": {
    name: "Kerala",
    capital: "Thiruvananthapuram",
    attractions: ["Backwaters of Alleppey", "Munnar Tea Gardens", "Periyar Wildlife Sanctuary", "Kovalam Beach", "Fort Kochi"],
    food: ["Appam with Stew", "Sadya", "Karimeen Fry", "Puttu", "Kerala Parotta"],
    culture: "God's Own Country - known for Ayurveda, backwaters, and Kathakali dance. Rich in traditions and natural beauty.",
    bestTime: "September to March",
    itinerary: ["Day 1: Kochi - Fort Kochi, Chinese Fishing Nets", "Day 2: Munnar - Tea gardens, viewpoints", "Day 3: Alleppey - Houseboat cruise in backwaters"]
  },
  "goa": {
    name: "Goa",
    capital: "Panaji",
    attractions: ["Baga Beach", "Basilica of Bom Jesus", "Fort Aguada", "Dudhsagar Falls", "Anjuna Beach", "Old Goa Churches"],
    food: ["Fish Curry", "Bebinca", "Vindaloo", "Xacuti", "Feni"],
    culture: "Former Portuguese colony with beautiful beaches, vibrant nightlife, and unique Indo-Portuguese architecture.",
    bestTime: "November to February",
    itinerary: ["Day 1: North Goa beaches - Baga, Calangute, Anjuna", "Day 2: Old Goa churches, Panaji city tour", "Day 3: South Goa - Palolem Beach, Fort Aguada"]
  },
  "tamil nadu": {
    name: "Tamil Nadu",
    capital: "Chennai",
    attractions: ["Meenakshi Temple", "Mahabalipuram", "Ooty", "Rameshwaram", "Kanyakumari", "Marina Beach"],
    food: ["Idli", "Dosa", "Chettinad Chicken", "Sambar", "Filter Coffee"],
    culture: "Ancient Dravidian culture with magnificent temples, classical music and dance traditions.",
    bestTime: "November to February",
    itinerary: ["Day 1: Chennai - Marina Beach, temples", "Day 2: Mahabalipuram - Shore Temple, stone carvings", "Day 3: Madurai - Meenakshi Temple"]
  },
  "karnataka": {
    name: "Karnataka",
    capital: "Bangalore",
    attractions: ["Mysore Palace", "Hampi", "Coorg", "Bangalore Palace", "Gokarna", "Jog Falls"],
    food: ["Bisi Bele Bath", "Mysore Pak", "Ragi Mudde", "Neer Dosa", "Mangalore Buns"],
    culture: "Rich heritage of empires with UNESCO sites, coffee plantations, and tech capital Bangalore.",
    bestTime: "October to February",
    itinerary: ["Day 1: Bangalore - Lalbagh, Cubbon Park", "Day 2: Mysore - Mysore Palace, Chamundi Hills", "Day 3: Hampi - Ancient ruins, temples"]
  },
  "west bengal": {
    name: "West Bengal",
    capital: "Kolkata",
    attractions: ["Victoria Memorial", "Howrah Bridge", "Darjeeling", "Sundarbans", "Kalimpong", "Digha Beach"],
    food: ["Rosogolla", "Macher Jhol", "Mishti Doi", "Sandesh", "Kosha Mangsho"],
    culture: "Cultural capital of India with literary heritage, Durga Puja festivities, and colonial architecture.",
    bestTime: "October to March",
    itinerary: ["Day 1: Kolkata - Victoria Memorial, Howrah Bridge", "Day 2: Darjeeling - Tea gardens, Toy Train", "Day 3: Sundarbans - Mangrove safari"]
  },
  
  // New 20 states
  "andhra pradesh": {
    name: "Andhra Pradesh",
    capital: "Amaravati",
    attractions: ["Tirupati Temple", "Araku Valley", "Borra Caves", "Visakhapatnam Beach", "Lepakshi Temple"],
    food: ["Hyderabadi Biryani", "Pesarattu", "Gongura Pickle", "Pootharekulu"],
    culture: "Known for ancient temples, Kuchipudi dance, and spicy Andhra cuisine.",
    bestTime: "October to March",
    itinerary: ["Day 1: Tirupati darshan", "Day 2: Araku Valley scenic beauty", "Day 3: Visakhapatnam beaches"]
  },
  "arunachal pradesh": {
    name: "Arunachal Pradesh",
    capital: "Itanagar",
    attractions: ["Tawang Monastery", "Sela Pass", "Ziro Valley", "Namdapha National Park"],
    food: ["Thukpa", "Momos", "Apong", "Zan"],
    culture: "Land of rising sun with Buddhist monasteries and diverse tribal communities.",
    bestTime: "October to April",
    itinerary: ["Day 1: Tawang Monastery", "Day 2: Sela Pass", "Day 3: Ziro Valley"]
  },
  "assam": {
    name: "Assam",
    capital: "Dispur",
    attractions: ["Kaziranga National Park", "Kamakhya Temple", "Majuli Island", "Tea Gardens"],
    food: ["Assam Tea", "Masor Tenga", "Khar", "Pitha"],
    culture: "Famous for tea, silk, one-horned rhinos, and Bihu festival.",
    bestTime: "November to April",
    itinerary: ["Day 1: Kaziranga safari", "Day 2: Kamakhya Temple", "Day 3: Majuli Island"]
  },
  "bihar": {
    name: "Bihar",
    capital: "Patna",
    attractions: ["Mahabodhi Temple", "Nalanda University", "Rajgir", "Vaishali"],
    food: ["Litti Chokha", "Sattu Paratha", "Khaja", "Chana Ghugni"],
    culture: "Ancient land of Buddhism and Jainism with rich historical heritage.",
    bestTime: "October to March",
    itinerary: ["Day 1: Bodh Gaya - Mahabodhi Temple", "Day 2: Nalanda ruins", "Day 3: Rajgir hot springs"]
  },
  "chhattisgarh": {
    name: "Chhattisgarh",
    capital: "Raipur",
    attractions: ["Chitrakote Falls", "Bastar", "Sirpur", "Barnawapara Wildlife Sanctuary"],
    food: ["Farra", "Petha", "Bafauri", "Chila"],
    culture: "Tribal heartland with ancient temples and natural waterfalls.",
    bestTime: "October to March",
    itinerary: ["Day 1: Chitrakote Falls", "Day 2: Bastar tribal culture", "Day 3: Sirpur temples"]
  },
  "gujarat": {
    name: "Gujarat",
    capital: "Gandhinagar",
    attractions: ["Gir National Park", "Rann of Kutch", "Somnath Temple", "Dwarka", "Sabarmati Ashram"],
    food: ["Dhokla", "Khandvi", "Thepla", "Fafda", "Gujarati Thali"],
    culture: "Land of lions, vibrant festivals, and Mahatma Gandhi's birthplace.",
    bestTime: "November to February",
    itinerary: ["Day 1: Rann of Kutch", "Day 2: Gir safari", "Day 3: Somnath & Dwarka"]
  },
  "haryana": {
    name: "Haryana",
    capital: "Chandigarh",
    attractions: ["Kurukshetra", "Surajkund", "Kingdom of Dreams", "Sultanpur Bird Sanctuary"],
    food: ["Bajra Khichdi", "Singri", "Bathua Raita", "Besan Masala Roti"],
    culture: "Historic land of Mahabharata with agricultural prosperity.",
    bestTime: "October to March",
    itinerary: ["Day 1: Kurukshetra temples", "Day 2: Surajkund", "Day 3: Kingdom of Dreams"]
  },
  "himachal pradesh": {
    name: "Himachal Pradesh",
    capital: "Shimla",
    attractions: ["Manali", "Shimla", "Dharamshala", "Spiti Valley", "Kullu"],
    food: ["Siddu", "Dham", "Chha Gosht", "Babru"],
    culture: "Hill state with colonial heritage, Buddhist monasteries, and adventure sports.",
    bestTime: "March to June, September to January",
    itinerary: ["Day 1: Shimla Mall Road", "Day 2: Manali - Rohtang Pass", "Day 3: Dharamshala - Dalai Lama Temple"]
  },
  "jharkhand": {
    name: "Jharkhand",
    capital: "Ranchi",
    attractions: ["Hundru Falls", "Betla National Park", "Parasnath Hills", "Jagannath Temple"],
    food: ["Litti Chokha", "Dhuska", "Thekua", "Chilka Roti"],
    culture: "Mineral-rich state with tribal traditions and waterfalls.",
    bestTime: "October to March",
    itinerary: ["Day 1: Ranchi - Hundru Falls", "Day 2: Betla safari", "Day 3: Parasnath trekking"]
  },
  "madhya pradesh": {
    name: "Madhya Pradesh",
    capital: "Bhopal",
    attractions: ["Khajuraho Temples", "Sanchi Stupa", "Kanha National Park", "Gwalior Fort", "Ujjain"],
    food: ["Poha", "Bhutte ka Kees", "Dal Bafla", "Mawa Bati"],
    culture: "Heart of India with ancient temples, wildlife, and classical music traditions.",
    bestTime: "October to March",
    itinerary: ["Day 1: Khajuraho temples", "Day 2: Kanha safari", "Day 3: Gwalior Fort"]
  },
  "manipur": {
    name: "Manipur",
    capital: "Imphal",
    attractions: ["Loktak Lake", "Kangla Fort", "Keibul Lamjao National Park", "INA Memorial"],
    food: ["Eromba", "Chamthong", "Ngari", "Singju"],
    culture: "Land of jewels with classical Manipuri dance and floating lake.",
    bestTime: "October to March",
    itinerary: ["Day 1: Loktak Lake", "Day 2: Kangla Fort", "Day 3: INA Memorial"]
  },
  "meghalaya": {
    name: "Meghalaya",
    capital: "Shillong",
    attractions: ["Living Root Bridges", "Cherrapunji", "Shillong", "Mawlynnong", "Elephant Falls"],
    food: ["Jadoh", "Doh Khlieh", "Tungrymbai", "Pumaloi"],
    culture: "Abode of clouds with wettest places on earth and living bridges.",
    bestTime: "October to June",
    itinerary: ["Day 1: Shillong sightseeing", "Day 2: Cherrapunji waterfalls", "Day 3: Living Root Bridges"]
  },
  "mizoram": {
    name: "Mizoram",
    capital: "Aizawl",
    attractions: ["Vantawng Falls", "Phawngpui Peak", "Solomon's Temple", "Reiek"],
    food: ["Bai", "Vawksa Rep", "Sawhchiar", "Koat Pitha"],
    culture: "Land of blue mountains with unique Mizo culture and traditions.",
    bestTime: "October to March",
    itinerary: ["Day 1: Aizawl city tour", "Day 2: Vantawng Falls", "Day 3: Phawngpui Peak"]
  },
  "nagaland": {
    name: "Nagaland",
    capital: "Kohima",
    attractions: ["Hornbill Festival", "Kohima War Cemetery", "Dzukou Valley", "Japfu Peak"],
    food: ["Smoked Pork", "Axone", "Galho", "Bamboo Shoot"],
    culture: "Land of festivals with warrior tribes and Hornbill Festival.",
    bestTime: "October to May",
    itinerary: ["Day 1: Kohima War Cemetery", "Day 2: Dzukou Valley trek", "Day 3: Japfu Peak"]
  },
  "odisha": {
    name: "Odisha",
    capital: "Bhubaneswar",
    attractions: ["Jagannath Temple", "Konark Sun Temple", "Chilika Lake", "Puri Beach", "Lingaraja Temple"],
    food: ["Dalma", "Chhena Poda", "Rasagola", "Pakhala"],
    culture: "Land of Lord Jagannath with ancient temples and classical Odissi dance.",
    bestTime: "October to March",
    itinerary: ["Day 1: Puri - Jagannath Temple", "Day 2: Konark Sun Temple", "Day 3: Chilika Lake"]
  },
  "punjab": {
    name: "Punjab",
    capital: "Chandigarh",
    attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Qila Mubarak", "Anandpur Sahib"],
    food: ["Butter Chicken", "Sarson da Saag", "Makki di Roti", "Chole Bhature", "Lassi"],
    culture: "Land of five rivers with Sikh heritage, bhangra, and vibrant festivals.",
    bestTime: "November to March",
    itinerary: ["Day 1: Golden Temple", "Day 2: Jallianwala Bagh & Wagah Border", "Day 3: Anandpur Sahib"]
  },
  "sikkim": {
    name: "Sikkim",
    capital: "Gangtok",
    attractions: ["Tsomgo Lake", "Nathula Pass", "Pelling", "Yumthang Valley", "Rumtek Monastery"],
    food: ["Momos", "Thukpa", "Gundruk", "Sel Roti"],
    culture: "Himalayan state with Buddhist monasteries and stunning mountain views.",
    bestTime: "March to June, September to December",
    itinerary: ["Day 1: Gangtok - MG Marg", "Day 2: Tsomgo Lake & Nathula Pass", "Day 3: Pelling monastery"]
  },
  "telangana": {
    name: "Telangana",
    capital: "Hyderabad",
    attractions: ["Charminar", "Golconda Fort", "Ramoji Film City", "Hussain Sagar", "Qutb Shahi Tombs"],
    food: ["Hyderabadi Biryani", "Haleem", "Mirchi ka Salan", "Double ka Meetha"],
    culture: "Known for Nizami heritage, pearls, and IT hub Hyderabad.",
    bestTime: "October to March",
    itinerary: ["Day 1: Charminar & Laad Bazaar", "Day 2: Golconda Fort", "Day 3: Ramoji Film City"]
  },
  "tripura": {
    name: "Tripura",
    capital: "Agartala",
    attractions: ["Ujjayanta Palace", "Neermahal", "Sepahijala Wildlife Sanctuary", "Unakoti"],
    food: ["Mui Borok", "Gudok", "Wahan Mosdeng", "Chakhwi"],
    culture: "Land of temples with tribal traditions and royal palaces.",
    bestTime: "October to March",
    itinerary: ["Day 1: Ujjayanta Palace", "Day 2: Neermahal", "Day 3: Unakoti carvings"]
  },
  "uttar pradesh": {
    name: "Uttar Pradesh",
    capital: "Lucknow",
    attractions: ["Taj Mahal", "Varanasi Ghats", "Fatehpur Sikri", "Ayodhya", "Lucknow monuments"],
    food: ["Kebabs", "Biryani", "Chaat", "Petha", "Tunday Kababi"],
    culture: "Cradle of Indian civilization with spiritual cities and Mughal architecture.",
    bestTime: "October to March",
    itinerary: ["Day 1: Agra - Taj Mahal", "Day 2: Varanasi - Ganga Aarti", "Day 3: Lucknow - Bara Imambara"]
  },
  "uttarakhand": {
    name: "Uttarakhand",
    capital: "Dehradun",
    attractions: ["Rishikesh", "Haridwar", "Nainital", "Mussoorie", "Jim Corbett", "Kedarnath"],
    food: ["Kafuli", "Bhatt ki Churkani", "Bal Mithai", "Singodi"],
    culture: "Land of gods with yoga capital, pilgrimage sites, and Himalayan beauty.",
    bestTime: "March to June, September to November",
    itinerary: ["Day 1: Haridwar - Ganga Aarti", "Day 2: Rishikesh - River rafting", "Day 3: Mussoorie hill station"]
  },
  
  // Union Territories
  "andaman and nicobar": {
    name: "Andaman and Nicobar Islands",
    capital: "Port Blair",
    attractions: ["Cellular Jail", "Radhanagar Beach", "Ross Island", "Havelock Island", "Neil Island"],
    food: ["Seafood", "Fish Curry", "Coconut-based dishes"],
    culture: "Tropical paradise with pristine beaches, coral reefs, and tribal communities.",
    bestTime: "October to May",
    itinerary: ["Day 1: Port Blair - Cellular Jail", "Day 2: Havelock Island", "Day 3: Radhanagar Beach"]
  },
  "chandigarh": {
    name: "Chandigarh",
    capital: "Chandigarh",
    attractions: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex"],
    food: ["Chole Bhature", "Butter Chicken", "Rajma Chawal"],
    culture: "Planned city designed by Le Corbusier with modern architecture.",
    bestTime: "October to March",
    itinerary: ["Day 1: Rock Garden", "Day 2: Sukhna Lake", "Day 3: Rose Garden"]
  },
  "dadra and nagar haveli and daman and diu": {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    capital: "Daman",
    attractions: ["Diu Fort", "Nagoa Beach", "Daman Beach", "Tribal Museum"],
    food: ["Seafood", "Portuguese cuisine", "Fish Curry"],
    culture: "Former Portuguese territory with beaches and forts.",
    bestTime: "November to February",
    itinerary: ["Day 1: Diu Fort", "Day 2: Beaches", "Day 3: Tribal Museum"]
  },
  "jammu and kashmir": {
    name: "Jammu and Kashmir",
    capital: "Srinagar (Summer), Jammu (Winter)",
    attractions: ["Dal Lake", "Gulmarg", "Pahalgam", "Vaishno Devi", "Sonamarg"],
    food: ["Rogan Josh", "Wazwan", "Kahwa", "Modur Pulav"],
    culture: "Paradise on earth with houseboats, Kashmiri crafts, and stunning valleys.",
    bestTime: "April to October",
    itinerary: ["Day 1: Dal Lake shikara ride", "Day 2: Gulmarg skiing", "Day 3: Pahalgam valley"]
  },
  "ladakh": {
    name: "Ladakh",
    capital: "Leh",
    attractions: ["Pangong Lake", "Nubra Valley", "Magnetic Hill", "Leh Palace", "Khardung La"],
    food: ["Thukpa", "Momos", "Butter Tea", "Skyu"],
    culture: "Cold desert with Buddhist monasteries and high-altitude lakes.",
    bestTime: "May to September",
    itinerary: ["Day 1: Leh acclimatization", "Day 2: Nubra Valley", "Day 3: Pangong Lake"]
  },
  "lakshadweep": {
    name: "Lakshadweep",
    capital: "Kavaratti",
    attractions: ["Agatti Island", "Bangaram Island", "Minicoy Island", "Coral reefs"],
    food: ["Seafood", "Coconut-based dishes", "Octopus fry"],
    culture: "Tropical archipelago with coral atolls and marine life.",
    bestTime: "October to May",
    itinerary: ["Day 1: Agatti Island", "Day 2: Snorkeling", "Day 3: Bangaram Island"]
  },
  "puducherry": {
    name: "Puducherry",
    capital: "Puducherry",
    attractions: ["Aurobindo Ashram", "Auroville", "Paradise Beach", "French Quarter", "Serenity Beach"],
    food: ["French cuisine", "Seafood", "Crepes", "Baguettes"],
    culture: "Former French colony with colonial architecture and spiritual centers.",
    bestTime: "October to March",
    itinerary: ["Day 1: French Quarter", "Day 2: Auroville", "Day 3: Beach hopping"]
  }
};
