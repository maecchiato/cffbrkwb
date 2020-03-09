import React, { Component } from 'react';
import './App.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Menu from './Components/Menu.js';
import StoreLocator from './Components/StoreLocator.js';
import Partners from './Components/Partners.js';
import Careers from './Components/Careers.js';
import Contact from './Components/Contact.js';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <BrowserRouter>
          <div className = "container-fluid">
            <Navigation />
                <Switch>
                  <Route exact path = "/" component = {Home} />
                  <Route exact path = "/about-us" component = {About} />
                  <Route exact path = "/menu" component = {Menu} />
                  <Route exact path = "/store-locator" component = {StoreLocator} />
                  <Route exact path = "/partners" component = {Partners} />
                  <Route exact path = "/careers" component = {Careers} />
                  <Route exact path = "/contact" component = {Contact} />
                </Switch>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
