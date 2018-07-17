import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

const Controls = () => (
  <div id = "controls-section" className = "row">
      <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <iframe title = "Coffeebreak Facebook Account" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCoffeebreakCafe&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="340" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" className = " d-md-block d-none"></iframe>
      </div>
      <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
            <iframe title = "Coffeebreak Instagram Account" src="http://instagram.com/p/BULROqjg81-/embed" width="100%" height="340" frameborder="0" className = "d-lg-block d-none"></iframe>
      </div>

      <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-left">
          <div className = "d-none d-sm-block">
            <p className = "h5 control-title">
              OUR COMPANY
            </p>
            <ul className = "list-unstyled">
              <li>
                <Link to = "/about-us" className = "link-deco-none">
                  ABOUT COFFEEBREAK
                </Link>
              </li>
              <li>
                <Link to = "/menu" className = "link-deco-none">
                  MENU
                </Link>
              </li>
              <li>
                <Link to = "/store-locator" className = "link-deco-none">
                  STORE LOCATOR
                </Link>
              </li>
              <li>
                <Link to = "/partners" className = "link-deco-none">
                PARTNERS
                </Link>
              </li>
              <li>
                <Link to = "/careers" className = "link-deco-none">
                  CAREERS
                </Link>
              </li>
            </ul>
          </div>

          <div className = "">
            <p className = "h5 control-title">
              CUSTOMER RELATIONS
            </p>
            <ul className = "list-unstyled">
              <li>
              <Link to = "/contact" className = "link-deco-none">
                CONTACT US
              </Link>
              </li>
              <li>
                TERMS & CONDITIONS
              </li>
              <li>
                PRIVACY POLICY
              </li>
              <li>
                COOKIES POLICY
              </li>
            </ul>
          </div>

        </div>
        <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-left">
          <p className = "h5 control-title">
            CONTACT
          </p>
          <ul className = "list-unstyled">
            <li>
              <p className = "small mb-2">
                <i className="fas fa-home mr-2"></i>Door 5, Q.H.P. Business Center, Arsenal St. Iloilo City, 5000, Philippines
              </p>
            </li>
            <li>
              <p className = "small mb-2">
                <i className="fas fa-phone-square mr-2"></i>(033) 335 - 09 - 35
              </p>
            </li>
            <li>
              <p className = "small mb-2">
                <i className="fas fa-envelope mr-2"></i>customercare@coffeebreak.ph
              </p>
            </li>
            <li>
              <p className = "small">
                <i className="fas fa-fax mr-2"></i>(033) 335 - 00 - 26
              </p>
            </li>
          </ul>
          <p className = "h5 control-title">
            FOLLOW US
            <div id="social-media-icons" className="mt-2 row">
              <div className = "col-auto">
                <a href="https://www.facebook.com/CoffeebreakCafe/">
                  <i className="fab fa-facebook-square mr-2"></i>
                </a>
                <a href="https://twitter.com/iamcoffeebreak">
                  <i className="fab fa-twitter-square mr-2"></i>
                </a>
                <a href="https://www.instagram.com/coffeebreakph/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </p>
      </div>
    </div>
)

export default Controls;
