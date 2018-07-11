import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';


const Navigation = () => (
  <nav className = "navbar navbar-expand-lg fixed-top navbar-dark bg-black">
  <Link to = "/" >

    <a className ="navbar-brand" >
    <img src="https://coffeebreak.ph/beta/img/coffeebreakLogo.png" width="150" height="50" className = "d-inline-block align-top" alt="" />

    </a>

  </Link>
    <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className = "navbar-toggler-icon"></span>
    </button>

    <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
      <ul className = "navbar-nav">
        <li className = "nav-item active ml-md-3">
            <Link to = "/" className = "nav-link">
                <a>HOME</a>
            </Link>
        </li>
        <li className = "nav-item ml-md-3">
          <Link to = "/about-us" className = "nav-link">
              ABOUT US
          </Link>
        </li>
        <li className="nav-item dropdown ml-md-3">
          <Link to = "/menu" className = "nav-link">
            <a className = "dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              MENU
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Beverages</a>
              <a className="dropdown-item" href="#">Food</a>
            </div>
          </Link>
        </li>
        <li className = "nav-item ml-md-3">
          <Link to = "/store-locator" className = "nav-link">
              STORE LOCATOR
          </Link>
        </li>
        <li className = "nav-item ml-md-3">
          <Link to = "/partners" className = "nav-link">
              PARTNERS
          </Link>
        </li>
        <li className = "nav-item ml-md-3">
          <Link to = "/careers" className = "nav-link">
              CAREERS
          </Link>
        </li>
        <li className = "nav-item ml-md-3">
          <Link to = "/contact" className = "nav-link">
              CONTACT
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation;
