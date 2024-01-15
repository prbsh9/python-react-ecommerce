// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginError = (e) => {
    setLoginError(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/token/", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.access);
        localStorage.setItem("refresh_token", response.data.refresh);
        window.location = "/";
      })
      .catch((error) => {
        console.log(error);
        setLoginError(error.response.data.detail);
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {loginError && <p className="error">{loginError}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="input-field"
          />
          <button type="submit" className="login-button">
            Log In
          </button>
          <p>
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
