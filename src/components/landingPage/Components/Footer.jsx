import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookSquare, FaTwitter, FaInstagram,FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer--section">
        <div className="org--info">
          <h3>
            <span className="brandName">A</span>parWeb
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            excepturi earum numquam, consequuntur tempora facere neque hic
            necessitatibus ducimus explicabo.
          </p>
        </div>
        <div className="footer--links">
          <h3>Useful Links</h3>
          <ul className="useful--links">
            <li>
              <Link to={"#"}>What We Do</Link>
            </li>
            <li>
              <Link to={"#"}>Events</Link>
            </li>
            <li>
              <Link to={"#"}>Support Team</Link>
            </li>
            <li>
              <Link to={"#"}>Our Projects</Link>
            </li>
          </ul>
        </div>
        <div className="footer--links">
          <h3>Useful Links</h3>
          <ul className="useful--links">
            <li>
              <Link to={"#"}>What We Do</Link>
            </li>
            <li>
              <Link to={"#"}>Events</Link>
            </li>
            <li>
              <Link to={"#"}>Support Team</Link>
            </li>
            <li>
              <Link to={"#"}>Our Projects</Link>
            </li>
          </ul>
        </div>
        {/* <div className="footer--links">
          <h3>Useful Links</h3>
          <ul className="useful--links">
            <li>
              <Link to={"#"}>What We Do</Link>
            </li>
            <li>
              <Link to={"#"}>Events</Link>
            </li>
            <li>
              <Link to={"#"}>Support Team</Link>
            </li>
            <li>
              <Link to={"#"}>Our Projects</Link>
            </li>
          </ul>
        </div> */}
        <div>
          <h3>For Contact</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            ducimus?
          </p>
          <br />
          <h4>Follow Us on</h4>
          <ul className="social--links">
            <li>
              <NavLink to="facebook">
                <FaFacebookSquare style={{fontSize:'1.8rem'}} />
              </NavLink>
            </li>
            <li>
              <NavLink to="facebook">
                <FaTwitter style={{fontSize:'1.8rem'}} />
              </NavLink>
            </li>
            <li>
              <NavLink to="facebook">
                <FaInstagram style={{fontSize:'1.8rem'}} />
              </NavLink>
            </li>
            <li>
              <NavLink to={'youtube'}>
                <FaYoutube style={{fontSize:'1.8rem'}}/>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2022. All rights Reserved by Danny Quan</p>
      </div>
    </footer>
  );
}

export default Footer;
