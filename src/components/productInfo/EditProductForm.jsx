import React from "react";
import { useState, useRef } from "react";
import axios from "./../../axios";
import { showAlert } from "./../alerts";
import { hideAlert } from "./../alerts";
import { useParams } from "react-router-dom";

function EditProductForm(props) {
  const params = useParams().id;
  const editApartment = (updatedData) => {
    axios
      .patch(`/api/v1/apartments/apartment/${params}`, updatedData, {
        withCredentials: true,
      })
      .then((res) => {
        hideAlert();
        showAlert("success", "Apartment details updated successfully!");
        window.setTimeout(()=>{
          window.location.assign('/dashboard/all-rooms')
        },2000)
        //console.log(res);
      })
      .catch((err) => {
        showAlert("error", err.response.data.error);
        // console.log(err)
      });
  };

  // console.log(props.editState)
  const inputLocation = useRef(null);
  const inputPrice = useRef(null);
  const inputRating = useRef(null);
  const inputPropertyType = useRef(null);
  const inputNumberOfPersons = useRef(null);
  const inputApartmentSize = useRef(null);
  const inputNumberOfBedrooms = useRef(null);
  const inputYearsForRent = useRef(null);
  const inputSummary = useRef(null);
  const inputFeatures = useRef(null);
  const inputDescription = useRef(null);
  const inputToilet = useRef(null);
  const inputBathroom = useRef(null);
  const inputWaterAccess = useRef(null);
  const inputKitchen = useRef(null);
  const inputSharedMeter = useRef(null);

  //handling submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    let submitData = new FormData();
    submitData.append("location", inputLocation.current.value);
    submitData.append("price", inputPrice.current.value);
    submitData.append("rating", inputRating.current.value);
    submitData.append("propertyType", inputPropertyType.current.value);
    //submitData.append("coverPhoto", apartmentData.coverPhoto);
    submitData.append("numberOfPersons", inputNumberOfPersons.current.value);
    submitData.append("numberOfBedrooms", inputNumberOfBedrooms.current.value);
    submitData.append("apartmentSize", inputApartmentSize.current.value);
    submitData.append("yearsForRent", inputYearsForRent.current.value);
    submitData.append("summary", inputSummary.current.value);
    submitData.append("features", inputFeatures.current.value);
    submitData.append("description", inputDescription.current.value);
    //submitData.append("images", apartmentData.images);
    submitData.append("toilet", inputToilet.current.checked);
    submitData.append("bathroom", inputBathroom.current.checked);
    submitData.append("waterAccess", inputWaterAccess.current.checked);
    submitData.append("kitchen", inputKitchen.current.checked);
    submitData.append("sharedMeter", inputSharedMeter.current.checked);
    editApartment(submitData);
    //console.log(Array.from(submitData));
  };

  return (
    <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
      <input
        type="number"
        name="price"
        placeholder="Enter price per month"
        // required
        defaultValue={props.editState.price}
        ref={inputPrice}
      />
      <input
        type="text"
        name="location"
        placeholder="Enter Location"
        defaultValue={props.editState.location}
        ref={inputLocation}
      />

      <input
        type="number"
        name="apartmentSize"
        placeholder="Size of room"
        defaultValue={props.editState.apartmentSize}
        ref={inputApartmentSize}
      />
      <input
        type="number"
        name="numberOfBedrooms"
        placeholder="number of Bedrooms"
        defaultValue={props.editState.numberOfBedrooms}
        ref={inputNumberOfBedrooms}
      />
      <select
        name="propertyType"
        id=""
        defaultValue={props.editState.propertyType}
        ref={inputPropertyType}
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
        defaultValue={props.editState.numberOfPersons}
        ref={inputNumberOfPersons}
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
        defaultValue={props.editState.yearsForRent}
        ref={inputYearsForRent}
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
        defaultValue={props.editState.rating}
        ref={inputRating}
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
        defaultChecked={props.editState.bathroom}
        ref={inputBathroom}
      />
      <label htmlFor="">Kitchen?</label>
      <input
        type="checkbox"
        name="kitchen"
        defaultChecked={props.editState.kitchen}
        ref={inputKitchen}
      />
      <label htmlFor="">Toilet?</label>
      <input
        type="checkbox"
        name="toilet"
        defaultChecked={props.editState.toilet}
        ref={inputToilet}
      />
      <label htmlFor="">Shared meter?</label>
      <input
        type="checkbox"
        name="sharedMeter"
        defaultChecked={props.editState.sharedMeter}
        ref={inputSharedMeter}
      />
      <label htmlFor="">Access to water?</label>
      <input
        type="checkbox"
        name="waterAccess"
        defaultChecked={props.editState.waterAccess}
        ref={inputWaterAccess}
      />
      <textarea
        name="summary"
        placeholder="summary of room"
        id=""
        cols="30"
        rows="5"
        //required
        defaultValue={props.editState.summary}
        ref={inputSummary}
      ></textarea>
      <textarea
        name="features"
        placeholder="Features of room"
        id=""
        cols="30"
        rows="5"
        //required
        defaultValue={props.editState.features}
        ref={inputFeatures}
      ></textarea>
      <textarea
        name="description"
        placeholder="Full description of room"
        id=""
        cols="30"
        rows="10"
        //required
        defaultValue={props.editState.description}
        ref={inputDescription}
      ></textarea>
      <label htmlFor="coverPhoto">upload Cover Photo</label>
      <input
        type="file"
        name="coverPhoto"
        id="coverPhoto"
        //value={props.editState.coverPhoto}
        //onChange={(e)=>{console.log(e.target.files[0])}}
      />
      <label htmlFor="gallery">upload Apartment Gallery</label>
      <input
        type="file"
        name="images"
        id="gallery"
        //value={apartmentData.images}
        multiple
        accept="image/*"
      />
      <button type="submit">Add Room</button>
    </form>
  );
}

export default EditProductForm;
