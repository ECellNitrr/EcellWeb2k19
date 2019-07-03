import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import $ from 'jquery';
import logo from '../../Images/logo-white.png';

const navbar = () =>{

    $(document).ready(function(){
       $('.toggle').click(function(){
           $('.toggle').toggleClass('active')
           $('.sidebar').toggleClass('active')
           $('.logo').toggleClass('active')
           
       }) 
    })


    return(
        <div nav-bar>
            <img className="logo" src={logo}></img>
            <div className="header">THE ENTREPRENEURSHIP CELL</div>
            <div className="header2">THE E-CELL</div>

            <div className="toggle"></div>
            <div className='sidebar'>
                <ul>
                    <li><Link to="/" data-text="Home" >Home</Link></li>
                    <li><Link to="/events" data-text="events" >Events</Link></li>
                    <li><Link to="/team" data-text="Team" >Team</Link></li>
                    <li><Link to="/gallery" data-text="Gallery" >Gallery</Link></li>
                    <li><Link to="/sponsors" data-text="Sponsors" >Sponsors</Link></li>
                    <li><Link to="/speakers" data-text="Speakers" >Speakers</Link></li>
                    <li><Link to="/startups" data-text="Startups" >Startups</Link></li>
                    <li><Link to="/Mentors" data-text="Mentors" >Mentors</Link></li>
                    <li><Link to="/leaderboard" data-text="Leaderboard" >LeaderBoard</Link></li>
                    <li><Link to="/caportal" data-text="Caportal" >CaPortal</Link></li>
                    <li><Link to="/register" data-text="Register" >Register</Link></li>
                    <li><a href='https://medium.com/e-cell-nit-raipur' data-text="Blogs" >Blogs</a></li>
                </ul>
            </div>
        </div>
    )
}
export default navbar;