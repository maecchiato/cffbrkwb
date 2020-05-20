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

import b_img1 from "../Library/img/menu-card-1.png";
import img2 from "../Library/img/menu-card-2.png";
import img3 from "../Library/img/menu-card-3.png";
import img4 from "../Library/img/menu-card-4.png";
import img5 from "../Library/img/menu-card-5.png";
import img6 from "../Library/img/menu-card-6.png";
import img7 from "../Library/img/menu-card-7.png";
import img8 from "../Library/img/menu-card-8.png";

import Gallery from "react-photo-gallery";

const blends = [
  {
    src: b_img1,
    width: 1,
    height: 1
  },
  {
    src: img2,
    width: 1,
    height: 1
  },
  {
    src: img3,
    width: 1,
    height: 1
  },
  {
    src: img4,
    width: 1,
    height: 1
  },
  {
    src: img5,
    width: 1,
    height: 1
  },
  {
    src: img6,
    width: 1,
    height: 1
  },
  {
    src: img7,
    width: 1,
    height: 1
  },
  {
    src: img8,
    width: 2,
    height: 1
  }
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
    src: b_img1,
    width: 1,
    height: 1
  },
  {
    src: img2,
    width: 1,
    height: 1
  },
  {
    src: img3,
    width: 1,
    height: 1
  },
  {
    src: img4,
    width: 1,
    height: 1
  },
  {
    src: img5,
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

const galleries = [
  
  {
    content:
    <Gallery photos={blends} margin={5}/>
  },
  {
    content:
    <Gallery photos={cakes} margin={5}/>
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
          <button className="menu-button" onClick={() => this.setState({index: 2})}> 
            <a>PASTA</a>
          </button>
          <button className="menu-button" onClick={() => this.setState({index: 3})}> 
            <a>COOKIES</a>
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



export default Menu;





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