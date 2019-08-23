import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'


import IportalIndivStartup from './indiv_startups.js'
import IportalJobDetail from './job_detail'
import JobApplication from './job_application'
import MyApplication from './my_applications'
import StartupList from './startup_list'

import Navbar from '../navbar_iportal/navbar_ip'
import Footer from '../../Footer/footer.js'


import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Job extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
      }
    
    componentDidMount() {
        if(!this.props.auth.loggedin){
            this.props.history.push('/internship')
        }
    }
    
    
    render() {
        return (
            <div style={{background:"lightgray",paddingTop:"170px"}}>
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


const mapStateToProps = (state) => state

export default connect(mapStateToProps, )(Job)