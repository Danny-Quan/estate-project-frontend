import React, { useState } from "react";
import "./userInfoStyle.css";
import { Link } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import axios from "./../../axios";
import {hideAlert} from './../alerts'
import {showAlert} from './../alerts'

function ForgotPasswordPage() {
  const [email, setEmail] = useState({email:""});
  const resetEmail = (data) => {
    axios
      .post("/api/v1/users/forgot-password", data, { withCredentials: true })
      .then((res) => {
        hideAlert()
        showAlert('success', res.data.message)
      })
      .catch((error) => 
      showAlert('error',error.response.data.error))
      };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    resetEmail(email);
    // console.log(email)
  };
  return (
    <div className="container">
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="forgot--password--section">
        <h2>Forgot Password</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) =>
              setEmail((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
            value={email.email}
            required
          />
          <button type="submit">confirm</button>
        </form>
        <div className="reset--link">
          Remembered Password? &nbsp;
          <Link to={"/login"}>Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
