import React from 'react';
import '../App.css';

import coffeevideo from '../Library/img/about-coffee.mp4';
import coffee from '../Library/img/menu/americano.png';

class Events extends React.Component {
    render(){
        return (
        <div id = "events-section">
            <div className="title-header">
              <p id="title-header-left" className="">Special Events</p>
              <p id="title-header-right" className="">WE DO OUT OF THE STORE <br/> EXPERIENCE TOO!</p>
            </div>
            <div className="d-flex events-box flex-column align-items-center">
              <div className="d-flex align-items-center h-25">
                <div className="gold-rec"></div>
                <div className="events-name overline-16 pl-3 pr-3">barista latte art competition</div>
                <div className="gold-rec"></div>
              </div>
              <div className="text-light d-flex w-100 h-75 align-items-center justify-content-center">
                This is a carousel :)
              </div>
            </div>
        </div>
    )
}
}
export default Events;
