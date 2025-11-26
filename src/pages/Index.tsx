import { useState } from "react";
import { MessageSquare, Map, Cloud } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ChatInterface } from "@/components/ChatInterface";
import { IndiaMap } from "@/components/IndiaMap";
import { WeatherDisplay } from "@/components/WeatherDisplay";

const Index = () => {
  const [activeView, setActiveView] = useState<"home" | "chat" | "map" | "weather">("home");

  if (activeView === "chat") return <ChatInterface onBack={() => setActiveView("home")} />;
  if (activeView === "map") return <IndiaMap onBack={() => setActiveView("home")} />;
  if (activeView === "weather") return <WeatherDisplay onBack={() => setActiveView("home")} />;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="text-7xl md:text-8xl animate-float">🇮🇳</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">India Travel AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your intelligent companion for exploring the incredible diversity of India
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Chatbot Card */}
          <Card
            onClick={() => setActiveView("chat")}
            className="glass-card border-primary/20 p-8 cursor-pointer group hover:scale-105 transition-all duration-300 hover:neon-glow animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-float">
                <MessageSquare className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">AI Chatbot</h3>
              <p className="text-muted-foreground">
                Chat with our intelligent assistant for personalized travel recommendations, itineraries, and insights
              </p>
              <div className="mt-6 inline-block px-4 py-2 rounded-full bg-primary/20 text-sm text-primary">
                Click to chat →
              </div>
            </div>
          </Card>

          {/* Map Card */}
          <Card
            onClick={() => setActiveView("map")}
            className="glass-card border-secondary/20 p-8 cursor-pointer group hover:scale-105 transition-all duration-300 hover:neon-glow-secondary animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center group-hover:animate-float">
                <Map className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">Interactive Map</h3>
              <p className="text-muted-foreground">
                Explore India state by state with an interactive map showing attractions, culture, and travel tips
              </p>
              <div className="mt-6 inline-block px-4 py-2 rounded-full bg-secondary/20 text-sm text-secondary">
                Explore map →
              </div>
            </div>
          </Card>

          {/* Weather Card */}
          <Card
            onClick={() => setActiveView("weather")}
            className="glass-card border-accent/20 p-8 cursor-pointer group hover:scale-105 transition-all duration-300 hover:neon-glow animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center group-hover:animate-float">
                <Cloud className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 gradient-text">Weather Info</h3>
              <p className="text-muted-foreground">
                Check real-time weather conditions for any Indian city to plan your trip perfectly
              </p>
              <div className="mt-6 inline-block px-4 py-2 rounded-full bg-accent/20 text-sm text-accent">
                Check weather →
              </div>
            </div>
          </Card>
        </div>

        {/* Features List */}
        <div className="mt-16 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="glass-card border-primary/20 p-8">
            <h2 className="text-2xl font-bold text-center mb-6 gradient-text">
              Everything You Need to Explore India
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h4 className="font-semibold mb-1">Famous Attractions</h4>
                  <p className="text-sm text-muted-foreground">Discover iconic landmarks and hidden gems</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🍛</span>
                <div>
                  <h4 className="font-semibold mb-1">Local Cuisine</h4>
                  <p className="text-sm text-muted-foreground">Explore authentic regional delicacies</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <h4 className="font-semibold mb-1">Rich Culture</h4>
                  <p className="text-sm text-muted-foreground">Learn about traditions and festivals</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <h4 className="font-semibold mb-1">Travel Itineraries</h4>
                  <p className="text-sm text-muted-foreground">Get personalized day-wise travel plans</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;