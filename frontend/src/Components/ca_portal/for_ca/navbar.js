import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { user_type } from '../../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'

class navbar extends Component {
    base_route = '/caportal/ca/'


    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired
    }


    _logout = e => {
        console.log(this.props.auth)
        this.props.updateUser({ loggedin: false })
        this.props.history.push('/')
    }


    render() {
        return (
            <div className='navbar'>
                <div className="container d-flex">
                    <div className="d-flex flex-grow-1">
                        <NavLink activeClassName='active_navlink' exact className='navlink' to={this.base_route + ''}>Dashboard</NavLink>
                        <NavLink activeClassName='active_navlink' exact className='navlink' to={this.base_route + 'tasks/'}>Posts</NavLink>
                        <NavLink activeClassName='active_navlink' exact className='navlink' to={this.base_route + 'pending_reviews/'}>Pending</NavLink>
                        <NavLink activeClassName='active_navlink' exact className='navlink' to={this.base_route + 'accepted_reviews/'}>Accepted</NavLink>
                        <NavLink activeClassName='active_navlink' exact className='navlink' to={this.base_route + 'rejected_reviews/'}>Rejected</NavLink>
                    </div>
                    <div className='username'>{this.props.auth.first_name.toUpperCase()} {this.props.auth.last_name.toUpperCase()}</div>
                    <div className='username'>{user_type[this.props.auth.user_type]}</div>
                    <div>
                        <button onClick={this._logout} className='navlink logout_btn'>logout</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default compose(connect(mapStateToProps, actions),withRouter)(navbar)
