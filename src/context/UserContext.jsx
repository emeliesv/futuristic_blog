import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userName, setUserName] = useState("Emelie");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogIn = () => {
    setIsLoggedIn(() => !isLoggedIn);
  };

  return (
    <UserContext.Provider
      value={{ userName, setUserName, isLoggedIn, toggleLogIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
