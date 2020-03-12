import React from 'react';
import '../App.css';

import coffeevideo from '../Library/img/about-coffee.mp4';
import coffee from '../Library/img/menu/americano.png';

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
  render() {
    return(
      <div className="about-section">
        <div className="about-upper-section ">
          <div className="about-header   ">
            <p id="about-header-left" className="">Our Coffee Story</p>
            <p id="about-header-right" className="">THE BEGINNING OF COFFEE <br/> TRADITION AND HERITAGE</p>
          </div>
          <img src={require("../Library/img/timeline.svg")} />
        </div>
        <div className="about-lower-section">
          <img className="about-bg-img-coffeebean" src={require("../Library/img/home-bg-coffeebean.png")} />
        </div>
      </div>
      
    
  // <div id = "about-section" className = {this.state.hasClicked ? 'row mx-0': 'row mx-0'}>
  //     <div className = "col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12">
  //     <div className = "d-none d-xl-block">
  //       <video className = "about-coffee d-block mx-auto " autoplay="autoplay" loop="loop">
  //         <source src={coffeevideo} type="video/mp4" />
  //       </video>
  //     </div>
  //     <img className = "about-coffee mt-4 mx-auto d-block d-xl-none" src = {coffee} alt = "Coffeebreak Aiming High! 14 coffee shop and counting!"/>
  //     </div>
  //     <div className = "col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12">
  //       <div className = "text-right">
  //         <p className = "display-1 about-title text-lg-right text-center mt-lg-2 mt-md-0 mt-4">
  //           Our Coffee Story
  //         </p>
  //           <p className = "h5 mt-4 font-weight-bold text-lg-right text-center">The Beginning of Coffee Tradition and Heritage</p>
  //             <p className = "blockquote text-right mr-2 mt-md-3 text-lg-right about-description text-center">
  //               In 2004, Coffeebreak opened its first outlet in a quiet corner of Timawa, Iloilo City. Since then,
  //               Coffeebreak mushroomed, offering metro Iloilo a brand new café experience.
  //             </p>
  //             <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center mb-0">
  //               Nearly two decades after, Coffeebreak has continued to charm Iloilo with the warm coffee experience. The company has developed
  //               and maintained a formidable corporate background that has stood ground. It has consistently delivered excellent products as a result of
  //               first-rate product development that has always considered innovation and the satisfaction of the customers as the primary force. </p>
  //               <a onClick = {this.toggleClassClick} className = {this.state.hasClicked ? 'invisible': 'about-more mr-2'} data-toggle="collapse" data-target="#about-dropdown" aria-expanded="true">more.. </a>
  //             <div id = "about-dropdown" className = "collapse">
  //               <p className = "blockquote text-right mr-2 text-lg-right about-description text-center">
  //                 The goodness of the Coffeebreak experience goes beyond the warmth and delight of its impressive products. It takes pride in the excellent
  //                 and quality service it offers. Warm and friendly, every staff believes in fulfilling every coffee lover’s dream of a premium experience-
  //                 best tasting coffee coupled with first-rate customer service.
  //               </p>
  //               <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center">
  //                 At Coffeebreak, every coffee served is more than just a cup of delight. A product of finely roasted beans, blended to perfection and
  //                 handled by a well-trained team, Coffeebreak understands what every cup means. The passion the brand holds for coffee translates to a
  //                 warm experience beyond comparison. Coffeebreak understands that every cup is fuel for the day.
  //               </p>
  //               <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-description text-center">
  //               As a member of the Specialty Coffee Association of America (SCAA), Coffeebreak Café takes a world-class leap when it comes to delighting its customers.
  //               </p>
  //               <p className = "h3 mt-5 font-weight-bold text-lg-right text-center">Our Mission</p>
  //               <p className = "h5 mt-1 font-weight-bold text-lg-right text-center">Coffeebreak Café International, Inc. commits to do the following mission:</p>
  //               <ul className = "list-unstyled">
  //                 <li>
  //                   <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
  //                     To constantly create, reinvent and discover great foods and concepts to offer our customers supreme food and beverages,
  //                     the highest quality of service, a wide and exciting variety of choices and the finest dining experience.
  //                   </p>
  //                 </li>
  //                 <li>
  //                   <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
  //                     To ensure profitability by utilizing company resources effectively and efficiently.
  //                   </p>
  //                 </li>
  //                 <li>
  //                   <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
  //                       To be a preferred organization that nurtures employee to perform exceptionally by offering a
  //                       competitive compensation package, and an opportunity for career growth in a dynamic working environment.
  //                   </p>
  //                 </li>
  //                 <li>
  //                   <p className = "blockquote text-right mr-2 mt-md-2 text-lg-right about-mv-description text-center">
  //                     To continuously act upon our passion to lend a hand with a corporate social responsibility aimed
  //                     to help improved lives in different communities and support conservation of the environment.
  //                   </p>
  //                 </li>
  //               </ul>
  //               <p className = "h3 mt-5 font-weight-bold text-lg-right text-center">Our Core Vision</p>
  //               <p className = "blockquote text-right mr-2 mt-md-1 text-lg-right about-mv-description text-center">
  //                 Coffeebreak Café International, Inc. will be the most successful home-grown Food and Beverage, Retail and Hospitality Company in the country by 2022.
  //               </p>

  //         </div>
  //       </div>
  //     </div>
  // </div>
    )
  }
}

export default About;
