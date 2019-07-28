import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./Components/Home/home'))
const Speakers = lazy(() => import('./Components/Speakers/speakers'));
const Sponsors = lazy(() => import('./Components/Sponsors/sponsors'));
const Events = lazy(() => import('./Components/Events/events'));
const EventDetail = lazy(() => import('./Components/Events/event_detail'))
const Startups = lazy(() => import('./Components/Startup/startup'));
const StartupDetail = lazy(() => import('./Components/Startup/startupdetail'))
const Mentors = lazy(() => import('./Components/Mentors/mentors'));
const Gallery = lazy(() => import('./Components/Gallery/gallery'));
const Register = lazy(() => import('./Components/Register/register'));
const CaPortal = lazy(() => import('./Components/ca_portal/caportal'));
const Team = lazy(() => import('./Components/Team/team'));
const Yearwise_spons = lazy(()=> import('./Components/Sponsors/yearwise_sponsors'));
const Spons_hc = lazy(()=> import('./Components/Sponsors/sponsorship_heads'));



class App extends Component {
  render() {
    return (
      <Suspense fallback={'...loading'}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/speakers' component={Speakers} />
              <Route path="/sponsors/sponsors_heads" component={Spons_hc}/>
              <Route path="/sponsors/yearwise" component={Yearwise_spons}/>
              <Route path='/sponsors/:year' component={Sponsors} />
              <Route path='/sponsors' component={() => <Redirect to='/sponsors/2018' />} />
              <Route path='/events/:id' component={EventDetail} />
              <Route path='/events' component={Events} />
              <Route path='/startups/:year/:id' component={StartupDetail} />
              <Route path='/startups' component={Startups} />
              <Route path='/mentors' component={Mentors} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/register' component={Register} />
              <Route path='/caportal' component={CaPortal} />
              <Route path='/team' component={Team} />
            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
