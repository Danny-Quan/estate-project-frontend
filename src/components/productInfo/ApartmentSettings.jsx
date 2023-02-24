import React, { useEffect, useRef, useState } from "react";
import Navbar from "../navigation/Navbar";
import DashboardSideBar from "./DashboardSideBar";
import "./productInfoStyle.css";
import axios from "./../../axios";
import { showAlert } from "../alerts";
import { hideAlert } from "../alerts";

function ApartmentSettings() {
  const [apartmentData, setApartmentData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/apartments/allDbData", { withCredentials: true })
      .then((res) => {setApartmentData(res.data.dbData)
      })
      .catch((error) => console.log(error.response.data.error));
  }, []);
  const updateInfo = (data, id) => {
    let confirmed = window.confirm("Do you want to update this apartment?");
    confirmed
      ? axios
          .patch(`/api/v1/apartments/apartment/${id}`, data, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            hideAlert();
            showAlert("success", "Apartment updated successfully!");
            window.setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((error) => {
            showAlert("error", error.response.data.error);
          })
      : (confirmed = false);
  };
  const [updateState, setUpdateState] = useState({
    images: '',
    rented1: false,
  });
  const handleChange = (e) => {
    setUpdateState((prev) =>
      e.target.type === "file"
        ? {
            ...prev,
            [e.target.name]: e.target.files[0],
          }
        : {
            ...prev,
            rented1: e.target.checked,
          }
    );
  };
  const updateId = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // updateState.images = [updateState.images]
    // formData.append("images", [...updateState.images]);
    formData.append("images", updateState.images);
    formData.append("rented", updateState.rented1);

    console.log(...formData)
    console.log(updateState.images);
    updateInfo(formData, updateId.current.value);
  };
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="sidebar--and--apartmentSettings">
        <DashboardSideBar />
        <div className="apartment--settings">
          {apartmentData.map((data) => (
            <div key={data._id} className="apartment--settings--card">
              <div>
                <img src="/img/header--image1.jpg" alt="" />
              </div>
              <div className="info--info">
                <p>{data.features}</p>
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="isRented">rented?&nbsp;</label>
                    <input
                      type="checkbox"
                      id="isRented"
                      onChange={handleChange}
                      checked={updateState.rented}
                      name="rented1"
                    />
                    <br />
                  </div>
                  <div>
                    <input
                      type="text"
                      ref={updateId}
                      readOnly
                      value={data._id}
                    />
                    <label htmlFor="image--upload" className="upload--label">
                      upload photos
                    </label>
                    <input
                      myid={data._id}
                      type="file"
                      id="image--upload"
                      name="images"
                      onChange={handleChange}
                      multiple
                    />
                  </div>
                  <div>
                    <button type="submit">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentSettings;
