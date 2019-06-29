import React, { Component } from "react";
import './sponsorHome.css';
import Slider from "react-slick";
import { Parallax, Background } from 'react-parallax';


import asso1 from '../../../Images/1.png';
import asso2 from '../../../Images/2.png';
import asso3 from '../../../Images/3.png';
import asso4 from '../../../Images/4.png';
import plat1 from '../../../Images/5.png';
import plat2 from '../../../Images/6.png';
import plat3 from '../../../Images/7.png';
import plat4 from '../../../Images/8.png';
import gold1 from '../../../Images/9.png';
import gold2 from '../../../Images/10.png';
import gold3 from '../../../Images/11.png';
import gold4 from '../../../Images/12.png';
import title1 from '../../../Images/title1.jpeg';
import title2 from '../../../Images/title2.png';
import title3 from '../../../Images/title3.png';
import title4 from '../../../Images/title4.svg';

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    };
    return (
      <div className="spons">

        <Parallax blur={3} bgImage={require('../../../Images/spons.jpg')} bgImageAlt="sponsors" strength={700}>
          <h2 className="heading-4">SPONSORS 2019</h2>
          <Slider {...settings}>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={asso1}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={asso2}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={asso3}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={asso4}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
                </div>             </div>
            </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={plat1}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={plat2}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={plat3}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={plat4}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>

            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={gold1}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={gold2}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={gold3}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
              <div className="front"><img className="spons-Image" src={gold4}></img></div>
              <div className="back">
                <div className="inner">
                <p className="ph-no">1234567890</p>
                <p><a className="web" href="#">Website</a></p>
              </div>
              </div>
              </div>
            </div>
            
          </Slider>
        </Parallax>
      </div>
    );
  }
}
