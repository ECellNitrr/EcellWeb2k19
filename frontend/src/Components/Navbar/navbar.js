import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo-white.png';
import Form from '../Form/form';
import OtpModal from '../Form/otp'
import LogoutModal from '../Form/logout'
import {getuser} from '../../axios'

export default class navbar extends Component {
    state = {
        active: false,
        loggedin: false
    }

    componentDidMount() {
        let user = getuser()

        if(user){
            this.setState({
                loggedin:true,
                name: `${user.first_name.toUpperCase()} ${user.last_name.toUpperCase()}`
            })
        }
    }
    

    render() {
        const loggedin = <a href="" className="btn btn1" data-toggle="modal" data-target="#logoutModal">{this.state.name}</a>
        const loggedout = <a href="" className="btn btn1" data-toggle="modal" data-target="#loginRegModal">LogIn/SignUp</a> 

        return(
            <div className="Navbar">
                <div className="logoback"><img className={`logo ${this.state.active? 'active1': ''}`} alt='' src={logo}></img></div>
                <Form/>
                <OtpModal/>
                {this.state.loggedin?<LogoutModal/>:false}
                <h3 className="brand-header">ENTREPRENEURSHIP CELL</h3>
                <h3 className="brand-header3">E-CELL</h3>
                <h4 className="brand-header2">NIT RAIPUR</h4>
                <div className="login-button1">
                    {this.state.loggedin ? loggedin: loggedout}
                    <a href="" className="btn btn1 d-none" data-toggle="modal" id='forgetPasModal_toggle' data-target="#forgetPasModal"></a>
                    <a href="" className="btn btn1 d-none" data-toggle="modal" id='otpModal_toggle' data-target="#otpModal"></a>
                </div>
                
    
                <div className={`toggle ${this.state.active? 'active1': ''}`} onClick={() => this.setState({active: !this.state.active})}></div>
                <div className={`sidebar ${this.state.active? 'active1': ''}`}>
                    <ul>
                        <li><Link to="/" data-text="Home" >Home</Link></li>
                        <li><NavLink to="/events" data-text="events" >Events</NavLink></li>
                        <li><NavLink to="/team" data-text="Team" >Team</NavLink></li>
                        {/* <li><NavLink to="/gallery" data-text="Gallery" >Gallery</NavLink></li> */}
                        <li><NavLink to="/sponsors" data-text="Sponsors" >Sponsors</NavLink></li>
                        <li><NavLink to="/speakers" data-text="Speakers" >Speakers</NavLink></li>
                        <li><NavLink to="/startups" data-text="Startups" >Startups</NavLink></li>
                        <li><NavLink to="/mentors" data-text="Mentors" >Mentors</NavLink></li>
                        {/* <li><NavLink to="/caportal" data-text="Caportal" >CaPortal</NavLink></li> */}
                        <li><NavLink to="/register" data-text="Register" >Register</NavLink></li>
                        <li><a href='https://medium.com/e-cell-nit-raipur' data-text="Blogs" >Blogs</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
