import React from 'react';
import '../App.css';
import '../App-mobile.css';

import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

class ToggleNavigation extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu width={'90%'} isOpen={ false } disableAutoFocus className={'toggle-navigation-wrapper'}>
                <div className="text-center sidebar-heading">
                    <Link to = "/">
                    <img className="d-inline-block" src={require("../Library/img/logo.svg")} />  
                    </Link>
                </div>
                <div className="ml-sm-4 list-group">
                    <div className="menu-item"><a href="/" className="list-group-item-action pt-2 pb-2">HOME</a><div className="divider"></div></div>
                    <div className="menu-item"><a href="/about-us" className="list-group-item-action pt-2 pb-2">ABOUT US</a><div className="divider"></div></div>
                    <div className="menu-item"><a href="/menu" className="list-group-item-action pt-2 pb-2">MENU</a><div className="divider"></div></div>
                    <div className="menu-item"><a href="/partners" className="list-group-item-action pt-2 pb-2">PARTNERS</a><div className="divider"></div></div>
                    <div className="menu-item"><a href="/careers" className="list-group-item-action pt-2 pb-2">CAREERS</a><div className="divider"></div></div>
                    <div className="menu-item"><a href="/events" className="list-group-item-action pt-2 pb-2">EVENTS</a><div className="divider"></div></div>
                </div>
                <div className="footnote ml-sm-4 text-left">
                    <div className="body-12-caption-barlow side-title">CONTACT</div>
                    <div className = "footnote-text mt-2">Door 5, Q.H.P. Business Center, <br/>
                    Arsenal St. Iloilo City, 5000, <br/>
                    Philippines <br/>
                    (033) 335 - 09 - 35 <br/>
                    customercare@coffeebreak.ph <br/>
                    (033) 335 - 00 - 26
                    </div>
                    <div className="body-12-caption-barlow side-title mt-4">FOLLOW US</div>
                    <div className="social-media-icons mt-1">
                        <a href="https://www.facebook.com/CoffeebreakCafe/" target="_blank">
                            <i className="social-media-icon fab fa-facebook-square mr-2"></i>
                        </a>
                        <a href="https://www.instagram.com/coffeebreakph/" target="_blank">
                            <i className="social-media-icon fab fa-instagram mr-2"></i>
                        </a>
                        <a href="https://twitter.com/iamcoffeebreak">
                            <i className="social-media-icon fab fa-twitter-square" target="_blank"></i>
                        </a>
                    </div>
                    <div className="footnote-text footnote-signature mt-5" >
                        <div>© Coffeebreak Café International Inc. <br/> 
                        All Rights Reserved 2020</div>
                    </div>
                </div>
            </Menu>
        )
    }
}

export default ToggleNavigation;