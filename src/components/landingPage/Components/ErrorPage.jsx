import React from "react";
import Navbar from "../../navigation/Navbar";
import {TbError404} from 'react-icons/tb'
import styled from "styled-components";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container">
      <div className="navbar--styled">
        <Navbar />
      </div>
      <div className="error--section">
            <StyledIcon/>
          <h1>404 error! this page does not exist</h1>
          <Link to={'/'}>back to home</Link>
      </div>
    </div>
  );
}

const StyledIcon= styled(TbError404)`
font-size: 6rem;
color: rgb(214, 43, 43);
`
export default ErrorPage;
