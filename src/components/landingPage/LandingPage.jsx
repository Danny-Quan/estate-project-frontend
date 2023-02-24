import React from "react";
import WhyPage from "./Components/WhyPage";
import Features from "./Components/Features";
import Review from "./Components/Review";
// import data from "./Components/featureData";
import Subscribe from "./Components/Subscribe";
import Header from "../navigation/Header";
import "./landingPage.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./../../axios";
import Backdrop from "./../Backdrop";

function LandingPage() {
  const [featureData, setFeatureData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/apartments/topApartments", { withCredentials: true })
      .then((res) => setFeatureData(res.data.apartments))
      .catch((error) => console.log(error.response.data.error));
  }, []);

  const features = featureData.map((feature) => (
    <Features key={feature._id} {...feature} />
  ));
  return (
    <>
      <Header />
      <div className="container">
        <WhyPage />
        <section className="section--2">
          <div className="info">
            <h2>
              We Help You <br />
              To Make Better Deals
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
              fugiat.
            </p>
          </div>
          <div className="features--cards--container">
            {features ? features : <Backdrop/>}
          </div>
          <div className="load--more--btn">
            <NavLink to={"/browse-homes"} className="btn--full">
              Load More ...
            </NavLink>
          </div>
        </section>
        <Review />
        <Subscribe />
      </div>
    </>
  );
}

export default LandingPage;
