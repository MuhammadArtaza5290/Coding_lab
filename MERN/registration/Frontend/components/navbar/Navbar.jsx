import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <div className="navbar">
        <ul>
            <li><NavLink to='/'>Register</NavLink></li>
            <li><NavLink to='/tableData'>Table Data</NavLink></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar