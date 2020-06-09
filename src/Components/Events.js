import React from 'react';
import '../App.css';

import img1 from '../Library/img/menu-card-1.png';
import img2 from '../Library/img/menu-card-2.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cd_1 from "../Library/img/events/Cup Design/_MG_4742.JPG";
import cd_2 from "../Library/img/events/Cup Design/_MG_4752.JPG";
import cd_3 from "../Library/img/events/Cup Design/_MG_4923.JPG";
import cd_4 from "../Library/img/events/Cup Design/_MG_4944.JPG";
import cd_5 from "../Library/img/events/Cup Design/_MG_4951.JPG";
import cd_6 from "../Library/img/events/Cup Design/_MG_4970.JPG";
import cd_7 from "../Library/img/events/Cup Design/_MG_4990.JPG";
import cd_8 from "../Library/img/events/Cup Design/_MG_4997.JPG";
import cd_9 from "../Library/img/events/Cup Design/_MG_5213.JPG";
import cd_10 from "../Library/img/events/Cup Design/_MG_5225.JPG";
import cd_11 from "../Library/img/events/Cup Design/_MG_5231.JPG";

import gla_1 from "../Library/img/events/Grand Latte Art/_MG_3125.JPG";
import gla_2 from "../Library/img/events/Grand Latte Art/_MG_3188_edited.jpg";
import gla_3 from "../Library/img/events/Grand Latte Art/_MG_3440.JPG";
import gla_4 from "../Library/img/events/Grand Latte Art/_MG_3534_edited.jpg";
import gla_5 from "../Library/img/events/Grand Latte Art/_MG_3575.JPG";
import gla_6 from "../Library/img/events/Grand Latte Art/_MG_3628.JPG";
import gla_7 from "../Library/img/events/Grand Latte Art/_MG_4479_edited.jpg";
import gla_8 from "../Library/img/events/Grand Latte Art/_MG_4533_edited.jpg";
import gla_9 from "../Library/img/events/Grand Latte Art/group5.jpg";
import gla_10 from "../Library/img/events/Grand Latte Art/group6.jpg";
import gla_11 from "../Library/img/events/Grand Latte Art/jacob vincent.jpg";
import gla_12 from "../Library/img/events/Grand Latte Art/jj2.jpg";

class Events extends React.Component {
    render(){
      var settings = {
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        className: 'careers-slider',
        pauseOnFocus: true,
        pauseOnHover: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3
      }
      return (
        <div id = "events-section" className="bg-default">
          <div className="title-header">
            <p id="title-header-left" className="">Special Events</p>
            <p id="title-header-right" className="">WE DO OUT OF THE STORE <br/> EXPERIENCE TOO!</p>
          </div>
          <div className="d-flex events-box flex-column align-items-center">
            <div className="d-flex align-items-center pt-4 ">
              <div className="gold-rec"></div>
              <div className="events-name overline-16 pl-3 pr-3">Cup Design Competition</div>
              <div className="gold-rec"></div>
            </div>
            <div className="d-flex h-75 justify-content-center w-100" >
              <div className="d-flex pt-4 w-75">
                <Slider {...settings}>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_1}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_2}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_3}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_4}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_5}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_6}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_7}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_8}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_9}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_10}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cd_11}/>
                  </div>
                </Slider>
              </div>      
            </div>
          </div>
          <div className="d-flex events-box flex-column align-items-center">
            <div className="d-flex align-items-center pt-4 ">
              <div className="gold-rec"></div>
              <div className="events-name overline-16 pl-3 pr-3">Grand Latte Art Competition</div>
              <div className="gold-rec"></div>
            </div>
            <div className="d-flex h-75 justify-content-center w-100" >
              <div className="d-flex pt-4 w-75">
                <Slider {...settings}>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_1}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_2}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_3}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_4}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_5}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_6}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_7}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_8}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_9}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_10}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_11}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={gla_12}/>
                  </div>
                </Slider>
              </div>      
            </div>
          </div>
        
        </div>
      )
    }
  }
export default Events;
