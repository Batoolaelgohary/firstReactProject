import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default class Navbar extends Component {

  render() {
    return (
      <>
      <nav id="nav" className="navbar navbar-expand-lg py-4 shadow-sm fixed-top ">
  <div className="container w-75">
    <Link className="navbar-brand"  to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className={`${({ isActive }) =>(isActive ?'active' : "")}  nav-link`}  to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link "  to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      
    </div>
  </div>
      </nav>

    </>
    )
  }
}

