import { useState, useMemo } from "react";
import { ArrowLeft, MapPin, Bus, Train, Plane, Clock, Hotel, UtensilsCrossed, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { allIndianLocations, calculateTripData, getAllLocationsForDropdown, getAllStates } from "@/data/tripPlannerLocations";

interface TripPlannerProps {
  onBack: () => void;
}

const TripPlanner = ({ onBack }: TripPlannerProps) => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [sourceSearch, setSourceSearch] = useState("");
  const [destSearch, setDestSearch] = useState("");
  const [showSourceDropdown, setShowSourceDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [tripResult, setTripResult] = useState<{
    trip: ReturnType<typeof calculateTripData>;
    sourceCity: typeof allIndianLocations[string];
    destCity: typeof allIndianLocations[string];
  } | null>(null);

  const allLocations = useMemo(() => getAllLocationsForDropdown(), []);
  const allStates = useMemo(() => getAllStates(), []);

  const filteredSourceLocations = useMemo(() => {
    if (!sourceSearch) return allLocations.slice(0, 50);
    const search = sourceSearch.toLowerCase();
    return allLocations
      .filter(loc => 
        loc.name.toLowerCase().includes(search) ||
        loc.state.toLowerCase().includes(search) ||
        loc.key.includes(search)
      )
      .filter(loc => loc.key !== destination)
      .slice(0, 50);
  }, [sourceSearch, allLocations, destination]);

  const filteredDestLocations = useMemo(() => {
    if (!destSearch) return allLocations.slice(0, 50);
    const search = destSearch.toLowerCase();
    return allLocations
      .filter(loc => 
        loc.name.toLowerCase().includes(search) ||
        loc.state.toLowerCase().includes(search) ||
        loc.key.includes(search)
      )
      .filter(loc => loc.key !== source)
      .slice(0, 50);
  }, [destSearch, allLocations, source]);

  const handlePlanTrip = () => {
    if (!source || !destination) return;
    
    const tripData = calculateTripData(source, destination);
    const sourceCity = allIndianLocations[source];
    const destCity = allIndianLocations[destination];
    
    if (tripData && sourceCity && destCity) {
      setTripResult({ trip: tripData, sourceCity, destCity });
    }
  };

  const selectSource = (key: string, name: string) => {
    setSource(key);
    setSourceSearch(name);
    setShowSourceDropdown(false);
  };

  const selectDestination = (key: string, name: string) => {
    setDestination(key);
    setDestSearch(name);
    setShowDestDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Button
            onClick={onBack}
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trip Planner
            </h1>
            <p className="text-muted-foreground mt-1">Plan your journey across India</p>
          </div>
        </div>

        {/* Selection Card */}
        <Card className="mb-8 border-2 border-primary/20 shadow-glow animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Select Your Journey
            </CardTitle>
            <CardDescription>Choose your source and destination cities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <Select value={source} onValueChange={setSource}>
                  <SelectTrigger className="border-primary/20">
                    <SelectValue placeholder="Select source city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.key} value={city.key} disabled={city.key === destination}>
                        {city.name}, {city.state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <Select value={destination} onValueChange={setDestination}>
                  <SelectTrigger className="border-primary/20">
                    <SelectValue placeholder="Select destination city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.key} value={city.key} disabled={city.key === source}>
                        {city.name}, {city.state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  onClick={handlePlanTrip} 
                  disabled={!source || !destination}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Plan Trip
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {tripResult && (
          <div className="space-y-6 animate-fade-in">
            {/* Route Info */}
            <Card className="border-2 border-accent/20 shadow-glow">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {tripResult.sourceCity.name} → {tripResult.destCity.name}
                </CardTitle>
                <CardDescription className="text-lg">
                  Distance: {tripResult.trip.distance} km
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Travel Options */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="hover-scale border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bus className="h-5 w-5 text-primary" />
                    Bus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{tripResult.trip.busTime}</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{tripResult.trip.busFare}</p>
                </CardContent>
              </Card>

              <Card className="hover-scale border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="h-5 w-5 text-primary" />
                    Train
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{tripResult.trip.trainTime}</span>
                  </div>
                  <p className="text-lg font-bold text-primary">{tripResult.trip.trainFare}</p>
                </CardContent>
              </Card>

              <Card className="hover-scale border-2 border-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-primary" />
                    Flight
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{tripResult.trip.flightTime}</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">{tripResult.trip.flightFare}</p>
                </CardContent>
              </Card>
            </div>

            {/* Hotels */}
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hotel className="h-5 w-5 text-accent" />
                  Hotels in {tripResult.destCity.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {tripResult.destCity.hotels.map((hotel, index) => (
                    <div key={index} className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="font-semibold">{hotel.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{hotel.price}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Restaurants */}
            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UtensilsCrossed className="h-5 w-5 text-accent" />
                  Top Restaurants
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {tripResult.destCity.restaurants.map((restaurant, index) => (
                    <div key={index} className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <p className="font-semibold">{restaurant.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{restaurant.type}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;
