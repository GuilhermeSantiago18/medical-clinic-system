import HomeAdm from "./HomeAdm";
import HomeDoctor from "./HomeDoctor";
import { useAuth } from "@/context/AuthContext";

export default function MyApp() {
  const { userName } = useAuth();

  return userName === "doctor@gmail.com" ? <HomeDoctor /> : <HomeAdm />;
}
