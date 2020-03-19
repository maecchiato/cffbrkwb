import React from 'react';
import '../App.css';


import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import img1 from '../Library/img/home-bg-img-1.png';
import img2 from '../Library/img/home-bg-img-2.png';
import img3 from '../Library/img/home-bg-img-3.png';
import img4 from '../Library/img/home-bg-canvas.png';
import logo from '../Library/img/logo-stroke.svg';

const content = [
  {
    title: 'EXPERIENCE',
    subtitle: "Premium Blends",
    description: <p>At Coffeebreak, every coffee served is more than just a cup of delight. A product of finely roasted beans, blended to perfection.<br/> The passion the brand holds for coffee translates to a warm experience beyond comparison.</p>,
    button: 'DISCOVER COFEEBREAK',
    image: img2
  },
  {
    title: 'DISCOVER',
    subtitle: "Our Coffee Story",
    description: <p>In 2004, Coffeebreak opened its first outlet in a quiet corner of Timawa, Iloilo City. Since then, Coffeebreak mushroomed, offering metro Iloilo a brand new café experience and maintained a formidable corporate background that has stood ground. </p>,
    button: 'LEARN MORE',
    image: img1
  },
  {
    title: 'GRAB AN EXTRA',
    subtitle: "Brew of Opportunity",
    description: <p>Be our partner and continue to promote the taste of local pride. As a Coffeebreak franchisee, you want your investment to be hot and brewed to perfection. And that’s exactly what you will get when you start your business with Coffeebreak.</p>,
    button: 'BE OUR SUCCESS PARTNER',
    image: img3
  }
]

class Home extends React.Component {
  render(){
    return(

      <div className="home-section">
        <div className="upper-section bg-blue">
          <div className="bg-img-container">
            <img className="home-bg-img-canvas kenburns-top" src={require("../Library/img/home-bg-canvas.png")} />
            <img className="home-bg-img-coffeebean" src={require("../Library/img/home-bg-coffeebean.png")}/>
          </div>
          <div className="upper-section-left h-100 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">a</div>
          <div className="upper-section-right h-100 bg-blue col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">b
          <a class="down-button" href="#lower-section"></a>
        </div>
          </div>
          {/* <div className = "home-intro   text-center pt-5">
            <img className="home-img-logo " src={logo}/>
            <div className="text-center pt-5">
              <div className="h2-barlow">TOTALLY HOMEGROWN</div>
              <div className="h3-underland sec-title">Definitely World-Class</div>
            </div>
            <div className="body-main text-center pt-1">
              The goodness of the Coffeebreak experience goes beyond the warmth and delight of its impressive products. It takes pride in the excellent and quality service it offers.
            </div>
          </div> */}
         
        <div className = "lower-section" id="lower-section">
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
                  <button className="button-wide"> 
                    <a>{item.button}</a>
                  </button>
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