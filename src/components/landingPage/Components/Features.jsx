import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdFoodBank } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Features(props) {

  return (
    <div className="features--cards">
      <div className="feature--card">
        {/* <img src={`https://estate-project-backend.herokuapp.com/public/img/apartments/${props.coverPhoto}`} alt="" /> */}
        <img src={`https://aparweb-backend.onrender.com/public/img/apartments${props.coverPhoto}`} alt="" />
        <div className="property--content">
          <div className="property--head">
            <div className="feature--properties">
              <div className="property--name--location ">
                <h4>{props.propertyType}</h4>
                <div className="property--price">
                  <h3>GH₵ {props.price*12}/yr</h3>
                </div>
              </div>
              <div className="star--loc">
                <h5>
                  <span className="icon">
                    <ImLocation />
                  </span>
                  {props.location}
                </h5>
                <div className="star">
                  <span className="rating--icon">
                    <AiFillStar />
                  </span>{" "}
                  {props.rating}/5
                </div>
              </div>
            </div>
          </div>
          <div className="property--summary">{props.summary.substring(0,80)}...</div>
          <div className="property--footer">
            <div className="icon">
              <FaBed />
              <span className="icon--text"> {props.numberOfBedrooms} Bedroom</span>
            </div>
            <div className="icon">
              <MdFoodBank />
              <span className="icon--text">{props.kitchen?"1":"0"} Kitchen</span>
            </div>
            <div className="icon">
              <FaBath /> <span className="icon--text">{props.bathroom?"1":"0"} Bathrooms</span>
            </div>
            <Link
              to={`/product-description/${props._id}/${props.location}`}
              
              className="view--details"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
