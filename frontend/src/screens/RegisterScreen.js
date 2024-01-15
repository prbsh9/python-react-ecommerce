// Register.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  async function handleRegister() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/users/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-box">
          <h2 className="register-title">Create an Account</h2>
          <form className="register-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              className="input-field"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field"
            />
            <button type="submit" className="register-button">
              Register
            </button>
            <p>
              Already registered? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
