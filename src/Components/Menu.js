import React from 'react';
import '../App.css';
import '../App-mobile.css';

// attempt-f
import PropTypes from 'prop-types';

import placeholder from "../Library/img/transparent_placeholder.png'"

import b_c_img1 from "../Library/img/menu/blends/coffee/capp.jpg";
import b_c_img2 from "../Library/img/menu/blends/coffee/cppucino.jpg";
import b_f_img3 from "../Library/img/menu/blends/frappe/caramel-mac.jpg";
import b_f_img4 from "../Library/img/menu/blends/frappe/Espresso Crumble.jpg";
import b_f_img5 from "../Library/img/menu/blends/frappe/iriah-creme.jpg";
import b_f_img6 from "../Library/img/menu/blends/frappe/mocha.jpg";
import b_f_img7 from "../Library/img/menu/blends/frappe/white-mocha.jpg";
import b_m_img8 from "../Library/img/menu/blends/matcha/almond.jpg";
import b_m_img9 from "../Library/img/menu/blends/matcha/frappe.jpg";
import b_m_img10 from "../Library/img/menu/blends/matcha/latte.jpg";
import b_mt_img11 from "../Library/img/menu/blends/milktea/matcha.jpg";
import b_mt_img12 from "../Library/img/menu/blends/milktea/taro.jpg";
import b_mt_img13 from "../Library/img/menu/blends/milktea/Wintermelon.jpg";
import b_s_img14 from "../Library/img/menu/blends/smoothies/Strawberry.jpg";
import b_s_img15 from "../Library/img/menu/blends/smoothies/banana.jpg";
import b_set_img16 from "../Library/img/menu/set/americano.jpg";
import b_set_img17 from "../Library/img/menu/set/caramel with hand.jpg";
import b_set_img18 from "../Library/img/menu/set/Iced Latte.jpg";


import c_img1 from "../Library/img/menu/cakes/cake/blueberry.jpg"
import c_img2 from "../Library/img/menu/cakes/cake/BTS.jpg"
import c_img3 from "../Library/img/menu/cakes/cake/caramel.jpg"
import c_img4 from "../Library/img/menu/cakes/cake/Kitkat.jpg"
import c_img5 from "../Library/img/menu/cakes/cake/red-velvet.jpg"
import c_set_img6 from "../Library/img/menu/set/IMG_9960.JPG"
import c_set_img7 from "../Library/img/menu/set/IMG_9968.JPG"



import p_m_img1 from "../Library/img/menu/pastries/muffins/blueberry.jpg"
import p_m_img2 from "../Library/img/menu/pastries/muffins/carrot.jpg"
import p_m_img3 from "../Library/img/menu/pastries/muffins/choco banana.jpg"
import p_c_img4 from "../Library/img/menu/pastries/cookies/chocolate chip cookie.jpg"
import p_c_img5 from "../Library/img/menu/pastries/cookies/oatmeal raisin cookie.jpg"
import p_set_img6 from "../Library/img/menu/set/IMG_0345.JPG"
import p_set_img7 from "../Library/img/menu/set/IMG_0365.JPG"
import p_set_img8 from "../Library/img/menu/set/IMG_9855.JPG"
import p_set_img9 from "../Library/img/menu/set/IMG_9914.JPG"
import p_set_img10 from "../Library/img/menu/set/IMG_9865.JPG"





// attempt-g
import Gallery from 'react-grid-gallery';


function changeGallery (i) {
  return 
}



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
        <div className="title-header">
          <p id="title-header-left" className="">Our Specialty Products</p>
          <p id="title-header-right" className="">EXPERIENCE PREMIUM BLENDS <br/> COUPLED WITH DELICIOUS FOOD</p>
        </div>
        <div className="menu-buttons d-flex justify-content-between">
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
        <Gallery images={this.state.images} enableImageSelection={false} enableLightbox={false} rowHeight={200} margin={3} />
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
          src: b_set_img16,
          thumbnail: b_set_img16,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Americano"
      },
      {
          src: b_set_img17,
          thumbnail: b_set_img17,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Caramel"
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
          src:  b_set_img18,
          thumbnail:  b_set_img18,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Iced Latte"
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
      },
      {
          src: placeholder,
          thumbnail: placeholder,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: ""
      },
      {
          src: placeholder,
          thumbnail: placeholder,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: ""
      }
  ]),
  cakes: ([
    {
        src: c_set_img6,
        thumbnail: c_set_img6,
        thumbnailWidth: 1.5,
        thumbnailHeight: 1,
        caption: "",
    },
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
    },
    {
        src: c_set_img7,
        thumbnail: c_set_img7,
        thumbnailWidth: 1.5,
        thumbnailHeight: 1,
        caption: "",
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

