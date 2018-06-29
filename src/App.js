import React, { Component } from 'react';
import './App.css';

import { render } from "react-dom";

import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Menu from './Components/Menu.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
      <Navigation />
          <div className = "container-fluid">
          <Footer />
          </div>
        </div>
    );
  }
}

export default App;
