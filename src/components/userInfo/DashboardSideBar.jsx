import React from 'react'
import { NavLink } from 'react-router-dom'

function DashboardSideBar() {
  return (
    <div>
        <div className="admin--sidebar">
            <ul className='sidebar--items'>
            <li><NavLink to={'#'}>My Profile</NavLink></li>
            <li><NavLink to={'#'}>Products</NavLink></li>
            <li><NavLink to={'#'}>Add Product</NavLink></li>
            <li><NavLink to={'#'}>Statistics</NavLink></li>
            <li><NavLink to={'#'}>Sold Out</NavLink></li>
            <li><NavLink to={'#'}>Logout</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default DashboardSideBar