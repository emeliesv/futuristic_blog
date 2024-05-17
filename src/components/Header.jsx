import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="grid grid-cols-2 bg-blue-200 px-6 py-10">
      <Link to="/home">
        <p className="justify-self-start logo">BLOGO</p>
      </Link>
      <Nav className="justify-self-end" />
    </header>
  );
};

export default Header;
