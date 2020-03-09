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
      <div className="d-flex bg-warning fixed-top h-100" id="wrapper">
        <div className="ml-1 " id="sidebar-wrapper">
          <div className="text-center pt-3 mb-4 sidebar-heading">
            <img className="d-inline-block" src={require("../Library/img/cb-logo.png")} />
          </div>
          <div className="ml-4 list-group">
            <a href="#" className="mb-3 mt-1 align-middle list-group-item-action">HOME</a>
            <a href="#" className="mb-3 mt-1 align-middle list-group-item-action">ABOUT US</a>
            <a href="#" className="mb-3 mt-1 align-middle list-group-item-action">MENU</a>
            <a href="#" className="mb-3 mt-1 align-middle list-group-item-action">PARTNERS</a>
            <a href="#" className="mb-3 mt-1 align-middle list-group-item-action">CAREERS</a>
            <a href="#" className="mb-3 mt-1 align-middle list-group-item-action">CONTACT</a>
          </div>
          <div className="footnote ml-4 text-left">
            <p className = "footnote-text">Door 5, Q.H.P. Business Center, <br/>
              Arsenal St. Iloilo City, 5000, <br/>
              Philippines <br/>
              (033) 335 - 09 - 35 <br/>
              customercare@coffeebreak.ph <br/>
              (033) 335 - 00 - 26
            </p> 
          </div>
          <div className="socials container-fluid">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
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
