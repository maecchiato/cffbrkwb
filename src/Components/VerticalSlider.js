import React from 'react';
import '../App.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../Library/img/home-ads/home-ads-1.jpg';
import img2 from '../Library/img/home-ads/home-ads-2.jpg';
import img3 from '../Library/img/home-ads/home-ads-3.jpg';
import img4 from '../Library/img/home-ads/home-ads-4.jpg';

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
                <div className="home-ads">
                  <a href="https://www.facebook.com/110830887284535" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                        <img src={img1}/>
                    </div>
                  </a>
                </div>
                <div className="home-ads">
                  <a href="https://www.facebook.com/10158429264610956" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                        <img src={img2}/>
                    </div>
                  </a>
                </div>
                <div className="home-ads">
                  <a href="https://www.facebook.com/10158368766375956" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                        <img src={img3}/>
                    </div>
                  </a>
                </div>
                <div className="home-ads">
                  <a href="https://www.facebook.com/10158386889185956" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                        <img src={img4}/>
                    </div>
                  </a>
                </div>
                
            </Slider>
        ) 
    }
}

export default VerticalSlider;