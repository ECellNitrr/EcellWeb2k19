import React, { Component } from "react";
import './sponsorHome.css';
import Slider from "react-slick";
import { Parallax } from 'react-parallax';


import asso1 from '../../../assets/1.png';
import asso2 from '../../../assets/2.png';
import asso3 from '../../../assets/3.png';
import asso4 from '../../../assets/4.png';
import plat1 from '../../../assets/5.png';
import plat2 from '../../../assets/6.png';
import plat3 from '../../../assets/7.png';
import plat4 from '../../../assets/8.png';
import gold1 from '../../../assets/9.png';
import gold2 from '../../../assets/10.png';
import gold3 from '../../../assets/11.png';
import gold4 from '../../../assets/12.png';

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      autoplay: true,
      autoplaySpeed: 3000,
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

        <Parallax blur={3} bgImage={require('../../../assets/spons.jpg')} bgImageAlt="sponsors" strength={700}>
          <h2 className="heading-4">SPONSORS 2019</h2>
          <Slider {...settings}>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={asso1}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={asso2}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={asso3}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={asso4}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>             </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={plat1}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={plat2}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={plat3}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={plat4}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={gold1}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={gold2}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={gold3}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
                    <p className="ph-no">1234567890</p>
                    <p><a className="web" href="#">Website</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="cont">
                <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt='' className="spons-Image" src={gold4}></img></div>
                <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                    <h4 style={{ fontWeight: "800" }}>Name</h4>
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
