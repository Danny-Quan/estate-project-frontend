import React from "react";
import Navbar from "../navigation/Navbar";
import { useRef } from "react";
import axios from "./../../axios";
import { useParams } from "react-router-dom";
import { showAlert } from "./../alerts";
// import { hideAlert } from "./../alerts";

function PasswordReset() {
  const params = useParams().token;
  const resetPassword = (data) => {
    axios
      .post(`/api/v1/users/reset-password/${params}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        showAlert("success", "password reset successfully!");
        window.setTimeout(() => {
          window.location.assign("/login");
        }, 2000);
      })
      .catch((err) => {
        showAlert("error", err.response.data.error);
      });
  };
  const passwordData = {};
  const inputPassword = useRef(null);
  const inputConfirmPassword = useRef(null);

  const handleSubmit = (e) => {
    passwordData.password = inputPassword.current.value;
    passwordData.confirmPassword = inputConfirmPassword.current.value;
    e.preventDefault();
    const resetData = { ...passwordData };
    resetPassword(resetData);
  };

  return (
    <div className="container">
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="reset--password--section">
        <h2>Reset Password</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="password"
            name="password"
            ref={inputPassword}
            placeholder="Enter new password"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            ref={inputConfirmPassword}
            placeholder="Confirm new password"
            required
          />
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
