import { Link } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { signOutUser } from "../firebase/authFunctions";
import { AuthContext } from "../context/AuthContext";

const Nav = () => {
  const { currentUser, userLoggedIn } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <nav className="flex col-start-2 justify-end">
      {userLoggedIn ? (
        <>
          <p className="mx-2">Welcome {currentUser.email}!</p>
          <Button
            buttonText="Log out"
            toggleLogIn={signOutUser}
            className="mx-2"
          />
          <Link to={"/about"} className="mx-2">
            About
          </Link>
          <Link to={"/userpage"} className="mx-2">
            Your page
          </Link>
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
