import React from 'react';
import '../App.css';

import menu1 from '../Library/img/about-coffee.png';
import menu2 from '../Library/img/menu2.png';
import menu3 from '../Library/img/menu3.png';
import menu4 from '../Library/img/menu4.png';
import menu5 from '../Library/img/menu5.png';

import menuimg from '../Library/img/menu-placeholder.png';

const Menu = () => (
  <div id = "menu-section" className = "row mx-0">
    <div className = "col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
    </div>
    <div className = "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-0">
    </div>
    <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
      <div className="nav-pills-option">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
          <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Coffee</a>
          <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Chocolate</a>
          <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Tea</a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Smoothies</a>
        </div>
      </div>
    </div>
    <div className = "col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 text-center">
      <div className = "card-deck">
        <div className = "card">
            <img className = "card-img-top" src = {menu1} alt  ="Card Image Cap" />
            <div className = "card-body">
              <h5 className = "card-title">Amet Mauris</h5>
              </div>
        </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu2} alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Doplor Sit</h5>
                </div>
          </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu3} alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Lorem Ipsum</h5>
                </div>
          </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu4} alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Rhoncus Neque</h5>
                </div>
          </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu5} alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Magna</h5>
                </div>
          </div>
      </div>

      <div className = "card-deck">
        <div className = "card">
            <img className = "card-img-top" src = {menu1} alt  ="Card Image Cap" />
            <div className = "card-body">
              <h5 className = "card-title">Cras Non Sed</h5>
              </div>
        </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu1} alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Integer tortor</h5>
                </div>
          </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu1} alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Dictor Dlam</h5>
                </div>
          </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu1} alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Phasellus At</h5>
                </div>
          </div>
          <div className = "card">
              <img className = "card-img-top" src = {menu1}  alt  ="Card Image Cap" />
              <div className = "card-body">
                <h5 className = "card-title">Maecenas pharetra</h5>
                </div>
          </div>
      </div>
    </div>

  </div>
)

export default Menu;
