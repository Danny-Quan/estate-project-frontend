import React from "react";
import "./products.css";
import Navbar from "../navigation/Navbar";
import ProductsCard from "./ProductsCard";
import Backdrop from './../Backdrop';

import axios from "./../../axios";
import { useState, useEffect } from "react";

function Products() {
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [queryStr, setQueryStr] = useState({ location: "", propertyType: "" });

  const pages = new Array(totalPages).fill(null).map((cur, i) => i);

  const handleChange = (e) => {
    setQueryStr((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setPageNumber(1)
  };

  const [productData, setProductData] = useState([]);
  const fetchData = async (data) => {
    try {
      let reqUrl;
      const location = queryStr.location;
      const propertyType = queryStr.propertyType;
      if (queryStr.location === "" && queryStr.propertyType === "") {
        reqUrl = `/api/v1/apartments/allApartments?`;
      } else if (queryStr.location !== "" && queryStr.propertyType === "") {
        reqUrl = `/api/v1/apartments/allApartments?location=${location}`;
      } else if (queryStr.location === "" && queryStr.propertyType !== "") {
        reqUrl = `/api/v1/apartments/allApartments?propertyType=${propertyType}`;
      } else {
        reqUrl = `/api/v1/apartments/allApartments?location=${location}&propertyType=${propertyType}`;
      }
      const res = await axios.get(`${reqUrl}&page=${pageNumber}`, {
        withCredentials: true,
      });
      setProductData(res.data.apartments);
      setTotalPages(res.data.total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageNumber]);
  const products = productData.map((product) => (
    <ProductsCard key={product._id} {...product} />
  ));
  const handleNext = () => {
    setPageNumber((prev) => Math.min(totalPages, prev + 1));
  };
  const handlePrev = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };
  return (
    <section>
      <div className="container">
        <div className="navbar--styled">
          <Navbar />
        </div>
        <div className="filter--box">
          <form action="" onSubmit={handleSubmit}>
            <select name="location" id="" onChange={handleChange}>
              <option value="">Select Location</option>
              <option value="">All</option>
              <option value="fiapre">Fiapre</option>
              <option value="birlin">Birlin</option>
              <option value="dumasua">Dumasua</option>
              <option value="forestry">forestry</option>
            </select>
            <select name="propertyType" id="" onChange={handleChange}>
              <option value="">Property Type</option>
              <option value="">All</option>
              <option value="self contain">Self Contain</option>
              <option value="hostel">Hostel</option>
              <option value="single room">Single Room</option>
              <option value="chamber and hall">Chamber and hall</option>
            </select>

            <button type="submit">Search</button>
          </form>
        </div>
        <div className="filter--sidebar--and--products">
          {/* <div className="filter--sidebar">
            <h3>Filter by:</h3>
            <div className="filter--info">
              <form action="">
                <input type="search" placeholder="Enter location" />
                <select name="" id="">
                  <option value="">property Type</option>
                  <option value="">House</option>
                  <option value="">Apartment</option>
                  <option value="">Hostel</option>
                </select>
                <select name="" id="">
                  <option value="">Min Price</option>
                  <option value="">1000</option>
                  <option value="">1500</option>
                  <option value="">2000</option>
                  <option value="">3000</option>
                </select>
                <select name="" id="">
                  <option value="">Max Price</option>
                  <option value="">5000</option>
                  <option value="">6000</option>
                  <option value="">7000</option>
                  <option value="">8000</option>
                </select>
                <select name="numberOfPersons" id="">
                  <option value="">Number of Persons</option>
                  <option value="">1 in a room</option>
                  <option value="">2 in a room</option>
                  <option value="">3 in a room</option>
                  <option value="">4 in a room</option>
                </select>
                <label htmlFor="">Star rating:</label>
                <input type="range" />
                <button type="submit">Apply Filter</button>
              </form>
            </div>
          </div> */}
          <div className="products--area">
            <h3>
              page {pageNumber} of {totalPages}
            </h3>
            <div className="product--cards">
              {products.length > 0 ? products : <h1>No results found...</h1> }
              {products? products : <Backdrop/>}
              
            </div>
            <div className="pagination">
              <button onClick={handlePrev}>&larr;</button>
              {pages.map((pageIndex) => (
                <button
                  onClick={() => setPageNumber(pageIndex + 1)}
                  key={pageIndex}
                >
                  {pageIndex + 1}
                </button>
              ))}
              <button onClick={handleNext}>&rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
