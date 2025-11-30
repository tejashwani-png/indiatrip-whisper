import { useNavigate } from "react-router-dom";
import { ChatInterface } from "@/components/ChatInterface";

const ChatPage = () => {
  const navigate = useNavigate();

  return <ChatInterface onBack={() => navigate("/")} />;
};

export default ChatPage;
