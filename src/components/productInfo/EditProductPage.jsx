import React, { useEffect } from "react";
import Navbar from "../navigation/Navbar";
import DashboardSideBar from "./DashboardSideBar";
import EditProductForm from "./EditProductForm";
import "./productInfoStyle.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../../axios";

function EditProductPage() {
  const [editState, setEditState] = useState([]);

  const params = useParams().id;
  useEffect(() => {
    axios
      .get(`/api/v1/apartments/apartment/${params}`, { withCredentials: true })
      .then((res) => {
        setEditState(res.data.apartment);
      })
      .catch((err) => console.log(err.response.data.error));
  }, [params]);
 
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="editProduct--and--sidebar">
        <DashboardSideBar />
        <div className="editProduct--area">
          <h2>Edit Apartment</h2>
          <EditProductForm editState={editState}/>
        </div>
      </div>
    </div>
  );
}

export default EditProductPage;
