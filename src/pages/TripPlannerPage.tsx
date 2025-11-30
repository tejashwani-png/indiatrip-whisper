import { useNavigate } from "react-router-dom";
import TripPlanner from "@/components/TripPlanner";

const TripPlannerPage = () => {
  const navigate = useNavigate();

  return <TripPlanner onBack={() => navigate("/")} />;
};

export default TripPlannerPage;
