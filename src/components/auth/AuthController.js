import { useLocation, Navigate, Outlet } from "react-router-dom";
import axios from "./../../axios";
import { useEffect, useState } from "react";
import LoginPage from "./../userInfo/LoginPage";

function AuthController(props) {

  // useEffect(() => {
  //   axios
  //     .get("/api/v1/users/me", { withCredentials: true })
  //     .then((res) => login())
  //     .catch((error) => logout());
  // }, []);
  console.log(props.isLoggedIn);
  return !props.isLoggedIn ===true? <Outlet /> : <Navigate to="/login" replace />;
}

export default AuthController;
