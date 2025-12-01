import { nlpService } from './nlpService';
import { getChatbotResponse } from '../data/travelData';

// Enhanced chatbot response with NLP integration
export async function getEnhancedChatbotResponse(
  query: string,
  conversationHistory: { role: string; content: string }[] = []
): Promise<{
  response: string;
  nlpMetadata: {
    intent: string;
    confidence: number;
    entities: { type: string; value: string }[];
    sentiment: { label: string; score: number };
    context: any;
  };
}> {
  // Process message through NLP pipeline
  const nlpAnalysis = await nlpService.processMessage(query, conversationHistory);

  // Enhance query with contextual information if it's a follow-up
  let enhancedQuery = query;
  if (nlpAnalysis.context.isFollowUp && nlpAnalysis.context.contextualEntities.length > 0) {
    // If query is vague like "tell me more" or "what about food there"
    const vaguePatterns = /^(tell me more|what about|how about|and|also)/i;
    if (vaguePatterns.test(query.trim())) {
      // Add context from previous location
      const lastLocation = nlpAnalysis.context.contextualEntities[0];
      enhancedQuery = query.replace(
        /(tell me more|what about|how about)/i,
        `$1 ${lastLocation}`
      );
    }
  }

  // Handle ambiguous queries with sentiment awareness
  let baseResponse = getChatbotResponse(enhancedQuery);

  // Add sentiment-aware responses
  if (nlpAnalysis.sentiment.label === 'NEGATIVE' && nlpAnalysis.sentiment.score > 0.7) {
    if (baseResponse.includes('🤔')) {
      baseResponse = baseResponse.replace('🤔', '😊') + '\n\n💡 I noticed you might be frustrated. Let me help you better! Try asking about specific places like "Tell me about Mumbai" or "Plan trip from Delhi to Goa".';
    }
  }

  // Add intent-specific enhancements
  if (nlpAnalysis.intent === 'greeting' && conversationHistory.length > 2) {
    baseResponse = `👋 Welcome back! How can I assist you with your India travel plans today?\n\nYou can ask me about any state, city, attractions, food, or plan trips between cities!`;
  }

  // Add context awareness note if follow-up
  if (nlpAnalysis.context.isFollowUp && nlpAnalysis.context.suggestedContext) {
    baseResponse = `📍 ${nlpAnalysis.context.suggestedContext}\n\n` + baseResponse;
  }

  // Add entity extraction hints if entities found but query unclear
  if (nlpAnalysis.entities.length > 0 && nlpAnalysis.confidence < 0.7) {
    const locations = nlpAnalysis.entities
      .filter(e => e.type === 'LOCATION')
      .map(e => e.value);
    
    if (locations.length > 0) {
      baseResponse += `\n\n💡 I detected you mentioned: ${locations.join(', ')}. Feel free to ask specific questions about these places!`;
    }
  }

  return {
    response: baseResponse,
    nlpMetadata: nlpAnalysis
  };
}
