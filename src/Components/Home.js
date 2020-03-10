import React from 'react';
import '../App.css';
import YouTube from 'react-youtube';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css'

const content = [
  {
    title: 'HELLO',
    description: 'TEST DESC',
    button: 'TEST BUTTON',
    image: '../Library/img/home-bg-img.png'
  }

]

class Home extends React.Component {
  _onReady(event){
      event.target.mute();
  }

  _onEnd(event){
    event.target.playVideo();
  }


  render(){

    const videoOptions = {
      playerVars:
      {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showInfo: 0
      }
    };

    /* <div className="bg-img">
          <img src={require("../Library/img/home-bg-img.png")} />
        </div> */

    return(
      <Slider className="h-100">
        {content.map((item, index) => (
          <div key={index}
            className = "slider-content home-section"
            style={{ background: `#6C6C6C url('${item.image}') right top no-repeat fixed`}}
          >
            
          </div>
        ))}
      </Slider>




      // <div className = "home-section">
      //   <div className="large-texts">
      //     <h1 id = "large-text-exp">EXPERIENCE</h1>
      //     <h1 id = "large-text-pc">Premium Blends</h1>
      //   </div>
      //   <div className="sub-text">
      //     <p>
      //     At Coffeebreak, every coffee served is more than just a cup of delight. A product of finely roasted beans, blended to perfection. <br/> The passion the brand holds for coffee translates to a warm experience beyond comparison.
      //     </p>
      //   </div>
      //   <div className="link-button">
      //     <button>
      //       <a>DISCOVER COFFEEBREAK</a>
      //     </button>
      //   </div>
      // </div>

    /* cut this out of the home-section div */
    // <div className="video-background d-none d-xl-block">
    // <div className="video-foreground">
    //   <YouTube
    //     videoId="GiKGJrc2VbA"
    //     opts={videoOptions}
    //     className="video-iframe"
    //     onReady={this._onReady}
    //     onEnd={this._onEnd}
    //   />
    // </div>
    // </div>
    )
  }
}
export default Home;

// import React from 'react';
// import '../App.css';
//
// const Home = () => (
//   <div className = "home-section">
//
//   </div>
// )
//
// export default Home;
