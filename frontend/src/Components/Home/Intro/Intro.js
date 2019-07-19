import React from 'react';
import './intro.css';

import bulb from '../../../assets/bulb.svg';

import banner from '../../../assets/banner.png';

const intro = () => {

    /*$(window).scroll(function(){
        var scrollval = $(this).scrollTop();

        $(".row").css("transform","translate(0px,"+ scrollval/50 + "%)")
    });*/



    //Set Launch Date
    const launchDate = new Date('Aug 31, 2019 00:00:00').getTime();

    //Update Every Second
    const intvl = setInterval(() => {

        const countdown = document.querySelector('.countdown');
        //Get todays date and time (ms)
        const now = new Date().getTime();

        //Distance from now to launch date
        const distance = launchDate - now;

        //Time Calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / (1000));

        //Display Result
        countdown.innerHTML = `<div className="shadow-lg p-3 mb-5 bg-white rounded">${days}<span>Days</span></div>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">${hours}<span>Hours</span></div>
        <div className="shadow-lg p-3 mb-5 bg-white rounded">${mins}<span>Minutes</span></div>        
        <div className="shadow-lg p-3 mb-5 bg-white rounded">${seconds}<span>Seconds</span></div>`;

        //if launch date passed 
        if (distance < 0) {
            //stop countdown
            clearInterval(intvl);

            //Style and output text
            countdown.style.color = 'white';
            countdown.innerHTML = 'The Summit is On!';
        }

    }, 1000);

    return (
        <div className="intro">
            <section className="Black-bg">
                <div className="container-fluid ctn-1">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 banner-col">
                            <div>
                                <div ><img alt='' className="banner" src={banner}></img></div>
                                <div className="countdown"></div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 bulb-col">
                            <p className="bulb"><img className="image-1" src={bulb}></img></p>
                        </div>
                    </div>
                    <div className="wave"></div>
                </div>
            </section>
        </div>
    )
}

export default intro;