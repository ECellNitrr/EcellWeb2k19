import React, { Component } from 'react'
import { NavLink, Link, withRouter } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo-white.png';
import Form from '../Form/form';
import OtpModal from '../Form/otp'
import LogoutModal from '../Form/logout'
// import AdforcaModal from '../Form/adforca'
import ForgetPass from '../Form/forgetpass'
import ChangePass from '../Form/changepass'
import CheckOtp from '../Form/checkotp'
import { getuser } from '../../axios'

class navbar extends Component {
    state = {
        active: false,
        loggedin: false,
        forgetmail: "",
        forgetOTP: ""
    }

    componentDidMount() {
        let user = getuser()

        if (user) {
            this.setState({
                loggedin: true,
                name: `${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`
            })
        }
    }

    setForgetMail = (mail) => {
        this.setState({ forgetmail: mail });
    }

    setForgetOTP = (otp) => {
        this.setState({ forgetOTP: otp });
    }

    render() {
        const loggedin = <a href="" className="btn btn1" data-toggle="modal" data-target="#logoutModal">{this.state.name}</a>
        const loggedout = <a href="" className="btn btn1" data-toggle="modal" data-target="#loginRegModal">LogIn/SignUp</a>

        return (
            <div className="Navbar">
                <div className="logoback"><img className={`logo ${this.state.active ? 'active1' : ''}`} alt='ECell logo' src={logo}></img></div>
                <Form />
                <OtpModal />
                {/*<AdforcaModal/>*/}
                <ForgetPass handleForgetMail={this.setForgetMail} />
                <ChangePass otpToBeFilled={this.state.forgetOTP} emailToBeFilled={this.state.forgetmail} />
                <CheckOtp emailToBeFilled={this.state.forgetmail} handleOTPChange={this.setForgetOTP} />
                {this.state.loggedin ? <LogoutModal /> : false}
                <h3 className="brand-header">ENTREPRENEURSHIP CELL</h3>
                <h3 className="brand-header3">E-CELL</h3>
                <h4 className="brand-header2">NIT RAIPUR</h4>
                <div className="login-button1">
                    {this.state.loggedin ? loggedin : loggedout}
                    <a href="" className="btn btn1 d-none" data-toggle="modal" id='forgetPasModal_toggle' data-target="#forgetPasModal"></a>
                    <a href="" className="btn btn1 d-none" data-toggle="modal" id='otpModal_toggle' data-target="#otpModal"></a>
                    <a href="" className="btn btn1 d-none" data-toggle="modal" id='adforcaModal_toggle' data-target="#adforcaModal"></a>
                    <a href="" className="btn btn1 d-none" data-toggle="modal" id='changepass_toggle' data-target="#changePasModal"></a>
                    <a href="" className="btn btn1 d-none" data-toggle="modal" id='checkotp_toggle' data-target="#checkOtpModal"></a>
                </div>


                <div className={`toggle ${this.state.active ? 'active1' : ''}`} onClick={() => this.setState({ active: !this.state.active })}></div>
                <div className={`sidebar ${this.state.active ? 'active1' : ''}`}>
                    <div className="logoback2"><img className="logo2" alt='Ecell Logo' src={logo}></img></div>
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

export default withRouter(navbar)