import React, { Component } from 'react'
import './navbar_ip.css'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'

class navbar_ip extends Component {


    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    _logout = e => {
        this.props.updateUser({ 
            loggedin: false,
            token: null
         })

         window.location.assign('/');
    }

    render() {

        console.log(this.props.auth)
        return (
          
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
                    <a class="navbar-brand" href="#"><img width="70px" height="70px" src={require('../../../assets/logo-white.png')}></img></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link ip-links mx-3" href="#">View Startups </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ip-links mx-3" href="#">My Applications</a>
                            </li>
                            <li class="nav-item mx-3">
                                <a class="nav-link ip-links" href="#">Go to Main Site</a>
                            </li>
                           
                        </ul>
                        <ul class="navbar-nav nav-flex-icons">
                            <li class="nav-item">
                                <a class="nav-link ip-links mx-3" href="#">{this.props.auth.first_name} {this.props.auth.last_name}</a>
                            </li>

                            <li class="nav-item">
                                <a onClick={this._logout} class="nav-link ip-links mx-2" href="#"><i class="fas fa-power-off"></i>Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, actions)(navbar_ip)