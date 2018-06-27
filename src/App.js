import React, { Component } from 'react';
import './App.css';

import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <Footer />
      </div>
    );
  }
}

export default App;
