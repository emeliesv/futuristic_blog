import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <header className="grid grid-cols-2 bg-purple-100 px-6 py-10 border-b border-solid border-purple-950">
      <div className="flex flex-col">
        <Link to="/home">
          <p className="justify-self-start logo">BLOGO</p>
        </Link>
        {currentUser && (
          <p className="text-lg font-serif font-medium">
            Welcome {currentUser.email}!
          </p>
        )}
      </div>
      <Nav className="justify-self-end" />
    </header>
  );
};

export default Header;
