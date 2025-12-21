// Grammar correction and query normalization service

// Common spelling corrections for Indian locations
const locationSpellings: Record<string, string> = {
  // States
  "odisa": "odisha", "orissa": "odisha", "odisha": "odisha",
  "kerela": "kerala", "karala": "kerala",
  "tamilnadu": "tamil nadu", "tn": "tamil nadu",
  "maharastra": "maharashtra", "mh": "maharashtra",
  "karnatka": "karnataka", "banglore": "bangalore", "bengaluru": "bangalore",
  "rajashtan": "rajasthan", "rajsthan": "rajasthan",
  "gujrat": "gujarat", "gujrath": "gujarat",
  "madhyapradesh": "madhya pradesh", "mp": "madhya pradesh",
  "uttarpradesh": "uttar pradesh", "up": "uttar pradesh",
  "westbengal": "west bengal", "wb": "west bengal",
  "andhrapradesh": "andhra pradesh", "ap": "andhra pradesh",
  "himachalpradesh": "himachal pradesh", "hp": "himachal pradesh",
  "arunachalpradesh": "arunachal pradesh",
  "j&k": "jammu and kashmir", "jk": "jammu and kashmir",
  "kashmir": "jammu and kashmir",
  "chattisgarh": "chhattisgarh", "chhatisgarh": "chhattisgarh",
  "jharkand": "jharkhand", "jarkhand": "jharkhand",
  "uttrakhand": "uttarakhand", "uttarkhand": "uttarakhand",
  "pondicherry": "puducherry", "pondy": "puducherry",
  "andaman": "andaman and nicobar", "nicobar": "andaman and nicobar",
  
  // Cities
  "bombay": "mumbai", "madras": "chennai", "calcutta": "kolkata",
  "benares": "varanasi", "banaras": "varanasi",
  "trivandrum": "thiruvananthapuram", "cochin": "kochi",
  "panjim": "panaji", "calicut": "kozhikode",
  "ooty": "ooty", "ootacamund": "ooty",
  "mysuru": "mysore", "mangaluru": "mangalore",
  "gurugram": "gurgaon", "noida": "noida",
  "vishakhapatnam": "visakhapatnam", "vizag": "visakhapatnam",
  "tirupathi": "tirupati", "tirupti": "tirupati",
  "darjiling": "darjeeling", "darjeling": "darjeeling",
  "udaipur": "udaipur", "udaypur": "udaipur",
  "agartla": "agartala",
  "guwahti": "guwahati", "gauwhati": "guwahati",
  "lucnow": "lucknow", "luknow": "lucknow",
  "patana": "patna",
  "ranchi": "ranchi",
  "bhopl": "bhopal", "bhopal": "bhopal",
  "raipr": "raipur",
  "shimala": "shimla", "simla": "shimla",
  "manali": "manali", "mnali": "manali",
  "dharamsala": "dharamshala", "dharamshla": "dharamshala",
  "rishikesh": "rishikesh", "rishkesh": "rishikesh",
  "haridwar": "haridwar", "hardwar": "haridwar",
  "naintal": "nainital", "nanital": "nainital",
  "mussorie": "mussoorie", "mussourie": "mussoorie",
  "amristar": "amritsar", "amritsr": "amritsar",
  "srinager": "srinagar", "shrinagar": "srinagar",
  "laddakh": "ladakh", "ladhak": "ladakh",
  "puduchery": "puducherry", "pondi": "puducherry",
};

// Common abbreviations and shorthand
const abbreviations: Record<string, string> = {
  "iti": "itinerary",
  "itin": "itinerary",
  "pln": "plan",
  "plc": "place",
  "plcs": "places",
  "fod": "food",
  "ht": "hotel",
  "htl": "hotel",
  "htls": "hotels",
  "rst": "restaurant",
  "abt": "about",
  "whr": "where",
  "whn": "when",
  "trvl": "travel",
  "bt": "best",
  "gud": "good",
  "gd": "good",
  "tym": "time",
  "plz": "please",
  "pls": "please",
  "thx": "thanks",
  "thnx": "thanks",
  "yr": "your",
  "ur": "your",
  "u": "you",
  "r": "are",
  "2": "to",
  "4": "for",
  "wt": "what",
  "wat": "what",
  "hw": "how",
  "n": "and",
  "v": "very",
  "d": "the",
  "da": "the",
  "dis": "this",
  "dat": "that",
  "tat": "that",
  "tht": "that",
};

// Common word corrections
const wordCorrections: Record<string, string> = {
  // Travel related
  "atraction": "attraction",
  "atractions": "attractions",
  "attration": "attraction",
  "tourrist": "tourist",
  "tourisum": "tourism",
  "resturant": "restaurant",
  "restarant": "restaurant",
  "restraunt": "restaurant",
  "accomodation": "accommodation",
  "acommodation": "accommodation",
  "transporation": "transportation",
  "tranport": "transport",
  "iternary": "itinerary",
  "itinarry": "itinerary",
  "intinerary": "itinerary",
  "plannig": "planning",
  "planing": "planning",
  "travle": "travel",
  "travell": "travel",
  "wheather": "weather",
  "wether": "weather",
  "temprature": "temperature",
  "tempature": "temperature",
  "cuisne": "cuisine",
  "cusine": "cuisine",
  "festivl": "festival",
  "cultrue": "culture",
  "cultre": "culture",
  "heritge": "heritage",
  "beautful": "beautiful",
  "beautifull": "beautiful",
  "famouse": "famous",
  "populer": "popular",
  "populare": "popular",
  "intresting": "interesting",
  "intersting": "interesting",
  "reccomend": "recommend",
  "recomend": "recommend",
  "sugestion": "suggestion",
  "sugest": "suggest",
  
  // Numbers
  "frist": "first",
  "secnd": "second",
  "scond": "second",
  "thrid": "third",
  "forth": "fourth",
  
  // Common words
  "becoz": "because",
  "becuz": "because",
  "bcoz": "because",
  "coz": "because",
  "shud": "should",
  "cud": "could",
  "wud": "would",
  "hv": "have",
  "dnt": "don't",
  "dosent": "doesn't",
  "doesnt": "doesn't",
  "cant": "can't",
  "wont": "won't",
  "dont": "don't",
  "im": "i'm",
  "iam": "i am",
  "i m": "i'm",
  "tomorow": "tomorrow",
  "tommorow": "tomorrow",
  "tomarrow": "tomorrow",
};

// Extract number of days from query
export function extractDays(text: string): number | null {
  const lowerText = text.toLowerCase();
  
  // Patterns like "2 day", "3 days", "two days", "a week"
  const patterns = [
    /(\d+)\s*(?:day|days|dys|dy)/i,
    /(\d+)\s*(?:night|nights)/i,
    /(one|two|three|four|five|six|seven|1|2|3|4|5|6|7)\s*(?:day|days)/i,
    /(a|one)\s*week/i,
  ];
  
  for (const pattern of patterns) {
    const match = lowerText.match(pattern);
    if (match) {
      const numWord = match[1].toLowerCase();
      const numMap: Record<string, number> = {
        "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "a": 7, "1": 1, "2": 2, "3": 3,
        "4": 4, "5": 5, "6": 6, "7": 7
      };
      return numMap[numWord] || parseInt(numWord) || 2;
    }
  }
  
  // Default to 2 days if itinerary is mentioned but no number
  if (/itinerary|plan|trip|iti/i.test(lowerText)) {
    return 2;
  }
  
  return null;
}

// Correct location spellings
export function correctLocation(text: string): string {
  let corrected = text.toLowerCase();
  
  for (const [wrong, right] of Object.entries(locationSpellings)) {
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');
    corrected = corrected.replace(regex, right);
  }
  
  return corrected;
}

// Correct grammar and spelling in query
export function correctQuery(query: string): string {
  let corrected = query.toLowerCase().trim();
  
  // Apply abbreviation expansions
  for (const [abbr, full] of Object.entries(abbreviations)) {
    const regex = new RegExp(`\\b${abbr}\\b`, 'gi');
    corrected = corrected.replace(regex, full);
  }
  
  // Apply word corrections
  for (const [wrong, right] of Object.entries(wordCorrections)) {
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');
    corrected = corrected.replace(regex, right);
  }
  
  // Apply location corrections
  corrected = correctLocation(corrected);
  
  // Clean up multiple spaces
  corrected = corrected.replace(/\s+/g, ' ').trim();
  
  return corrected;
}

// All known location names for multi-destination extraction
const allKnownLocations = [
  // States
  'kerala', 'rajasthan', 'goa', 'maharashtra', 'karnataka', 'tamil nadu',
  'telangana', 'andhra pradesh', 'odisha', 'west bengal', 'gujarat',
  'madhya pradesh', 'uttar pradesh', 'punjab', 'haryana', 'himachal pradesh',
  'uttarakhand', 'jharkhand', 'chhattisgarh', 'bihar', 'assam', 'sikkim',
  'meghalaya', 'tripura', 'mizoram', 'manipur', 'nagaland', 'arunachal pradesh',
  'jammu and kashmir', 'ladakh',
  // Popular cities
  'mumbai', 'delhi', 'bangalore', 'chennai', 'kolkata', 'hyderabad', 'pune',
  'ahmedabad', 'jaipur', 'udaipur', 'jodhpur', 'jaisalmer', 'kochi', 'goa',
  'manali', 'shimla', 'rishikesh', 'haridwar', 'varanasi', 'agra', 'lucknow',
  'darjeeling', 'gangtok', 'munnar', 'alleppey', 'ooty', 'kodaikanal', 'mysore',
  'hampi', 'guwahati', 'shillong', 'leh', 'srinagar', 'amritsar', 'chandigarh',
  'dharamshala', 'mcleodganj', 'kasol', 'pushkar', 'mount abu', 'ranthambore',
  'khajuraho', 'orchha', 'bhopal', 'indore', 'aurangabad', 'ajanta', 'ellora',
  'coorg', 'wayanad', 'kovalam', 'varkala', 'pondicherry', 'mahabalipuram',
  'madurai', 'rameswaram', 'kanyakumari', 'tirupati', 'visakhapatnam',
  'puri', 'konark', 'bhubaneswar', 'kaziranga', 'tawang', 'ziro',
  'andaman', 'lakshadweep', 'nainital', 'mussoorie', 'jim corbett',
  'rann of kutch', 'dwarka', 'somnath', 'diu', 'daman'
];

// Extract multiple locations from query (for multi-destination trips)
export function extractMultipleLocations(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  const foundLocations: string[] = [];
  
  // First apply corrections
  const corrected = correctQuery(query);
  
  // Find all locations mentioned
  for (const loc of allKnownLocations) {
    if (corrected.includes(loc) && !foundLocations.includes(loc)) {
      foundLocations.push(loc);
    }
  }
  
  // Also check corrected location spellings
  for (const [_, correctedLoc] of Object.entries(locationSpellings)) {
    if (corrected.includes(correctedLoc) && !foundLocations.includes(correctedLoc)) {
      foundLocations.push(correctedLoc);
    }
  }
  
  return [...new Set(foundLocations)];
}

// Normalize query to extract intent
export function normalizeQuery(query: string): {
  normalized: string;
  days: number | null;
  locations: string[];
  intent: string;
} {
  const corrected = correctQuery(query);
  const days = extractDays(corrected);
  
  // Extract locations using the multi-location extractor
  const locations = extractMultipleLocations(corrected);
  
  // Detect intent
  let intent = 'general';
  if (/itinerary|plan|trip|travel|tour/i.test(corrected)) {
    intent = 'itinerary';
  } else if (/food|eat|cuisine|dish|restaurant/i.test(corrected)) {
    intent = 'food';
  } else if (/attraction|visit|see|place|tourist|sightseeing|things to do/i.test(corrected)) {
    intent = 'attraction';
  } else if (/weather|climate|temperature|season|when to visit|best time/i.test(corrected)) {
    intent = 'weather';
  } else if (/culture|tradition|heritage|festival/i.test(corrected)) {
    intent = 'culture';
  } else if (/hotel|stay|accommodation|resort/i.test(corrected)) {
    intent = 'hotel';
  } else if (/cost|budget|expense|price|fare/i.test(corrected)) {
    intent = 'cost';
  } else if (/district|cities in|towns in/i.test(corrected)) {
    intent = 'district';
  } else if (/tell me about|about|information|what is|know about/i.test(corrected)) {
    intent = 'info';
  }
  
  return {
    normalized: corrected,
    days,
    locations,
    intent
  };
}
