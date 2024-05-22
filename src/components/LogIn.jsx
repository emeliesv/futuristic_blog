import { useState, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { signInUser } from "../firebase/authFunctions";

const LogIn = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await signInUser(email, password);
    if (!isSigningIn) {
      setIsSigningIn(true);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}
      <div>
        <h3>Welcome back!</h3>
        <h4 className="font-medium">
          Let's log in to read and write amazing posts!
        </h4>
      </div>

      <form
        onSubmit={onSubmit}
        className="max-w-80 p-8 m-20 bg-purple-50 shadow-md border border-purple-950"
      >
        <div className="m-2">
          <label>Email</label>
          <input
            className="border border-purple-950 px-3"
            type="email"
            autoComplete="email"
            placeholder="Enter email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>

        <div className="m-2">
          <label>Password</label>
          <input
            className="border border-purple-950 px-3"
            type="password"
            autoComplete="current-password"
            required
            placeholder="Enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        {errorMessage && <span>{errorMessage}</span>}
        <button type="submit" disabled={isSigningIn}>
          {isSigningIn ? "Signing in.." : "Log in"}
        </button>
      </form>

      <div>
        <p className="font-semibold">Don&apos;t an account?</p>
        <Link to={"/register"} className="hover:underline">
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default LogIn;
