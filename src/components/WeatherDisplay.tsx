import { useState } from "react";
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
}

const mockWeatherData: Record<string, WeatherData> = {
  "delhi": { city: "Delhi", temp: 28, condition: "Sunny", humidity: 45, windSpeed: 12, visibility: 10 },
  "mumbai": { city: "Mumbai", temp: 32, condition: "Partly Cloudy", humidity: 75, windSpeed: 15, visibility: 8 },
  "bangalore": { city: "Bangalore", temp: 25, condition: "Pleasant", humidity: 60, windSpeed: 8, visibility: 10 },
  "chennai": { city: "Chennai", temp: 34, condition: "Hot", humidity: 80, windSpeed: 10, visibility: 9 },
  "kolkata": { city: "Kolkata", temp: 30, condition: "Humid", humidity: 85, windSpeed: 11, visibility: 7 },
  "jaipur": { city: "Jaipur", temp: 35, condition: "Hot & Dry", humidity: 30, windSpeed: 14, visibility: 10 },
  "goa": { city: "Goa", temp: 29, condition: "Breezy", humidity: 70, windSpeed: 18, visibility: 10 },
  "kochi": { city: "Kochi", temp: 27, condition: "Rainy", humidity: 90, windSpeed: 9, visibility: 6 }
};

const getWeatherIcon = (condition: string) => {
  if (condition.toLowerCase().includes("rain")) return <CloudRain className="w-16 h-16" />;
  if (condition.toLowerCase().includes("cloud")) return <Cloud className="w-16 h-16" />;
  return <Sun className="w-16 h-16" />;
};

export const WeatherDisplay = ({ onBack }: { onBack: () => void }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const handleSearch = () => {
    const cityKey = city.toLowerCase();
    const data = mockWeatherData[cityKey];
    if (data) {
      setWeather(data);
    } else {
      // Default weather for unknown cities
      setWeather({
        city: city,
        temp: 28,
        condition: "Pleasant",
        humidity: 60,
        windSpeed: 10,
        visibility: 9
      });
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
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
            Weather Forecast
          </h1>
        </div>

        {/* Search */}
        <Card className="glass-card border-primary/20 p-6 mb-8">
          <div className="flex gap-2">
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Enter city name (e.g., Delhi, Mumbai, Bangalore...)"
              className="flex-1 glass-card border-primary/30 focus:border-primary"
            />
            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow"
            >
              Search
            </Button>
          </div>
        </Card>

        {/* Weather Display */}
        {weather ? (
          <div className="space-y-6 animate-fade-in">
            {/* Main Weather Card */}
            <Card className="glass-card border-primary/20 p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">{weather.city}</h2>
              
              <div className="flex justify-center mb-6">
                <div className="text-secondary animate-float">
                  {getWeatherIcon(weather.condition)}
                </div>
              </div>

              <div className="text-6xl font-bold gradient-text mb-2">
                {weather.temp}°C
              </div>
              <p className="text-xl text-muted-foreground">{weather.condition}</p>
            </Card>

            {/* Weather Details */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="glass-card border-primary/20 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Droplets className="w-6 h-6 text-secondary" />
                  <span className="text-sm text-muted-foreground">Humidity</span>
                </div>
                <p className="text-2xl font-bold">{weather.humidity}%</p>
              </Card>

              <Card className="glass-card border-primary/20 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="w-6 h-6 text-secondary" />
                  <span className="text-sm text-muted-foreground">Wind Speed</span>
                </div>
                <p className="text-2xl font-bold">{weather.windSpeed} km/h</p>
              </Card>

              <Card className="glass-card border-primary/20 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-6 h-6 text-secondary" />
                  <span className="text-sm text-muted-foreground">Visibility</span>
                </div>
                <p className="text-2xl font-bold">{weather.visibility} km</p>
              </Card>
            </div>

            {/* Popular Cities */}
            <Card className="glass-card border-primary/20 p-6">
              <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
              <div className="flex flex-wrap gap-2">
                {Object.keys(mockWeatherData).map((cityKey) => (
                  <Button
                    key={cityKey}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCity(cityKey);
                      setWeather(mockWeatherData[cityKey]);
                    }}
                    className="glass-card border-primary/30 hover:border-primary"
                  >
                    {mockWeatherData[cityKey].city}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        ) : (
          <Card className="glass-card border-primary/20 p-12 text-center">
            <div className="animate-float inline-block mb-4 text-6xl">
              🌤️
            </div>
            <h3 className="text-2xl font-semibold mb-2">Search for a City</h3>
            <p className="text-muted-foreground">
              Enter a city name to view current weather conditions
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};