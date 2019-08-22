import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import IportalIndivStartup from './indiv_startups.js'
import IportalJobDetail from './job_detail'
import JobApplication from './job_application'
import MyApplication from './my_applications'
import StartupList from './startup_list'

import Navbar from '../navbar_iportal/navbar_ip'
import Footer from '../../Footer/footer.js'


export default class iportal extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path='/internship/jobs/my_application' component={MyApplication} />
                    <Route path='/internship/jobs/application/:job_id' component={JobApplication} />
                    <Route path='/internship/jobs/:startup_id/opening/:job_id' component={IportalJobDetail} />
                    <Route path='/internship/jobs/:startup_id' component={IportalIndivStartup} />
                    <Route path='/internship/jobs/' component={StartupList} />
                </Switch>
                <Footer noMarginTop />
            </div>
        )
    }
}
