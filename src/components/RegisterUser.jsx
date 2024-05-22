import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { createUser } from "../firebase/authFunctions";

const RegisterUser = () => {
  const { userLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await createUser(email, password);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}

      <h3 className="m-2">Welcome!</h3>
      <h4>Let&apos;s get you started.</h4>
      <h4>
        Fill out your credentials below and take part of our fantastic posts!
      </h4>
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
            required
            placeholder="Enter email"
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
            disabled={isRegistering}
            type="password"
            autoComplete="new-password"
            required
            placeholder="Choose a password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className="m-2">
          <label>Confirm password</label>
          <input
            className="border border-purple-950 px-3"
            disabled={isRegistering}
            type="password"
            autoComplete="off"
            required
            placeholder="Enter password again"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
        </div>

        {errorMessage && <span>{errorMessage}</span>}

        {/* Byt ut till buttonkomponent */}

        <button type="submit" disabled={isRegistering}>
          {isRegistering ? "Registering.." : "Sign up"}
        </button>
      </form>

      <div>
        <p className="font-semibold">Already have an account?</p>
        <Link to={"/login"} className="hover:underline">
          Continue to Login
        </Link>
      </div>
    </section>
  );
};

export default RegisterUser;
