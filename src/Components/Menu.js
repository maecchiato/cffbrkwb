import React from 'react';
import '../App.css';

// attempt-f
import PropTypes from 'prop-types';

import placeholder from "../Library/img/transparent_placeholder.png'"

import b_c_img1 from "../Library/img/menu/coffee/capp.jpg";
import b_c_img2 from "../Library/img/menu/coffee/cppucino.jpg";
import b_f_img3 from "../Library/img/menu/frappe/caramel-mac.jpg";
import b_f_img4 from "../Library/img/menu/frappe/Espresso Crumble.jpg";
import b_f_img5 from "../Library/img/menu/frappe/iriah-creme.jpg";
import b_f_img6 from "../Library/img/menu/frappe/mocha.jpg";
import b_f_img7 from "../Library/img/menu/frappe/white-mocha.jpg";
import b_m_img8 from "../Library/img/menu/matcha/almond.jpg";
import b_m_img9 from "../Library/img/menu/matcha/frappe.jpg";
import b_m_img10 from "../Library/img/menu/matcha/latte.jpg";
import b_mt_img11 from "../Library/img/menu/Milktea/matcha.jpg";
import b_mt_img12 from "../Library/img/menu/Milktea/taro.jpg";
import b_mt_img13 from "../Library/img/menu/Milktea/Wintermelon.jpg";

import b_s_img14 from "../Library/img/menu/smoothies/Strawberry.jpg";
import b_s_img15 from "../Library/img/menu/smoothies/banana.jpg";

// import b_img_16 from "../Library/img/menu-card-1.png";
// import b_img_17 from "../Library/img/menu-card-2.png";
// import b_img_18 from "../Library/img/menu-card-3.png";
// import b_img_19 from "../Library/img/menu-card-4.png";
// import b_img_20 from "../Library/img/menu-card-5.png";
// import b_img_21 from "../Library/img/menu-card-6.png";
// import b_img_22 from "../Library/img/menu-card-7.png";
// import b_img_23 from "../Library/img/menu-card-8.png";

import c_img1 from "../Library/img/menu/cakes/blueberry.jpg"
import c_img2 from "../Library/img/menu/cakes/BTS.jpg"
import c_img3 from "../Library/img/menu/cakes/caramel.jpg"
import c_img4 from "../Library/img/menu/cakes/Kitkat.jpg"
import c_img5 from "../Library/img/menu/cakes/red-velvet.jpg"

import p_img1 from "../Library/img/menu/Muffins/blueberry.jpg"
import p_img2 from "../Library/img/menu/Muffins/carrot.jpg"
import p_img3 from "../Library/img/menu/Muffins/choco banana.jpg"




// original:
// import Gallery from "react-photo-gallery";

// attempt-g
import Gallery from 'react-grid-gallery';

// const blends = [
//   {
//     src: b_c_img1,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_c_img2,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_f_img9,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_f_img10,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_f_img11,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_f_img12,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_m_img19,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_m_img20,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_m_img21,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_mt_img25,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_mt_img26,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_mt_img27,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_s_img30,
//     width: 1,
//     height: 1
//   },
//   {
//     src: b_s_img31,
//     width: 1,
//     height: 1
//   }
  
// ]

// const cakes = [
//   {
//     src: c_img1,
//     width: 2,
//     height: 2
//   },
//   {
//     src: c_img2,
//     width: 1,
//     height: 1
//   },
//   {
//     src: c_img3,
//     width: 1,
//     height: 1
//   },
//   {
//     src: c_img4,
//     width: 1,
//     height: 1
//   },
//   {
//     src: c_img5,
//     width: 1,
//     height: 1
//   }
// ]

// const pastas = [
//   {
//     src: b_c_img1,
//     width: 1,
//     height: 1
//   }
// ]

// const cookies = [
//   {
//     src: ck_img1,
//     width: 1,
//     height: 1
//   },
//   {
//     src: ck_img2,
//     width: 1,
//     height: 1
//   },
//   {
//     src: ck_img3,
//     width: 1,
//     height: 1
//   }
// ]



// const galleries = [
  
//   {
//     content:
//     // <Gallery photos={blends} margin={5} />
//     <Gallery images={images} enableImageSelection={false} enableLightbox={false} />
//   },
//   {
//     content:
//     // <Gallery photos={cakes} margin={5} />
//     <Gallery images={images} enableImageSelection={false} enableLightbox={false} />
//   },
//   {
//     content:
//     // <Gallery photos={pastas} margin={5}/>
//     <Gallery images={images} enableImageSelection={false} enableLightbox={false} />
//   },
//   {
//     content:
//     // <Gallery photos={cookies} margin={5}/>
//     <Gallery images={images} enableImageSelection={false} enableLightbox={false} />
//   },
// ]

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
        {/* <div className="menu-header d-flex flex-row">
          <p id="menu-header-left" className="align-self-center">Our Specialty Products</p>
          <p id="menu-header-right" className="align-self-center">EXPERIENCE PREMIUM BLENDS <br/> COUPLED WITH DELICIOUS FOOD</p>
        </div> */}
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
        {/* orignal: */}
        {/* {galleries[this.state.index].content} */}

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
          caption: "Caramel Macchiato"
      },
      {
          src: b_f_img4,
          thumbnail: b_f_img4,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Espresso Crumble"
      },
      {
          src: b_f_img5,
          thumbnail: b_f_img5,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Iriah Creme"
      },
      {
          src: b_f_img6,
          thumbnail: b_f_img6,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "Mocha"
      },
      {
          src: b_f_img7,
          thumbnail: b_f_img7,
          thumbnailWidth: 1,
          thumbnailHeight: 1,
          caption: "White Mocha"
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
    }
  ]),
  pastries: ([
    {
        src: p_img1,
        thumbnail: p_img1,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Blueberry"
    },
    {
        src: p_img2,
        thumbnail: p_img2,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Carrot"
    },
    {
        src: p_img3,
        thumbnail: p_img3,
        thumbnailWidth: 1,
        thumbnailHeight: 1,
        caption: "Choco Banana"
    }
  ])
};



export default Menu;

