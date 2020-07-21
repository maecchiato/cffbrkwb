import React from 'react';
import '../App.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cd_1 from "../Library/img/Events/Cup Design/_MG_4742.JPG";
import cd_2 from "../Library/img/Events/Cup Design/_MG_4752.JPG";
import cd_3 from "../Library/img/Events/Cup Design/_MG_4923.JPG";
import cd_4 from "../Library/img/Events/Cup Design/_MG_4944.JPG";
import cd_5 from "../Library/img/Events/Cup Design/_MG_4951.JPG";
import cd_6 from "../Library/img/Events/Cup Design/_MG_4970.JPG";
import cd_7 from "../Library/img/Events/Cup Design/_MG_4990.JPG";
import cd_8 from "../Library/img/Events/Cup Design/_MG_4997.JPG";
import cd_9 from "../Library/img/Events/Cup Design/_MG_5213.JPG";
import cd_10 from "../Library/img/Events/Cup Design/_MG_5225.JPG";
import cd_11 from "../Library/img/Events/Cup Design/_MG_5231.JPG";

import gla_1 from "../Library/img/Events/Grand Latte Art/_MG_3125.JPG";
import gla_2 from "../Library/img/Events/Grand Latte Art/_MG_3188_edited.jpg";
import gla_3 from "../Library/img/Events/Grand Latte Art/_MG_3440.JPG";
import gla_4 from "../Library/img/Events/Grand Latte Art/_MG_3534_edited.jpg";
import gla_5 from "../Library/img/Events/Grand Latte Art/_MG_3575.JPG";
import gla_6 from "../Library/img/Events/Grand Latte Art/_MG_3628.JPG";
import gla_7 from "../Library/img/Events/Grand Latte Art/_MG_4479_edited.jpg";
import gla_8 from "../Library/img/Events/Grand Latte Art/_MG_4533_edited.jpg";
import gla_9 from "../Library/img/Events/Grand Latte Art/group5.jpg";
import gla_10 from "../Library/img/Events/Grand Latte Art/group6.jpg";
import gla_11 from "../Library/img/Events/Grand Latte Art/jacob vincent.jpg";
import gla_12 from "../Library/img/Events/Grand Latte Art/jj2.jpg";

import sd_18_1 from "../Library/img/Events/Speed dating/2018/IMG_0437.JPG";
import sd_18_2 from "../Library/img/Events/Speed dating/2018/IMG_0438.JPG";
import sd_18_3 from "../Library/img/Events/Speed dating/2018/IMG_0472.JPG";
import sd_18_4 from "../Library/img/Events/Speed dating/2018/IMG_0475.JPG";
import sd_18_5 from "../Library/img/Events/Speed dating/2018/IMG_0477.JPG";
import sd_18_6 from "../Library/img/Events/Speed dating/2018/IMG_0479.JPG";
import sd_18_7 from "../Library/img/Events/Speed dating/2018/IMG_0480.JPG";
import sd_18_8 from "../Library/img/Events/Speed dating/2018/IMG_8087.JPG";

import sd_19_1 from "../Library/img/Events/Speed dating/2019/IMG_0199.JPG";
import sd_19_2 from "../Library/img/Events/Speed dating/2019/IMG_0233.JPG";
import sd_19_3 from "../Library/img/Events/Speed dating/2019/IMG_0268.JPG";
import sd_19_4 from "../Library/img/Events/Speed dating/2019/IMG_0329.JPG";
import sd_19_5 from "../Library/img/Events/Speed dating/2019/IMG_0423.JPG";
import sd_19_6 from "../Library/img/Events/Speed dating/2019/IMG_0432.JPG";

import icd_1 from "../Library/img/Events/ICD/MG_4447.jpg";
import icd_2 from "../Library/img/Events/ICD/MG_4467.jpg";
import icd_3 from "../Library/img/Events/ICD/MG_4528.jpg";
import icd_4 from "../Library/img/Events/ICD/MG_4605.jpg";
import icd_5 from "../Library/img/Events/ICD/MG_4632.jpg";
import icd_6 from "../Library/img/Events/ICD/MG_4670.jpg";

import cbmc_1 from "../Library/img/Events/CB Music Cafe/IMG_9574.JPG";
import cbmc_2 from "../Library/img/Events/CB Music Cafe/IMG_9580.JPG";
import cbmc_3 from "../Library/img/Events/CB Music Cafe/IMG_9581.JPG";

const slidesToShowOnDesktop = window.matchMedia('(min-width: 376px)')
const slidesToShowOnMobile = window.matchMedia('(max-width: 375px)');
class Events extends React.Component {

    render(){
      var settings = {
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        className: 'careers-slider',
        pauseOnFocus: true,
        pauseOnHover: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 3
      }
      return (
        <div className = "events-section bg-default">

          <div className="title-header d-flex flex-row justify-content-center align-items-center">
            <div id="title-header-left" className="mr-md-5 mr-3">Special Events</div>
            <div id="title-header-right" className="">WE DO OUT OF THE STORE <br/> EXPERIENCE TOO!</div>
          </div>
          <div className="events-box-group">
            <div className="d-flex events-box flex-column align-items-center">
              <div className="d-flex align-items-center pt-4 ">
                <div className="gold-rec"></div>
                <div className="events-name overline-16 px-3 text-center">Cup Design Competition</div>
                <div className="gold-rec"></div>
              </div>
              <div className="d-flex h-75 justify-content-center w-100" >
                <div className="d-flex pt-4 w-75">
                  <Slider {...settings}>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_1}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_2}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_3}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_4}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_5}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_6}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_7}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_8}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_9}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_10}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_11}/>
                    </div>
                  </Slider>
                </div>      
              </div>
            </div>
            <div className="d-flex events-box flex-column align-items-center">
              <div className="d-flex align-items-center pt-4 ">
                <div className="gold-rec"></div>
                <div className="events-name overline-16 px-3 text-center">Grand Latte Art Competition</div>
                <div className="gold-rec"></div>
              </div>
              <div className="d-flex h-75 justify-content-center w-100" >
                <div className="d-flex pt-4 w-75">
                  <Slider {...settings}>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_1}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_2}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_3}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_4}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_5}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_6}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_7}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_8}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_9}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_10}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_11}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_12}/>
                    </div>
                  </Slider>
                </div>      
              </div>
            </div>
            <div className="d-flex events-box flex-column align-items-center">
              <div className="d-flex align-items-center pt-4 ">
                <div className="gold-rec"></div>
                <div className="events-name overline-16 px-3 text-center">Speed Dating 2018</div>
                <div className="gold-rec"></div>
              </div>
              <div className="d-flex h-75 justify-content-center w-100" >
                <div className="d-flex pt-4 w-75">
                  <Slider {...settings}>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_1}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_2}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_3}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_4}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_5}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_6}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_7}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_8}/>
                    </div>
                  </Slider>
                </div>      
              </div>
            </div>
            <div className="d-flex events-box flex-column align-items-center">
              <div className="d-flex align-items-center pt-4 ">
                <div className="gold-rec"></div>
                <div className="events-name overline-16 px-3 text-center">Speed Dating 2019</div>
                <div className="gold-rec"></div>
              </div>
              <div className="d-flex h-75 justify-content-center w-100" >
                <div className="d-flex pt-4 w-75">
                  <Slider {...settings}>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_1}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_2}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_3}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_4}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_5}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_6}/>
                    </div>
                  </Slider>
                </div>      
              </div>
            </div>
            <div className="d-flex events-box flex-column align-items-center">
              <div className="d-flex align-items-center pt-4 ">
                <div className="gold-rec"></div>
                <div className="events-name overline-16 px-3 text-center">ICD</div>
                <div className="gold-rec"></div>
              </div>
              <div className="d-flex h-75 justify-content-center w-100" >
                <div className="d-flex pt-4 w-75">
                  <Slider {...settings}>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_1}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_2}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_3}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_4}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_5}/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_6}/>
                    </div>
                  </Slider>
                </div>      
              </div>
            </div>
            <div className="d-flex events-box flex-column align-items-center">
            <div className="d-flex align-items-center pt-4 ">
              <div className="gold-rec"></div>
              <div className="events-name overline-16 px-3 text-center">CB Music Cafe</div>
              <div className="gold-rec"></div>
            </div>
            <div className="d-flex h-75 justify-content-center w-100" >
              <div className="d-flex pt-4 w-75">
                <Slider {...settings}>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cbmc_1}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cbmc_2}/>
                  </div>
                  <div className="events-slider-content row">
                    <img className="events-img" src={cbmc_3}/>
                  </div>
                </Slider>
              </div>      
            </div>
          </div>
          </div>
        </div>
        
      )
    }
  }
export default Events;
