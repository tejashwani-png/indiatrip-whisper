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
      {/* Advanced animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-8 relative">
            <div className="text-8xl md:text-9xl animate-float drop-shadow-2xl">🇮🇳</div>
            <div className="absolute inset-0 blur-2xl opacity-50 animate-glow-pulse">🇮🇳</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
            <span className="gradient-text drop-shadow-lg">India Travel AI</span>
          </h1>
          <p className="text-xl md:text-3xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed font-light">
            Your intelligent companion for exploring the incredible diversity of India
          </p>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {/* Chatbot Card */}
          <Card
            onClick={() => setActiveView("chat")}
            className="glass-card border-primary/30 p-10 cursor-pointer group hover:scale-[1.02] transition-all duration-500 hover:neon-glow animate-fade-in relative overflow-hidden"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-[2px] group-hover:animate-float">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <MessageSquare className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">AI Chatbot</h3>
              <p className="text-muted-foreground/90 leading-relaxed text-base">
                Chat with our intelligent assistant for personalized travel recommendations, itineraries, and insights
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 text-sm font-medium text-primary group-hover:bg-primary/30 transition-colors">
                Start chatting
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Card>

          {/* Map Card */}
          <Card
            onClick={() => setActiveView("map")}
            className="glass-card border-secondary/30 p-10 cursor-pointer group hover:scale-[1.02] transition-all duration-500 hover:neon-glow-secondary animate-fade-in relative overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-secondary via-primary to-secondary p-[2px] group-hover:animate-float">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <Map className="w-12 h-12 text-secondary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Interactive Map</h3>
              <p className="text-muted-foreground/90 leading-relaxed text-base">
                Explore India state by state with an interactive map showing attractions, culture, and travel tips
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/20 text-sm font-medium text-secondary group-hover:bg-secondary/30 transition-colors">
                Explore map
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Card>

          {/* Weather Card */}
          <Card
            onClick={() => setActiveView("weather")}
            className="glass-card border-accent/30 p-10 cursor-pointer group hover:scale-[1.02] transition-all duration-500 hover:neon-glow animate-fade-in relative overflow-hidden"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center relative z-10">
              <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-accent via-secondary to-accent p-[2px] group-hover:animate-float">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <Cloud className="w-12 h-12 text-accent" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">Weather Info</h3>
              <p className="text-muted-foreground/90 leading-relaxed text-base">
                Check real-time weather conditions for any Indian city to plan your trip perfectly
              </p>
              <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/20 text-sm font-medium text-accent group-hover:bg-accent/30 transition-colors">
                Check weather
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Features List */}
        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Card className="glass-card border-primary/30 p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Everything You Need to Explore India
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors duration-300 group">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🏛️</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Famous Attractions</h4>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">Discover iconic landmarks and hidden gems across the country</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-secondary/5 transition-colors duration-300 group">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🍛</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Local Cuisine</h4>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">Explore authentic regional delicacies and culinary traditions</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors duration-300 group">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">🎭</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Rich Culture</h4>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">Learn about diverse traditions and vibrant festivals</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors duration-300 group">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">📅</span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Travel Itineraries</h4>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">Get personalized day-wise travel plans tailored for you</p>
                  </div>
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