import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import IportalStartup  from  './startup/startup'
import IportalJobs  from  './jobs/jobs'
import RegisterStartup  from  './startup/register_startup'


export default class iportal extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/internship/jobs' component={IportalJobs} />
                    <Route path='/internship/startup/register' component={RegisterStartup} />
                    <Route path='/internship/startup' component={IportalStartup} />
                </Switch>
            </div>
        )
    }
}
