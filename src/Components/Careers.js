import React from 'react';
import Slider from 'react-slick';
import '../App.css';

import events1 from '../Library/img/careers/avatar-03.png';
import events2 from '../Library/img/careers/avatar-03.png';
import events3 from '../Library/img/careers/avatar-03.png';
import events4 from '../Library/img/careers/avatar-03.png';
import events5 from '../Library/img/careers/avatar-03.png';
import cbDP from '../Library/img/careers/avatar-06.png';

class Careers extends React.Component{
  render(){
    var settings = {
      dots: true,
      mobileFirst: true,
       centerMode: true,
       centerPadding: '40px',
       slidesToShow: 1,
       slidesToScroll: 1,
       speed: 1000,
       autoplay: true,
       arrows:true,
       autoplaySpeed: 4500,
       responsive: [
         {
           breakpoint: 768,
           settings: {
             arrows: true,
             centerMode: true,
             centerPadding: '60px',
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 1200,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '60px',
             slidesToShow: 3,
             slidesToScroll: 3
           }
         }
       ]
    };
    return(
      <div id = "careers-section">
      <div className="title-header">
        <p id="title-header-left" className="">Be One of Us</p>
        <p id="title-header-right" className="">FIND YOUR PASSION <br/> AT COFFEEBREAK</p>
      </div>
      <div className="careers-upper-section row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
          <div className="h4-barlow">Fuel Your</div>
          <div className="h4-underland h4-subtext">Coffee Passion</div>
          <div className="body-16-main-barlow mt-5">
          Join us at Coffeebreak. Be part of our groundbreaking company for the years to come!
          If you have the heart to own and be one of the Coffeebreak brand, you're the one we are looking for!
          </div>
        </div>
        <div id="event-slider" className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center bg-blue">
          {/* <Slider {...settings}>
            <div className = "zoom evt bg-red">
              <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
                01 Jan 2020
              </small>
                  
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157762779542726" target="_blank" rel=" noreferrer noopener">
                <img className = "img-size" src = {events1} />
                  <p className = "event-description">
                  Mula noon hanggang ngayon kami ay patuloy na nagbibigay saya sa inyong paboritong waffle. Isang Manigong Bagong Taon ang handog sa inyo ng Waffle Time.
                  </p>
                  <p className = "mt-1 mx-1 event-description text-justify">
                </p>
              </a>
            </div>
          </Slider> */}
        </div>
  
      </div>
      <div className="careers-lower-section">
      {/* <div id = "events-section" className = "row">
        <div className = "col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center mb-1">
          <p className = "headline-h3 text-center">What's New</p>

        </div>
        <div className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12">
          
        </div>
        <div id = "event-slider" className = "col-xl-4 col-lg-4 col-md-4 col-xs-12 col-sm-12 text-center">
        <Slider {...settings}>

          <div className = "zoom evt">
          <small className = "overline mt-xl-2 mt-lg-2 mt-sm-0 mr-3 float-right">
          03 Feb 2020
              </small>
              <a href="https://www.facebook.com/WaffleTimeInc/posts/10157872567972726" target="_blank" rel=" noreferrer noopener">
            <img className = "img-size" src = {events5} />
              <p className = "event-description">
              SAVE THE DATE! Attend our Free Franchise Orientation and qualify for a SPECIAL DISCOUNT*. Hurry, limited seats only!              </p>
              <p className = "mt-1 mx-1 event-description text-justify">

              </p>
              </a>
          </div>
          
         </Slider>
        </div>
        
        </div> */}
      </div>
    </div>
    )
  }
}

// const Careers = () => (
//   <div id = "careers-section">
//     <div className="title-header">
//       <p id="title-header-left" className="">Be One of Us</p>
//       <p id="title-header-right" className="">FIND YOUR PASSION <br/> AT COFFEEBREAK</p>
//     </div>
//     <div className="careers-upper-section row">
//       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
//         <div className="h4-barlow">Fuel Your</div>
//         <div className="h4-underland h4-subtext">Coffee Passion</div>
//         <div className="body-16-main-barlow mt-5">
//         Join us at Coffeebreak. Be part of our groundbreaking company for the years to come!
//         If you have the heart to own and be one of the Coffeebreak brand, you're the one we are looking for!
//         </div>
//       </div>
//       <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 bg-blue">
// b
//       </div>

//     </div>
//     <div className="careers-lower-section">
// xczczxczxc
//     </div>
//   </div>
// )

export default Careers;

    {/* <div className = "row mx-0">
    </div>
    <div className = "row mt-4 mx-auto pb-5">
      <div className = "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">

      </div>
      <div className = "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="info-card d-block mx-5">
        <div className="front">
          <img src={cbMT} className = "card-image"/>
          <p className="mt-1 h6 text-center">MANAGEMENT TRAINEE</p>
            </div>
          <div className="back">
            <h6>MANAGEMENT TRAINEE</h6>
            <ul className = "text-left">
            <li>Candidate must possess a Bachelo&apos;s Degree in Hotel and Restaurant Management,
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
            <img src={cbDP} className = "card-image"/>
            <p className="mt-1 h6 text-center">BARISTA/DINING PERSONNEL</p>
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
    </div> */}