import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'
import './ca_portal.scss'


import ForCA from './for_ca/For_ca'
import ForAdmin from './for_admin/For_admin'

export class ca_portal extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired
    }

    componentDidMount() {
        let user = this.props.auth
        console.log('gaurd comp')

        if(!user.loggedin){
            alert('Please login to continue')
            this.props.history.push('/caportal_info')
        }else if (user.user_type === 'GST') {
            alert('You are not CA or admin yet!')
            this.props.history.push('/caportal_info')
        } else if (user.user_type === 'CAB') {
            if(this.props.location.pathname.indexOf('/ca/')>0){
                return
            }
            this.props.history.push('/caportal/ca')
        } else {
            if(this.props.location.pathname.indexOf('/admin/')>0){
                return
            }
            this.props.history.push('/caportal/admin')
        }
    }


    render() {
        return (
            <div className='caportal-wrapper'>
                <Switch>
                    <Route path='/caportal/ca' component={ForCA} />
                    <Route path='/caportal/admin' component={ForAdmin} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, actions)(ca_portal)
