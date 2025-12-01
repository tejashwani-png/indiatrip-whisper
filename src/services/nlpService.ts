import { pipeline } from '@huggingface/transformers';

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

  // Intent detection using pattern matching + NLP enhancement
  async detectIntent(text: string): Promise<{
    intent: string;
    confidence: number;
    entities: { type: string; value: string }[];
  }> {
    const lowerText = text.toLowerCase();
    
    // Intent patterns with confidence scores
    const intentPatterns = [
      { pattern: /\b(hello|hi|hey|namaste)\b/, intent: 'greeting', confidence: 0.95 },
      { pattern: /\b(help|what can you do|capabilities)\b/, intent: 'help', confidence: 0.9 },
      { pattern: /\b(plan|trip|travel|from .* to|journey)\b/, intent: 'trip_planning', confidence: 0.85 },
      { pattern: /\b(weather|climate|temperature|season)\b/, intent: 'weather_query', confidence: 0.85 },
      { pattern: /\b(food|eat|cuisine|dish|restaurant)\b/, intent: 'food_query', confidence: 0.85 },
      { pattern: /\b(attraction|visit|see|place|tourist|sightseeing)\b/, intent: 'attraction_query', confidence: 0.85 },
      { pattern: /\b(culture|tradition|heritage|festival)\b/, intent: 'culture_query', confidence: 0.85 },
      { pattern: /\b(tell me about|about|information|what is)\b/, intent: 'location_info', confidence: 0.8 },
      { pattern: /\b(best time|when to visit|when should)\b/, intent: 'timing_query', confidence: 0.85 },
      { pattern: /\b(itinerary|plan|days|schedule)\b/, intent: 'itinerary_query', confidence: 0.85 },
    ];

    // Find matching intent
    let detectedIntent = 'general_query';
    let confidence = 0.5;
    
    for (const { pattern, intent, confidence: conf } of intentPatterns) {
      if (pattern.test(lowerText)) {
        detectedIntent = intent;
        confidence = conf;
        break;
      }
    }

    // Extract entities (locations, numbers, etc.)
    const entities = this.extractEntities(text);

    return { intent: detectedIntent, confidence, entities };
  }

  // Entity extraction for locations, numbers, dates
  extractEntities(text: string): { type: string; value: string }[] {
    const entities: { type: string; value: string }[] = [];
    const lowerText = text.toLowerCase();

    // Extract location entities (common Indian cities/states)
    const locations = [
      'mumbai', 'delhi', 'bangalore', 'chennai', 'kolkata', 'hyderabad', 
      'pune', 'ahmedabad', 'jaipur', 'kochi', 'goa', 'kerala', 'rajasthan',
      'maharashtra', 'karnataka', 'tamil nadu', 'west bengal', 'telangana',
      'gujarat', 'kashmir', 'ladakh', 'sikkim', 'meghalaya', 'assam'
    ];

    locations.forEach(location => {
      if (lowerText.includes(location)) {
        entities.push({ type: 'LOCATION', value: location });
      }
    });

    // Extract numbers (days, prices, etc.)
    const numberMatch = text.match(/\b(\d+)\s*(day|days|rupee|rupees|rs|₹)?\b/gi);
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

    // Run NLP analysis in parallel
    const [intentData, sentiment, context] = await Promise.all([
      this.detectIntent(text),
      this.analyzeSentiment(text),
      Promise.resolve(this.analyzeContext(text, conversationHistory))
    ]);

    console.log('NLP Analysis:', {
      intent: intentData.intent,
      confidence: intentData.confidence,
      entities: intentData.entities,
      sentiment,
      context
    });

    return {
      ...intentData,
      sentiment,
      context
    };
  }
}

// Singleton instance
export const nlpService = new NLPService();
