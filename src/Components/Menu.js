import React from 'react';
import '../App.css';

import menu1 from '../Library/img/about-coffee.png';
import menu2 from '../Library/img/menu2.png';
import menu3 from '../Library/img/menu3.png';
import menu4 from '../Library/img/menu4.png';
import menu5 from '../Library/img/menu5.png';

import menuimg from '../Library/img/menu-placeholder.png';

const Menu = () => (
  <div id = "menu-section">
    <div className = "row mx-0 h-100 py-lg-5 py-xl-0 py-4">
    <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
      <div className="nav-pills-option">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a className="nav-link active" id="v-pills-all-tab" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">All</a>
          <a className="nav-link" id="v-pills-coffee-tab" data-toggle="pill" href="#v-pills-coffee" role="tab" aria-controls="v-pills-coffee" aria-selected="false">Coffee</a>
          <a className="nav-link" id="v-pills-chocolate-tab" data-toggle="pill" href="#v-pills-chocolate" role="tab" aria-controls="v-pills-chocolate" aria-selected="false">Chocolate</a>
          <a className="nav-link" id="v-pills-tea-tab" data-toggle="pill" href="#v-pills-tea" role="tab" aria-controls="v-pills-tea" aria-selected="false">Tea</a>
          <a className="nav-link" id="v-pills-smoothies-tab" data-toggle="pill" href="#v-pills-smoothies" role="tab" aria-controls="v-pills-smoothies" aria-selected="false">Smoothies</a>
          <a className="nav-link" id="v-pills-matcha-tab" data-toggle="pill" href="#v-pills-matcha" role="tab" aria-controls="v-pills-matcha" aria-selected="false">Matcha</a>
        </div>
      </div>
    </div>
    <div className = "col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 text-center pb-5">
      <div className="tab-content" id="v-pills-tabContent">
        <div className="tab-pane fade show active" id="v-pills-all" role="tabpanel" aria-labelledby="v-pills-all-tab">
          <div className = "card-deck">
            <div className = "card container-card">
                <img className = "card-img-top" src = {menu1} alt  ="Card Image Cap" />
                <div className = "card-body overlay">
                    <h5 className = "card-title text">Hot Latte</h5>
                  </div>
            </div>
            <div className = "card container-card w-20">
              <img className = "card-img-top" src = {menu2} alt  ="Card Image Cap" />
              <div className = "card-body overlay">
                <h5 className = "card-title text">Matcha Cappuccino</h5>
                </div>
                </div>
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu3} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Matcha Latte</h5>
                    </div>
              </div>
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu4} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Hot Mocha</h5>
                    </div>
              </div>
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu5} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Matcha Frappe</h5>
                    </div>
              </div>
          </div>
        </div>

        <div className="tab-pane fade" id="v-pills-coffee" role="tabpanel" aria-labelledby="v-pills-coffee-tab">
          <div className = "card-deck">
          <div className = "col-lg-3">
            <div className = "card container-card w-20">
                <img className = "card-img-top" src = {menu1} alt  ="Card Image Cap" />
                <div className = "card-body overlay">
                  <h5 className = "card-title text">Hot Latte</h5>
                  </div>
            </div>
          </div>
          <div className = "col-lg-3">
            <div className = "card container-card w-20">
                <img className = "card-img-top img-fluid" src = {menu4} alt  ="Card Image Cap" />
                <div className = "card-body overlay">
                  <h5 className = "card-title text">Hot Mocha Neque</h5>
                  </div>
            </div>
          </div>
            </div>
        </div>

        <div className="tab-pane fade" id="v-pills-chocolate" role="tabpanel" aria-labelledby="v-pills-chocolate-tab">

        </div>

        <div className="tab-pane fade" id="v-pills-tea" role="tabpanel" aria-labelledby="v-pills-tea-tab">

        </div>

        <div className="tab-pane fade" id="v-pills-smoothies" role="tabpanel" aria-labelledby="v-pills-smoothies-tab">

        </div>

        <div className="tab-pane fade" id="v-pills-matcha" role="tabpanel" aria-labelledby="v-pills-matcha-tab">
          <div className = "card-deck">
          <div className = "col-lg-3">
            <div className = "card container-card">
              <img className = "card-img-top img-fluid" src = {menu2} alt  ="Card Image Cap" />
              <div className = "card-body overlay">
                <h5 className = "card-title text">Matcha Cappuccino</h5>
                </div>
                </div>
          </div>
          <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top img-fluid" src = {menu3} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Matcha Latte</h5>
                    </div>
              </div>
          </div>
          <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top img-fluid" src = {menu5} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Matcha Frappe</h5>
                    </div>
              </div>
          </div>
        </div>
        </div>

      </div>

    </div>
    </div>

  </div>
)

export default Menu;
