import React, { useContext, useRef } from "react";
import { UserContext } from "./userContext";
import axios from "./../../axios";
import { showAlert } from "./../alerts";
import { hideAlert } from "./../alerts";

function UserProfileForm({ userinfo }) {
  const editHandler = (updateData) => {
    axios
      .patch("/api/v1/users/updateUser", updateData, { withCredentials: true })
      .then((res) => {
        hideAlert();
        showAlert("success", "user details updated successfully");
      })
      .catch((err) => {
        showAlert("error", err.response.data.error);
        //console.log(err)
      });
  };
  const myUser = useContext(UserContext);
  const inputUsername = useRef(null);
  const inputContact1 = useRef(null);
  const inputContact2 = useRef(null);
  const inputPhoto = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", inputUsername.current.value);
    data.append("contact1", inputContact1.current.value);
    data.append("contact2", inputContact2.current.value);
    data.append("userPhoto", inputPhoto.current.files[0]);
    editHandler(data);
    //console.log(Array.from(data));
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form--group">
        <img src="/img/header--image1.jpg" alt="" />
        <br />
        <label className="file--label" htmlFor="upload--photo">
          Upload Photo
        </label>
        <input type="file" ref={inputPhoto} id="upload--photo" />
      </div>
      <div className="form--group">
        <input
          type="text"
          name="name"
          ref={inputUsername}
          defaultValue={myUser.username}
        />
        <input type="email" name="email" defaultValue={myUser.email} readOnly />
        <input
          type="number"
          name="contact1"
          ref={inputContact1}
          defaultValue={myUser.contact1}
        />
        <input
          type="number"
          name="contact2"
          ref={inputContact2}
          defaultValue={myUser.contact2}
        />
        <button type="submit">Update User</button>
      </div>
    </form>
  );
}

export default UserProfileForm;
