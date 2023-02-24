import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [toggleNav, setToggleNav]=useState(false);
  const handleClick = () => {
    setToggleNav (prev=>!prev)
  };
  return (
    <nav>
      <div className="navbar--brand">
        <h3><span>A</span>parWeb</h3>
      </div>
      <div className={toggleNav?"nav--info nav--active":"nav--info"}>
        <div className="nav--elements">
          <ul className="nav--items">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"#section--why"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/browse-homes"}>Browse Homes</NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </div>
        <div className="contact--item">
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
        </div>
      </div>
      <div className={toggleNav?"hamburger hamburger--activ":'hamburger'} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
