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
    <div className = "row mt-4 mx-auto pb-5">
      <div className = "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">

      </div>
      <div className = "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="info-card d-block mx-5">
              <div className="front">
                <img src={hr} className = "card-image"/>
              </div>
            <div className="back">
            <h6>MANAGEMENT TRAINEE</h6>
              <ul className = "text-left">
                  <li>Candidate must possess a Bachelor&apos;s Degree in Hotel and Restaurant Management,
                  Hospitality Management, Business Administration/Management or equivalent</li>
                  <li>Confident, honest, trustworthy and dependable</li>
                  <li>Has a strong sense of responsibility and leadership</li>
                  <li>People oriented and has excellent interpersonal skills</li>
                  <li>Possesses good communicating skills both in written and oral</li>
                  <li>Experience in managing store operations is and advantage</li>
                  <li>Fresh graduates are welcome to apply</li>
                </ul>
            </div>
          </div>
      </div>
      <div className = "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
         <div className="info-card d-block mx-5">
            <div className="front">
               <img src={af} className = "card-image"/>
            </div>
          <div className="back">
            <h6>BARISTA/DINING PERSONNEL</h6>
                <ul className = "text-left">
                  <li>Candidate should be at least college level or HRM or any food service related course</li>
                  <li>Honest, trustworthy, responsible and dependable</li>
                  <li>Possesses good interpersonal and communication skills</li>
                  <li>Has a sense of urgency</li>
                  <li>Experience in food service is a plus</li>
                  <li>Flexible and can work long hours</li>
                </ul>
          </div>
        </div>
      </div>
      <div className = "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">

      </div>
    </div>
  </div>
)

export default Careers;
