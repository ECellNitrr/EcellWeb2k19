import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/home';
import Speakers from './Components/Speakers/speakers';
import Sponsors from './Components/Sponsors/sponsors';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Speakers/>
      </div>
    );
  }
}

export default App;
