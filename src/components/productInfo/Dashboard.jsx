import React, { useEffect, useState } from "react";
import DashboardSideBar from "./DashboardSideBar";
import Navbar from "../navigation/Navbar";
import "./productInfoStyle.css";
import axios from "./../../axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import deleteApartment from "./deleteApartment";


function Dashboard() {
  const [adminData, setAdminData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/apartments/adminApartments", { withCredentials: true })
      .then((res) => setAdminData(res.data.apartments))
      .catch((error) => console.log(error.response.data.error));
  }, []);

  const apartments = adminData.map((apartment) => (
    <tr key={apartment._id} className="table--row">
      <td>myphoto</td>
      <td>
        {new Date(apartment.createdAt).toLocaleString("en-US", {
          month: "numeric",
          year: "numeric",
          day: "numeric",
        })}
      </td>
      <td>{apartment.propertyType}</td>
      <td>{apartment.location}</td>
      <td>GH₵ {apartment.price}</td>
      <td colSpan={3}>{apartment.summary.substring(1, 50)}...</td>
      <td>
        <div className="action--btns">
          <StyledLink to={`/dashboard/edit-apartment/${apartment._id}`}>
            <FiEdit />
          </StyledLink>
          <StyledButton onClick={()=>deleteApartment(apartment._id)}>
            <MdDeleteForever />
          </StyledButton>
        </div>
      </td>
    </tr>
  ));
  return (
    <div>
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="dashboard--and--sidebar">
        <DashboardSideBar />
        <div className="dashboard--area">
          <h2>Dashboard</h2>
          <form action="">
            <input type="search" placeholder="Search" />
          </form>
          <table>
            <thead>
              <tr>
                <th>Cover Photo</th>
                <th>Created At</th>
                <th>Property Type</th>
                <th>Location</th>
                <th>Price/month</th>
                <th colSpan="3">summary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{apartments}</tbody>
          </table>
        pagination
        </div>
      </div>
    </div>
  );
}

const StyledLink = styled(Link)`
  background-color: var(--background-color);
  color: var(--text-color-lighten);
  padding: 5px;
  border-radius: 5px;
`;
const StyledButton = styled.button`
  color: var(--text-color-lighten);
  background-color: rgb(230, 44, 44);
  padding: 5px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;
export default Dashboard;
