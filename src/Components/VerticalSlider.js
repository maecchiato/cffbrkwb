import React from 'react';
import '../App.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../Library/img/home-ads/home-ads-1.jpg';
import img2 from '../Library/img/home-ads/home-ads-2.jpg';
import img3 from '../Library/img/home-ads/home-ads-3.jpg';

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
                <div className="home_ads">
                  <a href="https://www.facebook.com/100669194685868/photos/a.107605737325547/178751446877642/?type=3&theater" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                        <img src={img1}/>
                    </div>
                  </a>
                </div>
                <div className="home_ads">
                  <a href="https://www.facebook.com/100669194685868/photos/a.107605737325547/152313069521480/?type=3&theater" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                        <img src={img2}/>
                    </div>
                  </a>
                </div>
                <div className="home_ads">
                  <a href="https://www.facebook.com/permalink.php?story_fbid=152313582854762&id=100669194685868" target="_blank" rel=" noreferrer noopener">
                    <div className="">
                        <img src={img3}/>
                    </div>
                  </a>
                </div>
                
            </Slider>
        ) 
    }
}

export default VerticalSlider;