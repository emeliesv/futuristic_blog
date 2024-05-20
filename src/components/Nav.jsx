import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { signOutUser } from "../firebase/authFunctions";
import { AuthContext } from "../context/AuthContext";

const Nav = () => {
  const { userLoggedIn } = useContext(AuthContext);

  return (
    <nav className="flex justify-end items-center">
      {userLoggedIn ? (
        <>
          <Link to={"/about"} className="mx-2 hover:underline">
            About
          </Link>
          <Link to={"/userpage"} className="mx-2 hover:underline">
            Your page
          </Link>
          <Button
            buttonText="Log out"
            toggleLogIn={signOutUser}
            className="mx-2"
          />
        </>
      ) : (
        <Link to={"/login"} className="mx-2">
          Log in
        </Link>
      )}
    </nav>
  );
};

export default Nav;
