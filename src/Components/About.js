import React from 'react';
import '../App.css';
import '../App-mobile.css';
import '../App-ipad.css';

class About extends React.Component {
  constructor()
  {
    super();

    this.state = {
      hasClicked: false,
    }

    this.toggleClassClick = this.toggleClassClick.bind(this);
  }

  toggleClassClick()
  {
    const currentState = this.state.hasClicked;
    this.setState({hasClicked: !currentState});
  }
  render() {
    return(
      <div id="about" className="about-section">
        <div className="about-upper-section text-center">
          <div className="title-header d-flex flex-md-row flex-row justify-content-md-center justify-content-center align-items-md-center align-items-center">
            <div id="title-header-left" className="h3-underland text-right mr-md-5 mr-3 align-middle flex-fill">Our Coffee Story</div>
            <div id="title-header-right" className="text-left flex-fill">THE BEGINNING OF COFFEE <br/> TRADITION AND HERITAGE</div>
          </div>
          <img className="about-timeline-img" src={require("../Library/img/timeline.svg")} alt=""/>
          <img className="about-timeline-img-mobile" src={require("../Library/img/timeline-mobile.svg")}  alt=""/>
        </div>

        <div className="about-lower-section d-flex flex-md-row flex-column">
          <img className="about-bg-img-coffeebean" src={require("../Library/img/home-bg-coffeebean-left.png")}  alt=""/>
          <div className="about-lower-left text-center d-flex flex-column flex-fill">
            <div className="about-lower-left-title">
              Our Core Vision
            </div>
            <div className="about-lower-left-text">
            Coffeebreak Café International, Inc. will be the most successful home-grown Food and Beverage, Retail and Hospitality Company in the country by 2022.
            </div>
            <div className="about-lower-left-subtext">
              Warm and friendly, every staff believes in fulfilling every coffee lover’s dream of a premium experience- best tasting coffee coupled with first-rate customer service.
              <br/> As a member of the Specialty Coffee Association of America (SCAA), Coffeebreak Café takes a world-class leap when it comes to delighting its customers.
            </div>
            
          </div>
          <div className="about-lower-right d-flex flex-column flex-fill">
            <div className="about-lower-right-title">
                Our Mission
            </div>
            <div className="about-lower-right-text">
            Coffeebreak Café International, Inc. commits to do the following mission:
            </div>
            <div className="about-lower-right-cards">
              <img src={require("../Library/img/about-card-1.png")} alt=""/>
              <img src={require("../Library/img/about-card-2.png")} alt=""/>
              <img src={require("../Library/img/about-card-3.png")} alt=""/>
              <img src={require("../Library/img/about-card-4.png")} alt=""/>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default About;
