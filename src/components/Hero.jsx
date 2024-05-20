import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Hero = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="h-80 flex flex-col items-center justify-center">
      <h2>Welcome</h2>
      <h2 className="py-2">{currentUser.email}</h2>
    </div>
  );
};

export default Hero;
