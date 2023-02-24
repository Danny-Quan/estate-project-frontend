import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import "./userInfoStyle.css";
import axios from "./../../axios";
import { showAlert } from "../alerts";
import { hideAlert } from "../alerts";
// import AuthController from "../auth/AuthController";

function LoginPage() {
  const loginUser = (data) => {
    axios
      .post("/api/v1/users/loginUser", data, { withCredentials: true })
      .then((res) => {
        hideAlert();
        showAlert("success", "logged in successfully");
        window.setTimeout(() => {
          window.location.assign("/dashboard/all-rooms");
        }, 2000);
      })
      .catch((err) => {
        showAlert("error", err.response.data.error);
      });
  };
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userData);
    // <AuthController login={isLoggedIn}/>
  };
  return (
    <div className="container">
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="login--section">
        <h2>Login User</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={userData.email}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={userData.password}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="reset--link">
          Forgot Password? &nbsp;
          <Link to={"/forgot-password"}>reset here</Link>
        </div>
        <div className="reset--link">
          Don't have account? &nbsp;
          <Link to={"/signup"}>sign up here</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
