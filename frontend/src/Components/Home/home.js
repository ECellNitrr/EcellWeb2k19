import React, { Component } from 'react'

import Navbar from "../Navbar/navbar";
import Intro from "../Home/Intro/Intro";
import About from "../Home/About/about";
import Vision from "../Home/Vision/vision";
import Spons from "../Home/SponsHome/sponsors-home";
// import SpeakersHome from "../Home/SpeakerHome/speaker-home";
import Form from "../Home/Form/form";
import Footer from "../Footer/footer";
import Inauguration from './inauguration'
import Timeline from '../Home/Timeline/timeline';



export default class home extends Component {
    componentDidMount() {
        document.querySelector("#adforcaModal_toggle").click();
    }

    render() {
        return (
            <div>
                <Navbar />
                <Intro />
                {/* <Inauguration /> */}
                <About />
                <Vision />
                <Spons />
                <Timeline />
                {/* <SpeakersHome /> */}
                <Form />
                <Footer />
            </div>
        );
    }
}
