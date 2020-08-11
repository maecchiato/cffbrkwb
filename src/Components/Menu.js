import React from 'react';
import '../App.css';
import '../App-mobile.css';

// attempt-f
import PropTypes from 'prop-types';

// import placeholder from "../Library/img/transparent_placeholder.png'"

import b_c_img1 from "../Library/img/menu/blends/coffee/capp.webp";
import b_c_img2 from "../Library/img/menu/blends/coffee/cppucino.webp";
import b_f_img3 from "../Library/img/menu/blends/frappe/caramel-mac.webp";
import b_f_img4 from "../Library/img/menu/blends/frappe/Espresso Crumble.webp";
import b_f_img5 from "../Library/img/menu/blends/frappe/iriah-creme.webp";
import b_f_img6 from "../Library/img/menu/blends/frappe/mocha.webp";
import b_f_img7 from "../Library/img/menu/blends/frappe/white-mocha.webp";
import b_m_img8 from "../Library/img/menu/blends/matcha/almond.webp";
import b_m_img9 from "../Library/img/menu/blends/matcha/frappe.webp";
import b_m_img10 from "../Library/img/menu/blends/matcha/latte.webp";
import b_mt_img11 from "../Library/img/menu/blends/milktea/matcha.webp";
import b_mt_img12 from "../Library/img/menu/blends/milktea/taro.webp";
import b_mt_img13 from "../Library/img/menu/blends/milktea/Wintermelon.webp";
import b_s_img14 from "../Library/img/menu/blends/smoothies/Strawberry.webp";
import b_s_img15 from "../Library/img/menu/blends/smoothies/banana.webp";


import c_img1 from "../Library/img/menu/cakes/cake/blueberry.webp"
import c_img2 from "../Library/img/menu/cakes/cake/BTS.webp"
import c_img3 from "../Library/img/menu/cakes/cake/caramel.webp"
import c_img4 from "../Library/img/menu/cakes/cake/Kitkat.webp"
import c_img5 from "../Library/img/menu/cakes/cake/red-velvet.webp"


import p_m_img1 from "../Library/img/menu/pastries/muffins/blueberry.webp"
import p_m_img2 from "../Library/img/menu/pastries/muffins/carrot.webp"
import p_m_img3 from "../Library/img/menu/pastries/muffins/choco banana.webp"
import p_c_img4 from "../Library/img/menu/pastries/cookies/chocolate chip cookie.webp"
import p_c_img5 from "../Library/img/menu/pastries/cookies/oatmeal raisin cookie.webp"
import p_set_img6 from "../Library/img/menu/set/IMG_0345.webp"
import p_set_img7 from "../Library/img/menu/set/IMG_0365.webp"
import p_set_img8 from "../Library/img/menu/set/IMG_9855.webp"
import p_set_img9 from "../Library/img/menu/set/IMG_9914.webp"
import p_set_img10 from "../Library/img/menu/set/IMG_9865.webp"





// attempt-g
import Gallery from 'react-grid-gallery';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
      // attempt-a
      ,images: this.props.blends
    };
  }


  // attempt-b
  setCustomTags (i) {
    return (
      i.tags.map((t) => {
        return (<div
          key={t.value}
          style={customTagStyle}>
          {t.title}
          </div>);
        })
      );
    }


  render () {

    // attempt-h
    var images =
    this.state.images.map((i) => {
      i.customOverlay = (
        <div style={captionStyle}>
          <div>{i.caption}</div>
          {i.hasOwnProperty('tags') &&
            this.setCustomTags(i)}
        </div>);
      return i;
    });
    return (
      
      <div id="our-specialty" className="menu-section">
        <div className="title-header d-flex flex-row justify-content-center align-items-center">
          <div id="title-header-left" className="text-right ">Our Specialty Products</div>
          <div id="title-header-right" className="ml-3">EXPERIENCE PREMIUM BLENDS <br/> COUPLED WITH DELICIOUS FOOD</div>
        </div>
        <div className="menu-buttons d-flex justify-md-content-between justify-content-around">
          <button className="menu-button" onClick={() => this.setState({images: this.props.blends})}> 
            <a>BLENDS</a>
          </button>
          <button className="menu-button" onClick={() => this.setState({images: this.props.cakes})}> 
            <a>CAKES</a>
          </button>
          {/* <button className="menu-button" onClick={() => this.setState({index: 2})}> 
            <a>PASTA</a>
          </button> */}
          <button className="menu-button" onClick={() => this.setState({images: this.props.pastries})}> 
            <a>PASTRIES</a>
          </button>
        </div>

        {/* attempt-c */}
        {/* amo ni ang link: https://github.com/benhowell/react-grid-gallery/blob/master/examples/demo4.js#L136 */}
        <Gallery images={this.state.images} enableLightbox={false} enableImageSelection={false} />
      </div>
    )
  }
}

// attempt-e
Menu.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      srcset: PropTypes.array,
      caption: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element
      ]),
      thumbnailWidth: PropTypes.number.isRequired,
      thumbnailHeight: PropTypes.number.isRequired
    })
  ).isRequired
};

const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, .7)",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "absolute",
  color: "white",
  padding: "2px",
  fontSize: "100%",
  paddingTop: "45%",
  textAlign: "center"
};

//not used since no tags used
const customTagStyle = {
  wordWrap: "break-word",
  display: "inline-block",
  backgroundColor: "white",
  height: "auto",
  fontSize: "75%",
  fontWeight: "600",
  lineHeight: "1",
  padding: ".2em .6em .3em",
  borderRadius: ".25em",
  color: "black",
  verticalAlign: "baseline",
  margin: "2px"
};



Menu.defaultProps = {
  // if enableLightbox is set to false, src is not needed
  blends: ([
      {
          src: b_c_img1,
          thumbnail: b_c_img1,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Cappuccino"
      },
      {
          src: b_c_img2,
          thumbnail: b_c_img2,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Cappucino"
      },
      {
          src: b_f_img3,
          thumbnail: b_f_img3,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Caramel Macchiato Frappe"
      },
      {
          src: b_f_img4,
          thumbnail: b_f_img4,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Espresso Crumble Frappe"
      },
      {
          src: b_f_img5,
          thumbnail: b_f_img5,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Iriah Creme Frappe"
      },
      {
          src: b_f_img6,
          thumbnail: b_f_img6,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Mocha Frappe"
      },
      {
          src: b_f_img7,
          thumbnail: b_f_img7,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "White Mocha Frappe"
      },
      {
          src: b_m_img8,
          thumbnail: b_m_img8,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Matcha Almond"
      },
      {
          src: b_m_img9,
          thumbnail: b_m_img9,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Matcha Frappe"
      },
      {
          src: b_m_img10,
          thumbnail: b_m_img10,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Matcha Latte"
      },
      {
          src: b_mt_img11,
          thumbnail: b_mt_img11,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Matcha Milktea"
      },
      {
          src: b_mt_img12,
          thumbnail: b_mt_img12,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Taro Milktea"
      },
      {
          src: b_mt_img13,
          thumbnail: b_mt_img13,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Wintermelon Milktea"
      },
      {
          src: b_s_img14,
          thumbnail: b_s_img14,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Strawberry Smoothie"
      },
      {
          src: b_s_img15,
          thumbnail: b_s_img15,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Banana Smoothie"
      }
  ]),
  cakes: ([
    {
        src: c_img1,
        thumbnail: c_img1,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Blueberry",
    },
    {
        src: c_img2,
        thumbnail: c_img2,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "BTS (Better Than Sex)"
    },
    {
        src: c_img3,
        thumbnail: c_img3,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Caramel"
    },
    {
        src: c_img4,
        thumbnail: c_img4,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Kitkat"
    },
    {
        src: c_img5,
        thumbnail: c_img5,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Red Velvet"
    }
  ]),
  pastries: ([
    {
        src: p_m_img1,
        thumbnail: p_m_img1,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Blueberry"
    },
    {
        src: p_m_img2,
        thumbnail: p_m_img2,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Carrot"
    },
    {
        src: p_m_img3,
        thumbnail: p_m_img3,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Choco Banana"
    },
    {
        src: p_set_img8,
        thumbnail: p_set_img8,
        thumbnailWidth: 1.5,
        thumbnailHeight: 1,
        caption: ""
    },
    {
        src: p_set_img9,
        thumbnail: p_set_img9,
        thumbnailWidth: 1.5,
        thumbnailHeight: 1,
        caption: ""
    },
    {
        src: p_c_img4,
        thumbnail: p_c_img4,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Oatmeal Raisin"
    },
    {
        src: p_c_img5,
        thumbnail: p_c_img5,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Chocolate Chip"
    },
    {
        src: p_set_img10,
        thumbnail: p_set_img10,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: ""
    },
    {
        src: p_set_img6,
        thumbnail: p_set_img6,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: ""
    },
    {
        src: p_set_img7,
        thumbnail: p_set_img7,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: ""
    },
  

  ])
};



export default Menu;

