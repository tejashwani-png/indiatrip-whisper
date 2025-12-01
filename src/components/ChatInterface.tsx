import { useState, useRef, useEffect } from "react";
import { Send, Brain, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getEnhancedChatbotResponse } from "@/services/enhancedChatbot";
import { nlpService } from "@/services/nlpService";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
  nlpMetadata?: {
    intent: string;
    confidence: number;
    sentiment: { label: string; score: number };
  };
}

export const ChatInterface = ({ onBack }: { onBack: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "🙏 Namaste! I'm BharatExplore Bot - your AI pathfinder for India. I use advanced Natural Language Processing to understand your questions naturally.\n\n✨ Ask me anything about:\n• Any Indian state, city, or town\n• Tourist attractions & places to visit\n• Local cuisine & restaurants\n• Cultural insights & traditions\n• Trip planning between cities\n• Weather & best time to visit\n\nI understand context, sentiment, and can handle follow-up questions!\n\nTry: 'What's special about Kerala?' or 'Plan my trip from Mumbai to Goa'",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [nlpInitialized, setNlpInitialized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize NLP models on mount
  useEffect(() => {
    const initNLP = async () => {
      await nlpService.initialize();
      setNlpInitialized(true);
    };
    initNLP();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !nlpInitialized) return;

    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      // Get conversation history for context
      const conversationHistory = messages.map(msg => ({
        role: msg.isBot ? "assistant" : "user",
        content: msg.text
      }));

      // Process through NLP-enhanced chatbot
      const { response, nlpMetadata } = await getEnhancedChatbotResponse(
        currentInput,
        conversationHistory
      );

      const botMessage: Message = {
        text: response,
        isBot: true,
        timestamp: new Date(),
        nlpMetadata: {
          intent: nlpMetadata.intent,
          confidence: nlpMetadata.confidence,
          sentiment: nlpMetadata.sentiment
        }
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage: Message = {
        text: "I apologize, I'm having trouble processing your request. Please try again!",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="glass-card border-b border-primary/20 p-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="hover:bg-primary/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow animate-float">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold gradient-text">BharatExplore Bot</h2>
            <p className="text-sm text-muted-foreground">Explore every corner of India with your personal AI pathfinder</p>
            {!nlpInitialized ? (
              <div className="mt-1 text-xs bg-muted px-2 py-0.5 rounded-full inline-block">
                🧠 Initializing NLP engine...
              </div>
            ) : (
              <div className="mt-1 text-xs bg-primary/20 px-2 py-0.5 rounded-full inline-block">
                ✅ NLP Ready • Context-aware • Sentiment analysis
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 animate-slide-up ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              {message.isBot && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
              
              <div className="max-w-[70%]">
                <div
                  className={`rounded-2xl p-4 ${
                    message.isBot
                      ? "glass-card border border-primary/20"
                      : "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                  <span className="text-xs opacity-60 mt-2 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {message.nlpMetadata && message.isBot && (
                  <div className="text-xs text-muted-foreground mt-1 px-2 flex gap-1.5 flex-wrap">
                    <span className="bg-muted px-2 py-0.5 rounded-full">
                      Intent: {message.nlpMetadata.intent.replace(/_/g, ' ')}
                    </span>
                    <span className="bg-muted px-2 py-0.5 rounded-full">
                      {(message.nlpMetadata.confidence * 100).toFixed(0)}% confident
                    </span>
                    <span className="bg-muted px-2 py-0.5 rounded-full">
                      Sentiment: {message.nlpMetadata.sentiment.label}
                    </span>
                  </div>
                )}
              </div>

              {!message.isBot && (
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-accent-foreground" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start animate-slide-up">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="glass-card border border-primary/20 rounded-2xl p-4">
                <div className="flex gap-2 items-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" style={{ animationDelay: "0.4s" }} />
                  <span className="text-xs text-muted-foreground ml-2">Processing with NLP...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="glass-card border-t border-primary/20 p-4">
        <div className="max-w-4xl mx-auto flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me about travel destinations, food, culture..."
            className="flex-1 glass-card border-primary/30 focus:border-primary"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow"
            disabled={!nlpInitialized || isTyping}
          >
            {isTyping ? (
              <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};