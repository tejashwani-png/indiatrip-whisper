import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { indianStates } from "@/data/travelData";

const stateCoordinates: Record<string, { x: number; y: number }> = {
  "delhi": { x: 50, y: 30 },
  "maharashtra": { x: 40, y: 55 },
  "rajasthan": { x: 35, y: 35 },
  "kerala": { x: 42, y: 85 },
  "goa": { x: 38, y: 62 },
  "tamil nadu": { x: 48, y: 82 },
  "karnataka": { x: 42, y: 70 },
  "west bengal": { x: 70, y: 45 }
};

export const IndiaMap = ({ onBack }: { onBack: () => void }) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const stateData = selectedState ? indianStates[selectedState] : null;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="hover:bg-primary/20 absolute left-4 top-4"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">
            Explore India
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="glass-card border-primary/20 p-8 relative aspect-[3/4]">
            <div className="relative w-full h-full">
              {/* Simplified India Map SVG */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                style={{ filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))" }}
              >
                {/* India outline (simplified) */}
                <path
                  d="M 45 15 L 55 15 L 65 20 L 70 30 L 75 40 L 75 50 L 70 60 L 65 70 L 60 80 L 55 90 L 50 95 L 45 90 L 40 80 L 35 70 L 30 60 L 25 50 L 25 40 L 30 30 L 35 20 Z"
                  fill="hsl(var(--card))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="0.5"
                  className="transition-all duration-300"
                />

                {/* State markers */}
                {Object.entries(stateCoordinates).map(([stateName, coords]) => (
                  <g key={stateName}>
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r="2.5"
                      fill="hsl(var(--secondary))"
                      className="cursor-pointer transition-all duration-300 hover:r-4"
                      style={{
                        filter: selectedState === stateName 
                          ? "drop-shadow(0 0 10px hsl(var(--secondary)))" 
                          : ""
                      }}
                      onClick={() => setSelectedState(stateName)}
                    />
                    <circle
                      cx={coords.x}
                      cy={coords.y}
                      r="4"
                      fill="transparent"
                      className="cursor-pointer animate-glow-pulse"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="0.3"
                      onClick={() => setSelectedState(stateName)}
                    />
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 glass-card p-3 rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Click on markers</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary neon-glow-secondary" />
                  <span className="text-xs">States</span>
                </div>
              </div>
            </div>
          </Card>

          {/* State Information */}
          <div className="space-y-4">
            {stateData ? (
              <Card className="glass-card border-primary/20 p-6 animate-fade-in">
                <h2 className="text-3xl font-bold gradient-text mb-4">
                  {stateData.name}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">📍 Capital</h3>
                    <p className="text-muted-foreground">{stateData.capital}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">🏛️ Top Attractions</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {stateData.attractions.slice(0, 4).map((attraction, i) => (
                        <li key={i}>{attraction}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">🍛 Local Cuisine</h3>
                    <p className="text-muted-foreground">{stateData.food.slice(0, 3).join(", ")}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">🌤️ Best Time to Visit</h3>
                    <p className="text-muted-foreground">{stateData.bestTime}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">🎭 Culture</h3>
                    <p className="text-muted-foreground">{stateData.culture}</p>
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="glass-card border-primary/20 p-8 text-center">
                <div className="animate-float inline-block mb-4">
                  🗺️
                </div>
                <h3 className="text-xl font-semibold mb-2">Select a State</h3>
                <p className="text-muted-foreground">
                  Click on any marker on the map to explore state information
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};