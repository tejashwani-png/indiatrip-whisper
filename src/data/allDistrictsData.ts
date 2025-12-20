// Comprehensive travel data for ALL Indian districts, cities, and towns

export interface LocationInfo {
  name: string;
  state: string;
  type: 'city' | 'district' | 'town' | 'tourist';
  attractions: string[];
  food: string[];
  culture: string;
  bestTime: string;
  tips: string[];
}

// All districts and cities with travel info
export const allLocationsData: Record<string, LocationInfo> = {
  // ==================== ANDHRA PRADESH ====================
  "visakhapatnam": {
    name: "Visakhapatnam (Vizag)",
    state: "Andhra Pradesh",
    type: "city",
    attractions: ["RK Beach", "Submarine Museum", "Kailasagiri", "Araku Valley", "Borra Caves", "Dolphin's Nose", "Ross Hill Church"],
    food: ["Bamboo Chicken", "Pesarattu", "Gongura Mutton", "Bongulo Chicken", "Prawns Iguru"],
    culture: "Port city with beautiful beaches, naval heritage, and tribal culture in Araku Valley. Known for shipyards and steel plants.",
    bestTime: "October to February",
    tips: ["Visit Araku Valley for coffee plantations", "Submarine Museum is unique", "Try authentic Bamboo Chicken in Araku"]
  },
  "tirupati": {
    name: "Tirupati",
    state: "Andhra Pradesh",
    type: "city",
    attractions: ["Tirumala Venkateswara Temple", "Sri Govindaraja Swamy Temple", "ISKCON Temple", "Talakona Waterfalls", "Sri Kalahasti Temple"],
    food: ["Tirupati Laddu", "Pulihora", "Daddojanam", "Temple Prasadam"],
    culture: "One of the world's richest and most visited pilgrimage centers. Tirumala temple receives millions of devotees annually.",
    bestTime: "September to March",
    tips: ["Book darshan tickets online in advance", "Special entry Rs 300 saves time", "Laddu is a must-buy prasadam"]
  },
  "vijayawada": {
    name: "Vijayawada",
    state: "Andhra Pradesh",
    type: "city",
    attractions: ["Kanaka Durga Temple", "Prakasam Barrage", "Undavalli Caves", "Bhavani Island", "Kondapalli Fort"],
    food: ["Attu (Dosa)", "Nellore Fish Curry", "Ulavacharu Biryani", "Bandar Laddu"],
    culture: "Commercial capital of Andhra Pradesh, located on Krishna River banks. Major business and educational hub.",
    bestTime: "October to March",
    tips: ["Durga Temple crowded during Navratri", "Undavalli Caves are 7th century rock-cut", "Try boat ride to Bhavani Island"]
  },
  "guntur": {
    name: "Guntur",
    state: "Andhra Pradesh",
    type: "city",
    attractions: ["Amaravati Stupa", "Kondaveedu Fort", "Undavalli Caves", "Uppalapadu Bird Sanctuary"],
    food: ["Guntur Chilli recipes", "Karam Dosa", "Guntur Idli", "Spicy Pesarattu"],
    culture: "Famous for world's hottest Guntur chilies. Ancient Buddhist heritage at Amaravati.",
    bestTime: "October to February",
    tips: ["Visit Amaravati Buddhist ruins", "Buy famous Guntur chilies", "Try the extremely spicy local cuisine"]
  },
  "kurnool": {
    name: "Kurnool",
    state: "Andhra Pradesh",
    type: "city",
    attractions: ["Belum Caves", "Yaganti Temple", "Oravakallu Rock Garden", "Mahanandi", "Ahobilam"],
    food: ["Ragi Sangati", "Pesarattu", "Rayalaseema Cuisine", "Ulavacharu"],
    culture: "Former capital of Andhra Pradesh. Gateway to Rayalaseema region with ancient temples.",
    bestTime: "October to March",
    tips: ["Belum Caves are India's second longest caves", "Combine with Ahobilam Narasimha temples"]
  },
  "nellore": {
    name: "Nellore",
    state: "Andhra Pradesh",
    type: "city",
    attractions: ["Pulicat Lake", "Nelapattu Bird Sanctuary", "Penchalakona", "Udayagiri Fort"],
    food: ["Nellore Fish Curry", "Prawn Pulav", "Rava Dosa"],
    culture: "Known for aquaculture and rice production. Rich in temples and natural water bodies.",
    bestTime: "November to February",
    tips: ["Best for bird watching at Pulicat", "Famous for shrimp and prawns"]
  },
  
  // ==================== ARUNACHAL PRADESH ====================
  "tawang": {
    name: "Tawang",
    state: "Arunachal Pradesh",
    type: "town",
    attractions: ["Tawang Monastery", "Sela Pass", "Tawang War Memorial", "Madhuri Lake", "Nuranang Falls", "Bumla Pass"],
    food: ["Thukpa", "Momos", "Zan", "Khapse", "Butter Tea"],
    culture: "Home to India's largest Buddhist monastery. Birthplace of 6th Dalai Lama. Monpa tribal culture.",
    bestTime: "March to October (avoid monsoon landslides)",
    tips: ["ILP required for Arunachal", "Carry altitude sickness medicine", "Sela Pass at 13,700 ft", "Bumla Pass needs army permission"]
  },
  "ziro": {
    name: "Ziro Valley",
    state: "Arunachal Pradesh",
    type: "town",
    attractions: ["Ziro Valley", "Talley Valley Wildlife Sanctuary", "Ziro Music Festival", "Meghna Cave Temple", "Kile Pakho"],
    food: ["Apong (Rice Beer)", "Pika Pila", "Smoked Meat", "Bamboo Shoot dishes"],
    culture: "UNESCO World Heritage tentative site. Home to Apatani tribe known for unique nose plugs tradition.",
    bestTime: "March to October; September for Ziro Festival",
    tips: ["Ziro Music Festival in September is amazing", "Explore Apatani tribal villages", "Book homestays for authentic experience"]
  },
  "itanagar": {
    name: "Itanagar",
    state: "Arunachal Pradesh",
    type: "city",
    attractions: ["Ita Fort", "Ganga Lake", "Jawaharlal Nehru Museum", "Gompa Buddhist Temple", "Polo Park"],
    food: ["Thukpa", "Momos", "Pehak", "Apong"],
    culture: "State capital with ancient Ita Fort ruins. Mix of tribal cultures from across the state.",
    bestTime: "October to April",
    tips: ["ILP required before entry", "Capital has best infrastructure in state"]
  },
  
  // ==================== ASSAM ====================
  "guwahati": {
    name: "Guwahati",
    state: "Assam",
    type: "city",
    attractions: ["Kamakhya Temple", "Umananda Island", "Assam State Zoo", "Brahmaputra River Cruise", "Pobitora Wildlife"],
    food: ["Assam Laksa", "Masor Tenga", "Khar", "Duck with Ash Gourd", "Pitha"],
    culture: "Gateway to Northeast India. Ancient Kamakhya Temple is a major Shakti Peetha. Bihu festival celebrations.",
    bestTime: "October to April",
    tips: ["Kamakhya Temple gets very crowded", "River cruise at sunset is magical", "Gateway to Kaziranga"]
  },
  "kaziranga": {
    name: "Kaziranga National Park",
    state: "Assam",
    type: "tourist",
    attractions: ["Elephant Safari", "Jeep Safari", "One-Horned Rhino", "Wild Elephants", "Tigers", "Central Range"],
    food: ["Assamese Thali", "Duck Curry", "Bamboo Shoot dishes"],
    culture: "UNESCO World Heritage Site. Home to world's largest population of one-horned rhinos.",
    bestTime: "November to April (Park closed July-October)",
    tips: ["Book elephant safari in advance", "Central Range has most rhinos", "Stay at Kohora for best access"]
  },
  "jorhat": {
    name: "Jorhat",
    state: "Assam",
    type: "city",
    attractions: ["Majuli Island", "Tocklai Tea Research", "Gibbon Wildlife Sanctuary", "Raja Maidam"],
    food: ["Assam Tea", "Jolpan", "Pitha", "Laru"],
    culture: "Tea capital of Assam. Gateway to Majuli, world's largest river island with Vaishnavite satras.",
    bestTime: "October to March",
    tips: ["Visit Majuli Island for unique monastery culture", "Explore heritage tea gardens"]
  },
  "silchar": {
    name: "Silchar",
    state: "Assam",
    type: "city",
    attractions: ["Khaspur", "Gandhi Bhawan", "Bhuban Temple", "Maniharan Tunnel"],
    food: ["Sylheti cuisine", "Shatkora dishes", "River fish"],
    culture: "Cultural hub of Barak Valley. Bengali influence with Sylheti dialect.",
    bestTime: "October to March",
    tips: ["Gateway to Mizoram", "Bengali food and culture dominant"]
  },
  "dibrugarh": {
    name: "Dibrugarh",
    state: "Assam",
    type: "city",
    attractions: ["Rang Ghar", "Talatal Ghar", "Sivasagar", "Tea Gardens", "Brahmaputra Cruise"],
    food: ["Assamese Thali", "Khar", "Masor Tenga"],
    culture: "Tea City of India. Gateway to historic Ahom capital Sivasagar.",
    bestTime: "October to March",
    tips: ["Visit Sivasagar for Ahom monuments", "Explore colonial-era tea bungalows"]
  },
  
  // ==================== BIHAR ====================
  "patna": {
    name: "Patna",
    state: "Bihar",
    type: "city",
    attractions: ["Mahabodhi Temple (Gaya)", "Golghar", "Patna Museum", "Buddha Smriti Park", "Agam Kuan", "Takht Sri Patna Sahib"],
    food: ["Litti Chokha", "Sattu Paratha", "Khaja", "Thekua", "Malpua"],
    culture: "Ancient Pataliputra, capital of Maurya and Gupta empires. Major Sikh pilgrimage center.",
    bestTime: "October to March",
    tips: ["Golghar offers panoramic views", "Combine with Bodh Gaya day trip"]
  },
  "bodh gaya": {
    name: "Bodh Gaya",
    state: "Bihar",
    type: "tourist",
    attractions: ["Mahabodhi Temple", "Bodhi Tree", "Great Buddha Statue", "Thai Temple", "Japanese Temple", "Dungeshwari Cave"],
    food: ["Tibetan Food", "Buddhist vegetarian", "Local thalis"],
    culture: "Where Buddha attained enlightenment. UNESCO World Heritage Site. International Buddhist pilgrimage center.",
    bestTime: "October to March; Buddha Purnima in May",
    tips: ["Meditation sessions available", "Visit multiple country temples", "Mahabodhi Temple at sunrise is serene"]
  },
  "gaya": {
    name: "Gaya",
    state: "Bihar",
    type: "city",
    attractions: ["Vishnupad Temple", "Mangla Gauri Temple", "Bodh Gaya nearby", "Falgu River"],
    food: ["Tilkut", "Litti Chokha", "Sattu drinks"],
    culture: "Hindu pilgrimage for pind daan (ancestral rites). Very sacred for last rites ceremonies.",
    bestTime: "October to March",
    tips: ["Pind daan rituals year-round", "Combine with Bodh Gaya visit"]
  },
  "nalanda": {
    name: "Nalanda",
    state: "Bihar",
    type: "tourist",
    attractions: ["Nalanda University Ruins", "Nalanda Museum", "Hiuen Tsang Memorial", "Kundalpur"],
    food: ["Local Bihari cuisine"],
    culture: "Ancient world's largest university. UNESCO World Heritage Site. Buddhist learning center from 5th century.",
    bestTime: "October to March",
    tips: ["Combined UNESCO trip with Bodh Gaya", "Museum has excellent artifacts"]
  },
  "rajgir": {
    name: "Rajgir",
    state: "Bihar",
    type: "tourist",
    attractions: ["Vishwa Shanti Stupa", "Hot Springs", "Griddhakuta Peak", "Ajatshatru Fort", "Japanese Temple", "Ropeway"],
    food: ["Sattu Paratha", "Tilkut"],
    culture: "Ancient capital of Magadha. Buddha spent many monsoons here. Jain pilgrimage site too.",
    bestTime: "October to March",
    tips: ["Take ropeway to Shanti Stupa", "Hot springs believed to cure diseases"]
  },
  "vaishali": {
    name: "Vaishali",
    state: "Bihar",
    type: "tourist",
    attractions: ["Ashoka Pillar", "Relic Stupa", "Bawan Pokhar Temple", "Raja Vishal ka Garh"],
    food: ["Litti Chokha", "Sattu"],
    culture: "World's first republic. Buddha preached his last sermon here. Jain Tirthankara birthplace.",
    bestTime: "October to March",
    tips: ["Important Buddhist pilgrimage circuit stop"]
  },
  
  // ==================== CHHATTISGARH ====================
  "raipur": {
    name: "Raipur",
    state: "Chhattisgarh",
    type: "city",
    attractions: ["Mahant Ghasidas Museum", "Purkhouti Muktangan", "Nandan Van Zoo", "Champaran", "Rajim"],
    food: ["Chila", "Farra", "Bafauri", "Dehati Vada", "Angakar Roti"],
    culture: "State capital with emerging IT hub. Gateway to tribal heartland of India.",
    bestTime: "October to March",
    tips: ["Rajim Kumbh in February", "Explore tribal handicrafts"]
  },
  "jagdalpur": {
    name: "Jagdalpur",
    state: "Chhattisgarh",
    type: "city",
    attractions: ["Chitrakote Falls", "Tirathgarh Falls", "Kanger Valley National Park", "Kutumsar Caves", "Bastar Palace"],
    food: ["Chapra Chutney (Red Ant)", "Bamboo Shoot", "Mahua dishes", "Petha"],
    culture: "Heart of Bastar. Unique tribal culture with Dussehra festival different from rest of India.",
    bestTime: "October to March (Waterfalls best post-monsoon)",
    tips: ["Chitrakote is Niagara of India", "Bastar Dussehra is unique", "Tribal markets on specific days"]
  },
  "bilaspur": {
    name: "Bilaspur",
    state: "Chhattisgarh",
    type: "city",
    attractions: ["Achanakmar Wildlife Sanctuary", "Ratanpur", "Kanan Pendari Zoo", "Tala"],
    food: ["Chhattisgarhi Thali", "Aamat", "Dehati dishes"],
    culture: "Historical capital of Chhattisgarh region. Ratanpur has ancient temples.",
    bestTime: "October to March",
    tips: ["Achanakmar for tiger sighting", "Ratanpur temples are ancient"]
  },
  
  // ==================== GOA ====================
  "north goa": {
    name: "North Goa",
    state: "Goa",
    type: "tourist",
    attractions: ["Baga Beach", "Calangute Beach", "Anjuna Flea Market", "Fort Aguada", "Vagator Beach", "Chapora Fort", "Tito's Lane"],
    food: ["Fish Thali", "Prawn Curry", "Bebinca", "Feni", "Goan Sausage"],
    culture: "Party capital with vibrant nightlife, beach shacks, and tourist hotspots.",
    bestTime: "November to February",
    tips: ["Wednesday Anjuna market", "Sunset at Chapora Fort", "Tito's Lane for nightlife"]
  },
  "south goa": {
    name: "South Goa",
    state: "Goa",
    type: "tourist",
    attractions: ["Palolem Beach", "Colva Beach", "Dudhsagar Falls", "Cabo de Rama", "Big Foot Museum", "Margao"],
    food: ["Authentic Goan Fish Curry", "Xacuti", "Vindaloo", "Solachi Kadi"],
    culture: "Quieter, more pristine beaches. Better for families and nature lovers.",
    bestTime: "November to February",
    tips: ["Palolem is crescent shaped beauty", "Dudhsagar needs jeep tour", "More peaceful than North"]
  },
  "panaji": {
    name: "Panaji (Panjim)",
    state: "Goa",
    type: "city",
    attractions: ["Fontainhas (Latin Quarter)", "Church of Our Lady", "Miramar Beach", "Dona Paula", "Casino boats"],
    food: ["Poi bread", "Chourico Pao", "Prawn Balchao", "Bebinca"],
    culture: "State capital with Portuguese heritage. Charming Latin Quarter with colorful villas.",
    bestTime: "November to February",
    tips: ["Walk through Fontainhas", "Cruise the Mandovi River", "Try traditional Goan cafes"]
  },
  "old goa": {
    name: "Old Goa",
    state: "Goa",
    type: "tourist",
    attractions: ["Basilica of Bom Jesus", "Se Cathedral", "Church of St. Francis", "Archaeological Museum", "St. Augustine Tower"],
    food: ["Traditional Goan at nearby villages"],
    culture: "UNESCO World Heritage Site. Former Portuguese capital with magnificent 16th-17th century churches.",
    bestTime: "November to February; Christmas for festivals",
    tips: ["Basilica houses St. Francis Xavier's body", "Se Cathedral is Asia's largest church"]
  },
  "margao": {
    name: "Margao",
    state: "Goa",
    type: "city",
    attractions: ["Municipal Garden", "Church of Holy Spirit", "Monte Hill", "Colva Beach nearby"],
    food: ["Authentic Goan at local tavernas", "Prawn Curry Rice"],
    culture: "Commercial capital of Goa. Traditional Goan town with markets and heritage houses.",
    bestTime: "November to February",
    tips: ["Local markets for authentic Goan spices", "Gateway to South Goa beaches"]
  },
  
  // ==================== GUJARAT ====================
  "ahmedabad": {
    name: "Ahmedabad",
    state: "Gujarat",
    type: "city",
    attractions: ["Sabarmati Ashram", "Adalaj Stepwell", "Sidi Saiyyed Mosque", "Kankaria Lake", "Calico Museum"],
    food: ["Gujarati Thali", "Dhokla", "Fafda Jalebi", "Undhiyu", "Handvo", "Khandvi"],
    culture: "India's first UNESCO World Heritage City. Gandhi's ashram, textile heritage, and kite festival.",
    bestTime: "October to February; January for Uttarayan",
    tips: ["Heritage walk at 8 AM", "Manek Chowk night food market", "January 14-15 kite festival is spectacular"]
  },
  "surat": {
    name: "Surat",
    state: "Gujarat",
    type: "city",
    attractions: ["Dutch Garden", "Dumas Beach", "Science Centre", "Sardar Patel Museum", "Chintamani Jain Temple"],
    food: ["Surti Locho", "Surti Undhiyu", "Ghari", "Ponk dishes (winter)"],
    culture: "Diamond capital of the world. 90% of world's diamonds processed here. Textile hub.",
    bestTime: "October to March",
    tips: ["Diamond factories can be visited", "Best for textile shopping", "Surti street food is famous"]
  },
  "vadodara": {
    name: "Vadodara (Baroda)",
    state: "Gujarat",
    type: "city",
    attractions: ["Laxmi Vilas Palace", "Sayaji Gardens", "Champaner-Pavagadh", "EME Temple", "Baroda Museum"],
    food: ["Sev Usal", "Khaman", "Fafda", "Gujarati Thali"],
    culture: "Cultural capital of Gujarat. Royal Gaekwad heritage with magnificent palaces.",
    bestTime: "October to March",
    tips: ["Laxmi Vilas Palace is 4x Buckingham", "Champaner is UNESCO Heritage", "Navratri celebrations grand"]
  },
  "rajkot": {
    name: "Rajkot",
    state: "Gujarat",
    type: "city",
    attractions: ["Watson Museum", "Kaba Gandhi No Delo", "Race Course", "Aji Dam", "Ishwariya Park"],
    food: ["Rajkot Pedha", "Gujarati cuisine", "Street food"],
    culture: "Where Gandhi spent his childhood. Fourth largest city of Gujarat.",
    bestTime: "October to March",
    tips: ["Gandhi's childhood home is here", "Good base for Saurashtra exploration"]
  },
  "kutch": {
    name: "Kutch (Rann of Kutch)",
    state: "Gujarat",
    type: "tourist",
    attractions: ["Rann of Kutch", "Kalo Dungar", "Dholavira", "Kutch Museum", "Bhuj", "Mandvi Beach", "White Desert"],
    food: ["Kutchi Dabeli", "Bajri Rotla", "Kadhi", "Gujarati Thali"],
    culture: "World's largest salt desert. Rann Utsav festival. Ancient Harappan site at Dholavira.",
    bestTime: "November to February (Rann Utsav)",
    tips: ["Rann Utsav for cultural festival", "Full moon night white desert is magical", "Visit during December-January only"]
  },
  "dwarka": {
    name: "Dwarka",
    state: "Gujarat",
    type: "tourist",
    attractions: ["Dwarkadhish Temple", "Nageshwar Jyotirlinga", "Bet Dwarka", "Rukmini Temple", "Gomti Ghat"],
    food: ["Prasad at temple", "Gujarati vegetarian thali"],
    culture: "One of four Char Dhams. Ancient city of Lord Krishna. Major Hindu pilgrimage.",
    bestTime: "October to March; Janmashtami for festival",
    tips: ["Char Dham pilgrimage stop", "Bet Dwarka needs boat", "Early morning darshan recommended"]
  },
  "somnath": {
    name: "Somnath",
    state: "Gujarat",
    type: "tourist",
    attractions: ["Somnath Temple", "Somnath Beach", "Bhalka Tirth", "Triveni Sangam", "Light & Sound Show"],
    food: ["Temple Prasad", "Gujarati Thali"],
    culture: "First among 12 Jyotirlingas. Destroyed and rebuilt multiple times. Symbol of resilience.",
    bestTime: "October to March",
    tips: ["Attend evening light & sound show", "Sunrise aarti is divine", "Combine with Dwarka trip"]
  },
  "gir": {
    name: "Gir National Park",
    state: "Gujarat",
    type: "tourist",
    attractions: ["Asiatic Lions", "Jeep Safari", "Kankai Mata Temple", "Crocodile Breeding Centre", "Devalia Safari Park"],
    food: ["Gujarati Thali", "Maldhari tribal food"],
    culture: "Only home of Asiatic Lions in the world. Maldhari tribe coexists with wildlife.",
    bestTime: "December to March (Park closed June-October)",
    tips: ["Book safari permits online in advance", "Devalia Park has enclosed lions", "Sunrise safari best for sighting"]
  },
  
  // ==================== HARYANA ====================
  "kurukshetra": {
    name: "Kurukshetra",
    state: "Haryana",
    type: "tourist",
    attractions: ["Brahma Sarovar", "Jyotisar", "Sri Krishna Museum", "Bhadrakali Temple", "Sannihit Sarovar"],
    food: ["Haryanvi cuisine", "Bajra Khichdi", "Kachri ki sabzi"],
    culture: "Land of Mahabharata war. Bhagavad Gita was delivered here. Major Hindu pilgrimage.",
    bestTime: "October to March; Solar eclipse for holy dip",
    tips: ["Brahma Sarovar during eclipse draws millions", "Jyotisar is where Gita was spoken"]
  },
  "gurgaon": {
    name: "Gurgaon (Gurugram)",
    state: "Haryana",
    type: "city",
    attractions: ["Kingdom of Dreams", "Cyber Hub", "Ambience Mall", "Leisure Valley Park", "Sultanpur Bird Sanctuary"],
    food: ["Global cuisines at Cyber Hub", "International dining"],
    culture: "Millennium city, IT hub of NCR. Modern infrastructure with malls and restaurants.",
    bestTime: "October to March",
    tips: ["Kingdom of Dreams for Bollywood shows", "Cyber Hub for nightlife and food"]
  },
  "faridabad": {
    name: "Faridabad",
    state: "Haryana",
    type: "city",
    attractions: ["Surajkund", "Badkhal Lake", "Raja Nahar Singh Palace", "Town Park"],
    food: ["Haryanvi cuisine", "Street food"],
    culture: "Industrial city near Delhi. Surajkund Mela is famous handicrafts fair.",
    bestTime: "February for Surajkund Mela",
    tips: ["Surajkund Crafts Mela in Feb is must-visit"]
  },
  
  // ==================== HIMACHAL PRADESH ====================
  "shimla": {
    name: "Shimla",
    state: "Himachal Pradesh",
    type: "city",
    attractions: ["Mall Road", "Christ Church", "Jakhu Temple", "The Ridge", "Kufri", "Viceregal Lodge", "Toy Train"],
    food: ["Siddu", "Dham", "Babru", "Chha Gosht", "Madra"],
    culture: "Former summer capital of British India. Colonial architecture and Toy Train heritage.",
    bestTime: "March to June; December-January for snow",
    tips: ["Toy Train from Kalka is UNESCO Heritage", "Mall Road for walking and shopping", "Kufri for snow activities"]
  },
  "manali": {
    name: "Manali",
    state: "Himachal Pradesh",
    type: "city",
    attractions: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali", "Vashisht Hot Springs", "Jogini Falls"],
    food: ["Siddu", "Trout Fish", "Tibetan Momos", "Bhey"],
    culture: "Adventure capital of Himachal. Mix of Himachali and Tibetan culture in Old Manali.",
    bestTime: "October to June; December-February for snow",
    tips: ["Book Rohtang permit online in advance", "Old Manali for hippie cafes", "Solang for adventure sports"]
  },
  "dharamshala": {
    name: "Dharamshala",
    state: "Himachal Pradesh",
    type: "city",
    attractions: ["Dalai Lama Temple Complex", "McLeodganj", "Triund Trek", "Bhagsu Falls", "Norbulingka Institute", "Cricket Stadium"],
    food: ["Tibetan food", "Thukpa", "Momos", "Tingmo", "Thenthuk"],
    culture: "Home of Dalai Lama and Tibetan government in exile. Strong Buddhist influence.",
    bestTime: "March to June; September to November",
    tips: ["Attend morning prayers at Dalai Lama temple", "Triund trek is beginner friendly", "McLeodganj is Little Lhasa"]
  },
  "kasol": {
    name: "Kasol",
    state: "Himachal Pradesh",
    type: "town",
    attractions: ["Kheerganga Trek", "Manikaran Gurudwara", "Tosh Village", "Malana Village", "Parvati Valley"],
    food: ["Israeli food", "Café culture", "Local pahari food"],
    culture: "Mini Israel of India. Backpacker paradise with hippie culture and trekking trails.",
    bestTime: "March to June; September to November",
    tips: ["Kheerganga trek is a must", "Manikaran hot springs are holy", "Respect Malana's unique culture"]
  },
  "kullu": {
    name: "Kullu",
    state: "Himachal Pradesh",
    type: "city",
    attractions: ["Kullu Valley", "Raghunath Temple", "Bijli Mahadev", "Great Himalayan National Park", "River Rafting"],
    food: ["Trout", "Himachali cuisine", "Siddu"],
    culture: "Valley of Gods. Famous for Dussehra with gathering of local deities.",
    bestTime: "October for Dussehra; March-June",
    tips: ["Kullu Dussehra is UNESCO listed", "River rafting on Beas", "Gateway to Manali"]
  },
  "spiti": {
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    type: "tourist",
    attractions: ["Key Monastery", "Chandratal Lake", "Kibber Village", "Dhankar Monastery", "Tabo Monastery", "Pin Valley"],
    food: ["Tibetan food", "Thukpa", "Butter Tea", "Thenthuk"],
    culture: "Cold desert mountain valley. Buddhist monasteries and moon-like landscapes.",
    bestTime: "May to October (road closed in winter)",
    tips: ["Requires Inner Line Permit", "Acclimatize before high passes", "Key Monastery is iconic"]
  },
  "dalhousie": {
    name: "Dalhousie",
    state: "Himachal Pradesh",
    type: "town",
    attractions: ["Khajjiar (Mini Switzerland)", "Dainkund Peak", "Kalatop Wildlife Sanctuary", "St. John's Church", "Panchpula"],
    food: ["Madra", "Siddu", "Pahadi cuisine"],
    culture: "Colonial hill station with Scottish architecture. Peaceful alternative to Shimla.",
    bestTime: "March to June; September to November",
    tips: ["Khajjiar is must-visit", "Less crowded than Shimla-Manali"]
  },
  
  // ==================== JHARKHAND ====================
  "ranchi": {
    name: "Ranchi",
    state: "Jharkhand",
    type: "city",
    attractions: ["Hundru Falls", "Jonha Falls", "Rock Garden", "Tagore Hill", "Pahari Mandir", "Jagannath Temple"],
    food: ["Litti Chokha", "Dhuska", "Thekua", "Arsa", "Pua"],
    culture: "Summer capital of Bihar during British era. MS Dhoni's hometown. Tribal heritage.",
    bestTime: "October to March; Monsoon for waterfalls",
    tips: ["Hundru Falls best after monsoon", "Visit tribal markets", "Gateway to Betla National Park"]
  },
  "jamshedpur": {
    name: "Jamshedpur",
    state: "Jharkhand",
    type: "city",
    attractions: ["Jubilee Park", "Dalma Wildlife Sanctuary", "Dimna Lake", "Tata Steel Works", "Jayanti Sarovar"],
    food: ["Litti Chokha", "Jharkhand cuisine"],
    culture: "India's first planned industrial city. Built by Tata Steel. Clean and green.",
    bestTime: "October to March",
    tips: ["Tata Steel plant tours available", "Very well-planned city"]
  },
  "deoghar": {
    name: "Deoghar",
    state: "Jharkhand",
    type: "tourist",
    attractions: ["Baidyanath Temple (Jyotirlinga)", "Trikutachal Temple", "Nandan Pahar", "Satsang Ashram"],
    food: ["Prasad", "Local sweets"],
    culture: "One of 12 Jyotirlingas. Major Shiva pilgrimage. Kanwar Yatra destination.",
    bestTime: "October to March; Shravan month for pilgrimage",
    tips: ["Very crowded during Shravan", "Baba Baidyanath darshan lines can be long"]
  },
  
  // ==================== KARNATAKA ====================
  "bangalore": {
    name: "Bangalore (Bengaluru)",
    state: "Karnataka",
    type: "city",
    attractions: ["Lalbagh", "Cubbon Park", "Bangalore Palace", "ISKCON Temple", "Nandi Hills", "UB City", "MG Road"],
    food: ["Bisi Bele Bath", "Masala Dosa at CTR/MTR", "Filter Coffee", "Mangalore Buns", "Ragi Mudde"],
    culture: "Silicon Valley of India. IT capital with pleasant weather, pubs, and startup culture.",
    bestTime: "Year-round (best October-February)",
    tips: ["Traffic is notorious - use metro", "Nandi Hills for sunrise", "Indiranagar/Koramangala for nightlife"]
  },
  "mysore": {
    name: "Mysore (Mysuru)",
    state: "Karnataka",
    type: "city",
    attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "St. Philomena's Church", "Mysore Zoo", "Devaraja Market"],
    food: ["Mysore Pak", "Mysore Dosa", "Filter Coffee", "Banana chips"],
    culture: "City of Palaces. Dussehra celebrations are grand. Yoga and Ashtanga capital.",
    bestTime: "October for Dussehra; September-March",
    tips: ["Palace illumination Sundays 7-8 PM", "Dussehra procession is spectacular", "Buy sandalwood and silk"]
  },
  "hampi": {
    name: "Hampi",
    state: "Karnataka",
    type: "tourist",
    attractions: ["Virupaksha Temple", "Vittala Temple", "Stone Chariot", "Lotus Mahal", "Elephant Stables", "Matanga Hill Sunrise"],
    food: ["Mango Tree Restaurant", "Hippie Island cafes"],
    culture: "UNESCO World Heritage. Ruins of Vijayanagara Empire. Bouldering paradise.",
    bestTime: "October to March",
    tips: ["Rent bicycle or moped", "Sunrise at Matanga Hill", "Stay on Hippie Island side"]
  },
  "coorg": {
    name: "Coorg (Kodagu)",
    state: "Karnataka",
    type: "tourist",
    attractions: ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Namdroling Monastery", "Coffee Plantations", "Talakaveri"],
    food: ["Pandi Curry (Pork)", "Kadumbuttu", "Akki Rotti", "Bamboo Shoot dishes", "Coorg Coffee"],
    culture: "Scotland of India. Kodava warrior culture with unique traditions. Coffee capital.",
    bestTime: "October to March; Monsoon for greenery",
    tips: ["Homestay experience recommended", "Try authentic Coorg pork curry", "Visit a working coffee estate"]
  },
  "gokarna": {
    name: "Gokarna",
    state: "Karnataka",
    type: "tourist",
    attractions: ["Om Beach", "Kudle Beach", "Half Moon Beach", "Paradise Beach", "Mahabaleshwar Temple", "Beach Trek"],
    food: ["Seafood", "Beach shack food", "Malvani cuisine"],
    culture: "Holy town with pristine beaches. Temple town meets hippie beach culture.",
    bestTime: "October to March",
    tips: ["Trek between beaches", "Less crowded than Goa", "Paradise Beach for camping"]
  },
  "mangalore": {
    name: "Mangalore",
    state: "Karnataka",
    type: "city",
    attractions: ["Panambur Beach", "Kadri Manjunath Temple", "St. Aloysius Chapel", "Tannirbhavi Beach", "Pilikula"],
    food: ["Mangalore Buns", "Kori Rotti", "Fish Curry", "Goli Baje", "Neer Dosa"],
    culture: "Coastal city with Tulu culture. Yakshagana folk art. Diverse religious harmony.",
    bestTime: "October to March",
    tips: ["Try Mangalorean seafood", "Gateway to Udupi and beaches"]
  },
  "udupi": {
    name: "Udupi",
    state: "Karnataka",
    type: "city",
    attractions: ["Sri Krishna Temple", "Malpe Beach", "St. Mary's Island", "Kaup Beach Lighthouse"],
    food: ["Udupi Cuisine", "Original Masala Dosa", "Rasam", "Vegetarian thalis"],
    culture: "Birthplace of Dosa. Krishna temple with unique Kanakana Kindi window. Pure vegetarian tradition.",
    bestTime: "October to March",
    tips: ["Dosa originated here", "Temple food is famous", "Visit St. Mary's Island by boat"]
  },
  "belgaum": {
    name: "Belgaum (Belagavi)",
    state: "Karnataka",
    type: "city",
    attractions: ["Belgaum Fort", "Gokak Falls", "Military Mahadeva Temple", "Kittur Fort", "Jain temples"],
    food: ["Kunda (sweet)", "Belgaum Peda", "North Karnataka cuisine"],
    culture: "Marathi-Kannada cultural blend. Historical forts and waterfalls.",
    bestTime: "October to March",
    tips: ["Famous for Kunda sweet", "Gokak Falls best post-monsoon"]
  },
  
  // ==================== KERALA ====================
  "kochi": {
    name: "Kochi (Cochin)",
    state: "Kerala",
    type: "city",
    attractions: ["Chinese Fishing Nets", "Fort Kochi", "Jewish Synagogue", "Mattancherry Palace", "Marine Drive", "Lulu Mall"],
    food: ["Appam Stew", "Karimeen", "Malabar Parotta", "Puttu Kadala", "Seafood"],
    culture: "Queen of Arabian Sea. Portuguese, Dutch, Jewish heritage. Kochi-Muziris Biennale.",
    bestTime: "September to March",
    tips: ["Fort Kochi walking tour", "Kathakali show evening", "Rent bicycle for Fort Kochi"]
  },
  "alleppey": {
    name: "Alleppey (Alappuzha)",
    state: "Kerala",
    type: "tourist",
    attractions: ["Backwaters Houseboat", "Alappuzha Beach", "Nehru Trophy Boat Race", "Pathiramanal Island", "Krishnapuram Palace"],
    food: ["Karimeen Pollichathu", "Toddy Shop food", "Kerala Sadhya", "Meen Curry"],
    culture: "Venice of the East. Houseboat capital of Kerala. Snake boat races.",
    bestTime: "September to March; August for boat race",
    tips: ["Book houseboat in advance", "Nehru Trophy in August", "Try authentic toddy shop experience"]
  },
  "munnar": {
    name: "Munnar",
    state: "Kerala",
    type: "tourist",
    attractions: ["Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Top Station", "Echo Point", "Tea Museum"],
    food: ["Cardamom Tea", "Kerala cuisine", "Fresh tea"],
    culture: "Hill station with endless tea plantations. Neelakurinji flowers bloom once in 12 years.",
    bestTime: "September to May",
    tips: ["Eravikulam for Nilgiri Tahr", "Buy fresh tea and spices", "Sunrise at Top Station"]
  },
  "thiruvananthapuram": {
    name: "Thiruvananthapuram (Trivandrum)",
    state: "Kerala",
    type: "city",
    attractions: ["Padmanabhaswamy Temple", "Kovalam Beach", "Napier Museum", "Varkala Beach", "Poovar Island"],
    food: ["Sadya", "Puttu", "Fish Curry", "Prawn dishes"],
    culture: "Capital city with ancient Padmanabhaswamy Temple (one of world's richest). Royal heritage.",
    bestTime: "September to March",
    tips: ["Temple dress code strict", "Kovalam for beaches", "Varkala for cliff views"]
  },
  "wayanad": {
    name: "Wayanad",
    state: "Kerala",
    type: "tourist",
    attractions: ["Edakkal Caves", "Banasura Sagar Dam", "Chembra Peak", "Pookode Lake", "Thirunelly Temple", "Soochipara Falls"],
    food: ["Kerala cuisine", "Bamboo dishes", "Coffee"],
    culture: "Green paradise with prehistoric caves and tribal heritage. Spice and coffee plantations.",
    bestTime: "September to May",
    tips: ["Edakkal Caves have ancient petroglyphs", "Chembra has heart-shaped lake", "Treehouse stays popular"]
  },
  "thekkady": {
    name: "Thekkady",
    state: "Kerala",
    type: "tourist",
    attractions: ["Periyar Wildlife Sanctuary", "Boat ride", "Spice Gardens", "Elephant Junction", "Tribal Village"],
    food: ["Kerala cuisine", "Spice-infused dishes"],
    culture: "Gateway to Periyar Tiger Reserve. Spice capital of Kerala.",
    bestTime: "September to May",
    tips: ["Morning boat ride for wildlife", "Night jungle patrol available", "Buy spices from certified shops"]
  },
  "kozhikode": {
    name: "Kozhikode (Calicut)",
    state: "Kerala",
    type: "city",
    attractions: ["Kappad Beach", "Mananchira Square", "Beypore", "Kozhikode Beach", "SM Street (Sweet Meat Street)"],
    food: ["Kozhikodan Halwa", "Kozhikodan Biriyani", "Banana Chips", "Malabar cuisine"],
    culture: "Where Vasco da Gama landed in 1498. Malabar cuisine capital. Rich in literature.",
    bestTime: "September to March",
    tips: ["SM Street for sweets", "Kozhikodan Biriyani is unique", "Kappad is historic landing site"]
  },
  
  // ==================== MADHYA PRADESH ====================
  "bhopal": {
    name: "Bhopal",
    state: "Madhya Pradesh",
    type: "city",
    attractions: ["Taj-ul-Masajid", "Upper Lake", "Bhimbetka Caves", "Sanchi Stupa", "Van Vihar", "Birla Mandir"],
    food: ["Bhopal Biryani", "Poha Jalebi", "Kebabs", "Rogan Josh", "Mawa Bati"],
    culture: "City of Lakes and Nawabs. Blend of Hindu and Muslim heritage. Gateway to UNESCO sites.",
    bestTime: "October to March",
    tips: ["Bhimbetka and Sanchi are UNESCO sites", "Try Old Bhopal street food", "Chowk area for kebabs"]
  },
  "khajuraho": {
    name: "Khajuraho",
    state: "Madhya Pradesh",
    type: "tourist",
    attractions: ["Western Group of Temples", "Eastern Group", "Southern Group", "Kandariya Mahadev Temple", "Light & Sound Show"],
    food: ["MP Thali", "Bhutte ki Kees", "Bundelkhandi cuisine"],
    culture: "UNESCO World Heritage. Famous erotic sculptures on temples. Chandela dynasty architecture.",
    bestTime: "October to March; February for dance festival",
    tips: ["Light & Sound show is excellent", "Khajuraho Dance Festival in Feb", "Hire guide for temple stories"]
  },
  "indore": {
    name: "Indore",
    state: "Madhya Pradesh",
    type: "city",
    attractions: ["Rajwada", "Lal Bagh Palace", "Sarafa Bazaar", "Patalpani Waterfall", "Chappan Dukan"],
    food: ["Poha Jalebi", "Bhutte ka Kees", "Garadu", "Sabudana Khichdi", "Chappan food street"],
    culture: "Cleanest city of India. Food capital of MP. Holkar dynasty heritage.",
    bestTime: "October to March",
    tips: ["Sarafa Bazaar opens after 8 PM", "Chappan Dukan for street food", "Gateway to Mandu"]
  },
  "mandu": {
    name: "Mandu",
    state: "Madhya Pradesh",
    type: "tourist",
    attractions: ["Jahaz Mahal", "Hindola Mahal", "Rani Roopmati Pavilion", "Jami Masjid", "Baz Bahadur Palace"],
    food: ["Malwa cuisine", "Local thalis"],
    culture: "City of Joy. Afghan architecture. Love story of Baz Bahadur and Rani Roopmati.",
    bestTime: "October to March; Monsoon for greenery",
    tips: ["Jahaz Mahal between two lakes is iconic", "Sunset at Roopmati Pavilion", "Best during monsoon"]
  },
  "gwalior": {
    name: "Gwalior",
    state: "Madhya Pradesh",
    type: "city",
    attractions: ["Gwalior Fort", "Jai Vilas Palace", "Man Singh Palace", "Teli ka Mandir", "Tomb of Tansen"],
    food: ["Bedai", "Imarti", "Malpua", "Gwalior ke Gazak"],
    culture: "One of India's most impregnable forts. Tansen's birthplace. Music heritage.",
    bestTime: "October to March; December for Tansen Festival",
    tips: ["Gwalior Fort light & sound show", "Jai Vilas has Europe's largest carpet", "Tansen Music Festival in Dec"]
  },
  "ujjain": {
    name: "Ujjain",
    state: "Madhya Pradesh",
    type: "tourist",
    attractions: ["Mahakaleshwar Jyotirlinga", "Ram Ghat", "Kal Bhairav Temple", "Harsiddhi Temple", "Vedha Shala"],
    food: ["Poha Jalebi", "Rabdi", "Bhang Thali (Shivratri)"],
    culture: "One of seven sacred cities. Kumbh Mela site. Ancient astronomical observatory.",
    bestTime: "October to March; Maha Shivaratri for festival",
    tips: ["Bhasma Aarti at 4 AM is unique", "Kumbh Mela every 12 years", "Very crowded on Mondays"]
  },
  "sanchi": {
    name: "Sanchi",
    state: "Madhya Pradesh",
    type: "tourist",
    attractions: ["Great Stupa", "Ashoka Pillar", "Buddhist Monasteries", "Sanchi Museum", "Udaygiri Caves"],
    food: ["Local MP cuisine"],
    culture: "UNESCO World Heritage. Emperor Ashoka built stupas here. Major Buddhist site.",
    bestTime: "October to March",
    tips: ["Combine with Bhojpur and Bhimbetka", "Museum has excellent collection", "Early morning for peaceful visit"]
  },
  "kanha": {
    name: "Kanha National Park",
    state: "Madhya Pradesh",
    type: "tourist",
    attractions: ["Tiger Safari", "Bamni Dadar (Sunset Point)", "Kanha Museum", "Barasingha meadows"],
    food: ["Lodge food", "Local cuisine"],
    culture: "Inspiration for Kipling's Jungle Book. Best place to see Barasingha (swamp deer).",
    bestTime: "October to June (Park closed July-September)",
    tips: ["Early morning safari best", "Book zone-specific permits", "Barasingha is exclusive to Kanha"]
  },
  "bandhavgarh": {
    name: "Bandhavgarh National Park",
    state: "Madhya Pradesh",
    type: "tourist",
    attractions: ["Tiger Safari", "Bandhavgarh Fort", "Ancient caves", "High tiger density"],
    food: ["Resort food"],
    culture: "Highest density of tigers in India. Ancient fort and caves with inscriptions.",
    bestTime: "October to June",
    tips: ["Best chances of tiger sighting in India", "Tala zone is most popular", "Book safaris well in advance"]
  },
  "pachmarhi": {
    name: "Pachmarhi",
    state: "Madhya Pradesh",
    type: "tourist",
    attractions: ["Bee Falls", "Jata Shankar Caves", "Pandava Caves", "Dhoopgarh", "Satpura National Park"],
    food: ["Local MP cuisine", "Tribal food"],
    culture: "Queen of Satpura. Only hill station in MP. British-era heritage.",
    bestTime: "October to June",
    tips: ["Dhoopgarh for highest point in MP", "Satpura night safari available", "Less crowded alternative"]
  },
  
  // ==================== MAHARASHTRA ====================
  "mumbai": {
    name: "Mumbai",
    state: "Maharashtra",
    type: "city",
    attractions: ["Gateway of India", "Marine Drive", "Elephanta Caves", "Siddhivinayak Temple", "CST", "Juhu Beach", "Haji Ali"],
    food: ["Vada Pav", "Pav Bhaji", "Bhel Puri", "Bombay Sandwich", "Seafood at Trishna", "Irani Chai"],
    culture: "City of Dreams. Bollywood capital. Financial hub. Mumbai spirit is legendary.",
    bestTime: "November to February",
    tips: ["Local train experience is must", "Street food at Chowpatty", "Marine Drive sunset walk"]
  },
  "pune": {
    name: "Pune",
    state: "Maharashtra",
    type: "city",
    attractions: ["Shaniwar Wada", "Aga Khan Palace", "Sinhagad Fort", "Osho Ashram", "Dagdusheth Ganpati"],
    food: ["Misal Pav", "Mastani", "Bhakarwadi", "Shrewsbury", "Puneri cuisine"],
    culture: "Oxford of the East. Peshwa heritage. IT and education hub.",
    bestTime: "October to February",
    tips: ["Sinhagad trek is popular", "FC Road for food", "Koregaon Park for nightlife"]
  },
  "nashik": {
    name: "Nashik",
    state: "Maharashtra",
    type: "city",
    attractions: ["Trimbakeshwar", "Sula Vineyards", "Pandavleni Caves", "Panchvati", "Wine Tours"],
    food: ["Sabudana Khichdi", "Misal", "Wine tasting"],
    culture: "Wine capital of India. Kumbh Mela site. Ram's exile location.",
    bestTime: "August to March; Kumbh every 12 years",
    tips: ["Wine tour at Sula is must", "Trimbakeshwar is Jyotirlinga", "Kumbh Mela is massive"]
  },
  "aurangabad": {
    name: "Aurangabad",
    state: "Maharashtra",
    type: "city",
    attractions: ["Ajanta Caves", "Ellora Caves", "Bibi Ka Maqbara", "Daulatabad Fort", "Panchakki"],
    food: ["Naan Qalia", "Aurangabad cuisine", "Biryani"],
    culture: "Gate to UNESCO Heritage caves. Mughal influence. Silk weaving tradition.",
    bestTime: "October to March",
    tips: ["Ajanta closed Mondays, Ellora closed Tuesdays", "Bibi Ka Maqbara is mini Taj", "Need full day for each cave"]
  },
  "ajanta": {
    name: "Ajanta Caves",
    state: "Maharashtra",
    type: "tourist",
    attractions: ["Buddhist Cave Paintings", "Rock-cut architecture", "30 caves", "UNESCO Heritage"],
    food: ["MTDC restaurant at site"],
    culture: "2nd century BCE Buddhist paintings. UNESCO World Heritage. Masterpiece of rock-cut art.",
    bestTime: "October to March (Closed Mondays)",
    tips: ["Carry torch for interiors", "Early morning for less crowd", "Need 3-4 hours minimum"]
  },
  "ellora": {
    name: "Ellora Caves",
    state: "Maharashtra",
    type: "tourist",
    attractions: ["Kailasa Temple", "Buddhist Caves", "Hindu Caves", "Jain Caves", "34 caves total"],
    food: ["MTDC restaurant"],
    culture: "UNESCO World Heritage. Hindu, Buddhist, Jain caves. Kailasa is carved from single rock.",
    bestTime: "October to March (Closed Tuesdays)",
    tips: ["Cave 16 Kailasa is main attraction", "Less crowded than Ajanta", "Combine with Daulatabad Fort"]
  },
  "lonavala": {
    name: "Lonavala",
    state: "Maharashtra",
    type: "tourist",
    attractions: ["Tiger Point", "Bhushi Dam", "Karla Caves", "Rajmachi Fort", "Lion's Point", "Lonavala Lake"],
    food: ["Chikki", "Fudge", "Corn", "Maggi at points"],
    culture: "Popular hill station near Mumbai-Pune. Weekend getaway. Known for chikki.",
    bestTime: "Monsoon (June-September) for waterfalls; October-May",
    tips: ["Monsoon is most beautiful", "Buy chikki from famous shops", "Bhushi Dam gets crowded"]
  },
  "mahabaleshwar": {
    name: "Mahabaleshwar",
    state: "Maharashtra",
    type: "tourist",
    attractions: ["Arthur's Seat", "Venna Lake", "Mapro Garden", "Pratapgad Fort", "Strawberry farms"],
    food: ["Strawberries", "Strawberry cream", "Mapro products", "Corn"],
    culture: "Queen of hill stations. Strawberry capital. British-era points.",
    bestTime: "September to May",
    tips: ["Fresh strawberries December-April", "Horse riding at Venna Lake", "Mapro Garden is must-visit"]
  },
  "kolhapur": {
    name: "Kolhapur",
    state: "Maharashtra",
    type: "city",
    attractions: ["Mahalaxmi Temple", "New Palace", "Rankala Lake", "Panhala Fort", "Jyotiba Temple"],
    food: ["Kolhapuri Misal", "Kolhapuri Mutton", "Tambda Rassa", "Pandhra Rassa"],
    culture: "Spicy food capital. Kolhapuri chappals famous. Wrestling tradition.",
    bestTime: "October to March",
    tips: ["Kolhapuri cuisine is very spicy", "Buy Kolhapuri chappals", "Mahalaxmi is one of Shakti Peeths"]
  },
  "shirdi": {
    name: "Shirdi",
    state: "Maharashtra",
    type: "tourist",
    attractions: ["Sai Baba Temple", "Dwarkamai", "Chavadi", "Lendi Garden", "Sai Heritage Village"],
    food: ["Temple Prasad", "Local vegetarian food"],
    culture: "One of most visited pilgrimage sites. Sai Baba's samadhi. Draws millions annually.",
    bestTime: "Year-round",
    tips: ["Book accommodation in advance", "Early morning darshan less crowded", "Thursday is special day"]
  },
  
  // ==================== MANIPUR ====================
  "imphal": {
    name: "Imphal",
    state: "Manipur",
    type: "city",
    attractions: ["Kangla Fort", "Loktak Lake", "INA Memorial", "Shree Govindajee Temple", "Ima Keithel (Mother's Market)"],
    food: ["Eromba", "Chamthong", "Singju", "Kangshoi", "Chak-hao (Black Rice)"],
    culture: "Land of gems. Unique Ima Keithel - world's largest all-women market. Polo originated here.",
    bestTime: "October to March",
    tips: ["Ima Keithel is all-women market", "Try black rice dishes", "Gateway to Loktak Lake"]
  },
  "loktak": {
    name: "Loktak Lake",
    state: "Manipur",
    type: "tourist",
    attractions: ["Floating Islands (Phumdis)", "Keibul Lamjao National Park", "Sendra Island", "Floating Huts"],
    food: ["Fresh fish", "Manipuri cuisine"],
    culture: "Largest freshwater lake in Northeast. Only floating national park. Home to endangered Sangai deer.",
    bestTime: "October to March",
    tips: ["Sangai deer is found only here", "Stay in floating cottage", "Boat ride is essential"]
  },
  
  // ==================== MEGHALAYA ====================
  "shillong": {
    name: "Shillong",
    state: "Meghalaya",
    type: "city",
    attractions: ["Ward's Lake", "Don Bosco Museum", "Elephant Falls", "Shillong Peak", "Police Bazaar", "Lady Hydari Park"],
    food: ["Jadoh", "Doh Khlieh", "Tungrymbai", "Momos", "Pork dishes"],
    culture: "Scotland of the East. Music capital of Northeast. Khasi-Jaintia culture.",
    bestTime: "March to June; September to November",
    tips: ["Rock music scene is vibrant", "Try local pork dishes", "Gateway to Cherrapunji"]
  },
  "cherrapunji": {
    name: "Cherrapunji (Sohra)",
    state: "Meghalaya",
    type: "tourist",
    attractions: ["Nohkalikai Falls", "Seven Sisters Falls", "Living Root Bridges", "Mawsmai Cave", "Double Decker Bridge"],
    food: ["Local Khasi cuisine", "Jadoh"],
    culture: "One of wettest places on Earth. Living Root Bridges are engineering marvels.",
    bestTime: "October to May (monsoon is very wet)",
    tips: ["Trek to Double Decker Bridge takes 3 hours", "Carry rain gear always", "Waterfalls best post-monsoon"]
  },
  "dawki": {
    name: "Dawki",
    state: "Meghalaya",
    type: "tourist",
    attractions: ["Umngot River (Crystal clear)", "India-Bangladesh Border", "Boating", "Mawlynnong (Cleanest Village)"],
    food: ["Simple local food"],
    culture: "Umngot River is so clear boats appear floating. Border town with Bangladesh.",
    bestTime: "October to May",
    tips: ["Best in winter for clear water", "Combine with Mawlynnong", "Boats are glass-bottom level clarity"]
  },
  "mawlynnong": {
    name: "Mawlynnong",
    state: "Meghalaya",
    type: "tourist",
    attractions: ["Cleanest Village in Asia", "Living Root Bridge", "Sky Walk", "Bangladesh View"],
    food: ["Homestay food", "Khasi cuisine"],
    culture: "Asia's cleanest village. Community-based eco-tourism. Living root bridges.",
    bestTime: "October to May",
    tips: ["Stay overnight for experience", "Bamboo sky walk for views", "Near Dawki - combine both"]
  },
  
  // ==================== MIZORAM ====================
  "aizawl": {
    name: "Aizawl",
    state: "Mizoram",
    type: "city",
    attractions: ["Durtlang Hills", "Solomon's Temple", "Mizoram State Museum", "Bara Bazaar", "Reiek Heritage Village"],
    food: ["Bai", "Vawksa Rep", "Sawhchiar", "Bamboo Shoot dishes"],
    culture: "City on hills with no traffic lights. Christian majority. Unique Mizo culture.",
    bestTime: "October to March",
    tips: ["Very safe city", "Sunday everything is closed", "Chapchar Kut festival in March"]
  },
  
  // ==================== NAGALAND ====================
  "kohima": {
    name: "Kohima",
    state: "Nagaland",
    type: "city",
    attractions: ["Kohima War Cemetery", "Dzukou Valley", "Kohima Village", "Japfu Peak", "State Museum"],
    food: ["Smoked Pork", "Axone", "Bamboo Steamed Fish", "Raja Mircha (Hottest Chilli)"],
    culture: "World War II battlefield. Hornbill Festival in December. Angami Naga culture.",
    bestTime: "October to May; December for Hornbill",
    tips: ["Dzukou Valley trek is stunning", "Hornbill Festival is a must", "Try Raja Mircha if you dare"]
  },
  "dimapur": {
    name: "Dimapur",
    state: "Nagaland",
    type: "city",
    attractions: ["Kachari Ruins", "Rangapahar Reserve Forest", "Zoological Park", "Triple Falls"],
    food: ["Naga cuisine", "Smoked meat"],
    culture: "Commercial hub and gateway to Nagaland. Ancient Kachari kingdom ruins.",
    bestTime: "October to May",
    tips: ["Gateway to Kohima", "Hong Kong market for shopping"]
  },
  
  // ==================== ODISHA ====================
  "bhubaneswar": {
    name: "Bhubaneswar",
    state: "Odisha",
    type: "city",
    attractions: ["Lingaraja Temple", "Mukteshwar Temple", "Udaygiri Caves", "Nandankanan Zoo", "Ekamra Haat"],
    food: ["Dalma", "Pakhala", "Chhena Poda", "Dahi Bara Aloo Dum", "Rasagola"],
    culture: "Temple City with 7th-13th century temples. Kalinga architecture. Ancient Jain caves.",
    bestTime: "October to March",
    tips: ["Lingaraja Temple non-Hindus restricted", "Mukteshwar is most beautiful", "Ekamra Haat for handicrafts"]
  },
  "puri": {
    name: "Puri",
    state: "Odisha",
    type: "tourist",
    attractions: ["Jagannath Temple", "Puri Beach", "Konark Sun Temple", "Chilika Lake", "Raghurajpur Artist Village"],
    food: ["Mahaprasad", "Dahi Bara", "Chhena Poda", "Kanika (Sweet Rice)"],
    culture: "One of Char Dhams. Rath Yatra is world famous. Lord Jagannath's abode.",
    bestTime: "October to March; July for Rath Yatra",
    tips: ["Non-Hindus cannot enter main temple", "Rath Yatra is spectacular", "Buy Pattachitra art"]
  },
  "konark": {
    name: "Konark",
    state: "Odisha",
    type: "tourist",
    attractions: ["Sun Temple (UNESCO)", "Chandrabhaga Beach", "ASI Museum", "Ramchandi Temple"],
    food: ["Seafood", "Local Odia cuisine"],
    culture: "UNESCO World Heritage. 13th century temple shaped like chariot. Classical dance festival.",
    bestTime: "October to March; December for dance festival",
    tips: ["Hire guide for temple stories", "Konark Dance Festival in December", "Temple best at sunrise"]
  },
  "chilika": {
    name: "Chilika Lake",
    state: "Odisha",
    type: "tourist",
    attractions: ["Boat Safari", "Irrawaddy Dolphins", "Nalabana Bird Sanctuary", "Kalijai Temple", "Mangalajodi"],
    food: ["Chilika Prawns", "Fresh fish", "Crab"],
    culture: "Largest coastal lagoon in India. Migratory birds from Siberia. Irrawaddy dolphins.",
    bestTime: "November to February for birds",
    tips: ["Mangalajodi for bird photography", "Dolphins near Satpada", "Early morning boat ride best"]
  },
  
  // ==================== PUNJAB ====================
  "amritsar": {
    name: "Amritsar",
    state: "Punjab",
    type: "city",
    attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Partition Museum", "Durgiana Temple"],
    food: ["Amritsari Kulcha", "Lassi", "Langar at Golden Temple", "Amritsari Fish", "Chole Bhature"],
    culture: "Holiest city of Sikhs. Golden Temple's langar feeds 100,000 daily. Partition history.",
    bestTime: "October to March",
    tips: ["Wagah ceremony 5-6 PM", "Cover head at Golden Temple", "Try Kesar da Dhaba (since 1916)"]
  },
  "chandigarh": {
    name: "Chandigarh",
    state: "Punjab/Haryana (UT)",
    type: "city",
    attractions: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex", "Open Hand Monument"],
    food: ["Chole Bhature", "Butter Chicken", "Punjabi cuisine"],
    culture: "Le Corbusier's planned city. City Beautiful. Joint capital of Punjab and Haryana.",
    bestTime: "October to March",
    tips: ["Rock Garden is made of waste", "Sector 17 for shopping", "Rose Garden has 1600 varieties"]
  },
  "ludhiana": {
    name: "Ludhiana",
    state: "Punjab",
    type: "city",
    attractions: ["Lodhi Fort", "Punjab Agricultural University", "Rural Heritage Museum", "Gurudwara Charan Kamal"],
    food: ["Tandoori Chicken", "Butter Chicken", "Sarson da Saag Makki di Roti"],
    culture: "Manchester of India. Industrial hub for hosiery and bicycles.",
    bestTime: "October to March",
    tips: ["Industrial city for business", "Famous for woolen goods"]
  },
  
  // ==================== RAJASTHAN ====================
  "jaipur": {
    name: "Jaipur",
    state: "Rajasthan",
    type: "city",
    attractions: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Nahargarh Fort", "Jaigarh Fort"],
    food: ["Dal Baati Churma", "Pyaaz Kachori", "Ghewar", "Laal Maas", "Lassi"],
    culture: "Pink City. Rajput heritage. Part of Golden Triangle. UNESCO World Heritage City.",
    bestTime: "October to March",
    tips: ["Amber Fort by 9 AM", "Johri Bazaar for gems", "Rooftop cafes near Hawa Mahal"]
  },
  "jodhpur": {
    name: "Jodhpur",
    state: "Rajasthan",
    type: "city",
    attractions: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Clock Tower", "Blue City walk"],
    food: ["Mirchi Bada", "Pyaaz Kachori", "Mawa Kachori", "Makhaniya Lassi"],
    culture: "Blue City. Rathore Rajput heritage. Marwar region capital.",
    bestTime: "October to March",
    tips: ["Blue City walk is magical", "Mehrangarh has excellent museum", "Clock Tower for shopping"]
  },
  "udaipur": {
    name: "Udaipur",
    state: "Rajasthan",
    type: "city",
    attractions: ["City Palace", "Lake Pichola", "Taj Lake Palace", "Jagdish Temple", "Monsoon Palace", "Fateh Sagar"],
    food: ["Dal Baati Churma", "Gatte ki Sabzi", "Mawa Kachori", "Lake view dining"],
    culture: "City of Lakes. Venice of the East. Mewar royal heritage. Most romantic city.",
    bestTime: "September to March",
    tips: ["Lake Pichola boat ride at sunset", "Rooftop restaurants overlooking lake", "Jagdish Temple every evening"]
  },
  "jaisalmer": {
    name: "Jaisalmer",
    state: "Rajasthan",
    type: "city",
    attractions: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon ki Haveli", "Gadisar Lake", "Desert Safari", "Kuldhara"],
    food: ["Ker Sangri", "Gatte ki Sabzi", "Daal Baati"],
    culture: "Golden City. Living fort with residents inside. Thar Desert gateway.",
    bestTime: "October to March",
    tips: ["Desert camping at Sam Dunes", "Sunset camel safari", "Kuldhara ghost village"]
  },
  "pushkar": {
    name: "Pushkar",
    state: "Rajasthan",
    type: "tourist",
    attractions: ["Brahma Temple", "Pushkar Lake", "Pushkar Camel Fair", "Savitri Temple", "Ghats"],
    food: ["Malpua", "Vegetarian only (holy town)", "Israeli cafes"],
    culture: "Only Brahma Temple in world. Sacred lake. Famous camel fair in November.",
    bestTime: "November for Camel Fair; October-March",
    tips: ["Camel Fair is spectacular", "No non-veg/alcohol in town", "Watch sunset from Savitri Temple"]
  },
  "mount abu": {
    name: "Mount Abu",
    state: "Rajasthan",
    type: "tourist",
    attractions: ["Dilwara Jain Temples", "Nakki Lake", "Sunset Point", "Guru Shikhar", "Achalgarh Fort"],
    food: ["Rajasthani cuisine", "Dal Baati"],
    culture: "Only hill station in Rajasthan. Dilwara temples are marble masterpieces.",
    bestTime: "Year-round; Summer for escape from heat",
    tips: ["Dilwara temples rival Taj in beauty", "Sunset Point gets crowded", "Cool even in summer"]
  },
  "ranthambore": {
    name: "Ranthambore National Park",
    state: "Rajasthan",
    type: "tourist",
    attractions: ["Tiger Safari", "Ranthambore Fort", "Jogi Mahal", "Padam Talao", "Zones 1-10"],
    food: ["Resort cuisine"],
    culture: "Former hunting ground of Jaipur royals. Tigers amid ruins. Best for photography.",
    bestTime: "October to June",
    tips: ["Zone 3, 4, 5 best for tigers", "Book safaris in advance", "Machli was most famous tigress"]
  },
  "bikaner": {
    name: "Bikaner",
    state: "Rajasthan",
    type: "city",
    attractions: ["Junagarh Fort", "Karni Mata Temple (Rat Temple)", "Camel Farm", "Lalgarh Palace"],
    food: ["Bikaner Bhujia", "Rasgulla", "Kachori"],
    culture: "Unconquered fort. Famous for snacks. Camel breeding center.",
    bestTime: "October to March",
    tips: ["Karni Mata Temple has sacred rats", "Buy Bikaneri Bhujia", "Camel festival in January"]
  },
  "ajmer": {
    name: "Ajmer",
    state: "Rajasthan",
    type: "city",
    attractions: ["Ajmer Sharif Dargah", "Ana Sagar Lake", "Adhai Din Ka Jhonpra", "Taragarh Fort"],
    food: ["Sohan Halwa", "Kadhi Kachori", "Biryani"],
    culture: "Sufi pilgrimage center. Dargah of Khwaja Moinuddin Chishti. Urs festival.",
    bestTime: "October to March",
    tips: ["Dress modestly at Dargah", "Thursday is special day", "Gateway to Pushkar (15 km)"]
  },
  
  // ==================== SIKKIM ====================
  "gangtok": {
    name: "Gangtok",
    state: "Sikkim",
    type: "city",
    attractions: ["MG Marg", "Rumtek Monastery", "Enchey Monastery", "Tashi Viewpoint", "Do Drul Chorten", "Ropeway"],
    food: ["Momos", "Thukpa", "Gundruk", "Sel Roti", "Chhurpi (hard cheese)"],
    culture: "Clean hill capital with Buddhist monasteries. Kanchenjunga views. Nepali-Bhutia culture.",
    bestTime: "March to June; October to December",
    tips: ["MG Marg is pedestrian-only", "Tsomgo Lake and Nathula need permits", "Try local chang (millet beer)"]
  },
  "pelling": {
    name: "Pelling",
    state: "Sikkim",
    type: "town",
    attractions: ["Pemayangtse Monastery", "Rabdentse Ruins", "Khecheopalri Lake", "Kanchenjunga Falls", "Skywalk"],
    food: ["Sikkimese cuisine", "Monastery food"],
    culture: "Best Kanchenjunga views. Ancient Namgyal dynasty capital. Sacred lake.",
    bestTime: "March to June; October to December",
    tips: ["Clear Kanchenjunga views in October-November", "Visit monasteries early morning", "Gateway to Yuksom treks"]
  },
  "lachung": {
    name: "Lachung",
    state: "Sikkim",
    type: "town",
    attractions: ["Yumthang Valley", "Zero Point", "Shingba Rhododendron Sanctuary", "Hot Springs"],
    food: ["Simple Sikkimese food"],
    culture: "Gateway to Valley of Flowers of the East. Rhododendrons bloom March-May.",
    bestTime: "March-June for flowers; December-February for snow",
    tips: ["Zero Point at 15,300 ft", "Yumthang best in April-May", "Permits required"]
  },
  "nathula": {
    name: "Nathula Pass",
    state: "Sikkim",
    type: "tourist",
    attractions: ["Indo-China Border", "Tsomgo Lake", "Baba Harbhajan Singh Temple", "Kupup Lake"],
    food: ["Maggi and tea at points"],
    culture: "One of highest motorable roads. India-China border post. Silk Route trade history.",
    bestTime: "April to November (closed Mondays & Tuesdays)",
    tips: ["Indian nationals only", "Permits from Gangtok", "Altitude 14,450 ft - carry Diamox"]
  },
  
  // ==================== TAMIL NADU ====================
  "chennai": {
    name: "Chennai",
    state: "Tamil Nadu",
    type: "city",
    attractions: ["Marina Beach", "Kapaleeshwarar Temple", "Fort St. George", "San Thome", "Mahabalipuram", "Government Museum"],
    food: ["Idli Sambar", "Dosa", "Filter Coffee", "Chettinad Chicken", "Kothu Parotta"],
    culture: "Gateway to South India. Classical arts capital. Chennai December Music Season is world famous.",
    bestTime: "November to February",
    tips: ["December for music festival", "Marina Beach at sunrise", "Learn basic Tamil phrases"]
  },
  "madurai": {
    name: "Madurai",
    state: "Tamil Nadu",
    type: "city",
    attractions: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Gandhi Museum", "Vaigai Dam"],
    food: ["Jigarthanda", "Kari Dosa", "Muttaiakose (Egg rice)", "Parotta"],
    culture: "One of oldest cities in India. Temple city. Meenakshi Temple is architectural wonder.",
    bestTime: "October to March",
    tips: ["Temple evening ceremony is spectacular", "Try Jigarthanda drink", "Meenakshi has 14 gopurams"]
  },
  "ooty": {
    name: "Ooty (Udhagamandalam)",
    state: "Tamil Nadu",
    type: "tourist",
    attractions: ["Botanical Gardens", "Ooty Lake", "Nilgiri Mountain Railway", "Doddabetta Peak", "Rose Garden", "Tea Museum"],
    food: ["Homemade Chocolates", "Varkey", "Tea"],
    culture: "Queen of Hill Stations. Nilgiri toy train is UNESCO Heritage. British-era charm.",
    bestTime: "April to June; September to November",
    tips: ["Toy train from Mettupalayam is a must", "Buy homemade chocolates", "Visit tea estates"]
  },
  "kodaikanal": {
    name: "Kodaikanal",
    state: "Tamil Nadu",
    type: "tourist",
    attractions: ["Kodaikanal Lake", "Coaker's Walk", "Pillar Rocks", "Bryant Park", "Dolphin's Nose", "Berijam Lake"],
    food: ["Homemade Chocolates", "Eucalyptus products"],
    culture: "Princess of Hill Stations. Star-shaped lake. Less commercialized than Ooty.",
    bestTime: "April to June; September to November",
    tips: ["Cycling around lake is popular", "Buy eucalyptus oil", "Berijam Lake needs forest permit"]
  },
  "mahabalipuram": {
    name: "Mahabalipuram",
    state: "Tamil Nadu",
    type: "tourist",
    attractions: ["Shore Temple", "Five Rathas", "Arjuna's Penance", "Tiger Cave", "Krishna's Butterball", "Beach"],
    food: ["Seafood", "South Indian cuisine"],
    culture: "UNESCO World Heritage. Pallava dynasty rock-cut temples. Ancient port city.",
    bestTime: "November to February",
    tips: ["Shore Temple at sunrise", "Stone carving workshops", "Beach has strong currents"]
  },
  "rameswaram": {
    name: "Rameswaram",
    state: "Tamil Nadu",
    type: "tourist",
    attractions: ["Ramanathaswamy Temple", "Dhanushkodi", "Pamban Bridge", "Abdul Kalam House", "Agni Theertham"],
    food: ["Temple food", "South Indian vegetarian"],
    culture: "One of Char Dhams. Rama's bridge to Lanka. 22 holy wells in temple.",
    bestTime: "October to April",
    tips: ["Bathe in all 22 theerthams", "Dhanushkodi is ghost town", "Pamban Bridge is engineering marvel"]
  },
  "kanyakumari": {
    name: "Kanyakumari",
    state: "Tamil Nadu",
    type: "tourist",
    attractions: ["Vivekananda Rock Memorial", "Thiruvalluvar Statue", "Sunrise & Sunset Point", "Padmanabhapuram Palace"],
    food: ["South Indian cuisine", "Seafood"],
    culture: "Southernmost tip of India. Where three seas meet. Vivekananda meditation rock.",
    bestTime: "October to March",
    tips: ["Full moon day unique view", "Ferry to rock memorial", "Palace is wooden marvel"]
  },
  "thanjavur": {
    name: "Thanjavur",
    state: "Tamil Nadu",
    type: "city",
    attractions: ["Brihadeeswarar Temple", "Thanjavur Palace", "Art Gallery", "Saraswathi Mahal Library"],
    food: ["Thanjavur Idli", "Filter Coffee", "Traditional Sappadu"],
    culture: "UNESCO World Heritage temple. Chola capital. Classical music and arts center.",
    bestTime: "November to February",
    tips: ["Temple gopuram shadow phenomenon", "Buy Thanjavur paintings and dolls"]
  },
  "tiruchirappalli": {
    name: "Tiruchirappalli (Trichy)",
    state: "Tamil Nadu",
    type: "city",
    attractions: ["Rockfort Temple", "Srirangam Temple", "Jambukeswarar Temple", "Kallanai Dam"],
    food: ["Trichy Sambar", "Appam", "Chettinad cuisine nearby"],
    culture: "Rock Fort on 83m rock. Srirangam is largest functioning temple in the world.",
    bestTime: "November to February",
    tips: ["Climb 437 steps to Rockfort", "Srirangam temple is massive", "Gateway to Chettinad"]
  },
  "chettinad": {
    name: "Chettinad",
    state: "Tamil Nadu",
    type: "tourist",
    attractions: ["Athangudi Palace Tiles", "Chettinad Mansions", "Karaikudi", "Antique shops", "Pillayarpatti Temple"],
    food: ["Chettinad Chicken", "Kavuni Arisi", "Chettinad cuisine (one of spiciest)"],
    culture: "Palatial mansions of Nattukotai Chettiars. Famous for cuisine and antiques.",
    bestTime: "November to March",
    tips: ["Stay in heritage mansion", "Try authentic Chettinad meals", "Athangudi tiles are famous"]
  },
  
  // ==================== TELANGANA ====================
  "hyderabad": {
    name: "Hyderabad",
    state: "Telangana",
    type: "city",
    attractions: ["Charminar", "Golconda Fort", "Hussain Sagar", "Ramoji Film City", "Salar Jung Museum", "Chowmahalla Palace"],
    food: ["Hyderabadi Biryani", "Haleem", "Irani Chai", "Osmania Biscuits", "Double ka Meetha"],
    culture: "City of Nizams. Pearl capital. IT hub. Blend of Deccani culture.",
    bestTime: "October to March; Ramadan for Haleem",
    tips: ["Try biryani at Paradise, Bawarchi", "Golconda light & sound show", "Laad Bazaar for bangles"]
  },
  "warangal": {
    name: "Warangal",
    state: "Telangana",
    type: "city",
    attractions: ["Warangal Fort", "Thousand Pillar Temple", "Ramappa Temple (UNESCO)", "Pakhal Lake"],
    food: ["Telangana cuisine", "Jonna Rotte"],
    culture: "Kakatiya dynasty capital. Ramappa Temple is UNESCO World Heritage.",
    bestTime: "October to March",
    tips: ["Ramappa Temple has floating bricks", "Thousand Pillar Temple has perfect acoustics"]
  },
  
  // ==================== TRIPURA ====================
  "agartala": {
    name: "Agartala",
    state: "Tripura",
    type: "city",
    attractions: ["Ujjayanta Palace", "Neermahal", "Sepahijala Wildlife Sanctuary", "Unakoti", "Tripura Sundari Temple"],
    food: ["Mui Borok", "Wahan Mosdeng", "Chakhwi", "Awandru"],
    culture: "Royal heritage with beautiful palaces. Tribal traditions. Buddhist and Hindu temples.",
    bestTime: "October to March",
    tips: ["Neermahal is lake palace", "Unakoti has ancient rock carvings", "Gateway to Bangladesh"]
  },
  
  // ==================== UTTAR PRADESH ====================
  "lucknow": {
    name: "Lucknow",
    state: "Uttar Pradesh",
    type: "city",
    attractions: ["Bara Imambara", "Rumi Darwaza", "Chota Imambara", "British Residency", "Hazratganj"],
    food: ["Tunday Kababi", "Lucknowi Biryani", "Sheermal", "Malai Gilori", "Basket Chaat"],
    culture: "City of Nawabs. Tehzeeb (etiquette) and Nazakat. Awadhi cuisine capital.",
    bestTime: "October to March",
    tips: ["Tunday Kabab is legendary", "Chowk area for old Lucknow", "Hazratganj for shopping"]
  },
  "varanasi": {
    name: "Varanasi",
    state: "Uttar Pradesh",
    type: "city",
    attractions: ["Dashashwamedh Ghat", "Kashi Vishwanath Temple", "Manikarnika Ghat", "Sarnath", "Assi Ghat", "Ramnagar Fort"],
    food: ["Banarasi Paan", "Kachori Sabzi", "Malaiyo", "Thandai", "Lassi"],
    culture: "Oldest living city. Spiritual capital of India. Ganga Aarti is soul-stirring.",
    bestTime: "October to March; Dev Deepawali in November",
    tips: ["Sunrise boat ride essential", "Ganga Aarti at Dashashwamedh 7 PM", "Sarnath is Buddha's first sermon site"]
  },
  "agra": {
    name: "Agra",
    state: "Uttar Pradesh",
    type: "city",
    attractions: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh", "Itimad-ud-Daulah", "Sikandra"],
    food: ["Petha", "Dalmoth", "Bedai Jalebi", "Mughlai cuisine"],
    culture: "Mughal capital. Taj Mahal is world's symbol of love. Marble inlay craftsmanship.",
    bestTime: "October to March",
    tips: ["Taj at sunrise, Mehtab Bagh at sunset", "Taj closed on Fridays", "Buy marble inlay handicrafts"]
  },
  "mathura": {
    name: "Mathura",
    state: "Uttar Pradesh",
    type: "tourist",
    attractions: ["Krishna Janmabhoomi", "Dwarkadhish Temple", "Vishram Ghat", "Govardhan Hill", "Kusum Sarovar"],
    food: ["Peda", "Rabri", "Mathura ke Pede", "Lassi"],
    culture: "Birthplace of Lord Krishna. Major pilgrimage. Holi celebration is legendary.",
    bestTime: "August-November; March for Holi",
    tips: ["Holi in Mathura-Vrindavan is famous", "Parikrama of Govardhan Hill", "Buy Mathura Peda"]
  },
  "vrindavan": {
    name: "Vrindavan",
    state: "Uttar Pradesh",
    type: "tourist",
    attractions: ["Banke Bihari Temple", "Prem Mandir", "ISKCON Temple", "Nidhivan", "Seva Kunj", "Radha Raman Temple"],
    food: ["Prasad", "Vegetarian only", "Lassi"],
    culture: "Krishna's childhood playground. Thousands of temples. Widows' ashram city.",
    bestTime: "August-November; Holi, Janmashtami",
    tips: ["Banke Bihari very crowded", "Prem Mandir lit up at night", "No garlic/onion in town"]
  },
  "ayodhya": {
    name: "Ayodhya",
    state: "Uttar Pradesh",
    type: "tourist",
    attractions: ["Ram Janmabhoomi", "Hanuman Garhi", "Kanak Bhawan", "Saryu River", "Nageshwarnath Temple"],
    food: ["Prasad", "Local UP food"],
    culture: "Birthplace of Lord Ram. Ancient city from Ramayana. Major Hindu pilgrimage.",
    bestTime: "October to March; Ram Navami",
    tips: ["New Ram Mandir inaugurated 2024", "Saryu Aarti in evening", "Very crowded on Ram Navami"]
  },
  "prayagraj": {
    name: "Prayagraj (Allahabad)",
    state: "Uttar Pradesh",
    type: "city",
    attractions: ["Triveni Sangam", "Allahabad Fort", "Anand Bhawan", "Khusro Bagh", "Magh Mela"],
    food: ["Chaat", "Lotan ke Aaloo", "Local cuisine"],
    culture: "Kumbh Mela site. Confluence of Ganga, Yamuna, Saraswati. Nehru family home.",
    bestTime: "October to March; Kumbh every 6/12 years",
    tips: ["Boat ride to Sangam is must", "Maha Kumbh is world's largest gathering", "Anand Bhawan is Nehru museum"]
  },
  "fatehpur sikri": {
    name: "Fatehpur Sikri",
    state: "Uttar Pradesh",
    type: "tourist",
    attractions: ["Buland Darwaza", "Jama Masjid", "Salim Chishti Tomb", "Panch Mahal", "Diwan-i-Khas"],
    food: ["Simple local food"],
    culture: "UNESCO World Heritage. Akbar's abandoned capital. Mughal architecture peak.",
    bestTime: "October to March",
    tips: ["Combine with Agra trip", "Buland Darwaza is highest gateway", "Tie thread at Salim Chishti tomb"]
  },
  
  // ==================== UTTARAKHAND ====================
  "rishikesh": {
    name: "Rishikesh",
    state: "Uttarakhand",
    type: "city",
    attractions: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Triveni Ghat", "River Rafting", "Parmarth Niketan"],
    food: ["Ashram food", "Chotiwala's thali", "German Bakery", "Café culture"],
    culture: "Yoga Capital of World. Beatles came here in 1968. Adventure and spirituality blend.",
    bestTime: "September to November; February to April",
    tips: ["River rafting is thrilling", "Beatles Ashram for photos", "Evening Aarti at Triveni Ghat"]
  },
  "haridwar": {
    name: "Haridwar",
    state: "Uttarakhand",
    type: "city",
    attractions: ["Har Ki Pauri", "Mansa Devi Temple", "Chandi Devi Temple", "Shantikunj", "Ganga Aarti"],
    food: ["Aloo Puri", "Chaat", "Pure vegetarian"],
    culture: "Gateway to Gods. One of seven sacred cities. Kumbh Mela site.",
    bestTime: "Year-round; Kumbh every 12 years",
    tips: ["Ganga Aarti at Har Ki Pauri daily", "Cable car to Mansa Devi", "Bathe at Har Ki Pauri"]
  },
  "nainital": {
    name: "Nainital",
    state: "Uttarakhand",
    type: "city",
    attractions: ["Naini Lake", "Mall Road", "Snow View Point", "Naina Devi Temple", "Tiffin Top", "Eco Cave Gardens"],
    food: ["Momos", "Bal Mithai", "Pahadi cuisine"],
    culture: "Lake District of India. British-era hill station. Named after goddess Naina.",
    bestTime: "March to June; October to November",
    tips: ["Boating in Naini Lake", "Cable car to Snow View", "Winter can be very cold"]
  },
  "mussoorie": {
    name: "Mussoorie",
    state: "Uttarakhand",
    type: "city",
    attractions: ["Mall Road", "Kempty Falls", "Gun Hill", "Lal Tibba", "Company Garden", "Landour"],
    food: ["Ruskin Bond favorites", "Pahadi food", "Landour Bakehouse"],
    culture: "Queen of Hills. Ruskin Bond's home. British-era charm in Landour.",
    bestTime: "April to June; September to November",
    tips: ["Landour for peaceful walks", "Kempty Falls crowded in summer", "Meet Ruskin Bond at bookshop"]
  },
  "dehradun": {
    name: "Dehradun",
    state: "Uttarakhand",
    type: "city",
    attractions: ["Robber's Cave", "Sahastradhara", "Forest Research Institute", "Tapkeshwar Temple", "Mindrolling Monastery"],
    food: ["Bakery items", "Pahadi cuisine", "Momos"],
    culture: "Capital city with educational institutions. Gateway to Mussoorie and Char Dham.",
    bestTime: "March to June; September to November",
    tips: ["FRI architecture is stunning", "Gateway to Mussoorie", "Robber's Cave for kids"]
  },
  "almora": {
    name: "Almora",
    state: "Uttarakhand",
    type: "city",
    attractions: ["Bright End Corner", "Kasar Devi Temple", "Chitai Temple", "Zero Point", "Jageshwar"],
    food: ["Bal Mithai", "Singori", "Bhatt ki Churkani"],
    culture: "Cultural capital of Kumaon. Beatles and Cat Stevens visited. Hippie history.",
    bestTime: "March to June; September to November",
    tips: ["Buy Bal Mithai", "Jageshwar has 100+ ancient temples", "Kasar Devi has cosmic energy"]
  },
  "jim corbett": {
    name: "Jim Corbett National Park",
    state: "Uttarakhand",
    type: "tourist",
    attractions: ["Tiger Safari", "Dhikala Zone", "Elephant Safari", "Corbett Museum", "Garjia Devi Temple"],
    food: ["Resort food"],
    culture: "India's first national park. Named after hunter-conservationist Jim Corbett.",
    bestTime: "November to June (Dhikala best Nov-Feb)",
    tips: ["Dhikala is best zone", "Book well in advance", "Night stay inside park is magical"]
  },
  "kedarnath": {
    name: "Kedarnath",
    state: "Uttarakhand",
    type: "tourist",
    attractions: ["Kedarnath Temple", "Gandhi Sarovar", "Bhairavnath Temple", "Vasuki Tal Trek"],
    food: ["Simple langar food"],
    culture: "One of Char Dhams. One of 12 Jyotirlingas. Temple survived 2013 floods.",
    bestTime: "May to June; September to October (closed winters)",
    tips: ["16 km trek from Gaurikund", "Helicopter available", "Pony and palki options"]
  },
  "badrinath": {
    name: "Badrinath",
    state: "Uttarakhand",
    type: "tourist",
    attractions: ["Badrinath Temple", "Mana Village", "Tapt Kund", "Vasudhara Falls", "Vyas Cave"],
    food: ["Temple Prasad", "Simple food"],
    culture: "One of Char Dhams. Vishnu's abode. Mana is last Indian village.",
    bestTime: "May to June; September to October",
    tips: ["Bathe in Tapt Kund hot spring", "Visit Mana Village", "Altitude 10,200 ft"]
  },
  "auli": {
    name: "Auli",
    state: "Uttarakhand",
    type: "tourist",
    attractions: ["Skiing", "Asia's Longest Cable Car", "Nanda Devi views", "Artificial Lake"],
    food: ["Resort food", "Garhwali cuisine"],
    culture: "Skiing destination with 360° Himalayan views. One of best ski resorts in Asia.",
    bestTime: "January to March for skiing; May to November for views",
    tips: ["Cable car from Joshimath", "Beginner skiing courses available", "Artificial snow guns for skiing"]
  },
  
  // ==================== WEST BENGAL ====================
  "kolkata": {
    name: "Kolkata",
    state: "West Bengal",
    type: "city",
    attractions: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple", "Indian Museum", "College Street", "Park Street"],
    food: ["Rosogolla", "Mishti Doi", "Kathi Roll", "Macher Jhol", "Kosha Mangsho", "Phuchka"],
    culture: "Cultural capital of India. Durga Puja is UNESCO Heritage. Bengali Renaissance birthplace.",
    bestTime: "October to March; October for Durga Puja",
    tips: ["Durga Puja is spectacular", "Hand-pulled rickshaws unique", "College Street for books"]
  },
  "darjeeling": {
    name: "Darjeeling",
    state: "West Bengal",
    type: "city",
    attractions: ["Tiger Hill", "Toy Train", "Batasia Loop", "Peace Pagoda", "Happy Valley Tea Estate", "Mall Road"],
    food: ["Darjeeling Tea", "Momos", "Thukpa", "Churpi"],
    culture: "Queen of Hills. UNESCO Toy Train. Best tea in the world. Tibetan-Nepali culture.",
    bestTime: "April to June; October to November",
    tips: ["Tiger Hill sunrise (Kanchenjunga views)", "Toy Train is UNESCO Heritage", "Buy first flush tea"]
  },
  "sundarbans": {
    name: "Sundarbans",
    state: "West Bengal",
    type: "tourist",
    attractions: ["Royal Bengal Tiger", "Boat Safari", "Mangrove Forest", "Sajnekhali Watch Tower", "Sudhanyakhali"],
    food: ["Fresh fish", "Bengali seafood"],
    culture: "Largest mangrove forest. UNESCO World Heritage. Royal Bengal Tiger habitat.",
    bestTime: "October to March",
    tips: ["Boat stay overnight", "Tiger sightings rare but possible", "Respect the wilderness"]
  },
  "siliguri": {
    name: "Siliguri",
    state: "West Bengal",
    type: "city",
    attractions: ["Mahananda Wildlife Sanctuary", "ISKCON Temple", "Salugara Monastery", "Hong Kong Market"],
    food: ["Bengali cuisine", "Northeast food", "Momos"],
    culture: "Gateway to Northeast and Darjeeling hills. Major commercial hub.",
    bestTime: "October to March",
    tips: ["Gateway to Darjeeling, Sikkim, Bhutan", "Hong Kong Market for shopping"]
  },
  "kalimpong": {
    name: "Kalimpong",
    state: "West Bengal",
    type: "town",
    attractions: ["Deolo Hill", "Durpin Monastery", "Dr. Graham's Homes", "Flower Nurseries", "Teesta Bazaar"],
    food: ["Momos", "Cheese", "Tibetan food"],
    culture: "Quieter alternative to Darjeeling. Famous for floriculture and cheese.",
    bestTime: "March to June; October to December",
    tips: ["Buy orchids and cacti", "Cheese from dairy farms", "Less touristy than Darjeeling"]
  },
  "digha": {
    name: "Digha",
    state: "West Bengal",
    type: "tourist",
    attractions: ["Old Digha Beach", "New Digha Beach", "Marine Aquarium", "Chandaneswar Temple", "Shankarpur Beach"],
    food: ["Pomfret fry", "Hilsa fish", "Crab", "Bengali seafood"],
    culture: "Oldest sea resort in Bengal. Weekend getaway from Kolkata.",
    bestTime: "October to March",
    tips: ["Old Digha is original", "Fresh seafood on beach", "Combine with Mandarmani"]
  },
  
  // ==================== UNION TERRITORIES ====================
  "port blair": {
    name: "Port Blair",
    state: "Andaman and Nicobar Islands",
    type: "city",
    attractions: ["Cellular Jail", "Ross Island", "North Bay Island", "Corbyn's Cove", "Anthropological Museum", "Chidiya Tapu"],
    food: ["Seafood", "Fish Curry", "Coconut dishes"],
    culture: "Colonial penal settlement. Cellular Jail is national memorial. Diverse tribal heritage.",
    bestTime: "October to May",
    tips: ["Light & Sound show at Cellular Jail", "Ferry to Ross Island", "Scuba diving at North Bay"]
  },
  "havelock": {
    name: "Havelock Island (Swaraj Dweep)",
    state: "Andaman and Nicobar Islands",
    type: "tourist",
    attractions: ["Radhanagar Beach", "Elephant Beach", "Kalapathar Beach", "Scuba Diving", "Neil Island"],
    food: ["Fresh seafood", "Beach shack food"],
    culture: "Best beaches in Asia. Radhanagar voted Asia's best beach. Diving paradise.",
    bestTime: "October to May",
    tips: ["Book ferry in advance", "Radhanagar sunset is magical", "Scuba diving at Lighthouse"]
  },
  "neil island": {
    name: "Neil Island (Shaheed Dweep)",
    state: "Andaman and Nicobar Islands",
    type: "tourist",
    attractions: ["Natural Bridge", "Laxmanpur Beach", "Bharatpur Beach", "Sunset view", "Coral reefs"],
    food: ["Seafood", "Simple island food"],
    culture: "More peaceful than Havelock. Natural rock formations. Less crowded beaches.",
    bestTime: "October to May",
    tips: ["Natural Bridge is unique formation", "Bicycle around the island", "Glass-bottom boat rides"]
  },
  "leh": {
    name: "Leh",
    state: "Ladakh",
    type: "city",
    attractions: ["Leh Palace", "Shanti Stupa", "Hall of Fame", "Magnetic Hill", "Hemis Monastery", "Thiksey Monastery"],
    food: ["Thukpa", "Momos", "Butter Tea", "Skyu", "Chhurpe"],
    culture: "Former Ladakh capital. Buddhist culture. High-altitude cold desert.",
    bestTime: "May to September",
    tips: ["Acclimatize for 2 days first", "Permits needed for Nubra/Pangong", "Altitude 11,500 ft"]
  },
  "pangong": {
    name: "Pangong Lake",
    state: "Ladakh",
    type: "tourist",
    attractions: ["Pangong Tso", "3 Idiots filming location", "Color-changing lake", "Camping"],
    food: ["Tent accommodation food"],
    culture: "140 km long lake, changes colors. 60% in Tibet. Made famous by 3 Idiots movie.",
    bestTime: "May to September",
    tips: ["4-5 hours drive from Leh", "Permits required (ILP)", "Camping by lake is magical"]
  },
  "nubra": {
    name: "Nubra Valley",
    state: "Ladakh",
    type: "tourist",
    attractions: ["Diskit Monastery", "Hunder Sand Dunes", "Bactrian Camels", "Khardung La", "Turtuk Village"],
    food: ["Ladakhi cuisine", "Apricots"],
    culture: "Valley of flowers. Double-humped Bactrian camels. Balti culture in Turtuk.",
    bestTime: "May to September",
    tips: ["Khardung La is world's highest motorable road", "Bactrian camel ride at Hunder", "Turtuk was in Pakistan till 1971"]
  },
  "srinagar": {
    name: "Srinagar",
    state: "Jammu and Kashmir",
    type: "city",
    attractions: ["Dal Lake", "Mughal Gardens", "Shikara Ride", "Shankaracharya Temple", "Hazratbal", "Old City"],
    food: ["Wazwan", "Rogan Josh", "Kahwa", "Lotus Stem", "Gushtaba"],
    culture: "Paradise on Earth. Houseboat culture. Mughal gardens. Pashmina and carpets.",
    bestTime: "April to October; December-February for snow",
    tips: ["Stay on houseboat once", "Shikara ride at sunset", "Buy Pashmina and saffron"]
  },
  "gulmarg": {
    name: "Gulmarg",
    state: "Jammu and Kashmir",
    type: "tourist",
    attractions: ["Gondola (Asia's highest)", "Skiing", "Apharwat Peak", "Golf Course", "St. Mary's Church"],
    food: ["Kashmiri cuisine", "Resort food"],
    culture: "Meadow of flowers. Winter skiing paradise. Summer golf destination.",
    bestTime: "December to March for skiing; May to October for flowers",
    tips: ["Gondola Phase 2 goes to 14,000 ft", "Ski equipment on rent", "Zero Point in winter"]
  },
  "pahalgam": {
    name: "Pahalgam",
    state: "Jammu and Kashmir",
    type: "tourist",
    attractions: ["Betaab Valley", "Aru Valley", "Chandanwari", "Lidder River", "Amarnath Base"],
    food: ["Kashmiri Wazwan", "Kahwa"],
    culture: "Valley of Shepherds. Gateway to Amarnath Yatra. Bollywood filming location.",
    bestTime: "May to October",
    tips: ["Betaab Valley is beautiful", "Base for Amarnath pilgrimage", "Horse rides to viewpoints"]
  },
  "puducherry": {
    name: "Puducherry (Pondicherry)",
    state: "Puducherry",
    type: "city",
    attractions: ["French Quarter", "Auroville", "Promenade Beach", "Aurobindo Ashram", "Paradise Beach", "Matrimandir"],
    food: ["French cuisine", "Crepes", "Baguettes", "Seafood", "South Indian"],
    culture: "French colonial heritage. Sri Aurobindo Ashram. Auroville is experimental township.",
    bestTime: "October to March",
    tips: ["Rent a cycle for French Quarter", "Book Matrimandir visit in advance", "Rock Beach sunrise"]
  },
  "daman": {
    name: "Daman",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    type: "city",
    attractions: ["Daman Fort", "Devka Beach", "Jampore Beach", "Moti Daman", "Nani Daman"],
    food: ["Seafood", "Portuguese cuisine", "Prawn dishes"],
    culture: "Former Portuguese territory. Beautiful churches and forts. Alcohol is cheaper.",
    bestTime: "October to March",
    tips: ["Alcohol is duty-free", "Churches in Moti Daman", "Beach is rocky but scenic"]
  },
  "diu": {
    name: "Diu",
    state: "Dadra and Nagar Haveli and Daman and Diu",
    type: "city",
    attractions: ["Diu Fort", "Nagoa Beach", "St. Paul's Church", "Gangeshwar Temple", "INS Khukri Memorial"],
    food: ["Fresh seafood", "Gujarati-Portuguese fusion"],
    culture: "Island with Portuguese influence. Cleaner than Goa. Beautiful churches.",
    bestTime: "October to March",
    tips: ["Nagoa Beach is best", "Less crowded than Goa", "Duty-free alcohol"]
  }
};

// Function to get location data
export function getLocationData(location: string): LocationInfo | null {
  const loc = location.toLowerCase().trim();
  return allLocationsData[loc] || null;
}

// Function to search locations by state
export function getLocationsByState(state: string): LocationInfo[] {
  const stateNormalized = state.toLowerCase().trim();
  return Object.values(allLocationsData).filter(
    loc => loc.state.toLowerCase() === stateNormalized
  );
}

// Get all location names
export function getAllLocationNames(): string[] {
  return Object.keys(allLocationsData);
}

// Search for locations matching a query
export function searchLocations(query: string): string[] {
  const q = query.toLowerCase();
  return Object.keys(allLocationsData).filter(name => 
    name.includes(q) || 
    allLocationsData[name].state.toLowerCase().includes(q)
  );
}
