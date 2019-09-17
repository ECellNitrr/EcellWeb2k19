import React, { Component, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../navbar_iportal/navbar_ip'
import Footer from '../../Footer/footer.js'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const IportalIndivStartup =  lazy(() => import('./indiv_startups'))
const IportalJobDetail =  lazy(() => import('./job_detail'))
const JobApplication =  lazy(() => import('./job_application'))
const MyApplication =  lazy(() => import('./my_applications'))
const StartupList =  lazy(() => import('./startup_list'))


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
            <div style={{background:"lightgray",paddingTop:"120px"}}>
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