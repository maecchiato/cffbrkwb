import React from 'react';
import '../App.css';
import Youtube from 'react-youtube';

import awardsimg from '../Library/img/awards.png';
import YouTube from 'react-youtube';

class Partners extends React.Component {
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
      <div id="franchisenow" className="partners-section">
        <div className="page-container">
          <div className="title-header d-flex flex-row justify-content-center align-items-center">
            <div id="title-header-left" className="mr-md-5 mr-3">Franchise Coffee</div>
            <div id="title-header-right" className="">GRAB AN EXTRA <br/> BREW OF OPPORTUNITY</div>
          </div>
          <div className="partners-upper-section">
            <div className="subheadline" id="partners-title">You have already experienced the goodness of Coffeebreak, how about getting a franchise?</div>
            <div className="partners-upper-box">
              <div className="body-16-main-barlow" id="partners-body"><p>Coffeebreak has been a member of the Philippine Franchise Association since 2012. It aims to be among the top players in the franchise industry and to reach the market in other cities outside Iloilo. </p>
                Be our partner and continue to promote the taste of local pride. As a Coffeebreak franchisee, you want your investment to be hot and brewed to perfection. And that’s exactly what you will get when you start your business with Coffeebreak.
              </div>
            </div>
          </div>
          <div className="partners-lower-section">
            <div className="lower-section-left col-6 d-none d-md-block">
              {/* REMOVE D-NONEEEEEEE if decided to not show video in mobile view!!!!!!!!!!!!! */}
              <div className="video-background d-none d-xl-block">
                <YouTube
                videoId="GiKGJrc2VbA"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
                />
              </div>
            </div>
            <div className="lower-section-right col-12 col-md-6">
              <div className="mb-5">
                <div className="h4-barlow">Coffeebreak</div>
                <div className="h4-underland h4-subtext">Franchise Details</div>
              </div>
              <div className="body-16-main-barlow w-75">
                Package includes the following: <br/>
                I. Use of the Coffeebreak Trade Name &amp; Marks <br/>
                II. Business Operation System <br/>
                III. Store Design, Perspective, and Layout <br/>
                IV. Complete list of equipment, furniture, required supplies, and Small Wares <br/>
                V. Marketing Support <br/>
                VI. Point of Sales System <br/>
                VII. Operational and Technical Support Training <br/>
                VIII. Pre-Opening and Start-up
              </div>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}
export default Partners;