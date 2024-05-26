import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate =useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    // Handle sign up logic here
    try {
      await createUserWithEmailAndPassword(auth,email,password,username)
      Navigate("/")        
    } 
    catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignUp =async (e) => {
    // Handle Google sign up logic here
    e.preventDefault();
    // Handle sign up logic here
    try {
      await createUserWithEmailAndPassword(auth,email,password,username)
      Navigate("/")        
    } 
    catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <button className="google-signup-button" onClick={handleGoogleSignUp}>
        <img src="/images/google-logo.png" alt="Google logo" />
        Sign Up with Google
      </button>
    </div>
  );
};

export default SignUp;
