import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'


import IportalIndivStartup  from './indiv_startups.js'
import IportalJobDetail  from './job_detail'
import JobApplication  from './job_application'
import MyApplication  from './my_applications'
import StartupList from './startup_list'


export default class iportal extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/iportal/jobs/my_application' component={MyApplication}/>
                    <Route path='/iportal/jobs/application/:job_id' component={JobApplication}/>
                    <Route path='/iportal/jobs/:startup_id/opening/:job_id' component={IportalJobDetail} />
                    <Route path='/iportal/jobs/:startup_id' component={IportalIndivStartup} />
                    <Route path='/iportal/jobs/' component={StartupList}/>
                </Switch>
            </div>
        )
    }
}
