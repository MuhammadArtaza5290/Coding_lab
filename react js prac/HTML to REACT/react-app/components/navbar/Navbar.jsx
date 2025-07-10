import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="navbar">

        <ul className="navbar-list">

          <li className="navbar-item">
            <button className="navbar-link  active" data-nav-link><NavLink to='/'>About</NavLink></button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link><NavLink to='/resume'>Resume</NavLink></button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link><NavLink to='/portfolio'>Portfolio</NavLink></button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link><NavLink to='/blog'>Blog</NavLink></button>
          </li>

          <li className="navbar-item">
            <button className="navbar-link" data-nav-link><NavLink to='/contect'>Contect</NavLink></button>
          </li>

        </ul>

      </nav>

    </>
  )
}

export default Navbar