import bulb from '../../../assets/bulb.svg';
import banner from '../../../assets/banner.png';
import React, { Component } from 'react'
import './intro.css'

export default class Intro extends Component {
    state = {
        days: '-',
        hours: '-',
        mins: '-',
        seconds: '-',
        distance: '-'
    }

    componentDidMount() {
        //Set Launch Date
        const launchDate = new Date('Aug 31, 2019 00:00:00').getTime();

        //Update Every Second
        const intvl = setInterval(() => {

            //Get todays date and time (ms)
            const now = new Date().getTime();

            //Distance from now to launch date
            const distance = launchDate - now;

            //Time Calculations
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));
            console.log({seconds})

            this.setState({
                days,
                hours,
                mins,
                seconds,
                distance
            })

            if (distance < 0) {
                clearInterval(intvl)
            }
        }, 1000);
    }


    render() {
        let countdown =
            <div className="countdown">
                <div className="shadow-lg p-3 mb-5 rounded">{this.state.days}<span>Days</span></div>
                <div className="shadow-lg p-3 mb-5 rounded">{this.state.hours}<span>Hours</span></div>
                <div className="shadow-lg p-3 mb-5 rounded">{this.state.mins}<span>Minutes</span></div>
                <div className="shadow-lg p-3 mb-5 rounded">{this.state.seconds}<span>Seconds</span></div>
            </div>

        if (this.state.distance < 0) {
            countdown = null
        }

        return (
            <section className="intro">
                <div className="container-fluid ctn-1">


                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 banner-col">
                            <div>
                                <div className="banner-div" ><img alt='banner' className="banner" src={banner}></img></div>
                                {countdown}
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 bulb-col">
                            <p className="bulb"><img alt='bulb' className="image-1" src={bulb}></img></p>
                        </div>
                    </div>
                    {/*<div className="wave"></div>*/}
                </div>

            </section>
        )
    }
}


