import React from 'react';
import '../App.css';

import img1 from "../Library/img/menu-card-1.png";
import img2 from "../Library/img/menu-card-2.png";
import img3 from "../Library/img/menu-card-3.png";
import img4 from "../Library/img/menu-card-4.png";
import img5 from "../Library/img/menu-card-5.png";
import img6 from "../Library/img/menu-card-6.png";
import img7 from "../Library/img/menu-card-7.png";
import img8 from "../Library/img/menu-card-8.png";



const galleries = [
  {
    content:  
      <div className="menu-grid d-flex flex-row">
        <div className="col-4 d-flex flex-column">
          <div className="d-flex">
            <div className="menu-card menu-card-1">
              <img className="menu-card-img" src={img1}/>
              <div className="hover-text text-center">
                {/*  */}
              </div>
            </div>
            <div className="menu-card menu-card-2">
              <img className="menu-card-img" src={img2}/>
              <div className="hover-text text-center">
                {/* HELLO */}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="menu-card menu-card-3">
              <img className="menu-card-img" src={img3}/>
              <div className="hover-text text-center">
                {/* HELLO */}
              </div>
            </div>
          </div>
        </div>
        <div className="menu-middle-col col-4 d-flex flex-column">
          <div className="d-flex">
            <div className="menu-card menu-card-4">
              <img className="menu-card-img" src={img4}/>
              <div className="hover-text text-center">
                {/* HELLO */}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="menu-card menu-card-5">
              <img className="menu-card-img" src={img5}/>
              <div className="hover-text text-center">
                {/* HELLO */}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="menu-card menu-card-6">
              <img className="menu-card-img" src={img6}/>
              <div className="hover-text text-center">
                {/* HELLO */}
              </div>
            </div>
          </div>
        </div>
        <div className="menu-right-col col-4 d-flex flex-column">
          <div className="d-flex">
            <div className="menu-card menu-card-2">
              <img className="menu-card-img" src={img7}/>
              <div className="hover-text text-center">
                {/* HELLO */}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="menu-card menu-card-2">
              <img className="menu-card-img" src={img8}/>
              <div className="hover-text text-center">
                {/* HELLO */}
              </div>
            </div>
          </div>
        </div>
      </div>
  },
  {
    content: 
    <div className="menu-grid d-flex flex-row">
      <div className="col-4 d-flex flex-column">
       <div className="d-flex">
        <div className="menu-card menu-card-1">
          <img className="menu-card-img" src={img2}/>
          <div className="hover-text text-center">
            {/* 2 */}
          </div>
        </div>
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img2}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-3">
          <img className="menu-card-img" src={img3}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
    </div>
    <div className="menu-middle-col col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-4">
          <img className="menu-card-img" src={img4}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-5">
          <img className="menu-card-img" src={img5}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-6">
          <img className="menu-card-img" src={img6}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
    </div>
    <div className="menu-right-col col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img7}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img8}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
    </div>
  </div>
  },
  {
    content:
    <div className="menu-grid d-flex flex-row">
    <div className="col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-1">
          <img className="menu-card-img" src={img6}/>
          <div className="hover-text text-center">
            {/* 3 */}
          </div>
        </div>
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img2}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-3">
          <img className="menu-card-img" src={img3}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
    </div>
    <div className="menu-middle-col col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-4">
          <img className="menu-card-img" src={img4}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-5">
          <img className="menu-card-img" src={img5}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-6">
          <img className="menu-card-img" src={img6}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
    </div>
    <div className="menu-right-col col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img7}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img8}/>
          <div className="hover-text text-center">
            {/* HELLO */}
          </div>
        </div>
      </div>
    </div>
  </div>
  },
  {
    content: 
    <div className="menu-grid d-flex flex-row">
    <div className="col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-1">
          <img className="menu-card-img" src={img4}/>
          <div className="hover-text text-center">
            4
          </div>
        </div>
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img2}/>
          <div className="hover-text text-center">
            HELLO
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-3">
          <img className="menu-card-img" src={img3}/>
          <div className="hover-text text-center">
            HELLO
          </div>
        </div>
      </div>
    </div>
    <div className="menu-middle-col col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-4">
          <img className="menu-card-img" src={img4}/>
          <div className="hover-text text-center">
            HELLO
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-5">
          <img className="menu-card-img" src={img5}/>
          <div className="hover-text text-center">
            HELLO
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-6">
          <img className="menu-card-img" src={img6}/>
          <div className="hover-text text-center">
            HELLO
          </div>
        </div>
      </div>
    </div>
    <div className="menu-right-col col-4 d-flex flex-column">
      <div className="d-flex">
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img7}/>
          <div className="hover-text text-center">
            HELLO
          </div>
        </div>
      </div>
      <div className="d-flex">
        <div className="menu-card menu-card-2">
          <img className="menu-card-img" src={img8}/>
          <div className="hover-text text-center">
            HELLO
          </div>
        </div>
      </div>
    </div>
  </div>
  }
]

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
  }


  render () {
    return (
      
      <div className="menu-section">
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
          {galleries[this.state.index].content}
          
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