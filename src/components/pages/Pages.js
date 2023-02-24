import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./../Products page/Products";
import LandingPage from "../landingPage/LandingPage";
import ProductsDescription from "../Products Description/ProductsDescription";
import Contact from "../contactPage/Contact";
import LoginPage from "../userInfo/LoginPage";
import ForgotPasswordPage from "../userInfo/ForgotPasswordPage"
import PasswordReset from "../userInfo/PasswordReset";
import Dashboard from "../productInfo/Dashboard";
import CreateProductPage from "../productInfo/CreateProductPage";
import UserProfile from "../userInfo/UserProfile";
import ProductStats from "../productInfo/ProductStats";
import ProductContact from "../Products Description/ProductContact";
import ApartmentSettings from "../productInfo/ApartmentSettings";
import EditProductPage from '../productInfo/EditProductPage'
import ErrorPage from "../landingPage/Components/ErrorPage";
import AuthController from "../auth/AuthController";
import SignUp from "../userInfo/SignUp";
import AboutPage from "../landingPage/Components/AboutPage";
import AdminInfo from "../productInfo/AdminInfo";

function Pages() {
  return (
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/browse-homes" element={<Products/>} />
        <Route path="/product-description/:id/:location" element={<ProductsDescription/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        <Route path="/reset-password/:token" element={<PasswordReset/>}/>
        <Route path="/product-contact/:id" element={<ProductContact/>}/>
        <Route path="/about-us" element={<AboutPage/>}/>

        {/* protected routes */}
        <Route element={<AuthController/>}>
        <Route path="/dashboard/all-rooms" element={<Dashboard/>}/>
        <Route path="/dashboard/add-room" element={<CreateProductPage/>}/>
        <Route path="/dashboard/user-profile" element={<UserProfile/>} />
        <Route path="/dashboard/room-statistics" element={<ProductStats/>}/>
        <Route path="/dashboard/edit-apartment/:id" element={<EditProductPage/>}/>
        <Route path="/dashboard/settings" element={<ApartmentSettings/>}/>
        <Route path="/dashboard/admin" element={<AdminInfo/>}/>
        </Route>

        {/* catch all errors */}
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
  );
}

export default Pages;
