import { useState } from "react";
import { ArrowLeft, MapPin, Bus, Train, Plane, Clock, Hotel, UtensilsCrossed } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface TripPlannerProps {
  onBack: () => void;
}

interface CityData {
  name: string;
  state: string;
  hotels: { name: string; price: string }[];
  restaurants: { name: string; type: string }[];
}

interface TripData {
  distance: number;
  busFare: string;
  trainFare: string;
  flightFare: string;
  busTime: string;
  trainTime: string;
  flightTime: string;
}

const cityData: Record<string, CityData> = {
  "mumbai": { name: "Mumbai", state: "Maharashtra", hotels: [{ name: "Hotel Sea Princess", price: "₹3000-5000" }, { name: "The Taj Mahal Palace", price: "₹15000-25000" }, { name: "FabHotel Prime", price: "₹1500-2500" }], restaurants: [{ name: "Britannia & Co", type: "Parsi Cuisine" }, { name: "Trishna", type: "Seafood" }, { name: "Café Mondegar", type: "Continental" }] },
  "delhi": { name: "Delhi", state: "Delhi", hotels: [{ name: "Hotel The Royal Plaza", price: "₹4000-6000" }, { name: "The Leela Palace", price: "₹18000-30000" }, { name: "FabHotel Prime", price: "₹1800-2800" }], restaurants: [{ name: "Karim's", type: "Mughlai" }, { name: "Indian Accent", type: "Modern Indian" }, { name: "Paranthe Wali Gali", type: "Street Food" }] },
  "bangalore": { name: "Bangalore", state: "Karnataka", hotels: [{ name: "The Oberoi", price: "₹12000-20000" }, { name: "Hotel Empire", price: "₹2500-4000" }, { name: "Treebo Trend", price: "₹1500-2500" }], restaurants: [{ name: "MTR", type: "South Indian" }, { name: "Toit", type: "Brewery" }, { name: "Koshy's", type: "Continental" }] },
  "chennai": { name: "Chennai", state: "Tamil Nadu", hotels: [{ name: "ITC Grand Chola", price: "₹10000-18000" }, { name: "Hotel Savera", price: "₹3000-5000" }, { name: "FabHotel", price: "₹1200-2000" }], restaurants: [{ name: "Murugan Idli Shop", type: "South Indian" }, { name: "Dakshin", type: "Regional South Indian" }, { name: "Annalakshmi", type: "Vegetarian" }] },
  "kolkata": { name: "Kolkata", state: "West Bengal", hotels: [{ name: "The Oberoi Grand", price: "₹9000-15000" }, { name: "Hotel Hindusthan International", price: "₹3500-5500" }, { name: "Treebo Trend", price: "₹1500-2500" }], restaurants: [{ name: "Peter Cat", type: "Continental" }, { name: "Arsalan", type: "Biryani" }, { name: "Flurys", type: "Bakery" }] },
  "hyderabad": { name: "Hyderabad", state: "Telangana", hotels: [{ name: "Taj Falaknuma Palace", price: "₹35000-50000" }, { name: "Hotel Sohail Grand", price: "₹2500-4000" }, { name: "FabHotel", price: "₹1300-2200" }], restaurants: [{ name: "Paradise Biryani", type: "Biryani" }, { name: "Chutneys", type: "South Indian" }, { name: "Bawarchi", type: "North Indian" }] },
  "pune": { name: "Pune", state: "Maharashtra", hotels: [{ name: "JW Marriott", price: "₹8000-14000" }, { name: "Hotel Sunderban", price: "₹2500-4000" }, { name: "Treebo Trend", price: "₹1400-2300" }], restaurants: [{ name: "Vaishali", type: "South Indian" }, { name: "Shabree", type: "Maharashtrian" }, { name: "Malaka Spice", type: "Asian" }] },
  "ahmedabad": { name: "Ahmedabad", state: "Gujarat", hotels: [{ name: "The House of MG", price: "₹6000-10000" }, { name: "Hotel Royal Highness", price: "₹2000-3500" }, { name: "FabHotel", price: "₹1200-2000" }], restaurants: [{ name: "Agashiye", type: "Gujarati Thali" }, { name: "Manek Chowk", type: "Street Food" }, { name: "Gopi Dining Hall", type: "Vegetarian" }] },
  "jaipur": { name: "Jaipur", state: "Rajasthan", hotels: [{ name: "Taj Rambagh Palace", price: "₹25000-40000" }, { name: "Hotel Pearl Palace", price: "₹2000-3500" }, { name: "Zostel Jaipur", price: "₹600-1200" }], restaurants: [{ name: "Laxmi Mishtan Bhandar", type: "Rajasthani Sweets" }, { name: "Chokhi Dhani", type: "Traditional Rajasthani" }, { name: "Handi Restaurant", type: "North Indian" }] },
  "kochi": { name: "Kochi", state: "Kerala", hotels: [{ name: "Taj Malabar Resort", price: "₹12000-20000" }, { name: "Eighth Bastion Hotel", price: "₹3000-5000" }, { name: "Fort House Hotel", price: "₹1800-3000" }], restaurants: [{ name: "Kayees Rahmathulla Cafe", type: "Biryani" }, { name: "Dhe Puttu", type: "Kerala Breakfast" }, { name: "Oceanos", type: "Seafood" }] },
  "goa": { name: "Goa", state: "Goa", hotels: [{ name: "Taj Exotica", price: "₹15000-25000" }, { name: "Pousada By The Beach", price: "₹3500-6000" }, { name: "Zostel Goa", price: "₹700-1500" }], restaurants: [{ name: "Fisherman's Wharf", type: "Goan Seafood" }, { name: "Vinayak Family Restaurant", type: "Goan Thali" }, { name: "Martin's Corner", type: "Seafood" }] }
};

const calculateTripData = (source: string, destination: string): TripData | null => {
  const distances: Record<string, Record<string, number>> = {
    "mumbai": { "delhi": 1400, "bangalore": 980, "chennai": 1340, "kolkata": 2000, "pune": 150, "goa": 580, "jaipur": 1170, "ahmedabad": 530, "kochi": 1420, "hyderabad": 710 },
    "delhi": { "mumbai": 1400, "bangalore": 2160, "chennai": 2200, "kolkata": 1470, "pune": 1460, "goa": 1870, "jaipur": 280, "ahmedabad": 940, "kochi": 2710, "hyderabad": 1580 },
    "bangalore": { "mumbai": 980, "delhi": 2160, "chennai": 350, "kolkata": 1880, "pune": 840, "goa": 560, "jaipur": 2050, "ahmedabad": 1490, "kochi": 540, "hyderabad": 570 },
    "chennai": { "mumbai": 1340, "delhi": 2200, "bangalore": 350, "kolkata": 1670, "pune": 1180, "goa": 710, "jaipur": 2100, "ahmedabad": 1660, "kochi": 690, "hyderabad": 630 },
    "kolkata": { "mumbai": 2000, "delhi": 1470, "bangalore": 1880, "chennai": 1670, "pune": 1960, "goa": 1950, "jaipur": 1550, "ahmedabad": 2040, "kochi": 2350, "hyderabad": 1500 },
    "pune": { "mumbai": 150, "delhi": 1460, "bangalore": 840, "chennai": 1180, "kolkata": 1960, "goa": 460, "jaipur": 1230, "ahmedabad": 670, "kochi": 1270, "hyderabad": 560 },
    "goa": { "mumbai": 580, "delhi": 1870, "bangalore": 560, "chennai": 710, "kolkata": 1950, "pune": 460, "jaipur": 1530, "ahmedabad": 1050, "kochi": 730, "hyderabad": 660 },
    "jaipur": { "mumbai": 1170, "delhi": 280, "bangalore": 2050, "chennai": 2100, "kolkata": 1550, "pune": 1230, "goa": 1530, "ahmedabad": 660, "kochi": 2600, "hyderabad": 1460 },
    "ahmedabad": { "mumbai": 530, "delhi": 940, "bangalore": 1490, "chennai": 1660, "kolkata": 2040, "pune": 670, "goa": 1050, "jaipur": 660, "kochi": 2080, "hyderabad": 1070 },
    "kochi": { "mumbai": 1420, "delhi": 2710, "bangalore": 540, "chennai": 690, "kolkata": 2350, "pune": 1270, "goa": 730, "jaipur": 2600, "ahmedabad": 2080, "hyderabad": 1120 },
    "hyderabad": { "mumbai": 710, "delhi": 1580, "bangalore": 570, "chennai": 630, "kolkata": 1500, "pune": 560, "goa": 660, "jaipur": 1460, "ahmedabad": 1070, "kochi": 1120 }
  };

  const dist = distances[source]?.[destination] || distances[destination]?.[source];
  if (!dist) return null;

  return {
    distance: dist,
    busFare: `₹${Math.round(dist * 0.8)}-${Math.round(dist * 1.2)}`,
    trainFare: `Sleeper: ₹${Math.round(dist * 0.6)}, 3AC: ₹${Math.round(dist * 1.0)}`,
    flightFare: `₹${Math.round(dist * 3.5)}-${Math.round(dist * 5.5)}`,
    busTime: `${Math.round(dist / 50)}-${Math.round(dist / 40)} hours`,
    trainTime: `${Math.round(dist / 60)}-${Math.round(dist / 50)} hours`,
    flightTime: `${Math.round(dist / 600)}-${Math.round(dist / 500)} hours`
  };
};

const TripPlanner = ({ onBack }: TripPlannerProps) => {
  const [source, setSource] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [tripResult, setTripResult] = useState<{ trip: TripData; sourceCity: CityData; destCity: CityData } | null>(null);

  const cities = Object.entries(cityData).map(([key, value]) => ({
    key,
    ...value
  }));

  const handlePlanTrip = () => {
    if (!source || !destination) return;
    
    const tripData = calculateTripData(source, destination);
    const sourceCity = cityData[source];
    const destCity = cityData[destination];
    
    if (tripData && sourceCity && destCity) {
      setTripResult({ trip: tripData, sourceCity, destCity });
    }
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
