import React from 'react';
import '../App.css';

import c_img1 from "../Library/img/menu/cakes/blueberry.jpg"
import c_img2 from "../Library/img/menu/cakes/BTS.jpg"
import c_img3 from "../Library/img/menu/cakes/caramel.jpg"
import c_img4 from "../Library/img/menu/cakes/Kitkat.jpg"
import c_img5 from "../Library/img/menu/cakes/red-velvet.jpg"

import ck_img1 from "../Library/img/menu/Muffins/blueberry.jpg"
import ck_img2 from "../Library/img/menu/Muffins/carrot.jpg"
import ck_img3 from "../Library/img/menu/Muffins/choco banana.jpg"


import b_c_img1 from "../Library/img/menu/coffee/capp.jpg";
import b_c_img2 from "../Library/img/menu/coffee/cppucino.jpg";
import b_f_img9 from "../Library/img/menu/frappe/caramel-mac.jpg";
import b_f_img10 from "../Library/img/menu/frappe/Espresso Crumble.jpg";
import b_f_img11 from "../Library/img/menu/frappe/iriah-creme.jpg";
import b_f_img12 from "../Library/img/menu/frappe/mocha.jpg";
import b_f_img13 from "../Library/img/menu/frappe/white-mocha.jpg";
import b_m_img19 from "../Library/img/menu/matcha/almond.jpg";
import b_m_img20 from "../Library/img/menu/matcha/frappe.jpg";
import b_m_img21 from "../Library/img/menu/matcha/latte.jpg";
import b_mt_img25 from "../Library/img/menu/Milktea/matcha.jpg";
import b_mt_img26 from "../Library/img/menu/Milktea/taro.jpg";
import b_mt_img27 from "../Library/img/menu/Milktea/Wintermelon.jpg";

import b_s_img30 from "../Library/img/menu/smoothies/Strawberry.jpg";
import b_s_img31 from "../Library/img/menu/smoothies/banana.jpg";

import b_img_32 from "../Library/img/menu-card-1.png";
import b_img_33 from "../Library/img/menu-card-2.png";
import b_img_34 from "../Library/img/menu-card-3.png";
import b_img_35 from "../Library/img/menu-card-4.png";
import b_img_36 from "../Library/img/menu-card-5.png";
import b_img_37 from "../Library/img/menu-card-6.png";
import b_img_38 from "../Library/img/menu-card-7.png";
import b_img_39 from "../Library/img/menu-card-8.png";



import Gallery from "react-photo-gallery";

const blends = [
  {
    src: b_c_img1,
    width: 1,
    height: 1
  },
  {
    src: b_c_img2,
    width: 1,
    height: 1
  },
  {
    src: b_f_img9,
    width: 1,
    height: 1
  },
  {
    src: b_f_img10,
    width: 1,
    height: 1
  },
  {
    src: b_f_img11,
    width: 1,
    height: 1
  },
  {
    src: b_f_img12,
    width: 1,
    height: 1
  },
  {
    src: b_m_img19,
    width: 1,
    height: 1
  },
  {
    src: b_m_img20,
    width: 1,
    height: 1
  },
  {
    src: b_m_img21,
    width: 1,
    height: 1
  },
  {
    src: b_mt_img25,
    width: 1,
    height: 1
  },
  {
    src: b_mt_img26,
    width: 1,
    height: 1
  },
  {
    src: b_mt_img27,
    width: 1,
    height: 1
  },
  {
    src: b_s_img30,
    width: 1,
    height: 1
  },
  {
    src: b_s_img31,
    width: 1,
    height: 1
  },
  // {
  //   src: b_img_32,
  //   width: 1,
  //   height: 1
  // },
  // {
  //   src: b_img_33,
  //   width: 1,
  //   height: 1
  // },
  // {
  //   src: b_img_34,
  //   width: 1,
  //   height: 1
  // },
  // {
  //   src: b_img_35,
  //   width: 1,
  //   height: 1
  // },
  // {
  //   src: b_img_36,
  //   width: 1,
  //   height: 1
  // },
  // {
  //   src: b_img_37,
  //   width: 1,
  //   height: 1
  // },
  // {
  //   src: b_img_38,
  //   width: 1,
  //   height: 1
  // },
  // {
  //   src: b_img_39,
  //   width: 2,
  //   height: 1
  // }
  
]

const cakes = [
  {
    src: c_img1,
    width: 2,
    height: 2
  },
  {
    src: c_img2,
    width: 1,
    height: 1
  },
  {
    src: c_img3,
    width: 1,
    height: 1
  },
  {
    src: c_img4,
    width: 1,
    height: 1
  },
  {
    src: c_img5,
    width: 1,
    height: 1
  }
]

const pastas = [
  {
    src: b_c_img1,
    width: 1,
    height: 1
  }
]

const cookies = [
  {
    src: ck_img1,
    width: 1,
    height: 1
  },
  {
    src: ck_img2,
    width: 1,
    height: 1
  },
  {
    src: ck_img3,
    width: 1,
    height: 1
  }
]



const galleries = [
  
  {
    content:
    <Gallery photos={blends} margin={5} />
  },
  {
    content:
    <Gallery photos={cakes} margin={5} />
  },
  {
    content:
    <Gallery photos={pastas} margin={5}/>
  },
  {
    content:
    <Gallery photos={cookies} margin={5}/>
  },
]


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }


  render () {
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
          <button className="menu-button" onClick={() => this.setState({index: 0})}> 
            <a>BLENDS</a>
          </button>
          <button className="menu-button" onClick={() => this.setState({index: 1})}> 
            <a>CAKES</a>
          </button>
          {/* <button className="menu-button" onClick={() => this.setState({index: 2})}> 
            <a>PASTA</a>
          </button> */}
          <button className="menu-button" onClick={() => this.setState({index: 3})}> 
            <a>PASTRIES</a>
          </button>
        </div>
        {/* orignal: */}
        {galleries[this.state.index].content}

        {/* attempt: */}
        {/* <Gallery photos={photos} margin={5}/> */}
        {/* amo ni ang link: https://github.com/neptunian/react-photo-gallery */}
      </div>
    )
  }
}

<script>
  document.querySelectorAll(".react-photo-gallery--gallery img").setAttribute("loading", "lazy");
</script>



export default Menu;




//{
  //   content:  
  //     <div className="menu-grid d-flex flex-row">
  //       <div className="col-4 d-flex flex-column">
  //         <div className="d-flex">
  //           <div className="menu-card menu-card-1">
  //             <img className="menu-card-img" src={img1}/>
  //             <div className="hover-text text-center">
  //               .
  //             </div>
  //           </div>
  //           <div className="menu-card menu-card-2">
  //             <img className="menu-card-img" src={img2}/>
  //             <div className="hover-text text-center">
                
  //             </div>
  //           </div>
  //         </div>
  //         <div className="d-flex">
  //           <div className="menu-card menu-card-3">
  //             <img className="menu-card-img" src={img3}/>
  //             <div className="hover-text text-center">
                
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="menu-middle-col col-4 d-flex flex-column">
  //         <div className="d-flex">
  //           <div className="menu-card menu-card-4">
  //             <img className="menu-card-img" src={img4}/>
  //             <div className="hover-text text-center">
                
  //             </div>
  //           </div>
  //         </div>
  //         <div className="d-flex">
  //           <div className="menu-card menu-card-5">
  //             <img className="menu-card-img" src={img5}/>
  //             <div className="hover-text text-center">
                
  //             </div>
  //           </div>
  //         </div>
  //         <div className="d-flex">
  //           <div className="menu-card menu-card-6">
  //             <img className="menu-card-img" src={img6}/>
  //             <div className="hover-text text-center">
                
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="menu-right-col col-4 d-flex flex-column">
  //         <div className="d-flex">
  //           <div className="menu-card menu-card-7">
  //             <img className="menu-card-img" src={img7}/>
  //             <div className="hover-text text-center">
                
  //             </div>
  //           </div>
  //         </div>
  //         <div className="d-flex">
  //           <div className="menu-card menu-card-8">
  //             <img className="menu-card-img" src={img8}/>
  //             <div className="hover-text text-center">
                
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  // },


    // <div className="menu-section">
    //   <div className="row">
    //     <div className="col-4">
    //       <div className="row">
    //         <div className="col-6">
    //           <img src={img1} />
    //         </div>
    //         <div className="col-6">
    //           <img src={img2} />
    //         </div>
    //       </div>
    //       <div className="row">
    //         <img src={img3} />
    //       </div>
    //     </div>
    //     <div className="col-2">
    //       <div className="row">
    //         <img src={img4} />
    //       </div>
    //       <div className="row">
    //         <img src={img5} />  
    //       </div>
    //       <div className="row">
    //         <img src={img6} />
    //       </div>
    //     </div>
    //     <div className="col-4">
    //       <div className="row">
    //         <img src={img7} />
    //       </div>
    //       <div className="row">
    //         <img src={img8} />
    //       </div>
    //     </div>
    //   </div> 
    // </div>