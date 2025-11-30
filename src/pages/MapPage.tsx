import { useNavigate } from "react-router-dom";
import { IndiaMap } from "@/components/IndiaMap";

const MapPage = () => {
  const navigate = useNavigate();

  return <IndiaMap onBack={() => navigate("/")} />;
};

export default MapPage;
