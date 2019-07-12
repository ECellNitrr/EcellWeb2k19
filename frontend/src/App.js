import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Components/Home/home';
import Speakers from './Components/Speakers/speakers';
import Sponsors from './Components/Sponsors/sponsors_18';
import Events from './Components/Events/events';
import Startups from './Components/Startup/startup';
import Mentors from './Components/Mentors/mentors';
import Gallery from './Components/Gallery/gallery';
import Register from './Components/Register/register';
import LeaderBoard from './Components/LeaderBoard/leaderboard';
import CaPortal from './Components/CA Portal/caportal';
import Team from './Components/Team/team';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/speakers' component={Speakers} />
            <Route path='/sponsors/2018' component={Sponsors} />
            <Route path='/events' component={Events} />
            <Route path='/startups' component={Startups} />
            <Route path='/mentors' component={Mentors} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/register' component={Register} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/caportal' component={CaPortal} />
            <Route path='/team' component={Team} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
