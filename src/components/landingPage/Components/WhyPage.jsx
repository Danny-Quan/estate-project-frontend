import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { HiReceiptTax } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import { BsShieldCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

function WhyPage() {
  return (
    <section className="section-1" id="section--why">
      <div className="why--text">
        <h2>Why Choose Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint et
          numquam optio blanditiis voluptatum est atque, rerum assumenda animi
          voluptatibus autem
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque illum,
          nulla molestias porro nisi qui tempore adipisci aspernatur amet
          minima?
        </p>
        <br />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
          fugiat maiores ad et obcaecati esse dolorem unde adipisci debitis
          saepe similique 
        </p>
        <br />
        <Link className="btn--full" to={"rent"}>
          Rent Now
        </Link>
      </div>
      <div className="why--card">
        <div className="card card--1">
          <div className="icon--shadow">
            <AiOutlineHome />
          </div>
          <h4>01. Property Insurance</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam
            suscipit
          </p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><br />
          <Link to={"/about-us"}>Read More &rarr; </Link>
        </div>
        <div className="card card--2">
          <div className="icon--shadow">
            <HiReceiptTax />
          </div>
          <h4>02. Property Insurance</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam
            suscipit
          </p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><br />
          <Link to={"/about-us"}>Read More &rarr; </Link>
        </div>
        <div className="card card--3">
          <div className="icon--shadow">
            <GiReceiveMoney />
          </div>
          <h4>03. Property Insurance</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam
            suscipit
          </p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><br />
          <Link to={"/about-us"}>Read More &rarr; </Link>
        </div>
        <div className="card card--4">
          <div className="icon--shadow">
            <BsShieldCheck />
          </div>
          <h4>04. Property Insurance</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro totam
            suscipit
          </p>
          <br />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p><br />
          <Link to={"/about-us"}>Read More &rarr; </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyPage;
