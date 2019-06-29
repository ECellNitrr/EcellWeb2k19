import React from 'react';
import './intro.css';
import $ from 'jquery';

import bulb from '../../../Images/bulb.svg';

import banner from '../../../Images/banner.png';

const intro = () => {

    /*$(window).scroll(function(){
        var scrollval = $(this).scrollTop();

        $(".row").css("transform","translate(0px,"+ scrollval/50 + "%)")
    });*/

    
    
    //Set Launch Date
    const launchDate = new Date('Aug 31, 2019 8:00:00').getTime();

    //Update Every Second
    const intvl = setInterval(()=>{

        const countdown = document.querySelector('.countdown');
        //Get todays date and time (ms)
        const now = new Date().getTime();

        //Distance from now to launch date
        const distance = launchDate - now;
        
        //Time Calculations
        const days = Math.floor(distance/(1000*60*60*24));
        const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
        const mins = Math.floor((distance%(1000*60*60))/(1000*60));
        const seconds = Math.floor((distance%(1000*60))/(1000));

        //Display Result
        countdown.innerHTML=`<div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>        
        <div>${seconds}<span>Seconds</span></div>`;

        //if launch date passed 
        if(distance<0){
            //stop countdown
            clearInterval(intvl);

            //Style and output text
            countdown.style.color='#17a2b8';
            countdown.innerHTML='The Summit is On!';
        }

    },1000);

    return(
        <div className = "intro">
            <section className="Black-bg">
                <div className ="container-fluid ctn-1">
                    
                    <div className = "row">
                        <div className ="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-1">
                            <div className="anims"><img className="banner" src={banner}></img></div>
                            <div className="countdown"></div>
                        </div>

                        <div className ="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            <p className="bulb"><iframe className="image-1" src={bulb}></iframe></p>
                        </div>
                    </div>
                    <div className ="wave"></div>
                </div>
            </section>    
        </div>
    )
}

export default intro;