import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaBath, FaBed, FaShieldAlt } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import axios from "./../../axios";
import {useEffect, useState} from 'react'

function ProductInfo() {
    const params = useParams().id;
  const [productItem, setProductItem] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/v1/apartments/apartment/${params}`, { withCredentials: true })
      .then((res) => setProductItem(res.data.apartment))
      .catch((err) => console.log(err.response.data.error));
  }, [params]);

  return (
    <div className="product--desc--details">
      <div className="p-d-name-price">
        <h3>{productItem.propertyType}</h3>
        <h4>GH₵ {productItem.price*12}/yr</h4>
      </div>
      <div className="p-d-loc-rating">
        <h5>{productItem.location}</h5>
        <p>
          {" "}
          <span className="rating--icon">
            <AiFillStar />
          </span>{" "}
          {productItem.rating}/5
        </p>
      </div>
      <div className="icons--area">
        <div>
          <span className="icon">
            <FaBed />
          </span>

          <span className="icon--text">{productItem.numberOfBedrooms} Bedrooms</span>
        </div>
        <div>
          <span className="icon">
            <FaBath />
          </span>
          <span className="icon--text"> {productItem.bathroom?'1':''} Bathrooms</span>
        </div>
        <div>
          <span className="icon">
            <BiArea />
          </span>{" "}
          <span className="icon--text">
            1250 m<sup>2</sup>
          </span>
        </div>
        <div>
          <span className="icon">
            <FaShieldAlt />
          </span>
          <span className="icon--text"> Highly Secured</span>
        </div>
      </div>
      <div className="description--sec">
        <h3>Description</h3>
        <p>{productItem.description}</p><br />
      </div>
      <div className="product--features">
        <h3>Features</h3>
        <p>{productItem.features}</p>
      </div>
      <div className="rent--button">
        <Link to={`/product-contact/${productItem._id}`}>Rent Now</Link>
      </div>
    </div>
  );
}

export default ProductInfo;
