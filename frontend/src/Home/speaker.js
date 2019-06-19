import React, { Component } from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import trans from '../Images/man.jpeg';
    

export default class Parallax extends Component {
      render() {
        const params = {
          speed: 600,
          parallax: true,
          parallaxEl: {
            el: '.parallax-bg',
            value: '-23%'
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        };

        return (
         <div>
          <h2 className="heading-3">MEET OUR SPEAKERS</h2>
          <Swiper {...params}>
                
                <div className="container-fluid ctn-4">
                  
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                      <p className="im-text"><img className="image-3" src={trans}></img></p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                      <h2 className="speaker-name">Pratik Chaudhary</h2>
                      <h4 className="speaker-title">Web-Developer</h4>
                      <p  className="speaker-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className="container-fluid ctn-4">
                  
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                      <p className="im-text"><img className="image-3" src={trans}></img></p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                      <h2 className="speaker-name">Pratik Chaudhary</h2>
                      <h4 className="speaker-title">Web-Developer</h4>
                      <p className="speaker-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
          </Swiper>
          </div>
        )
      }
    }