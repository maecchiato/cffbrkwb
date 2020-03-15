import React from 'react';
import '../App.css';


import { Link } from 'react-router-dom';


class Navigation extends React.Component {
  
  constructor()
  {
    
    super();

    this.state = {
       hasClickedMENU: false,
     }

     this.toggleClassMenu= this.toggleClassMenu.bind(this);
     this.closeMenuToggler = this.closeMenuToggler.bind(this);
  }

  toggleClassMenu(){
    const currentState = this.state.hasClickedMENU;
    this.setState({ hasClickedMENU: !currentState});
  }

  closeMenuToggler()
  {
    if(this.state.hasClickedMENU)
    {
      this.mobileMenuToggler.click();
    }
  }

  render() {
    return (
      <div className="d-flex fixed-top" id="wrapper">
        <div id="sidebar-wrapper">
          <div className="text-center sidebar-heading">
            <Link to = "/">
              <img className="d-inline-block" src={require("../Library/img/logo.svg")} />  
            </Link>
          </div>
          <div className="ml-sm-4 list-group">
            <div className="menu-item"><a href="/" className="list-group-item-action pt-2 pb-2">HOME</a><div className="divider"></div></div>
            <div className="menu-item"><a href="/about-us" className="list-group-item-action pt-2 pb-2">ABOUT US</a><div className="divider"></div></div>
            <div className="menu-item"><a href="/menu" className="list-group-item-action pt-2 pb-2">MENU</a><div className="divider"></div></div>
            <div className="menu-item"><a href="" className="list-group-item-action pt-2 pb-2">PARTNERS</a><div className="divider"></div></div>
            <div className="menu-item"><a href="" className="list-group-item-action pt-2 pb-2">CAREERS</a><div className="divider"></div></div>
            <div className="menu-item"><a href="" className="list-group-item-action pt-2 pb-2">EVENTS</a><div className="divider"></div></div>
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
            <div className="social-media-icons mt-2">
              <a href="https://www.facebook.com/CoffeebreakCafe/" target="_blank">
                <i className="social-media-icon fab fa-facebook-square mr-2"></i>
              </a>
              <a href="https://www.instagram.com/coffeebreakph/" target="_blank">
                <i className="social-media-icon fab fa-instagram mr-2"></i>
              </a>
              <a href="https://twitter.com/iamcoffeebreak">
                <i className="social-media-icon fab fa-twitter-square" target="_blank"></i>
              </a></div>
          </div>
            <div className="footnote-signature footnote-text mt-5" >
              <div>© Coffeebreak Café International Inc. <br/> 
              All Rights Reserved 2020</div>
            </div>
        </div>
      </div>

      
    )
  }

  // render() {
  //   return (
  //   <nav className = "navbar navbar-expand-lg fixed-top navbar-dark bg-black">
  //   <Link to = "/" >

  //     <a className ="navbar-brand" >
  //     <img src="https://coffeebreak.ph/beta/img/coffeebreakLogo.png" width="150" height="50" className = "d-inline-block align-top" alt="" />

  //     </a>

  //   </Link>
  //     <button ref={input => this.mobileMenuToggler = input} onClick = {this.toggleClassMenu} className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className = "navbar-toggler-icon"></span>
  //     </button>

  //     <div className = "collapse navbar-collapse" id = "navbarNavDropdown">
  //       <ul className = "navbar-nav">
  //         <li className = "nav-item ml-md-3">
  //             <Link to = "/" className = "nav-link" onClick = {this.closeMenuToggler}>
  //                 <a>HOME</a>
  //             </Link>
  //         </li>
  //         <li className = "nav-item ml-md-3">
  //           <Link to = "/about-us" className = "nav-link" onClick = {this.closeMenuToggler}>
  //               ABOUT US
  //           </Link>
  //         </li>
  //         <li className="nav-item dropdown ml-md-3">
  //           <Link to = "/menu" className = "nav-link" onClick = {this.closeMenuToggler}>
  //             <a className = "dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //               MENU
  //             </a>
  //             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  //               <a className="dropdown-item" href="/">Coffee</a>
  //               <a className="dropdown-item" href="/">Chocolate</a>
  //               <a className="dropdown-item" href="/">Tea</a>
  //               <a className="dropdown-item" href="/">Smoothies</a>
  //               <a className="dropdown-item" href="/">Matcha</a>
  //             </div>
  //           </Link>
  //         </li>
  //         <li className = "nav-item ml-md-3">
  //           <Link to = "/store-locator" className = "nav-link" onClick = {this.closeMenuToggler}>
  //               STORE LOCATOR
  //           </Link>
  //         </li>
  //         <li className = "nav-item ml-md-3">
  //           <Link to = "/partners" className = "nav-link" onClick = {this.closeMenuToggler}>
  //               PARTNERS
  //           </Link>
  //         </li>
  //         <li className = "nav-item ml-md-3" onClick = {this.closeMenuToggler}>
  //           <Link to = "/careers" className = "nav-link">
  //               CAREERS
  //           </Link>
  //         </li>
  //         <li className = "nav-item ml-md-3">
  //           <Link to = "/contact" className = "nav-link" onClick = {this.closeMenuToggler}>
  //               CONTACT
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // )
  // }
}

export default Navigation;
