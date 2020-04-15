import React, { Component, lazy } from 'react'
import { Switch,Route } from 'react-router-dom'
import Footer from '../../Footer/footer'

import './datetimepicker.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ideaDashboard from './dashboard_idea'

const Navbar =  lazy(() => import('./navbar'))
const EditIdea =  lazy(() => import('./submit_idea'))
const Dashboard =  lazy(() => import('./dashboard'))

const EditStartup =  lazy(() => import('./register_startup'))
const Openings =  lazy(() => import('./openings_list'))
const NewOpening =  lazy(() => import('./new_opening'))
const ApplicationList =  lazy(() => import('./application_list'))
const ApplicationDetail =  lazy(() => import('./application_detail'))


class Startup extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
      }
    
    componentDidMount() {
        if(!this.props.auth.loggedin || !this.props.auth.startup_id){
            this.props.history.push('/internship')
        }
    }
    
    
    render() {
        return (
            <div style={{background:"lightgray",paddingTop:"100px"}}>
                <Navbar />
                <Switch>
                    <Route path='/internship/submit_idea/edit_idea/' component={EditIdea}/> //edit idea
                    <Route path='/internship/idea/' component={ideaDashboard}/> //landing page for idea

                    <Route path='/internship/startup/application_detail/:application_id/' component={ApplicationDetail}/> // view detail of application
                    <Route path='/internship/startup/application/:job_id/' component={ApplicationList}/> // list of applications
                    <Route path='/internship/startup/openings/new/' component={NewOpening}/> // new opening
                    <Route path='/internship/startup/openings/:job_id/' component={NewOpening}/> // edit a opening
                    <Route path='/internship/startup/openings/' component={Openings}/> // list of openings
                    <Route path='/internship/startup/edit' component={EditStartup}/> //edit startup profile
                    <Route path='/internship/startup/' component={Dashboard}/> //landing page for startups
                    
                    
                   

                </Switch>
                <Footer/>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps, )(Startup)