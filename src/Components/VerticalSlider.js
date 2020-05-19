import React from 'react';
import '../App.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../Library/img/menu-card-1.png';
import img2 from '../Library/img/menu-card-2.png';
import img3 from '../Library/img/menu-card-3.png';

class VerticalSlider extends React.Component {
    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '120px',
            className: 'careers-slider',
            pauseOnFocus: true,
            pauseOnHover: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            vertical: true,
            verticalSwiping: true
        }
        return (
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
        ) 
    }
}

export default VerticalSlider;