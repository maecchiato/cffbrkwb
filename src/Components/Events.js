import React from 'react';
import '../App.css';

import img1 from '../Library/img/menu-card-1.png';
import img2 from '../Library/img/menu-card-2.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import coffeevideo from '../Library/img/about-coffee.mp4';
import coffee from '../Library/img/menu/americano.png';

class Events extends React.Component {
    render(){
      var settings = {
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 100,
        centerMode: true,
        className: 'careers-slider',
        pauseOnFocus: true,
        pauseOnHover: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 2
      }
      return (
        <div id = "events-section" className="bg-default">
          <div className="title-header">
            <p id="title-header-left" className="">Special Events</p>
            <p id="title-header-right" className="">WE DO OUT OF THE STORE <br/> EXPERIENCE TOO!</p>
          </div>
          {/* <div className="d-flex events-box flex-column align-items-center">
            <div className="d-flex align-items-center pt-4 ">
              <div className="gold-rec"></div>
              <div className="events-name overline-16 pl-3 pr-3">barista latte art competition</div>
              <div className="gold-rec"></div>
            </div>
            <div className="d-flex h-75 justify-content-center w-100" >
              <div className="d-flex pt-4 w-75">
                <Slider {...settings}>
                  <div>
                    <img src={img1}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img1}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                </Slider>
              </div>      
            </div>
          </div>
          <div className="d-flex events-box flex-column align-items-center">
            <div className="d-flex align-items-center pt-4 ">
              <div className="gold-rec"></div>
              <div className="events-name overline-16 pl-3 pr-3">Tree Planting</div>
              <div className="gold-rec"></div>
            </div>
            <div className="d-flex h-75 justify-content-center w-100" >
              <div className="d-flex pt-4 w-75">
                <Slider {...settings}>
                  <div>
                    <img src={img1}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img1}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                </Slider>
              </div>      
            </div>
          </div>
          <div className="d-flex events-box flex-column align-items-center">
            <div className="d-flex align-items-center pt-4 ">
              <div className="gold-rec"></div>
              <div className="events-name overline-16 pl-3 pr-3">Art Cup Competition</div>
              <div className="gold-rec"></div>
            </div>
            <div className="d-flex h-75 justify-content-center w-100" >
              <div className="d-flex pt-4 w-75">
                <Slider {...settings}>
                  <div>
                    <img src={img1}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img1}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                  <div>
                    <img src={img2}/>
                  </div>
                </Slider>
              </div>      
            </div>
          </div> */}
        </div>
      )
    }
  }
export default Events;
