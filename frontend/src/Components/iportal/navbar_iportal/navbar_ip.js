import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './navbar_ip.css'
import {Link,NavLink} from 'react-router-dom'
import Modal from '../../Form/modal'
import { user_type } from '../../constants'

import PropTypes from 'prop-types'
import {compose} from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'
import { sign } from 'crypto';

class navbar_ip extends Component {


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

         this.props.history.push('/');
    }

    render() {

        console.log(this.props.auth)
        return (
          
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar" style={{padding:"5px"}}>
                    <Link className="navbar-brand" to='/'><img width="50px" height="50px" src={require('../../../assets/logo-white.png')}></img></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link ip-links mx-3" to='/internship/jobs'>View Startups </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ip-links mx-3" to="/internship/jobs/my_application">My Applications</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link ip-links" to='/'>Go to Main Site</Link>
                            </li>
                           
                        </ul>
                        <ul className="navbar-nav nav-flex-icons">
                            <li className="nav-item">
                                <button className="iplogout" data-toggle="modal" data-target="#ipLogout" style={{background:"#EA4763",border:"none"}} className="nav-link ip-links mx-3" href="#">{this.props.auth.first_name} {this.props.auth.last_name}</button>
                            </li>

                            <li className="nav-item">
                                <button style={{background:"#EA4763",border:"none"}} onClick={this._logout} className="nav-link ip-links mx-2"><i className="fas fa-power-off"></i>Logout</button>
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
export default compose(connect(mapStateToProps, actions),withRouter)(navbar_ip)