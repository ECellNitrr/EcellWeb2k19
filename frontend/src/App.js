import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';

import Home from './Components/Home/home';
import Speakers from './Components/Speakers/speakers';
import Sponsors from './Components/Sponsors/sponsors';
import Events from './Components/Events/events';
import EventDetail from './Components/Events/event_detail'
import Startups from './Components/Startup/startup';
import StartupDetail from './Components/Startup/startupdetail'
import Mentors from './Components/Mentors/mentors';
import Gallery from './Components/Gallery/gallery';
import Register from './Components/Register/register';
import CaPortal from './Components/CA Portal/caportal';
import Team from './Components/Team/team';
import TnC from './Components/Footer/terms';
import Privacy from './Components/Footer/privacy';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/speakers' component={Speakers} />
            <Route path='/sponsors/:year' component={Sponsors} />
            <Route path='/sponsors' component={()=><Redirect to='/sponsors/2018'/>} />
            <Route path='/events/:id' component={EventDetail} />
            <Route path='/events' component={Events} />
            <Route path='/startups/:year/:id' component={StartupDetail} />
            <Route path='/startups' component={Startups} />
            <Route path='/mentors' component={Mentors} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/register' component={Register} />
            <Route path='/caportal' component={CaPortal} />
            <Route path='/team' component={Team} />
			<Route path='/terms' component={TnC} />
			<Route path='/privacy' component={Privacy} />
			
			
			
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
