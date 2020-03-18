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

class Slide extends React.Component{
  render(){
    var settings = {
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 60000,
      centerMode: true,
      className: 'careers-slider',
      pauseOnFocus: true,
      pauseOnHover: true,
      


      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return(
        <div className="slider-main" >
            <Slider {...settings} style={{width:"20%"}}>
                <div>
                    <img src={img1}/>
                </div>
                <div>
                    <img src={img2}/>
                </div>
            </Slider>
        </div>
    )
  }
}

export default Slide;
