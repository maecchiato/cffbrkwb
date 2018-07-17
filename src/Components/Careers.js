import React from 'react';
import '../App.css';


import hr from '../Library/img/hr1.png';
import af from '../Library/img/af1.png';
import mo from '../Library/img/mo1.png';
import mis from '../Library/img/mis1.png';

const Careers = () => (
  <div id = "careers-section" className = "h-100">
    <div className = "row mx-0">
    <div className = "col-xl-12 col-lg-12 col-md-12 col-12 col-sm-12 career-pos text-center px-0 h-100">
       <div className = "career-title-parent">
        <p className="h1 career-title">#BE ONE OF US!</p>
       </div>
    </div>
    </div>
    <div className = "row mt-4 mx-auto">
      <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
        <div className="inrefo-card d-block mx-5">
              <div className="front">
                <img src={hr} className = "card-image"/>
              </div>
            <div className="back">
              <h6>HUMAR RESOURCE ASSISTANT</h6>
              <ul className = "text-left">
              <li>Male or Female, 21 to 25 years of age</li>
              <li>Psychology or Behavioral Science Graduate</li>
              <li>With background in Labor Relations and Employee Benefits</li>
              <li>Can work under pressure and with minimal supervision</li>
              <li>Enthusiastic and with pleasing personality</li>
              <li>Well-versed in speaking English and Filipino</li>
              <li>Willing to work long hours and even on holidays</li>
              <li>With good morals and has embodied ethical values</li>
              <li>People-oriented and have a good interpersonal skills</li>
              </ul>
            </div>
          </div>
      </div>
      <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
         <div className="info-card d-block mx-5">
            <div className="front">
               <img src={af} className = "card-image"/>
            </div>
          <div className="back">
            <h6>ACCOUNTING OFFICER</h6>
            <ul className = "text-left">
            <li>Female, 21 to 25 years of age</li>
            <li>Psychology or Behavioral Science Graduate</li>
            <li>With background in Labor Relations and Employee Benefits</li>
            <li>Can work under pressure and with minimal supervision</li>
            <li>Enthusiastic and with pleasing personality</li>
            <li>Well-versed in speaking English and Filipino</li>
            <li>Willing to work long hours and even on holidays</li>
            <li>With good morals and has embodied ethical values</li>
            <li>People-oriented and have a good interpersonal skills</li>
            </ul>
          </div>
        </div>
      </div>
      <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
         <div className="info-card d-block mx-5">
            <div className="front">
               <img src={mo} className = "card-image"/>
            </div>
          <div className="back">
            <h6>MARKETING OFFICER/RESEARCH ANALYST/BUSINESS DEVELOPMENT OFFICER</h6>
            <ul className = "text-left">
            <li>Male or Female, 21 to 25 years of age</li>
            <li>Psychology or Behavioral Science Graduate</li>
            <li>With background in Labor Relations and Employee Benefits</li>
            <li>Can work under pressure and with minimal supervision</li>
            <li>Enthusiastic and with pleasing personality</li>
            <li>Well-versed in speaking English and Filipino</li>
            <li>Willing to work long hours and even on holidays</li>
            <li>With good morals and has embodied ethical values</li>
            <li>People-oriented and have a good interpersonal skills</li>
            </ul>
          </div>
        </div>
        </div>
        <div className = "col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
        <div className="info-card d-block mx-5">
            <div className="front">
               <img src={mis} className = "card-image"/>
            </div>
          <div className="back">
            <h6>MANAGEMENT INFORMATION SYSTEM OFFICER</h6>
            <ul className = "text-left">
            <li>Male, 21 to 25 years of age</li>
            <li>Information Technology Graduate or any related courses</li>
            <li>Must have extensive background in troubleshooting, networking and programming</li>
            <li>Can meet deadlines and able to multi-task</li>
            <li>Efficient and is very keen to details</li>
            <li>Can work under pressure and with minimal supervision</li>
            <li>Willing to work long hours and even on holidays</li>
            <li>With good morals and has embodied ethical values</li>
            <li>Willing to be assigned either in Iloilo or Manila</li>
            </ul>
          </div>
        </div>
    </div>
    </div>

  </div>
)

export default Careers;
