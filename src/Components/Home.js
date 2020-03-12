import React from 'react';
import '../App.css';
import YouTube from 'react-youtube';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import img1 from '../Library/img/home-bg-img-1.png';
import img2 from '../Library/img/home-bg-img-2.png';
import img3 from '../Library/img/home-bg-img-3.png';
import img4 from '../Library/img/home-bg-canvas.png';

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
        <div className="upper-section">
          <div className="home-bg-img">
            <img className="home-bg-img-canvas kenburns-top" src={require("../Library/img/home-bg-canvas.png")} />
            <img className="home-bg-img-coffeebean" src={require("../Library/img/home-bg-coffeebean.png")}/>
          </div>
          <div className = "home-intro   text-center pt-5">
            <img className="home-img-logo " src={require("../Library/img/cb-logo.png")}/>
            <div className="home-intro-large-texts    text-center pt-5">
              <h1 id = "home-intro-large-text-white">TOTALLY HOMEGROWN</h1>
              <h1 id = "home-intro-large-text-gold">Definitely World-Class</h1>
            </div>
            <div className="home-intro-sub-text   text-center">
              <p>The goodness of the Coffeebreak experience goes beyond the warmth and delight of its impressive products. It takes pride in the excellent and quality service it offers.</p>
            </div>
          </div>
          <a class="down-button" href="#lower-section"></a>
        </div>
        <div className = "lower-section" id="lower-section">
          <Slider autoplay="7000" previousButton="" >
            {content.map((item, index) => (
              <div key={index}
                className = "slider-content"
                style={{ background: `#6C6C6C url(${item.image}) right top no-repeat fixed`}}
              >
                <div className="large-texts">
                  <h1 id = "large-text-exp">{item.title}</h1>
                  <h1 id = "large-text-pc">{item.subtitle}</h1>
                </div>
                <div className="sub-text">
                  {item.description}
                </div>
                <div className="link-button">
                  <button> 
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