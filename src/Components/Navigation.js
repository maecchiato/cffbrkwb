import React from 'react';
import '../App.css';

const Navigation = () => (
  <nav className = "navbar navbar-expand-lg fixed-top navbar-dark bg-black">
    <a className ="navbar-brand" href = "#">
    <img src="https://coffeebreak.ph/beta/img/coffeebreakLogo.png" width="150" height="50" className = "d-inline-block align-top" alt="" />

    </a>
    <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className = "navbar-toggler-icon"></span>
    </button>

    <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
      <ul className = "navbar-nav">
          <li className = "nav-item active ml-md-3">
            <a className = "nav-link" href = "/">HOME</a>
          </li>
          <li className = "nav-item ml-md-3">
            <a className = "nav-link" href = "/">ABOUT US</a>
          </li>
          <li className="nav-item dropdown ml-md-3">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              MENU
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Beverages</a>
              <a className="dropdown-item" href="#">Food</a>
            </div>
          </li>
          <li className = "nav-item ml-md-3">
            <a className = "nav-link" href = "/">STORE LOCATOR</a>
          </li>
          <li className = "nav-item ml-md-3">
            <a className = "nav-link" href = "/">PARTNERS</a>
          </li>
          <li className = "nav-item ml-md-3">
            <a className = "nav-link" href = "/">CAREERS</a>
          </li>
          <li className = "nav-item ml-md-3">
            <a className = "nav-link" href = "/">CONTACT</a>
          </li>
      </ul>
    </div>
  </nav>
)

export default Navigation;
