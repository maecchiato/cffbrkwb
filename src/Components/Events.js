import React from 'react';
import '../App.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cd_1 from "../Library/img/Events/Cup Design/_MG_4742.webp";
import cd_2 from "../Library/img/Events/Cup Design/_MG_4752.webp";
import cd_3 from "../Library/img/Events/Cup Design/_MG_4923.webp";
import cd_4 from "../Library/img/Events/Cup Design/_MG_4944.webp";
import cd_5 from "../Library/img/Events/Cup Design/_MG_4951.webp";
import cd_6 from "../Library/img/Events/Cup Design/_MG_4970.webp";
import cd_7 from "../Library/img/Events/Cup Design/_MG_4990.webp";
import cd_8 from "../Library/img/Events/Cup Design/_MG_4997.webp";
import cd_9 from "../Library/img/Events/Cup Design/_MG_5213.webp";
import cd_10 from "../Library/img/Events/Cup Design/_MG_5225.webp";
import cd_11 from "../Library/img/Events/Cup Design/_MG_5231.webp";

import gla_1 from "../Library/img/Events/Grand Latte Art/_MG_3125.webp";
import gla_2 from "../Library/img/Events/Grand Latte Art/_MG_3188_edited.webp";
import gla_3 from "../Library/img/Events/Grand Latte Art/_MG_3440.webp";
import gla_4 from "../Library/img/Events/Grand Latte Art/_MG_3534_edited.webp";
import gla_5 from "../Library/img/Events/Grand Latte Art/_MG_3575.webp";
import gla_6 from "../Library/img/Events/Grand Latte Art/_MG_3628.webp";
import gla_7 from "../Library/img/Events/Grand Latte Art/_MG_4479_edited.webp";
import gla_8 from "../Library/img/Events/Grand Latte Art/_MG_4533_edited.webp";
import gla_9 from "../Library/img/Events/Grand Latte Art/group5.webp";
import gla_10 from "../Library/img/Events/Grand Latte Art/group6.webp";
import gla_11 from "../Library/img/Events/Grand Latte Art/jacob vincent.webp";
import gla_12 from "../Library/img/Events/Grand Latte Art/jj2.webp";

import sd_18_1 from "../Library/img/Events/Speed dating/2018/IMG_0437.webp";
import sd_18_2 from "../Library/img/Events/Speed dating/2018/IMG_0438.webp";
import sd_18_3 from "../Library/img/Events/Speed dating/2018/IMG_0472.webp";
import sd_18_4 from "../Library/img/Events/Speed dating/2018/IMG_0475.webp";
import sd_18_5 from "../Library/img/Events/Speed dating/2018/IMG_0477.webp";
import sd_18_6 from "../Library/img/Events/Speed dating/2018/IMG_0479.webp";
import sd_18_7 from "../Library/img/Events/Speed dating/2018/IMG_0480.webp";
import sd_18_8 from "../Library/img/Events/Speed dating/2018/IMG_8087.webp";

import sd_19_1 from "../Library/img/Events/Speed dating/2019/IMG_0199.webp";
import sd_19_2 from "../Library/img/Events/Speed dating/2019/IMG_0233.webp";
import sd_19_3 from "../Library/img/Events/Speed dating/2019/IMG_0268.webp";
import sd_19_4 from "../Library/img/Events/Speed dating/2019/IMG_0329.webp";
import sd_19_5 from "../Library/img/Events/Speed dating/2019/IMG_0423.webp";
import sd_19_6 from "../Library/img/Events/Speed dating/2019/IMG_0432.webp";

import icd_1 from "../Library/img/Events/ICD/MG_4447.webp";
import icd_2 from "../Library/img/Events/ICD/MG_4467.webp";
import icd_3 from "../Library/img/Events/ICD/MG_4528.webp";
import icd_4 from "../Library/img/Events/ICD/MG_4605.webp";
import icd_5 from "../Library/img/Events/ICD/MG_4632.webp";
import icd_6 from "../Library/img/Events/ICD/MG_4670.webp";

import cbmc_1 from "../Library/img/Events/CB Music Cafe/IMG_9574.webp";
import cbmc_2 from "../Library/img/Events/CB Music Cafe/IMG_9580.webp";
import cbmc_3 from "../Library/img/Events/CB Music Cafe/IMG_9581.webp";

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
        slidesToShow: 3,
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
                      <img className="events-img" src={cd_1} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_2} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_3} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_4} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_5} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_6} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_7} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_8} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_9} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_10} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={cd_11} alt=""/>
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
                      <img className="events-img" src={gla_1} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_2} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_3} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_4} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_5} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_6} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_7} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_8} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_9} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_10} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_11} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={gla_12} alt=""/>
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
                      <img className="events-img" src={sd_18_1} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_2} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_3} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_4} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_5} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_6} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_7} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_18_8} alt=""/>
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
                      <img className="events-img" src={sd_19_1} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_2} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_3} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_4} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_5} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={sd_19_6} alt=""/>
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
                      <img className="events-img" src={icd_1} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_2} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_3} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_4} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_5} alt=""/>
                    </div>
                    <div className="events-slider-content row">
                      <img className="events-img" src={icd_6} alt=""/>
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
                    <img loading="lazy" className="events-img" src={cbmc_1} alt=""/>
                  </div>
                  <div className="events-slider-content row">
                    <img loading="lazy" className="events-img" src={cbmc_2} alt=""/>
                  </div>
                  <div className="events-slider-content row">
                    <img loading="lazy" className="events-img" src={cbmc_3} alt=""/>
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
