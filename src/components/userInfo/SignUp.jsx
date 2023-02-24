import React from "react";
import Navbar from "../navigation/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "./../../axios";
import {showAlert} from './../alerts'
import {hideAlert} from './../alerts'

function SignUp() {
  const createUser = (data) => {
    axios
      .post("/api/v1/users/signUp", data, { withCredentials: true })
      .then((res) =>{ 
        hideAlert();
        showAlert('success', 'User created successfully!')
        window.setTimeout(()=>{
          window.location.assign('/login')
        },2000)
      })
      .catch((err) => {
        showAlert('error', err.response.data.error)
      });
  };
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact1: "",
    contact2: "",
  });
  const handleChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(userData);
  };
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="signup--section">
        <h2>Signup As Agent</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Enter username"
            value={userData.username}
            required
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter email"
            value={userData.email}
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password"
            value={userData.password}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm password"
            value={userData.confirmPassword}
            required
          />
          <input
            type="tel"
            name="contact1"
            onChange={handleChange}
            placeholder="phone 1"
            value={userData.contact1}
            required
          />
          <input
            type="tel"
            name="contact2"
            onChange={handleChange}
            placeholder="phone 2"
            value={userData.contact2}
            required
          />
          <button type="submit">sign up</button>
        </form>
        <div className="reset--link">
          already signed up? &nbsp;
          <Link to={"/login"}>login up here</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
