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

import img1 from '../Library/img/careers-carousel/careers_carousel-1.JPG';
import img2 from '../Library/img/careers-carousel/careers_carousel-2.JPG';
import img3 from '../Library/img/careers-carousel/careers_carousel-3.JPG';
import img4 from '../Library/img/careers-carousel/careers_carousel-4.JPG';
import img5 from '../Library/img/careers-carousel/careers_carousel-5.JPG';
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
      centerPadding: '70px',
      className: 'careers-slider',
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false
    }
    
    return(
    <div className = "careers-section">
      <div className="title-header d-flex flex-row justify-content-center align-items-center">
        <div id="title-header-left" className="mr-md-5 mr-3">Be One of Us</div>
        <div id="title-header-right" className="">FIND YOUR PASSION <br/> AT COFFEEBREAK</div>
      </div>
      <div className="careers-upper-section d-flex flex-md-row flex-column">
        <div className="careers-upper-left-section text-center text-md-left">
          <div className="h4-barlow">Fuel Your</div>
          <div className="h4-underland careers-h4-subtext">Coffee Passion</div>
          <div className="body-16-main-barlow ">
            Join us at Coffeebreak. Be part of our groundbreaking company for the years to come!
            If you have the heart to own and be one of the Coffeebreak brand, you're the one we are looking for!
          </div>
        </div>
        <div className="careers-upper-section-slider">
          
              <Slider {...settings}>
                <div className="careers-slider-content row">
                    <img src={img1}/>
                </div>
                <div className="careers-slider-content row">
                  <img className="careers-img" src={img2}/>
                </div>
                <div className="careers-slider-content row">
                  <div className="">
                    <img className="careers-img" src={img3}/>
                  </div>
                </div>
                <div className="careers-slider-content row">
                  <div className="">
                    <img className="careers-img" src={img4}/>
                  </div>
                </div>
                <div className="careers-slider-content row">
                  <div className="">
                    <img className="careers-img" src={img5}/>
                  </div>
                </div>
                </Slider>
        </div>
      </div>
      <div className="careers-lower-section">
        <div className="h4-barlow text-center">Qualifications</div>
        <div className="d-flex flex-column flex-md-row justify-content-center pt-5">
          <div className=" careers-q careers-q-mt pb-md-5 mb-md-4 mr-md-3">
            <a href="https://www.facebook.com/163120115107442" target="_blank" rel=" noreferrer noopener"><div className="large-card-title subheadline w-75 pt-5 pl-5">Management Trainee</div></a>
              <div className="large-card-caption body-12-caption-barlow pt-3 pl-5">
                <li> Candidate must possess a Bachelor's Degree in Hotel and Restaurant Management, Hospitality Management, Business Administration/Management or equivalent <br/> </li>
                <li> Confident, honest, trustworthy and dependable </li>
                <li> Has a strong sense of responsibility and leadership </li>
                <li> People oriented and has excellent interpersonal skills </li>
                <li> Possesses good communicating skills both in written and oral </li>
                <li> Experience in managing store operations is and advantage </li>
                <li> Fresh graduates are welcome to apply</li>
              </div>
          </div>
          <div className="careers-q careers-q-dp pb-md-5 mb-md-4 ml-md-3">
            <a href="https://www.facebook.com/152313069521480" target="_blank" rel=" noreferrer noopener"><div className="large-card-title subheadline w-75 pt-5 pl-5">Barista / Dining Personnel</div></a>
            <div className="large-card-caption body-12-caption-barlow pt-3 pl-5">
            <li> Candidate should be at least college level or HRM or any food service related course</li>
            <li> Honest, trustworthy, responsible and dependable </li>
            <li> Possesses good interpersonal and communication skills </li>
            <li> Has a sense of urgency </li>
            <li> Experience in food service is a plus </li>
            <li> Flexible and can work long hours </li>
            </div>
          </div>      
        </div>
        <div className="body-12-caption-barlow text-center pb-5 mx-4 mx-md-0">Interested applicants may send their resume or biodata at Door 4, QHP Business Center, Arsenal Street, <br/> 
            Arsenal Aduana, Iloilo City or via email at hr@waffletime.com, or call 0933 851 3993, (033) 335 0935 / (033) 337 3228 
        </div>
      </div>
    </div>
    )
  }
}



export default Careers;