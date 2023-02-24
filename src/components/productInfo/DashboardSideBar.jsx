import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './productInfoStyle.css'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineProfile} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'
import {GiProgression} from 'react-icons/gi'
import {BiLogOut} from 'react-icons/bi'
import {FiSettings} from 'react-icons/fi'
import {AiFillSecurityScan} from 'react-icons/ai'
import styled from 'styled-components'
import logoutUser from './logoutUser'


function DashboardSideBar() {
  return (
    <div>
        <div className="admin--sidebar">
          <div className="user--photo--name">
            <NavLink to={'/dashboard/user-profile'}>
            <img src="/img/header--image1.jpg" alt="" /><br />
            <h3>username</h3>
            </NavLink>
          </div>
            <ul className='sidebar--items'>
            <li><NavLink to={'/dashboard/user-profile'}><StyledIcon/> My Profile</NavLink></li>
            <li><NavLink to={'/dashboard/all-rooms'}><StyledIcon2/> All Apartments</NavLink></li>
            <li><NavLink to={'/dashboard/add-room'}><StyleIcon3/> Add Apartment</NavLink></li>
            <li><NavLink to={'/dashboard/room-statistics'}><StyledIcon4/> Statistics</NavLink></li>
            <li><NavLink to={'/dashboard/settings'}><StyledIcon6/>Apartment Settings</NavLink></li>
            <li><NavLink to={'/dashboard/admin'}><StyledIcon6/>Admin Info</NavLink></li>
            <li onClick={logoutUser}><NavLink to={'#'}><StyledIcon5/>Logout</NavLink></li>
            </ul>
        </div>
    </div>
  )
}
const StyledIcon= styled(CgProfile)`
font-size:25px;
margin-right:20px;
`
const StyledIcon2= styled(AiOutlineProfile)`
font-size:25px;
margin-right:20px;
`
const StyleIcon3= styled(RiMenuAddLine)`
font-size:25px;
margin-right:20px;
`
const StyledIcon4 = styled(GiProgression)`
font-size:25px;
margin-right:20px;
`
const StyledIcon5= styled(BiLogOut)`
font-size:25px;
margin-right:20px;
`
const StyledIcon6= styled(FiSettings)`
font-size:25px;
margin-right:20px;
`

export default DashboardSideBar