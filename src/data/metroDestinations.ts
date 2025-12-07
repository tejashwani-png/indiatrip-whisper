// Comprehensive data for metro cities and popular destinations

export interface DestinationData {
  name: string;
  overview: string;
  attractions: string[];
  food: string[];
  culture: string;
  bestTime: string;
  history: string;
  tips: string[];
}

export const metroDestinations: Record<string, DestinationData> = {
  // Metro Cities
  "delhi": {
    name: "Delhi",
    overview: "India's capital and a melting pot of history spanning Mughal emperors to modern India. Delhi seamlessly blends ancient monuments, bustling bazaars, and contemporary culture.",
    attractions: [
      "Red Fort - Mughal architecture masterpiece",
      "Qutub Minar - 73m tall UNESCO Heritage minaret",
      "India Gate - War memorial and iconic landmark",
      "Humayun's Tomb - Precursor to Taj Mahal",
      "Lotus Temple - Bahá'í House of Worship",
      "Akshardham Temple - Modern Hindu temple complex",
      "Jama Masjid - India's largest mosque",
      "Chandni Chowk - Historic market street"
    ],
    food: ["Chole Bhature", "Butter Chicken", "Kebabs at Karim's", "Paranthe at Paranthe Wali Gali", "Street Chaat", "Daulat ki Chaat (winter special)", "Nihari"],
    culture: "Delhi celebrates all Indian festivals with grandeur. The city is known for its rich Mughal heritage, food culture, and being the seat of Indian democracy. Diwali lights up the city, while Republic Day parade at Rajpath is iconic.",
    bestTime: "October to March (avoid extreme summer heat)",
    history: "Delhi has been the capital of several empires including the Mughals. It has witnessed the rise and fall of seven cities, from Indraprastha of Mahabharata to Lutyens' New Delhi.",
    tips: ["Metro is the best way to travel", "Bargain at Sarojini/Janpath markets", "Book Red Fort tickets online", "Try street food in old Delhi"]
  },
  "mumbai": {
    name: "Mumbai",
    overview: "The city of dreams, India's financial capital, and home to Bollywood. Mumbai is a city that never sleeps, offering colonial architecture, beaches, and unmatched street food.",
    attractions: [
      "Gateway of India - Iconic waterfront arch",
      "Marine Drive - Queen's Necklace promenade",
      "Elephanta Caves - Ancient rock-cut temples",
      "Chhatrapati Shivaji Terminus - UNESCO Heritage station",
      "Siddhivinayak Temple - Famous Ganesh temple",
      "Haji Ali Dargah - Mosque on an islet",
      "Juhu Beach - Bollywood celebrity sightings",
      "Dharavi - Asia's largest slum (heritage tours)"
    ],
    food: ["Vada Pav", "Pav Bhaji", "Bombay Sandwich", "Bhel Puri at Chowpatty", "Seafood at Trishna", "Irani Chai & Bun Maska", "Kebabs at Bademiya"],
    culture: "Mumbai is the heart of Indian entertainment industry. Ganesh Chaturthi is celebrated with massive pandals and processions. The city's dabbawalas and local trains are legendary.",
    bestTime: "November to February (pleasant weather)",
    history: "Originally seven islands, Mumbai grew under Portuguese and British rule. The city became India's commercial hub after independence.",
    tips: ["Use local trains during non-peak hours", "Visit Marine Drive at sunset", "Book Elephanta ferry early", "Explore Colaba Causeway"]
  },
  "bangalore": {
    name: "Bangalore (Bengaluru)",
    overview: "India's Silicon Valley, known for pleasant weather, gardens, and thriving pub culture. A perfect blend of tech innovation and old-world charm.",
    attractions: [
      "Lalbagh Botanical Garden - Victorian glasshouse",
      "Cubbon Park - Green lung of the city",
      "Bangalore Palace - Tudor-style architecture",
      "ISKCON Temple - Modern temple complex",
      "Nandi Hills - Sunrise viewpoint",
      "Tipu Sultan's Palace - Historical landmark",
      "Commercial Street - Shopping paradise",
      "MG Road & Brigade Road - Nightlife hubs"
    ],
    food: ["Masala Dosa at MTR", "Bisi Bele Bath", "Filter Coffee", "Ragi Mudde", "Mangalore Buns", "Craft Beer at microbreweries"],
    culture: "Bangalore blends Kannada traditions with cosmopolitan lifestyle. The city is famous for its pub culture, IT parks, and startup ecosystem.",
    bestTime: "Year-round (pleasant climate), best September-February",
    history: "Founded by Kempe Gowda in 1537, the city grew as a cantonment town under British rule before becoming India's tech capital.",
    tips: ["Traffic is notorious - use metro", "Explore Indiranagar & Koramangala for cafes", "Book Nandi Hills trip for sunrise", "Weekends = pub hopping"]
  },
  "chennai": {
    name: "Chennai",
    overview: "Gateway to South India, Chennai is known for its temples, classical arts, Marina Beach, and rich Tamil culture. A city where tradition meets modernity.",
    attractions: [
      "Marina Beach - World's second longest beach",
      "Kapaleeshwarar Temple - Dravidian architecture marvel",
      "Fort St. George - First British fortress in India",
      "San Thome Cathedral - Apostle Thomas' tomb",
      "Government Museum - Second oldest in India",
      "Mahabalipuram - UNESCO World Heritage (day trip)",
      "DakshinaChitra - Heritage museum"
    ],
    food: ["Idli-Sambar", "Filter Coffee at Saravana Bhavan", "Chettinad Chicken", "Dosa varieties", "Kothu Parotta", "Sundal at beach"],
    culture: "Chennai is the hub of Carnatic music and Bharatanatyam dance. The December Music Season is world-famous. Tamil literature and cinema thrive here.",
    bestTime: "November to February (avoid April-June heat and monsoon)",
    history: "Chennai was established by the British East India Company in 1639. It was the capital of Madras Presidency and remains a cultural powerhouse.",
    tips: ["Learn basic Tamil phrases", "December = Margazhi Music Festival", "Auto rickshaws may overcharge - use apps", "Try banana leaf meals"]
  },
  "kolkata": {
    name: "Kolkata",
    overview: "The cultural capital of India, Kolkata is a city of literature, art, and colonial grandeur. Known for its intellectual heritage and warm hospitality.",
    attractions: [
      "Victoria Memorial - Marble marvel museum",
      "Howrah Bridge - Iconic cantilever bridge",
      "Dakshineswar Kali Temple - Ramakrishna's meditation spot",
      "Indian Museum - Oldest in Asia",
      "St. Paul's Cathedral - Gothic architecture",
      "College Street - Book lovers' paradise",
      "Marble Palace - Heritage mansion",
      "Princep Ghat - Riverside heritage"
    ],
    food: ["Rosogolla", "Mishti Doi", "Kathi Roll", "Macher Jhol (fish curry)", "Kosha Mangsho", "Phuchka", "Bengali thali"],
    culture: "Kolkata celebrates Durga Puja like nowhere else - it's a UNESCO Intangible Cultural Heritage. The city birthed the Bengal Renaissance and Nobel laureates.",
    bestTime: "October to March (Durga Puja in October is magical)",
    history: "Former capital of British India until 1911, Kolkata was the epicenter of the independence movement and remains a cultural beacon.",
    tips: ["Visit during Durga Puja for grand celebrations", "Take yellow taxis for experience", "Hand-pulled rickshaws in North Kolkata", "Explore Park Street for nightlife"]
  },
  "hyderabad": {
    name: "Hyderabad",
    overview: "City of Nizams and pearls, Hyderabad blends Mughal grandeur with modern IT prowess. Famous for biryani, historic monuments, and HITEC City.",
    attractions: [
      "Charminar - Iconic 16th-century monument",
      "Golconda Fort - Acoustic marvels",
      "Hussain Sagar Lake - Giant Buddha statue",
      "Qutb Shahi Tombs - Necropolis of seven sultans",
      "Chowmahalla Palace - Nizam's residence",
      "Ramoji Film City - World's largest film studio",
      "Salar Jung Museum - One-man collection",
      "Laad Bazaar - Bangles and pearls"
    ],
    food: ["Hyderabadi Biryani at Paradise", "Haleem", "Irani Chai", "Osmania Biscuits", "Double ka Meetha", "Mirchi ka Salan"],
    culture: "Hyderabad's Nizami culture is evident in its language (Deccani Urdu), cuisine, and architecture. The city hosts Bonalu and Bathukamma festivals.",
    bestTime: "October to March (avoid summer heat)",
    history: "Founded in 1591 by Muhammad Quli Qutb Shah, Hyderabad was ruled by the Nizams who were among the richest rulers in history.",
    tips: ["Golconda Fort light & sound show is must-see", "Buy pearls at Laad Bazaar", "Ramoji needs full day", "Try biryani at multiple places"]
  },
  "pune": {
    name: "Pune",
    overview: "Oxford of the East, Pune is a city of education, culture, and Maratha history. Known for pleasant weather and vibrant nightlife.",
    attractions: [
      "Shaniwar Wada - Peshwa palace ruins",
      "Aga Khan Palace - Gandhi memorial",
      "Sinhagad Fort - Historic trek",
      "Dagdusheth Halwai Temple - Famous Ganesh temple",
      "Osho Ashram - Meditation center",
      "Lavasa - Hill city nearby",
      "Koregaon Park - Cafes and nightlife"
    ],
    food: ["Misal Pav", "Mastani", "Bhakarwadi", "Shrewsbury Biscuits", "Puneri cuisine"],
    culture: "Pune is the cultural capital of Maharashtra. Ganesh Chaturthi celebrations here rival Mumbai's. The city has a strong Marathi theater tradition.",
    bestTime: "October to February (monsoon for green hills)",
    history: "Pune was the power center of the Maratha Empire. The Peshwas ruled from Shaniwar Wada, making it historically significant.",
    tips: ["FC Road & JM Road for food", "Koregaon Park for nightlife", "Sinhagad trek is easy and rewarding", "German Bakery for breakfast"]
  },
  "ahmedabad": {
    name: "Ahmedabad",
    overview: "India's first UNESCO World Heritage City, Ahmedabad is a treasure trove of Indo-Islamic architecture, textile heritage, and Gandhian history.",
    attractions: [
      "Sabarmati Ashram - Gandhi's home base",
      "Adalaj Stepwell - Ornate vav",
      "Sidi Saiyyed Mosque - Iconic jali window",
      "Hutheesing Jain Temple - Carved marble beauty",
      "Kankaria Lake - Entertainment hub",
      "Calico Museum - World's finest textile museum",
      "Heritage Walk in Old City"
    ],
    food: ["Gujarati Thali", "Dhokla", "Fafda-Jalebi", "Khandvi", "Undhiyu", "Khakhra", "Dabeli"],
    culture: "Ahmedabad celebrates Uttarayan (kite festival) grandly. The city is vegetarian-friendly with strict Jain influences. Navratri Garba nights are legendary.",
    bestTime: "November to February (January for Uttarayan)",
    history: "Founded in 1411 by Sultan Ahmed Shah, the city became a major textile center. Gandhi started the Dandi March from Sabarmati Ashram.",
    tips: ["Heritage walk starts at 8 AM", "Manek Chowk for night food", "Try unlimited thali at Agashiye", "Kite Museum before Uttarayan"]
  },
  // Popular Destinations
  "jaipur": {
    name: "Jaipur",
    overview: "The Pink City and gateway to Rajasthan. Jaipur dazzles with its forts, palaces, and vibrant bazaars filled with handicrafts.",
    attractions: [
      "Amber Fort - Majestic hilltop fortress",
      "Hawa Mahal - Palace of Winds",
      "City Palace - Living royal residence",
      "Jantar Mantar - Astronomical instruments",
      "Nahargarh Fort - Sunset viewpoint",
      "Jaigarh Fort - Cannon collection",
      "Jal Mahal - Water palace photo stop"
    ],
    food: ["Dal Baati Churma", "Pyaaz Kachori", "Laal Maas", "Ghewar", "Lassi at Lassiwala"],
    culture: "Jaipur celebrates Teej and Gangaur with royal processions. The city is famous for block printing, blue pottery, and kundan jewelry.",
    bestTime: "October to March (winter for comfortable sightseeing)",
    history: "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was India's first planned city. The pink color was added in 1876 to welcome Prince Albert.",
    tips: ["Amber Fort by 9 AM to avoid crowds", "Johri Bazaar for jewelry", "Rooftop cafes opposite Hawa Mahal", "Chokhi Dhani for cultural dinner"]
  },
  "kochi": {
    name: "Kochi",
    overview: "Queen of the Arabian Sea, Kochi is a melting pot of Portuguese, Dutch, British, and Jewish heritage with the famous Chinese fishing nets.",
    attractions: [
      "Chinese Fishing Nets - Iconic sunset view",
      "Fort Kochi - Colonial heritage area",
      "Jewish Synagogue - Oldest in Commonwealth",
      "St. Francis Church - Vasco da Gama's burial site",
      "Mattancherry Palace - Dutch Palace museum",
      "Marine Drive - Waterfront promenade"
    ],
    food: ["Kerala Sadhya", "Appam & Stew", "Karimeen (pearl spot fish)", "Puttu & Kadala", "Toddy shop meals"],
    culture: "Kochi has a unique blend of European and Malabar cultures. Kathakali and Kalaripayattu performances are regular. The Kochi-Muziris Biennale is Asia's largest art festival.",
    bestTime: "September to March (post-monsoon greenery)",
    history: "Known to Arabs and Chinese traders for centuries, Kochi was colonized by Portuguese (1503), Dutch, and British successively.",
    tips: ["Stay in Fort Kochi for heritage feel", "Rent cycles to explore", "Kathakali show at Kerala Kathakali Centre", "Fort Kochi walking tour"]
  },
  "goa": {
    name: "Goa",
    overview: "India's beach paradise, Goa offers sun, sand, and susegad (laid-back lifestyle). A perfect blend of Portuguese heritage and Indian vibrancy.",
    attractions: [
      "Baga Beach - Nightlife and water sports",
      "Basilica of Bom Jesus - UNESCO Heritage",
      "Fort Aguada - Lighthouse views",
      "Dudhsagar Falls - Majestic waterfall",
      "Anjuna Flea Market - Wednesday treasure hunt",
      "Old Goa Churches - Se Cathedral, Church of St. Francis",
      "Palolem Beach - Crescent beach beauty"
    ],
    food: ["Fish Curry Rice", "Bebinca", "Vindaloo", "Xacuti", "Feni", "Prawn Balchão", "Goan Sausage Chilly Fry"],
    culture: "Goa's culture is a unique Indo-Portuguese blend. Carnival in February, Shigmo, and Christmas are celebrated grandly. Susegad is a way of life.",
    bestTime: "November to February (peak beach season)",
    history: "Ruled by Portugal for 450 years until 1961, Goa retains strong European influences in architecture, food, and festivals.",
    tips: ["Rent a scooter", "North Goa = parties, South Goa = peace", "Wednesday Anjuna market", "Sunset at Chapora Fort"]
  },
  "varanasi": {
    name: "Varanasi (Banaras)",
    overview: "One of the world's oldest continuously inhabited cities, Varanasi is the spiritual capital of India. The ghats, rituals, and energy are transformative.",
    attractions: [
      "Dashashwamedh Ghat - Evening Ganga Aarti",
      "Kashi Vishwanath Temple - Jyotirlinga",
      "Manikarnika Ghat - Cremation ground (spiritual)",
      "Sarnath - Buddha's first sermon site",
      "Assi Ghat - Morning rituals",
      "Ramnagar Fort - Across the Ganges",
      "Bharat Mata Temple - Map of India"
    ],
    food: ["Banarasi Paan", "Kachori Sabzi", "Malaiyo (winter special)", "Thandai", "Banarasi Chaat", "Lassi"],
    culture: "Varanasi is the city of learning and liberation. Classical music, silk weaving, and ancient rituals define life here. Death is considered auspicious.",
    bestTime: "October to March (Dev Deepawali in Nov is spectacular)",
    history: "Mentioned in Rigveda, Varanasi has been a center of learning and spirituality for over 3,000 years. Mark Twain called it 'older than history.'",
    tips: ["Ganga Aarti at Dashashwamedh daily 7 PM", "Sunrise boat ride is magical", "Sarnath half-day trip", "Buy Banarasi silk directly from weavers"]
  },
  "agra": {
    name: "Agra",
    overview: "Home to the Taj Mahal, one of the seven wonders of the world. Agra showcases Mughal architecture at its finest.",
    attractions: [
      "Taj Mahal - Marble masterpiece of love",
      "Agra Fort - Red sandstone citadel",
      "Fatehpur Sikri - Abandoned Mughal capital",
      "Mehtab Bagh - Taj sunset view",
      "Itimad-ud-Daulah - Baby Taj",
      "Akbar's Tomb at Sikandra"
    ],
    food: ["Mughlai cuisine", "Petha", "Bedai & Jalebi", "Dalmoth", "Panchi Petha"],
    culture: "Agra's culture is deeply Mughal-influenced. Marble inlay (pietra dura) and leather goods are local specialties.",
    bestTime: "October to March (Taj looks ethereal in fog)",
    history: "Agra reached its zenith under Akbar, Jahangir, and Shah Jahan. The Taj was built 1632-1653 by Shah Jahan for Mumtaz.",
    tips: ["Visit Taj at sunrise", "Skip full moon nights (crowded)", "Mehtab Bagh for Taj sunset", "Combine with Fatehpur Sikri"]
  },
  "manali": {
    name: "Manali",
    overview: "Himalayan adventure capital, Manali is perfect for snow, treks, and romantic getaways. The Kullu Valley setting is stunning.",
    attractions: [
      "Rohtang Pass - Snow point",
      "Solang Valley - Adventure sports",
      "Hadimba Temple - Ancient wooden temple",
      "Old Manali - Cafes and vibes",
      "Jogini Waterfall - Short trek",
      "Vashisht Hot Springs - Natural baths",
      "Manu Temple - River view"
    ],
    food: ["Siddu", "Trout fish", "Tibetan food in Old Manali", "Café culture"],
    culture: "Manali blends Himachali traditions with hippie culture. Dussehra here is unique - celebrated for a week after the rest of India.",
    bestTime: "March-June (summer), December-February (snow)",
    history: "Named after Manu (mankind's progenitor), Manali has ancient temples and was a stopping point on trade routes to Ladakh.",
    tips: ["Book Rohtang permits in advance", "Old Manali for backpacker vibes", "Carry woolens even in summer", "Avoid roads during heavy snowfall"]
  },
  "udaipur": {
    name: "Udaipur",
    overview: "The City of Lakes and Venice of the East, Udaipur is romantic Rajasthan at its finest with palaces floating on lakes.",
    attractions: [
      "City Palace - Largest palace complex in Rajasthan",
      "Lake Pichola - Boat ride to Jag Mandir",
      "Taj Lake Palace - Floating luxury",
      "Jagdish Temple - Indo-Aryan architecture",
      "Fateh Sagar Lake - Sunset views",
      "Saheliyon ki Bari - Queen's garden",
      "Monsoon Palace - Hilltop sunset"
    ],
    food: ["Dal Baati Churma", "Gatte ki Sabzi", "Mawa Kachori", "Rajasthani Thali"],
    culture: "Udaipur's Mewar culture is distinct with its own history of resistance. Folk dances and puppet shows are cultural highlights.",
    bestTime: "September to March (monsoon for lake views)",
    history: "Founded in 1559 by Maharana Udai Singh II, Udaipur was the Mewar capital. The Sisodia Rajputs never surrendered to Mughals.",
    tips: ["Lake Pichola boat ride at sunset", "Rooftop restaurants by the lake", "Vintage car museum", "Watch cultural show at Bagore ki Haveli"]
  },
  "rishikesh": {
    name: "Rishikesh",
    overview: "The Yoga Capital of the World, Rishikesh sits at the foothills of Himalayas where the Ganges flows crystal clear. Perfect for spiritual seekers and adventure lovers.",
    attractions: [
      "Laxman Jhula - Iconic suspension bridge",
      "Ram Jhula - Another famous bridge",
      "Beatles Ashram - Maharishi Mahesh Yogi's ashram",
      "Triveni Ghat - Evening aarti",
      "Parmarth Niketan - Largest ashram",
      "River Rafting - Shivpuri to Rishikesh",
      "Neelkanth Mahadev Temple"
    ],
    food: ["Ashram food", "Chotiwala's thali", "German bakeries in Tapovan", "Organic cafes"],
    culture: "Rishikesh attracted the Beatles in 1968, putting it on the global spiritual map. Yoga teacher trainings and ashram stays are popular.",
    bestTime: "September to November, February to April",
    history: "Ancient sages meditated here. The town is mentioned in Hindu scriptures and has been a pilgrimage center for centuries.",
    tips: ["Book rafting in advance", "Beatles Ashram entry ₹600 (foreigners)", "Attend Ganga Aarti at Triveni Ghat", "Try café-hopping in Tapovan"]
  },
  "shimla": {
    name: "Shimla",
    overview: "The Queen of Hills and former summer capital of British India. Shimla charms with colonial architecture, Mall Road, and mountain views.",
    attractions: [
      "Mall Road - Heritage promenade",
      "Christ Church - Second oldest in North India",
      "The Ridge - Open plaza with views",
      "Jakhu Temple - Hanuman statue",
      "Viceregal Lodge - British-era heritage",
      "Kufri - Snow activities",
      "Toy Train - UNESCO Heritage railway"
    ],
    food: ["Himachali Dham", "Siddu", "Babru", "Chana Madra", "Café culture on Mall Road"],
    culture: "Shimla retains strong colonial influence. The toy train journey from Kalka is a heritage experience.",
    bestTime: "March-June, December-February (snow)",
    history: "Shimla became the summer capital of British India in 1864. Many decisions shaping modern India were made here.",
    tips: ["Walk on Mall Road (no vehicles)", "Toy train from Kalka is magical", "Book hotels in advance for peak season", "Carry warm clothes year-round"]
  }
};

// Get destination info
export function getDestinationInfo(location: string): DestinationData | null {
  const loc = location.toLowerCase();
  return metroDestinations[loc] || null;
}

// Get all destination names
export function getAllDestinations(): string[] {
  return Object.keys(metroDestinations);
}
