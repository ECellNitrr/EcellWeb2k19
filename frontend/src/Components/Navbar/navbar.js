import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

import logo from '../../assets/logo-white.png';
import Form from '../Form/form';
import OtpModal from '../Form/otp'
import LogoutModal from '../Form/logout'
import ForgetPass from '../Form/forgetpass'
import ChangePass from '../Form/changepass'
import CheckOtp from '../Form/checkotp'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'



export class navbar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    state = {
        active: false,
        forgetmail: "",
        forgetOTP: ""
    }

    setForgetMail = (mail) => {
        this.setState({ forgetmail: mail });
    }

    setForgetOTP = (otp) => {
        this.setState({ forgetOTP: otp });
    }

    render() {
        const loggedin = <a href="" className="btn btn1" data-toggle="modal" data-target="#logoutModal">{this.props.auth.first_name.toUpperCase()} {this.props.auth.last_name.toUpperCase()}</a>
        const loggedout = <a href="" className="btn btn1" data-toggle="modal" data-target="#loginRegModal">LogIn/SignUp</a>
        console.log(this.props)

        return (
            <div className="Navbar">
                <div className="logoback"><img className={`logo ${this.state.active ? 'active1' : ''}`} alt='' src={logo}></img></div>

                {/* all models gets rendered here. we open close with */}
                <Form />
                <OtpModal />
                {/*<AdforcaModal/>*/}
                <ForgetPass handleForgetMail={this.setForgetMail} />
                <ChangePass otpToBeFilled={this.state.forgetOTP} emailToBeFilled={this.state.forgetmail} />
                <CheckOtp emailToBeFilled={this.state.forgetmail} handleOTPChange={this.setForgetOTP} />
                {this.props.auth.loggedin ? <LogoutModal /> : false}


                {/* hack for opening the modal when needed */}
                <a href="" className="btn btn1 d-none" data-toggle="modal" id='forgetPasModal_toggle' data-target="#forgetPasModal"></a>
                <a href="" className="btn btn1 d-none" data-toggle="modal" id='otpModal_toggle' data-target="#otpModal"></a>
                <a href="" className="btn btn1 d-none" data-toggle="modal" id='adforcaModal_toggle' data-target="#adforcaModal"></a>
                <a href="" className="btn btn1 d-none" data-toggle="modal" id='changepass_toggle' data-target="#changePasModal"></a>
                <a href="" className="btn btn1 d-none" data-toggle="modal" id='checkotp_toggle' data-target="#checkOtpModal"></a>


                <h3 className="brand-header">ENTREPRENEURSHIP CELL</h3>{this.props.name}
                <h3 className="brand-header3">E-CELL</h3>
                <h4 className="brand-header2">NIT RAIPUR</h4>


                <div className="login-button1">
                    {this.props.auth.loggedin ? loggedin : loggedout}
                </div>

                <div className={`toggle ${this.state.active ? 'active1' : ''}`} onClick={() => this.setState({ active: !this.state.active })}></div>
                <div className={`sidebar ${this.state.active ? 'active1' : ''}`}>
                    <div className="logoback2"><img className="logo2" alt='' src={logo}></img></div>
                    <ul>
                        <li><Link to="/" className="data-links" data-text="Home" >Home</Link></li>
                        <li><NavLink to="/events" className="data-links" data-text="events" >Events</NavLink></li>
                        <li><NavLink to="/team" className="data-links" data-text="Team" >Team</NavLink></li>
                        {/* <li><NavLink to="/gallery" className="data-links" data-text="Gallery" >Gallery</NavLink></li> */}
                        <li><NavLink to="/sponsors" className="data-links" data-text="Sponsors" >Sponsors</NavLink></li>
                        <li><NavLink to="/speakers" className="data-links" data-text="Speakers" >Speakers</NavLink></li>
                        <li><NavLink to="/startups" className="data-links" data-text="Startups" >Startups</NavLink></li>
                        <li><NavLink to="/mentors" className="data-links" data-text="Mentors" >Mentors</NavLink></li>
                        <li><NavLink to="/caportal" className="data-links" data-text="Caportal" >CaPortal</NavLink></li>
                        {/* <li><NavLink to="/register" className="data-links" data-text="Register" >Register</NavLink></li> */}
                        <li><a href='https://medium.com/e-cell-nit-raipur' className="data-links" data-text="Blogs" >Blogs</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => state


export default connect(mapStateToProps, actions)(navbar)
