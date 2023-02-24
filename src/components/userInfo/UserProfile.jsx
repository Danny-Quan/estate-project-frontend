import React, { useEffect } from "react";
import Navbar from "../navigation/Navbar";
import DashboardSideBar from "../productInfo/DashboardSideBar";
import { useState, useRef } from "react";
import axios from "./../../axios";
import { hideAlert } from "../alerts";
import { showAlert } from "../alerts";
import UserProfileForm from "./UserProfileForm";
import { UserContext } from "./userContext";

function UserProfile() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/users/findMe", { withCredentials: true })
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err.response.data.error));
  }, []);
  const resetPassword = (data) => {
    axios
      .patch("/api/v1/users/change-password", data, { withCredentials: true })
      .then((res) => {
        hideAlert();
        showAlert("success", "password changed successfully!");
      })
      .catch((error) => {
        showAlert("error", error.response.data.error);
      });
  };

  const inputCurrent = useRef(null);
  const inputNew = useRef(null);
  const inputConfirm = useRef(null);
  const changeUserPassword = (e) => {
    e.preventDefault();
    const password = inputCurrent.current.value;
    const newPassword = inputNew.current.value;
    const confirmPassword = inputConfirm.current.value;
    const totalData = { password, newPassword, confirmPassword };
    resetPassword(totalData);
  };
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="userProfile--and--slider">
        <DashboardSideBar />
        <div className="user--profile--area">
          <div className="userInfo">
            <h2>User Profile</h2>
            <UserContext.Provider value={user}>
            <UserProfileForm userinfo={user}/>
            </UserContext.Provider>
          </div>
          <div className="userPassword--info">
            <h2>Change Password</h2>
            <form action="" onSubmit={changeUserPassword}>
              <input
                type="password"
                ref={inputCurrent}
                placeholder="Enter current password"
              />
              <input
                type="password"
                ref={inputNew}
                placeholder="Enter new password"
              />
              <input
                type="password"
                ref={inputConfirm}
                placeholder="Confirm new Password"
              />
              <button type="submit">Change Password</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
