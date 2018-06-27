import React from 'react';
import '../App.css';

const Footer = () => (
  <div className ="pos-f-t fixed-bottom text-white">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-black p-4">
        <h5 className="text-white h4">Collapsed content</h5>
        <span className="text-muted">Toggleable via the navbar brand.</span>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-black">
      <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-elevator"></span>
      </button>

    </nav>
  </div>
)

export default Footer;
