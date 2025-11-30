import { useNavigate } from "react-router-dom";
import { WeatherDisplay } from "@/components/WeatherDisplay";

const WeatherPage = () => {
  const navigate = useNavigate();

  return <WeatherDisplay onBack={() => navigate("/")} />;
};

export default WeatherPage;
