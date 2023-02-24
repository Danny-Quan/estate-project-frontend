import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "./../../axios";
import { productContext } from "./ProductContext";
import ProductContact from "./ProductContact";

function ProductContactDetails() {
  const params = useParams().id;
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/v1/apartments/apartment/${params}`, { withCredentials: true })
      .then((res) => setProductData(res.data.apartment))
      .catch((error) => console.log(error.response.data.error));
  }, [params]);

  <productContext.Provider value={productData}>
    <ProductContact />
  </productContext.Provider>;

  return (
    <div className="product--selection">
    <h2>Selected Apartment</h2>
    <img
      src={`https://estate-project-backend.herokuapp.com/public/img/apartments/${productData.coverPhoto}`}
      alt=""
    />
    <br />
    <br />
    <p>
      <strong>Price:</strong> GH₵ {productData.price * 12}/yr
    </p>
    <p>
      <strong>Rating:</strong> {productData.rating} / 5
    </p>
    <p>
      <strong>Duration:</strong> {productData.yearsForRent} years
    </p>
    <p>
      <strong>Location</strong>: {productData.location}
    </p>
    <p>
      <strong>Property Type: </strong>
      {productData.propertyType}
    </p>
    <p>
      <strong>Number of Persons:</strong> {productData.numberOfPersons} in
      a room
    </p>
    <br />
    <br />
    <h3>Description</h3>
    <p>{productData.description}</p>
    <br />

    <h4>
      Please contact any of the numbers below to talk with our agents
    </h4>
    <br />
    {productData.user && <p>+233 {productData.user.contact1} </p> }
    {productData.user && <p>+233 {productData.user.contact2} </p> }
  </div>
  );
}

export default ProductContactDetails;
