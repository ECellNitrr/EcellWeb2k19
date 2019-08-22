import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Modal from '../../Form/modal'
import { user_type } from '../../constants'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'
import { sign } from 'crypto';

import './navbar.scss'


class navbar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    _logout = (e) => {
        e.preventDefault()
        this.props.updateUser({ 
            loggedin: false,
            token: null
         })

         window.location.assign('/');
    }

    render() {
        return (
            // <div className='startup_navbar'>
            //     <NavLink exact to='/iportal/startup/'>Dashboard</NavLink>
            //     <NavLink to='/iportal/startup/openings/'>Openings</NavLink>
            // </div>
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
                    <Link class="navbar-brand" to='/'><img width="70px" height="70px" src={require('../../../assets/logo-white.png')}></img></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link exact to='/internship/startup/' class="nav-link ip-links mx-3">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/internship/startup/openings/' class="nav-link ip-links mx-3">Openings</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link class="nav-link ip-links" to='/'>Go to Main Site</Link>
                            </li>
                           
                        </ul>
                        <ul class="navbar-nav nav-flex-icons">
                            <li class="nav-item">
                                <button className="iplogout" data-toggle="modal" data-target="#ipLogout" style={{background:"#EA4763",border:"none"}} class="nav-link ip-links mx-3" href="#">{this.props.auth.first_name} {this.props.auth.last_name}</button>
                            </li>

                            <li class="nav-item">
                                <button style={{background:"#EA4763",border:"none"}} onClick={this._logout} class="nav-link ip-links mx-2"><i class="fas fa-power-off"></i>Logout</button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Modal id="ipLogout">
                <div className="modal-body text-center mb-1">
                    <div className="details">
                        <div style={{fontSize:"21px"}}><span className="font-weight-bold"><strong>User: </strong></span>{this.props.auth.first_name} {this.props.auth.last_name}</div>
                        <div style={{fontSize:"21px"}}><span className="font-weight-bold"><strong>E-Mail: </strong> </span>{this.props.auth.email}</div>
                        <div style={{fontSize:"21px"}}><span className="font-weight-bold"><strong>Member Type: </strong></span>{user_type[this.props.auth.user_type]}</div>
                        <div className="text-center mt-2">
                        <button ref={ele => this.close_btn = ele} type="button" className="btn font-weight-bold btn-primary text-white waves-effect ml-auto" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
                </Modal>

            </div>


        )
    }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, actions)(navbar)