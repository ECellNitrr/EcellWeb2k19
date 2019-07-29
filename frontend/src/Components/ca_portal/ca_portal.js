import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'
import faxios from '../../axios'

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

        if (user.user_type == 'GST') {
            alert('You are not CA or admin yet!')
            this.props.history.push('/caportal_info')
        } else if (user.user_type == 'CAB') {
            this.props.history.push('/caportal/ca')
        } else {
            this.props.history.push('/caportal/admin')
        }
    }


    render() {
        return (
            <Fragment>
                    <Switch>
                        <Route path='/caportal/ca' component={ForCA} />
                        <Route path='/caportal/admin' component={ForAdmin} />
                    </Switch>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, actions)(ca_portal)
