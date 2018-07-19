import React from 'react';
import '../App.css';

import Controls from './Control.js';

const Footer = () => (
  <div className ="pos-f-t fixed-bottom text-white">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-black-with-opacity p-4">
        <Controls />
      </div>
    </div>
    <nav className="navbar navbar-dark bg-black-with-opacity">
      <p className = "navbar-text d-none d-md-block">
        Coffeebreak Café International Inc., © All Rights Reserved 2018
      </p>
      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-elevator"></span>
      </button>
    </nav>
  </div>
)

export default Footer;
