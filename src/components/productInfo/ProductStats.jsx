import React from "react";
import "./productInfoStyle.css";
import Navbar from "../navigation/Navbar";
import DashboardSideBar from "./DashboardSideBar";
import { useEffect, useState } from "react";
import axios from './../../axios'

function ProductStats() {
  const [allApartments, setAllApartments] = useState([]);
  const [allRented, setAllRented] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/apartments/allDbData", { withCredentials: true })
      .then((res) => {
        setAllApartments(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(()=>{
      axios.get("/api/v1/apartments/allRented", { withCredentials: true })
      .then((res) => {
        setAllRented(res.data);
      })
      .catch((err) => console.log(err));
  },[])
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="stats--and--sidebar">
        <DashboardSideBar />
        <div className="statistics--area">
          <h2>Statistics</h2>
          <div className="product--stat--divs">
            <div className="number--of--apartments">
              <h2>Number of Apartments</h2> <h1>{allApartments.length}</h1>
            </div>
            <div className="number--of--rented--apartments">
              <h2>Rented Apartments</h2>
              <h1>{allRented.length}</h1>
            </div>
            <div className="number--of--unrented--apartments">
              <h2>Unrented Apartments</h2>
              <h1>{allApartments.length-allRented.length}</h1>
            </div>
            <div className="number--of--newlyAdded--apartments">
              <h2>New Apartments</h2>
              <h1>{allApartments.length}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductStats;
