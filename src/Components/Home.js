import React from 'react';
import '../App.css';
import '../App-mobile.css';
import '../App-ipad.css';

import { HashLink as Link } from 'react-router-hash-link';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import img1 from '../Library/img/home-bg-img-1.png';
import img2 from '../Library/img/home-bg-img-2.png';
import img3 from '../Library/img/home-bg-img-3.png';
import img4 from '../Library/img/home-bg-canvas.png';
import logo from '../Library/img/logo-stroke.svg';
import VerticalSlider from './VerticalSlider';
import HorizontalSlider from './HorizontalSlider';
// link: https://kenwheeler.github.io/slick/

const content = [
  {
    title: 'EXPERIENCE',
    subtitle: "Premium Blends",
    description: <p>At Coffeebreak, every coffee served is more than just a cup of delight. A product of finely roasted beans, blended to perfection.<br/> <br/> The passion the brand holds for coffee translates to a warm experience beyond comparison.</p>,
    button: 'DISCOVER COFEEBREAK',
    hlink: "/menu/#our-specialty",
    image: img2
  },
  {
    title: 'DISCOVER',
    subtitle: "Our Coffee Story",
    description: <p>In 2004, Coffeebreak opened its first outlet in a quiet corner of Timawa, Iloilo City. Since then, Coffeebreak mushroomed, offering metro Iloilo a brand new café experience and maintained a formidable corporate background that has stood ground. </p>,
    button: 'LEARN MORE',
    hlink: "/about-us/#about",
    image: img1
  },
  {
    title: 'GRAB AN EXTRA',
    subtitle: "Brew of Opportunity",
    description: <p>Be our partner and continue to promote the taste of local pride. As a Coffeebreak franchisee, you want your investment to be hot and brewed to perfection. And that’s exactly what you will get when you start your business with Coffeebreak.</p>,
    button: 'BE OUR SUCCESS PARTNER',
    hlink: "/partners/#franchisenow",
    image: img3
  }
]

class Home extends React.Component {
  render(){
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
      vertical: true
      // variableWidth: true
    }
    return(

      <div className="home-section">
        <div className="upper-section">
          <div className="bg-img-container">
            <img className="home-bg-img-canvas kenburns-top" src={require("../Library/img/home-bg-canvas.png")} />
            <img className="home-bg-img-coffeebean" src={require("../Library/img/home-bg-coffeebean.png")}/>
          </div>
          <div className="row h-100 w-100">
            <div className="upper-section-left w-100 h-100 col-md-3 col-xs-0">
              <VerticalSlider/>
            </div>
            <div className="upper-section-right d-flex justify-content-md-start justify-content-xs-center text-md-left text-xs-center h-100 offset-md-2 col-md-7 col-xs-12">
              <div className = "home-intro">
                <img className="home-img-logo" src={logo}/>
                <div className="home-intro-sub">
                  <div className="h2-barlow sec-title-white">TOTALLY HOMEGROWN</div>
                  <div className="h3-underland sec-title-gold">Definitely World-Class</div>
                </div>
                <div className="body-main  body-16-main-barlow pt-lg-5 mx-lg-0 w-xs-75">
                  The goodness of the Coffeebreak experience goes beyond the warmth and delight of its impressive products. It takes pride in the excellent and quality service it offers.
                </div>
                
                <HorizontalSlider/>
              </div>
              
              <a class="down-button" href="#lower-section"></a>
            </div>
          </div>
        </div>
          
         
        <div id="lower-section">
          <Slider autoplay="7000" previousButton="" >
            {content.map((item, index) => (
              <div key={index}
                className = "slider-content"
                style={{ background: `#6C6C6C url(${item.image}) no-repeat center / cover fixed` }}
              >
                <div className="heading">
                  <div className="h1-barlow">{item.title}</div>
                  <div className="h2-underland" id ="large-text-pc">{item.subtitle}</div>
                </div>
                <div className="sub-text body-16-main-barlow">
                  {item.description}
                </div>
                <div className="link-button">
                <Link to={item.hlink}>
                  <button className="button-wide">{item.button}</button>
                </Link>  
                </div>
              </div>
            ))}
          </Slider>
        </div>     
      </div>

    )
  }
}
export default Home;