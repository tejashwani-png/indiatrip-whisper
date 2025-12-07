import { pipeline } from '@huggingface/transformers';
import { correctQuery, normalizeQuery, extractDays } from './grammarCorrection';

// Comprehensive list of Indian locations for entity extraction
const allLocations = [
  // Metro cities
  'mumbai', 'delhi', 'bangalore', 'bengaluru', 'chennai', 'kolkata', 'hyderabad', 
  'pune', 'ahmedabad', 'jaipur', 'kochi', 'surat',
  // States
  'goa', 'kerala', 'rajasthan', 'maharashtra', 'karnataka', 'tamil nadu', 
  'west bengal', 'telangana', 'gujarat', 'madhya pradesh', 'uttar pradesh',
  'odisha', 'orissa', 'assam', 'punjab', 'haryana', 'himachal pradesh',
  'uttarakhand', 'jharkhand', 'chhattisgarh', 'bihar', 'andhra pradesh',
  'sikkim', 'meghalaya', 'tripura', 'mizoram', 'manipur', 'nagaland',
  'arunachal pradesh',
  // Union Territories
  'jammu and kashmir', 'kashmir', 'ladakh', 'puducherry', 'pondicherry',
  'andaman and nicobar', 'andaman', 'lakshadweep', 'chandigarh',
  // Popular destinations
  'manali', 'shimla', 'rishikesh', 'haridwar', 'varanasi', 'agra', 
  'udaipur', 'jodhpur', 'jaisalmer', 'darjeeling', 'gangtok', 
  'munnar', 'alleppey', 'ooty', 'kodaikanal', 'mysore', 'hampi',
  'khajuraho', 'bodh gaya', 'ajmer', 'pushkar', 'mount abu',
  'nainital', 'mussoorie', 'coorg', 'wayanad', 'kovalam',
  'puri', 'konark', 'bhubaneswar', 'cuttack', 'amritsar',
  'dharamshala', 'mcleodganj', 'kasol', 'spiti', 'leh', 'pangong',
  'srinagar', 'gulmarg', 'pahalgam', 'sonmarg',
  'visakhapatnam', 'vizag', 'tirupati', 'madurai', 'trichy',
  'rameswaram', 'kanyakumari', 'coimbatore', 'thanjavur',
  'pondicherry', 'mahabalipuram', 'chidambaram',
  'guwahati', 'kaziranga', 'shillong', 'cherrapunji', 'tawang',
  'aizawl', 'imphal', 'kohima', 'agartala',
  'ranchi', 'jamshedpur', 'patna', 'raipur', 'bhopal', 'indore',
  'gwalior', 'ujjain', 'sanchi', 'orchha', 'pachmarhi',
  'lucknow', 'ayodhya', 'mathura', 'vrindavan', 'fatehpur sikri',
  'dehradun', 'almora', 'jim corbett', 'auli', 'kedarnath', 'badrinath',
  'diu', 'daman', 'dwarka', 'somnath', 'kutch', 'rann of kutch',
  'lonavala', 'mahabaleshwar', 'shirdi', 'nashik', 'aurangabad',
  'ajanta', 'ellora', 'elephanta', 'alibag', 'matheran'
];

// NLP Service for intent detection, entity extraction, and sentiment analysis
class NLPService {
  private intentClassifier: any = null;
  private sentimentAnalyzer: any = null;
  private isInitialized = false;

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      console.log('Initializing NLP models...');
      
      // Initialize sentiment analysis
      this.sentimentAnalyzer = await pipeline(
        'sentiment-analysis',
        'Xenova/distilbert-base-uncased-finetuned-sst-2-english'
      );
      
      this.isInitialized = true;
      console.log('NLP models initialized successfully');
    } catch (error) {
      console.error('Error initializing NLP models:', error);
    }
  }

  // Correct and normalize user input
  correctInput(text: string): { corrected: string; normalized: ReturnType<typeof normalizeQuery> } {
    const corrected = correctQuery(text);
    const normalized = normalizeQuery(text);
    return { corrected, normalized };
  }

  // Intent detection using pattern matching + NLP enhancement
  async detectIntent(text: string): Promise<{
    intent: string;
    confidence: number;
    entities: { type: string; value: string }[];
    days: number | null;
  }> {
    // First correct the text
    const { corrected, normalized } = this.correctInput(text);
    const lowerText = corrected;
    
    // Intent patterns with confidence scores
    const intentPatterns = [
      { pattern: /\b(hello|hi|hey|namaste|hola)\b/, intent: 'greeting', confidence: 0.95 },
      { pattern: /\b(help|what can you do|capabilities)\b/, intent: 'help', confidence: 0.9 },
      { pattern: /\b(itinerary|iti|itin|plan.*day|(\d+)\s*day|trip.*(\d+)|tour\s*plan)\b/i, intent: 'itinerary', confidence: 0.9 },
      { pattern: /\b(plan|trip|travel|from .* to|journey|route)\b/, intent: 'trip_planning', confidence: 0.85 },
      { pattern: /\b(weather|climate|temperature|season)\b/, intent: 'weather_query', confidence: 0.85 },
      { pattern: /\b(food|eat|cuisine|dish|restaurant|famous food|must try|local food)\b/, intent: 'food_query', confidence: 0.88 },
      { pattern: /\b(attraction|visit|see|place|tourist|sightseeing|things to do|places to visit)\b/, intent: 'attraction_query', confidence: 0.88 },
      { pattern: /\b(culture|tradition|heritage|festival|dance|art|music)\b/, intent: 'culture_query', confidence: 0.85 },
      { pattern: /\b(history|historical|ancient|old|past|origin)\b/, intent: 'history_query', confidence: 0.85 },
      { pattern: /\b(hotel|stay|accommodation|resort|where to stay|lodging)\b/, intent: 'hotel_query', confidence: 0.85 },
      { pattern: /\b(cost|budget|expense|price|fare|cheap|affordable|money)\b/, intent: 'cost_query', confidence: 0.85 },
      { pattern: /\b(tell me about|about|information|what is|know about|describe)\b/, intent: 'location_info', confidence: 0.8 },
      { pattern: /\b(best time|when to visit|when should|ideal time|right time)\b/, intent: 'timing_query', confidence: 0.88 },
      { pattern: /\b(tips|advice|suggestion|recommend|should i|guide)\b/, intent: 'tips_query', confidence: 0.85 },
      { pattern: /\b(thank|thanks|bye|goodbye|ok|okay)\b/, intent: 'closing', confidence: 0.9 },
    ];

    // Find matching intent
    let detectedIntent = normalized.intent || 'general_query';
    let confidence = 0.5;
    
    for (const { pattern, intent, confidence: conf } of intentPatterns) {
      if (pattern.test(lowerText)) {
        detectedIntent = intent;
        confidence = conf;
        break;
      }
    }

    // Extract entities (locations, numbers, etc.)
    const entities = this.extractEntities(corrected);
    const days = normalized.days || extractDays(text);

    return { intent: detectedIntent, confidence, entities, days };
  }

  // Entity extraction for locations, numbers, dates
  extractEntities(text: string): { type: string; value: string }[] {
    const entities: { type: string; value: string }[] = [];
    const lowerText = text.toLowerCase();

    // Extract location entities
    allLocations.forEach(location => {
      if (lowerText.includes(location)) {
        entities.push({ type: 'LOCATION', value: location });
      }
    });

    // Extract numbers (days, prices, etc.)
    const numberMatch = text.match(/\b(\d+)\s*(day|days|night|nights|rupee|rupees|rs|₹|hr|hours|hour)?\b/gi);
    if (numberMatch) {
      numberMatch.forEach(match => {
        entities.push({ type: 'NUMBER', value: match });
      });
    }

    // Extract "from X to Y" patterns
    const fromToMatch = lowerText.match(/from\s+([a-z\s]+)\s+to\s+([a-z\s]+)/);
    if (fromToMatch) {
      entities.push({ type: 'SOURCE', value: fromToMatch[1].trim() });
      entities.push({ type: 'DESTINATION', value: fromToMatch[2].trim() });
    }

    return entities;
  }

  // Sentiment analysis
  async analyzeSentiment(text: string): Promise<{
    label: string;
    score: number;
  }> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      const result = await this.sentimentAnalyzer(text);
      return {
        label: result[0].label,
        score: result[0].score
      };
    } catch (error) {
      console.error('Sentiment analysis error:', error);
      return { label: 'NEUTRAL', score: 0.5 };
    }
  }

  // Context handling - analyze if query is a follow-up
  analyzeContext(
    currentQuery: string,
    conversationHistory: { role: string; content: string }[]
  ): {
    isFollowUp: boolean;
    contextualEntities: string[];
    suggestedContext: string;
  } {
    const lowerQuery = currentQuery.toLowerCase();
    
    // Check if it's a follow-up question
    const followUpIndicators = [
      'there', 'it', 'that place', 'also', 'more', 'what about',
      'tell me more', 'how about', 'and', 'additionally'
    ];
    
    const isFollowUp = followUpIndicators.some(indicator => 
      lowerQuery.includes(indicator)
    );

    // Extract context from previous messages
    const contextualEntities: string[] = [];
    const recentMessages = conversationHistory.slice(-3);
    
    recentMessages.forEach(msg => {
      const entities = this.extractEntities(msg.content);
      entities.forEach(entity => {
        if (entity.type === 'LOCATION' && !contextualEntities.includes(entity.value)) {
          contextualEntities.push(entity.value);
        }
      });
    });

    // Build contextual suggestion
    let suggestedContext = '';
    if (isFollowUp && contextualEntities.length > 0) {
      suggestedContext = `Continuing discussion about: ${contextualEntities.join(', ')}`;
    }

    return { isFollowUp, contextualEntities, suggestedContext };
  }

  // Process complete user message with NLP
  async processMessage(
    text: string,
    conversationHistory: { role: string; content: string }[] = []
  ): Promise<{
    intent: string;
    confidence: number;
    entities: { type: string; value: string }[];
    sentiment: { label: string; score: number };
    days: number | null;
    correctedQuery: string;
    context: {
      isFollowUp: boolean;
      contextualEntities: string[];
      suggestedContext: string;
    };
  }> {
    // Ensure models are initialized
    if (!this.isInitialized) {
      await this.initialize();
    }

    // Correct the input first
    const { corrected } = this.correctInput(text);

    // Run NLP analysis in parallel
    const [intentData, sentiment, context] = await Promise.all([
      this.detectIntent(text),
      this.analyzeSentiment(text),
      Promise.resolve(this.analyzeContext(text, conversationHistory))
    ]);

    console.log('NLP Analysis:', {
      original: text,
      corrected,
      intent: intentData.intent,
      confidence: intentData.confidence,
      entities: intentData.entities,
      days: intentData.days,
      sentiment,
      context
    });

    return {
      ...intentData,
      sentiment,
      correctedQuery: corrected,
      context
    };
  }
}

// Singleton instance
export const nlpService = new NLPService();
