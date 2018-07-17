import React from 'react';
import '../App.css';

import coffee from '../Library/img/about-coffee.png';

class About extends React.Component {
  constructor()
  {
    super();

    this.state = {
      hasClicked: false,
    }

    this.toggleClassClick = this.toggleClassClick.bind(this);
  }

  toggleClassClick()
  {
    const currentState = this.state.hasClicked;
    this.setState({hasClicked: !currentState});
  }
  render(){
    return(
  <div id = "about-section" className = {this.state.hasClicked ? 'row mx-0': 'row mx-0'}>
      <div className = "col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
        <img className = "about-coffee mt-4 mx-auto d-block" src = {coffee} alt = "Coffeebreak Aiming High!"/>
      </div>
      <div className = "col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
        <div className = "text-right">
          <p className = "display-1 about-title text-lg-right text-center mt-lg-2 mt-md-0 mt-4">
            Our Coffee Story
          </p>
            <p className = "h5 mt-4 font-weight-bold text-lg-right text-center">The Beginning of Coffee Tradition and Heritage</p>
              <p className = "blockquote text-right mr-2 mt-md-3 text-lg-right about-description text-center">
                In 2004, the first ever outlet opened in a quiet corner of Timawa, Iloilo City. Since then,
                Coffeebreak bloomed in different locations in the city of Iloilo, offering every person in Iloilo
                a brand new café experience. It serves a wide and premium variety of quality coffee and pastries
                that cures day to day problems.
              </p>
              <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center mb-0">
                Coffeebreak, a home-grown coffee shop is something to be bragged about. Its rich tradition dwells
                with different people from generation to generation who witnessed the superb and satisfying taste of
                local coffee beans hand-picked from the farm, roasted to quality, brewed and blended to perfection.</p>
                <a onClick = {this.toggleClassClick} className = {this.state.hasClicked ? 'invisible': 'about-more mr-2'} data-toggle="collapse" data-target="#about-dropdown" aria-expanded="true">more.. </a>
              <div id = "about-dropdown" className = "collapse">
                <p className = "blockquote text-right mr-2 text-lg-right about-description text-center">
                  In the course of more than a decade, Coffeebreak managed to consistently maintain to deliver product
                  development, excellent and top-notch research and high standard innovations. Until now, when people find
                  good coffee, Coffeebreak is always on the top list.
                </p>
                <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center">
                  As a member of the Specialty Coffee Association of America (SCAA), Coffeebreak Café takes a world-class
                  leap when it comes to delighting its customers. It aims to be not just a coffee shop but a home of coffee
                  history and a taste of local pride.
                </p>
                <p className = "h5 mt-5 font-weight-bold text-lg-right text-center">A Coffee Purveyor and an Advocate</p>
                <p className = "blockquote text-right mr-2 mt-md-4 text-lg-right about-description text-center">
                  The first-rate gourmet cafe renowned and widely acclaimed in Metro Iloilo, Coffeebreak is perfect for
                  coffee lovers, offering a variety of classic favorites, brewed-to-perfection coffee and a lot more
                  enticing specialties to satisfy every craving.
                </p>
                <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center">
                  Coffeebreak, a home-grown coffee shop is something to be bragged about. Its rich tradition dwells
                  with different people from generation to generation who witnessed the superb and satisfying
                  taste of local coffee beans hand-picked from the farm, roasted to quality, brewed and blended to perfection.
                </p>
                <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center">
                  In the course of more than a decade, Coffeebreak managed to consistently maintain to deliver product
                  development, excellent and top-notch research and high standard innovations. Until now, when people
                  find good coffee, Coffeebreak is always on the top list.
                </p>
                <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center">
                  As a member of the Specialty Coffee Association of America (SCAA), Coffeebreak Café takes a world-class
                  leap when it comes to delighting its customers. It aims to be not just a coffee shop but a home of coffee
                  history and a taste of local pride.
                </p>
                <p className = "h3 mt-5 font-weight-bold text-lg-right text-center">Our Mission</p>
                <p className = "h5 mt-1 font-weight-bold text-lg-right text-center"> Coffeebreak Café International, Inc. commits to do the following mission:</p>
                <ul className = "list-unstyled">
                  <li>
                    <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
                      To constantly create, reinvent and discover great foods and concepts to offer our customers supreme food and beverages,
                      the highest quality of service, a wide and exciting variety of choices and the finest dining experience.
                    </p>
                  </li>
                  <li>
                    <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
                      To ensure profitability by utilizing company resources effectively and efficiently.
                    </p>
                  </li>
                  <li>
                    <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
                        To be a preferred organization that nurtures employee to perform exceptionally by offering a
                        competitive compensation package, and an opportunity for career growth in a dynamic working environment.
                    </p>
                  </li>
                  <li>
                    <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
                      To continuously act upon our passion to lend a hand with a corporate social responsibility aimed
                      to help improved lives in different communities and support conservation of the environment.
                    </p>
                  </li>
                </ul>
                <p className = "h3 mt-5 font-weight-bold text-lg-right text-center">Our Vission</p>
                <p className = "h5 mt-1 font-weight-bold text-lg-right text-center">Our Core Vission:</p>
                <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-mv-description text-center">
                Coffeebreak Café International, Inc. will be the most successful home-grown Food and Beverage, Retail and Hospitality Company in the country by 2022.
                </p>



            <blockquote className="blockquote mr-2 about-quote text-lg-right text-center">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
  </div>
)
}
}

export default About;
