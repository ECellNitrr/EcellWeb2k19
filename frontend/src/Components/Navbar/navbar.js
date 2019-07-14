import React, { Component } from 'react'
import {NavLink,Link} from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo-white.png';

export default class navbar extends Component {
    state = {
        active: false
    }

    render() {
        return(
            <div className="Navbar">
                <div className="logoback"><img className={`logo ${this.state.active? 'active1': ''}`} alt='' src={logo}></img></div>
                <h3 className="brand-header">THE ENTREPRENEURSHIP CELL</h3>
                <h3 className="brand-header3">E-CELL</h3>
                <h4 className="brand-header2">NIT RAIPUR</h4>
                
    
                <div className={`toggle ${this.state.active? 'active1': ''}`} onClick={() => this.setState({active: !this.state.active})}></div>
                <div className={`sidebar ${this.state.active? 'active1': ''}`}>
                    <ul>
                        <li><Link to="/" data-text="Home" >Home</Link></li>
                        <li><NavLink to="/events" data-text="events" >Events</NavLink></li>
                        <li><NavLink to="/team" data-text="Team" >Team</NavLink></li>
                        <li><NavLink to="/gallery" data-text="Gallery" >Gallery</NavLink></li>
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
