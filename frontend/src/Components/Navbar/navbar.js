import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import './navbar.css';
import $ from 'jquery';
import logo from '../../assets/logo-white.png';
import Form from '../Form/form';

const navbar = () =>{

    $(document).ready(function(){
       $('.toggle').click(function(){
           $('.toggle').toggleClass('active1')
           $('.sidebar').toggleClass('active1')
           $('.logo').toggleClass('active1')
           
       }) 
    })


    return(
        <div className="Navbar">
            <div className="logoback"><img className="logo" alt='' src={logo}></img></div>
            <Form/>
            <div class="login-button1">
                <a href="" class="btn btn1" data-toggle="modal" data-target="#modalLRForm">LogIn/SignUp</a>
            </div>
            <h3 className="brand-header">ENTREPRENEURSHIP CELL</h3>
            <h3 className="brand-header3">E-CELL</h3>
            <h4 className="brand-header2">NIT RAIPUR</h4>
            

            <div className="toggle"></div>
            <div className='sidebar'>
                <ul>
                    <li><Link to="/" data-text="Home" >Home</Link></li>
                    <li><NavLink to="/events" data-text="events" >Events</NavLink></li>
                    <li><NavLink to="/team" data-text="Team" >Team</NavLink></li>
                    <li><NavLink to="/gallery" data-text="Gallery" >Gallery</NavLink></li>
                    <li><NavLink to="/sponsors" data-text="Sponsors" >Sponsors</NavLink></li>
                    <li><NavLink to="/speakers" data-text="Speakers" >Speakers</NavLink></li>
                    <li><NavLink to="/startups" data-text="Startups" >Startups</NavLink></li>
                    <li><NavLink to="/mentors" data-text="Mentors" >Mentors</NavLink></li>
                    <li><NavLink to="/leaderboard" data-text="Leaderboard" >LeaderBoard</NavLink></li>
                    <li><NavLink to="/caportal" data-text="Caportal" >CaPortal</NavLink></li>
                    <li><NavLink to="/register" data-text="Register" >Register</NavLink></li>
                    <li><a href='https://medium.com/e-cell-nit-raipur' data-text="Blogs" >Blogs</a></li>
                </ul>
            </div>
        </div>
    )
}
export default navbar;