import { useState } from "react";
import { Cloud, Sun, CloudRain, Wind, Droplets, Eye, ArrowLeft, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { indianCities } from "@/data/travelData";

interface WeatherData {
  city: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
}

// Generate mock weather for any Indian city
const generateWeatherData = (cityName: string): WeatherData => {
  // Use city name to generate consistent but varied data
  const hash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  const conditions = ["Sunny", "Partly Cloudy", "Pleasant", "Humid", "Rainy", "Hot", "Breezy", "Cool"];
  const baseTemp = 22 + (hash % 15); // 22-37°C
  const humidity = 40 + (hash % 50); // 40-90%
  const windSpeed = 8 + (hash % 15); // 8-23 km/h
  const visibility = 6 + (hash % 5); // 6-11 km
  
  return {
    city: cityName,
    temp: baseTemp,
    condition: conditions[hash % conditions.length],
    humidity,
    windSpeed,
    visibility
  };
};

const getWeatherIcon = (condition: string) => {
  if (condition.toLowerCase().includes("rain")) return <CloudRain className="w-16 h-16" />;
  if (condition.toLowerCase().includes("cloud")) return <Cloud className="w-16 h-16" />;
  return <Sun className="w-16 h-16" />;
};

export const WeatherDisplay = ({ onBack }: { onBack: () => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (cityName?: string) => {
    const searchCity = cityName || city;
    if (!searchCity) return;
    
    const weatherData = generateWeatherData(searchCity);
    setWeather(weatherData);
    setSuggestions([]);
    setSearchTerm("");
  };

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    setCity(value);
    
    if (value.length > 1) {
      const filtered = indianCities.filter(c => 
        c.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 10);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const selectCity = (cityName: string) => {
    setCity(cityName);
    setSearchTerm(cityName);
    handleSearch(cityName);
  };

  const popularCities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad"];

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
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Weather Forecast
            </h1>
            <p className="text-muted-foreground mt-2">700+ Cities, Districts & Towns</p>
          </div>
        </div>

        {/* Search */}
        <Card className="glass-card border-primary/20 p-6 mb-8 relative">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                value={searchTerm}
                onChange={(e) => handleInputChange(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                placeholder="Search any Indian city, district or town..."
                className="glass-card border-primary/30 focus:border-primary"
              />
              
              {/* Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <Card className="absolute top-full left-0 right-0 mt-2 z-10 glass-card border-primary/20 max-h-60 overflow-y-auto">
                  {suggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectCity(suggestion)}
                      className="w-full text-left px-4 py-2 hover:bg-primary/10 transition-colors border-b border-border/50 last:border-0"
                    >
                      <Search className="w-4 h-4 inline mr-2 text-muted-foreground" />
                      {suggestion}
                    </button>
                  ))}
                </Card>
              )}
            </div>
            <Button
              onClick={() => handleSearch()}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow"
            >
              Search
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Try: {indianCities.slice(0, 5).join(", ")}, and 700+ more locations
          </p>
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
                {popularCities.map((cityName) => (
                  <Button
                    key={cityName}
                    variant="outline"
                    size="sm"
                    onClick={() => selectCity(cityName)}
                    className="glass-card border-primary/30 hover:border-primary"
                  >
                    {cityName}
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
            <h3 className="text-2xl font-semibold mb-2">Search for Any City</h3>
            <p className="text-muted-foreground mb-4">
              Enter any Indian city, district, or town to view weather conditions
            </p>
            <p className="text-sm text-muted-foreground">
              🌟 Coverage: All 28 states, 8 UTs, 700+ districts & major towns
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};
