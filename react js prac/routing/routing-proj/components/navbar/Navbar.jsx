import React from 'react'
import {NavLink} from "react-router"
import "./Navbar.css"
function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='nav-container'>
            <div className='link'><NavLink to="/">Home</NavLink></div>
            <div className='link'><NavLink to="/about">About</NavLink></div>
            <div className='link'><NavLink to="/contact">Contact</NavLink></div>
            <div className='link'><NavLink to="/Services">Services</NavLink></div>
            </div>
    </div>
    </>
  )
}

export default Navbar