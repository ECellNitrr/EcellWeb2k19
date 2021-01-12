import React, { Component, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageLoader from './Components/api_loader/page_loader'


const Home = lazy(() => import('./Components/Home/home'))
const Investors = lazy(() => import('./Components/Investors/investors'))
const Speakers = lazy(() => import('./Components/Speakers/speakers'));
const Sponsors = lazy(() => import('./Components/Sponsors/sponsors'));
const Events = lazy(() => import('./Components/Events/events'));
const EventDetail = lazy(() => import('./Components/Events/event_detail'))
const Startups = lazy(() => import('./Components/Startup/startup'));
const StartupDetail = lazy(() => import('./Components/Startup/startupdetail'))
const Mentors = lazy(() => import('./Components/Mentors/mentors'));
const Gallery = lazy(() => import('./Components/Gallery/gallery'));
const GalleryImgs = lazy(() => import('./Components/Gallery/gallery_imgs'));
const Register = lazy(() => import('./Components/Register/register'));
const CaPortalInfo = lazy(() => import('./Components/ca_portal_intro/caportal'));
const CaPortal = lazy(() => import('./Components/ca_portal/ca_portal'));
const Team = lazy(() => import('./Components/Team/team'));
const Yearwise_team = lazy(()=> import('./Components/Team/team_list'));
const Yearwise_spons = lazy(()=> import('./Components/Sponsors/yearwise_sponsors'));
const Spons_hc = lazy(()=> import('./Components/Sponsors/sponsorship_heads'));
const Terms = lazy(()=> import('./Components/Footer/terms'));
const Policy= lazy(()=>import('./Components/Footer/privacy'));


const IportalStartup  = lazy(()=>import('./Components/iportal/startup/startup'))
const IportalJobs  = lazy(()=>import('./Components/iportal/jobs/jobs'))
const RegisterStartup  = lazy(()=>import('./Components/iportal/startup/register_startup'))
const submitIdea  = lazy(()=>import('./Components/iportal/startup/submit_idea'))
const Dash  = lazy(()=>import('./Components/iportal/startup/startup'))
const Error404 = lazy(()=>import('./Components/err404'))




class App extends Component {
  render() {
    return (
      <Suspense fallback={<PageLoader className="page-loader"/>}>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/internship' exact component={() => <Redirect to='/startups' />} />
              <Route path='/speakers' component={Speakers} />
              <Route path="/sponsors/sponsors_heads" component={Spons_hc}/>
              <Route path="/sponsors/yearwise" component={Yearwise_spons}/>
              <Route path='/sponsors/:year' component={Sponsors} />
              <Route path='/sponsors' component={() => <Redirect to='/sponsors/2019' />} />
              <Route path='/events/:id' component={EventDetail} />
              <Route path='/events' component={Events} />
              <Route path='/investors' component={Investors} />
              <Route path='/startups/:year/:id' component={StartupDetail} />
              <Route path='/startups' component={Startups} />
              <Route path='/mentors' component={Mentors} />
              <Route path='/gallery/:name' component={GalleryImgs} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/register' component={Register} />
              <Route path='/caportal_info' component={CaPortalInfo} />
              <Route path='/caportal' component={CaPortal} />
              <Route path='/team/yearwise' component={Yearwise_team}/>
              <Route path='/team/:year' component={Team} /> 
              <Route path='/team' component={() => <Redirect to='/team/2020' />} />
              <Route path='/terms' component={Terms} />
              <Route path='/policy' component={Policy} />

              <Route path='/internship/jobs' component={IportalJobs} />
              <Route path='/internship/startup/register' component={RegisterStartup} />
              <Route path='/internship/startup/' component={Dash} />
              <Route path='/internship/submit_idea/' component={submitIdea} />
              <Route path='/internship/idea/' component={IportalStartup} />
              <Route path='/' component={Error404}/>

            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
