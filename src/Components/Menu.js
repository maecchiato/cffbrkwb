import React from 'react';
import '../App.css';

import menu1 from '../Library/img/menu/hot-latte.png';
import menu2 from '../Library/img/menu/matcha/matcha-cappuccino.png';
import menu3 from '../Library/img/menu/matcha/matcha-latte.png';
import menu4 from '../Library/img/menu/hot-mocha.png';
import menu5 from '../Library/img/menu/matcha/matcha-frappe.png';
import menu6 from '../Library/img/menu/chocolate-traditions/ct-chococcino.png';
import menu7 from '../Library/img/menu/chocolate-traditions/ct-hot-chocolate.png';
import menu8 from '../Library/img/menu/chocolate-traditions/ct-iced-rich-chocolate.png';
import menu9 from '../Library/img/menu/chocolate-traditions/ct-rich-choco-frappe.png';
import menu10 from '../Library/img/menu/chocolate-traditions/ct-rich-choco-latte.png';
import menu11 from '../Library/img/menu/frappe/blueberry-white-choco-frappe.png';
import menu12 from '../Library/img/menu/frappe/caramel-macchiato-frappe.png';
import menu13 from '../Library/img/menu/frappe/Cheesecake-White-Choco-Frappe.png';
import menu14 from '../Library/img/menu/frappe/strawberry-white-choco-frappe.png';
import menu15 from '../Library/img/menu/frappe/white-choco-mango-frappe.png';
import menu16 from '../Library/img/menu/frappe/white-mocha.png';
import menu17 from '../Library/img/menu/Smoothies/mango-mystic.png';
import menu18 from '../Library/img/menu/Smoothies/ube.png';
import menu19 from '../Library/img/menu/tea/iced-tea.png';
import menu20 from '../Library/img/menu/tea/tea.png';
import menu21 from '../Library/img/menu/americano.png';
import menu22 from '../Library/img/menu/rich-choco-latte.png';

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
          <div className = "card-deck mt-md-5">
            <div className = "card container-card">
                <img className = "card-img-top" src = {menu22} alt  ="Card Image Cap" />
                <div className = "card-body overlay">
                  <h5 className = "card-title text">Rich Choco Lattee</h5>
                  </div>
            </div>
            <div className = "card container-card w-20">
              <img className = "card-img-top" src = {menu20} alt  ="Card Image Cap" />
              <div className = "card-body overlay">
                <h5 className = "card-title text">Tea</h5>
                </div>
                </div>
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu7} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Hot Chocolate</h5>
                    </div>
              </div>
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu6} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Chococcino</h5>
                    </div>
              </div>
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu12} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Caramel Macchiato Frappe</h5>
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
                  <h5 className = "card-title text">Hot Mocha</h5>
                  </div>
            </div>
          </div>
          <div className = "col-lg-3">
            <div className = "card container-card w-20">
                <img className = "card-img-top img-fluid" src = {menu21} alt  ="Card Image Cap" />
                <div className = "card-body overlay">
                  <h5 className = "card-title text">Americano</h5>
                  </div>
            </div>
          </div>
        </div>
        </div>

        <div className="tab-pane fade" id="v-pills-chocolate" role="tabpanel" aria-labelledby="v-pills-chocolate-tab">
          <div className = "card-deck">
            <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu6} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Chococcino</h5>
                    </div>
              </div>
            </div>
            <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu7} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Hot Chocolate</h5>
                    </div>
              </div>
            </div>
            <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu8} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Iced Rich Chocolate</h5>
                    </div>
              </div>
            </div>
            <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu9} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Rich Choco Frappe</h5>
                    </div>
              </div>
            </div>
            <div className = "col-lg-3 mt-lg-4">
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu22} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Rich Choco Latte</h5>
                    </div>
              </div>
            </div>

          </div>
        </div>

        <div className="tab-pane fade" id="v-pills-tea" role="tabpanel" aria-labelledby="v-pills-tea-tab">
          <div className = "card-deck">
            <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu20} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Tea</h5>
                    </div>
              </div>
            </div>
            <div className = "col-lg-3">
              <div className = "card container-card">
                  <img className = "card-img-top" src = {menu19} alt  ="Card Image Cap" />
                  <div className = "card-body overlay">
                    <h5 className = "card-title text">Iced Tea</h5>
                    </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="v-pills-smoothies" role="tabpanel" aria-labelledby="v-pills-smoothies-tab">
        <div className = "card-deck">
          <div className = "col-lg-3">
            <div className = "card container-card">
                <img className = "card-img-top" src = {menu17} alt  ="Card Image Cap" />
                <div className = "card-body overlay">
                  <h5 className = "card-title text">Mango Mystic</h5>
                  </div>
            </div>
          </div>
          <div className = "col-lg-3">
            <div className = "card container-card">
                <img className = "card-img-top" src = {menu18} alt  ="Card Image Cap" />
                <div className = "card-body overlay">
                  <h5 className = "card-title text">Ube</h5>
                  </div>
            </div>
          </div>
        </div>
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
