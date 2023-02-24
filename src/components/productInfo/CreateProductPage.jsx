import React, { useState } from "react";
import Navbar from "../navigation/Navbar";
import DashboardSideBar from "./DashboardSideBar";
import axios from "./../../axios";
import "./productInfoStyle.css";
import { hideAlert } from "../alerts";
import { showAlert } from "../alerts";
import { FaImage } from "react-icons/fa";

function CreateProductPage() {
  const createApartment = (data) => {
    axios
      .post("/api/v1/apartments/apartment", data, {
        withCredentials: true,
      })
      .then((res) => {
        hideAlert();
        showAlert("success", "Apartment created successfully");
        // window.setTimeout(() => {
        //   window.location.assign("/dashboard/all-rooms");
        // }, 2000);
      })
      .catch((err) => {
        showAlert("error", err.response.data.error);
      });
  };

  const [apartmentCheck, setApartmentcheck] = useState({
    bathroom: false,
    kitchen: false,
    toilet: false,
    sharedMeter: false,
    waterAccess: false,
  });
  const [apartmentData, setApartmentData] = useState({
    price: "",
    coverPhoto: "",
    location: "",
    galleryImage2: "",
    galleryImage3: "",
    galleryImage4: "",
    propertyType: "",
    numberOfPersons: "",
    numberOfBedrooms: "",
    apartmentSize: "",
    yearsForRent: "",
    rating: "",
    summary: "",
    features: "",
    description: "",
  });
  const handleChange = (e) => {
    setApartmentData((prev) =>
      e.target.type === "file"
        ? {
            ...prev,
            [e.target.name]: e.target.files[0],
          }
        : {
            ...prev,
            [e.target.name]: e.target.value,
          }
    );
  };
  const handleChecked = (e) => {
    setApartmentcheck((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let submitData = new FormData();
    // const images=[
    //   apartmentData.galleryImage2
    // ]
    submitData.append("location", apartmentData.location);
    submitData.append("price", apartmentData.price);
    submitData.append("rating", apartmentData.rating);
    submitData.append("propertyType", apartmentData.propertyType);
    submitData.append("coverPhoto", apartmentData.coverPhoto);
    submitData.append("numberOfPersons", apartmentData.numberOfPersons);
    submitData.append("numberOfBedrooms", apartmentData.numberOfBedrooms);
    submitData.append("apartmentSize", apartmentData.apartmentSize);
    submitData.append("yearsForRent", apartmentData.yearsForRent);
    submitData.append("summary", apartmentData.summary);
    submitData.append("features", apartmentData.features);
    submitData.append("description", apartmentData.description);
    submitData.append("toilet", apartmentCheck.toilet);
    submitData.append("bathroom", apartmentCheck.bathroom);
    submitData.append("waterAccess", apartmentCheck.waterAccess);
    submitData.append("kitchen", apartmentCheck.kitchen);
    submitData.append("sharedMeter", apartmentCheck.sharedMeter);
    submitData.append("images", apartmentData.galleryImage2);
    // submitData.append("galleryImage2",apartmentData.galleryImage2);
    // submitData.append("galleryImage3",apartmentData.galleryImage3);
    // submitData.append("galleryImage4",apartmentData.galleryImage4);

    createApartment(submitData);
    console.log(Array.from(submitData));
  };
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="create--product--and--slider">
        <DashboardSideBar />
        <div className="create--product--area">
          <h2>Add A Room</h2>
          <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
            <input
              type="number"
              name="price"
              placeholder="Enter price per month"
              // required
              value={apartmentData.price}
              onChange={handleChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              value={apartmentData.location}
              onChange={handleChange}
            />
            <input
              type="number"
              name="apartmentSize"
              placeholder="Size of room"
              value={apartmentData.apartmentSize}
              onChange={handleChange}
            />
            <input
              type="number"
              name="numberOfBedrooms"
              placeholder="number of Bedrooms"
              value={apartmentData.numberOfBedrooms}
              onChange={handleChange}
            />
            <select
              name="propertyType"
              id=""
              onChange={handleChange}
              value={apartmentData.propertyType}
            >
              <option value="">Select property type</option>
              <option value="hostel">Hostel</option>
              <option value="Single Room and with shared Washroom">
                Single Room with shared washrooom
              </option>
              <option value="chamber and hall">Chamber and Hall</option>
              <option value="single room self contain">
                Single Room self contain
              </option>
            </select>
            <select
              name="numberOfPersons"
              id=""
              onChange={handleChange}
              value={apartmentData.numberOfPersons}
            >
              <option value="">Select number of persons</option>
              <option value="1">1 in a room</option>
              <option value="2">2 in a room</option>
              <option value="3">3 in a room</option>
              <option value="4">4 in a room</option>
            </select>
            <select
              name="yearsForRent"
              id=""
              onChange={handleChange}
              value={apartmentData.yearsForRent}
            >
              <option value="">Years for rent</option>
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="4">4 Years</option>
            </select>
            <select
              name="rating"
              id=""
              onChange={handleChange}
              value={apartmentData.rating}
            >
              <option value="">Property Rating</option>
              <option value="1.0">1.0</option>
              <option value="1.5">1.5</option>
              <option value="2.0">2.0</option>
              <option value="2.5">2.5</option>
              <option value="3.0">3.0</option>
              <option value="3.5">3.5</option>
              <option value="4.0">4.0</option>
              <option value="4.5">4.5</option>
              <option value="5.0">5.0</option>
            </select>
            <br />
            <label htmlFor="">Bathroom?</label>
            <input
              type="checkbox"
              name="bathroom"
              onChange={handleChecked}
              checked={apartmentCheck.bathroom}
            />
            <label htmlFor="">Kitchen?</label>
            <input
              type="checkbox"
              name="kitchen"
              onChange={handleChecked}
              checked={apartmentCheck.kitchen}
            />
            <label htmlFor="">Toilet?</label>
            <input
              type="checkbox"
              name="toilet"
              onChange={handleChecked}
              checked={apartmentCheck.toilet}
            />
            <label htmlFor="">Shared meter?</label>
            <input
              type="checkbox"
              name="sharedMeter"
              onChange={handleChecked}
              checked={apartmentCheck.sharedMeter}
            />
            <label htmlFor="">Access to water?</label>
            <input
              type="checkbox"
              name="waterAccess"
              onChange={handleChecked}
              checked={apartmentCheck.waterAccess}
            />
            <textarea
              name="summary"
              placeholder="summary of room"
              id=""
              cols="30"
              rows="5"
              //required
              value={apartmentData.summary}
              onChange={handleChange}
            ></textarea>
            <textarea
              name="features"
              placeholder="Features of room"
              id=""
              cols="30"
              rows="5"
              //required
              value={apartmentData.features}
              onChange={handleChange}
            ></textarea>
            <textarea
              name="description"
              placeholder="Full description of room"
              id=""
              cols="30"
              rows="10"
              //required
              value={apartmentData.description}
              onChange={handleChange}
            ></textarea>
            {/* <h3>Cover photo</h3>
            <label htmlFor="coverPhoto" className="myLabel">
              <FaImage />
            </label>
            <input
              type="file"
              name="coverPhoto"
              id="coverPhoto"
              //value={apartmentData.coverPhoto}
              //onChange={(e)=>{console.log(e.target.files[0])}}
              onChange={handleChange}
            /> */}
            <br />
            <br />
            <h3>Gallery images</h3>
            <br />
            <div className="image--labels">
              <label htmlFor="galleryImage1" className="myLabel">
                <FaImage />
              </label>
              <label htmlFor="galleryImage2" className="myLabel">
                <FaImage />
              </label>
              <label htmlFor="galleryImage3" className="myLabel">
                <FaImage />
              </label>
              <label htmlFor="galleryImage4" className="myLabel">
                <FaImage />
              </label>
            </div>
            <input
              type="file"
              name="coverPhoto"
              id="galleryImage1"
              //value={apartmentData.images}
              onChange={handleChange}
            />
            <input
              type="file"
              name="galleryImage2"
              id="galleryImage2"
              onChange={handleChange}
            />
            <input
              type="file"
              name="galleryImage3"
              id="galleryImage3"
              onChange={handleChange}
            />
            <input
              type="file"
              name="galleryImage4"
              id="galleryImage4"
              onChange={handleChange}
            />
            <button type="submit">Add Room</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProductPage;
