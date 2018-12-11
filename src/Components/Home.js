import React from 'react';
import '../App.css';
import YouTube from 'react-youtube';


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

    return(
      <div className = "home-section">
        <div className="video-background d-none d-xl-block">
            <div className="video-foreground">
              <YouTube
                videoId="GiKGJrc2VbA"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
              />
            </div>
        </div>
      </div>
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
