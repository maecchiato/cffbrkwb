import React from 'react';
import Slider from 'react-slick';
import ReactDOM from 'react-dom';
import '../App.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img_mt from '../Library/img/card/q-bg-mt.svg';
import img_dp from '../Library/img/card/q-bg-dp.svg';
import events3 from '../Library/img/careers/avatar-03.png';
import events4 from '../Library/img/careers/avatar-03.png';
import events5 from '../Library/img/careers/avatar-03.png';
import cbDP from '../Library/img/careers/avatar-06.png';

import img1 from '../Library/img/menu-card-1.png';
import img2 from '../Library/img/menu-card-2.png';
import img3 from '../Library/img/about-card-1.png';

const content = [
  {
    date: "March 15, 2020",
    image: img1
  },
  {
    date: "April 14, 2020",
    image: img2
  }
]

class Careers extends React.Component{
  render() {
    var settings = {
      // adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: '100px',
      className: 'careers-slider',
      pauseOnFocus: true,
      pauseOnHover: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      // variableWidth: true
    }
    
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
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 text-center">
          <div className="d-flex h-100 justify-content-center w-100 m-auto" >                      
            <div className=" d-flex pt-4 w-75 m-auto">
              <Slider {...settings}>
                
                <div className="event-card row bg-blue">
                  <a href="https://www.facebook.com/WaffleTimeInc/posts/10157447168432726" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                      <img src={img1}/>
                    </div>
                  </a>
                </div>
                
                <div className="event-card row bg-blue">
                  <a href="https://www.facebook.com/WaffleTimeInc/posts/10157447168432726" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                      <img src={img2}/>
                    </div>
                  </a>
                </div>

                </Slider>
            </div>      
          </div>
        </div>
      </div>
      <div className="careers-lower-section mt-5">
        <div className="h4-barlow text-center">Qualifications</div>
        <div className="d-flex justify-content-center pt-5">
          <div className="careers-q-mt pb-5 mb-4 mr-3">
            <div className="large-card-title subheadline-24 w-75 pt-5 pl-5">Management Trainee</div>
            <div className="large-card-caption body-12-caption-barlow pt-3 pl-5">
              -- Candidate must possess a Bachelor's Degree in Hotel and Restaurant Management, Hospitality Management, Business Administration/Management or equivalent <br/>
              -- Confident, honest, trustworthy and dependable <br/>
              -- Has a strong sense of responsibility and leadership <br/>
              -- People oriented and has excellent interpersonal skills <br/>
              -- Possesses good communicating skills both in written and oral <br/>
              -- Experience in managing store operations is and advantage <br/>
              -- Fresh graduates are welcome to apply</div>
          </div>
          <div className="careers-q-dp pb-5 mb-4 ml-3">
            <div className="large-card-title subheadline-24 w-75 pt-5 pl-5">Barista / Dining Personnel</div>
            <div className="large-card-caption body-12-caption-barlow pt-3 pl-5">
            -- Candidate should be at least college level or HRM or any food service related course
            Honest, trustworthy, responsible and dependable <br/>
            -- Possesses good interpersonal and communication skills <br/>
            -- Has a sense of urgency <br/>
            -- Experience in food service is a plus <br/>
            -- Flexible and can work long hours <br/>
            </div>
          </div>      
        </div>
        <div className="body-12-caption-barlow text-center pb-5">Interested applicants may send their resume or biodata at Door 4, QHP Business Center, Arsenal Street, <br/> 
            Arsenal Aduana, Iloilo City or via email at hr@waffletime.com, or call 0933 851 3993, (033) 335 0935 / (033) 337 3228 
        </div>
      </div>
    </div>
    )
  }
}


// ReactDOM.render( <Slider  /> ,
//   document.getElementById('root')
// );
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