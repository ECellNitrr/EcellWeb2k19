import React, { Component } from 'react';
import './App.css';
import Navbar from './Home/navbar';
import Intro from './Home/Intro';
import About from './Home/about';
import Vision from './Home/vision'
import Spons from './Home/sponsors-home';
import Speakers from './Home/speaker';
import Glimpses from './Home/glimpses';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro/>
        <Navbar/>
        <About/>
        <Vision/>
        <Speakers/>
        <Spons/>
       
      

      </div>
    );
  }
}

export default App;
