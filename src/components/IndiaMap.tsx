import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { indianStates } from "@/data/travelData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Comprehensive state coordinates for all 36 states/UTs
const stateCoordinates: Record<string, { x: number; y: number }> = {
  // North
  "jammu and kashmir": { x: 38, y: 15 },
  "ladakh": { x: 45, y: 12 },
  "himachal pradesh": { x: 42, y: 20 },
  "punjab": { x: 40, y: 23 },
  "chandigarh": { x: 42, y: 24 },
  "uttarakhand": { x: 48, y: 23 },
  "haryana": { x: 43, y: 26 },
  "delhi": { x: 45, y: 27 },
  "uttar pradesh": { x: 50, y: 32 },
  
  // Northeast
  "arunachal pradesh": { x: 75, y: 24 },
  "assam": { x: 73, y: 32 },
  "nagaland": { x: 76, y: 32 },
  "manipur": { x: 75, y: 36 },
  "mizoram": { x: 73, y: 40 },
  "tripura": { x: 72, y: 38 },
  "meghalaya": { x: 72, y: 34 },
  "sikkim": { x: 68, y: 28 },
  
  // East
  "west bengal": { x: 68, y: 38 },
  "bihar": { x: 62, y: 34 },
  "jharkhand": { x: 63, y: 38 },
  "odisha": { x: 64, y: 46 },
  
  // Central
  "madhya pradesh": { x: 48, y: 42 },
  "chhattisgarh": { x: 56, y: 46 },
  
  // West
  "rajasthan": { x: 38, y: 33 },
  "gujarat": { x: 35, y: 42 },
  "dadra and nagar haveli and daman and diu": { x: 36, y: 48 },
  
  // South West
  "goa": { x: 40, y: 58 },
  "maharashtra": { x: 43, y: 52 },
  
  // South
  "karnataka": { x: 44, y: 63 },
  "telangana": { x: 50, y: 54 },
  "andhra pradesh": { x: 52, y: 60 },
  "tamil nadu": { x: 50, y: 75 },
  "kerala": { x: 45, y: 77 },
  "puducherry": { x: 51, y: 73 },
  
  // Islands
  "andaman and nicobar": { x: 78, y: 70 },
  "lakshadweep": { x: 32, y: 75 }
};

export const IndiaMap = ({ onBack }: { onBack: () => void }) => {
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const stateData = selectedState ? indianStates[selectedState] : null;
  
  const statesList = Object.entries(indianStates).map(([key, value]) => ({
    key,
    name: value.name
  }));

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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Explore India
            </h1>
            <p className="text-muted-foreground mt-2">All 28 States & 8 Union Territories</p>
          </div>
        </div>

        {/* State Selector Dropdown */}
        <div className="mb-6 max-w-md mx-auto">
          <Select value={selectedState || ""} onValueChange={setSelectedState}>
            <SelectTrigger className="border-primary/20">
              <SelectValue placeholder="Select a state or union territory" />
            </SelectTrigger>
            <SelectContent className="max-h-[400px]">
              {statesList.sort((a, b) => a.name.localeCompare(b.name)).map((state) => (
                <SelectItem key={state.key} value={state.key}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
                {/* India outline (more detailed) */}
                <path
                  d="M 45 10 L 48 10 L 52 12 L 58 15 L 62 18 L 65 22 L 68 25 L 72 28 L 76 30 L 78 35 L 77 40 L 75 45 L 73 48 L 70 52 L 68 55 L 66 58 L 64 62 L 62 66 L 60 70 L 58 74 L 55 78 L 52 82 L 50 86 L 48 90 L 46 88 L 44 84 L 42 80 L 40 76 L 38 72 L 36 68 L 34 64 L 32 60 L 30 56 L 28 52 L 27 48 L 26 44 L 26 40 L 27 36 L 29 32 L 32 28 L 35 24 L 38 20 L 40 16 L 42 13 Z"
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
                      r="1.5"
                      fill="hsl(var(--secondary))"
                      className="cursor-pointer transition-all duration-300 hover:r-3"
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
                      r="3"
                      fill="transparent"
                      className="cursor-pointer animate-glow-pulse"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="0.2"
                      onClick={() => setSelectedState(stateName)}
                    />
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 glass-card p-3 rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Click markers or use dropdown</p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary neon-glow-secondary" />
                  <span className="text-xs">36 States/UTs</span>
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
                <div className="animate-float inline-block mb-4 text-6xl">
                  🗺️
                </div>
                <h3 className="text-xl font-semibold mb-2">Select a State or Union Territory</h3>
                <p className="text-muted-foreground">
                  Click on any marker on the map or use the dropdown above to explore
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  🌟 Now featuring all 36 states and union territories of India!
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
