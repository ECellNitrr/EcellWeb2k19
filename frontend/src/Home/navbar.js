import React from 'react';
import $ from 'jquery';
import logo from '../Images/logo-white.png';

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
            <div className="toggle"></div>
            <div className='sidebar'>
                <ul>
                    <li><a href='#' data-text="Home" >Home</a></li>
                    <li><a href='#' data-text="Events" >Events</a></li>
                    <li><a href='#' data-text="Sponsors" >Sponsors</a></li>
                    <li><a href='#' data-text="Speakers" >Speakers</a></li>
                    <li><a href='#' data-text="Team" >Team</a></li>
                    <li><a href='#' data-text="Gallery" >Gallery</a></li>
                    <li><a href='#' data-text="CaPortal" >CA PORTAL</a></li>
                    <li><a href='#' data-text="Contact" >Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}
export default navbar;