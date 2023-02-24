import React from "react";
import "./navStyle.css";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header--nav">
        <Navbar/>
        </div>
        <div className="header--content">
          <h1>
            Trusted Real Estate <br /> Property For You
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            voluptatum, omnis non veniam facere ratione, recusandae esse
            delectus saepe porro quos fugit, quod quaerat est enim cum odio
            nostrum officia.
          </p>
          <div className="header--links">
            <NavLink className="btn--full" to={"connect"}>
              Connect With Us
            </NavLink>
            <NavLink className="btn--ghost" to={"play"}>
              <FaPlay />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
