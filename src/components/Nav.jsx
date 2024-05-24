import { Link } from "react-router-dom";
import Button from "./Button";
import Burger from "./Burger";
import { useContext, useState } from "react";
import { signOutUser } from "../firebase/authFunctions";
import { AuthContext } from "../context/AuthContext";

const Nav = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleBurger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className="flex justify-end items-center">
      {userLoggedIn ? (
        <div>
          <div className="hidden md:flex">
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
          </div>

          <div
            className="block md:hidden absolute top-7 right-10"
            onClick={toggleBurger}
          >
            <Burger isOpen={hamburgerOpen} />
            {hamburgerOpen && (
              <div className="flex flex-col bg-purple-100 pb-4 pr-2 border border-solid border-purple-950">
                <Link
                  to={"/about"}
                  className="mt-2 underline font-semibold text-right"
                >
                  About
                </Link>
                <Link
                  to={"/userpage"}
                  className="mt-2 mb-4 underline font-semibold text-right"
                >
                  Your page
                </Link>
                <Button buttonText="Log out" toggleLogIn={signOutUser} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Link to={"/login"} className="mx-2 font-bold hover:underline">
          Log in
        </Link>
      )}
    </nav>
  );
};

export default Nav;
