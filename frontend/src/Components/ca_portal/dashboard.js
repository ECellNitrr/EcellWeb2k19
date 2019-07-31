import React, { Component, Fragment } from 'react'
import { user_type } from '../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class dashboard extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    render() {

        return (
            <div className="dashbord container">
                <div className="d-flex flex-wrap mt-5">
                    <div className="">
                        <img className='ecell-logo' src={require('../../assets/logo.png')} alt="ecell logo" />
                    </div>
                    <div className="text-center flex-grow-1">
                        <h1 className='text-center mt-5'>Campus Ambassador Portal</h1>
                        <h3 className="text-center mt-3">Entrepreneurship Cell, NIT Raipur</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 font-weight-bold text-right">First name:</div>
                    <div className="col-md-6">{this.props.auth.first_name}</div>
                </div>
                <div className="row">
                    <div className="col-md-6 font-weight-bold text-right">Last name:</div>
                    <div className="col-md-6">{this.props.auth.last_name}</div>
                </div>
                <div className="row">
                    <div className="col-md-6 font-weight-bold text-right">Email:</div>
                    <div className="col-md-6">{this.props.auth.email}</div>
                </div>
                <div className="row">
                    <div className="col-md-6 font-weight-bold text-right">User Type:</div>
                    <div className="col-md-6">{user_type[this.props.auth.user_type]}</div>
                </div>
                <div className="row">
                    <div className="col-md-6 font-weight-bold text-right">Contact:</div>
                    <div className="col-md-6">{this.props.auth.contact}</div>
                </div>
                <div className="row">
                    <div className="col-md-6 font-weight-bold text-right">OTP Verified:</div>
                    <div className="col-md-6">{this.props.auth.verified?<i className="fa fa-check text-success"></i>:<i className="fa fa-times text-danger"></i>}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps)(dashboard)
