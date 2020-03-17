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
            <div className="bg-red d-flex events-box text-center justify-content-center">
              <div className="d-flex bg-blue">
                <div className="gold-rec"></div>
                <div className="events-name overline-16">barista latte art competition</div>
                <div className="gold-rec"></div>
              </div>
            </div>
        </div>
    )
}
}
export default Events;
