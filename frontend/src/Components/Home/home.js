import React from 'react';
import Navbar from '../Navbar/navbar' ;
import Intro from '../Home/Intro/Intro';
import About from '../Home/About/about';
import Vision from '../Home/Vision/vision'
import Spons from '../Home/SponsHome/sponsors-home';
import SpeakersHome from '../Home/SpeakerHome/speaker-home';
import Form from '../Home/Form/form';
import Footer from '../Footer/footer';

const Home=()=>(
    <div className="home">
        <Navbar/>
        <Intro/>
        <About/>
        <Vision/>
        <Spons/>
        {/* <SpeakersHome/> */}
        <Form/>
        <Footer/>
    </div>
)

export default Home;