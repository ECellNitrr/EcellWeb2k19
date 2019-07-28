import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo-white.png';

const footer = ()=>{
    return(
        <div className="footer" style={{background:"#0A0908",textAlign:'center',marginTop:"50px",position:"relative",bottom:"0"}}>
            <div className="container-fluid" style={{maxWidth:"1500px",padding:"50px"}}>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-lg-4 col5">
                        <h3 style={{color:"white",fontWeight:'800',padding:"8px", background:"#0A0908"}}>Quick Links</h3>
                        <div className="f-links" ><Link to="/">Home</Link></div>
                        <div className="f-links" ><Link to="/events">Events</Link></div>
                        <div className="f-links" ><Link to="/speakers">Speakers</Link></div>
                        <div className="f-links" ><Link to="/sponsors">Sponsors</Link></div>
                        <div className="f-links" ><Link to="/team">Team</Link></div>           
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col6">
                        <img alt='E-Cell Logo' style={{height:"80px",width:"80px"}} src={logo}></img>
                        <p style={{color:"white",margin:"15px",fontSize:"17px",fontWeight:"600"}}>E-Cell, NIT Raipur is established to motivate and educate people about entrepreneurship and serve as a meeting ground for corporate and young budding entrepreneurs from distinguished institutions.</p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                      <h3 style={{color:"white",fontWeight:"800"}}>E-SUMMIT'19</h3>
                      <p style={{color:"white",fontWeight:"600"}}>Follow us online on-</p>
                      <p style={{fontSize:"40px"}}>
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                      </p>
                      <div><a className="site" href="https://ecell.nitrr.ac.in/">E-Cell Official Site</a></div>
                      <div><a style={{color:"white"}} href="tel:8094966697">+91 80949 66697</a></div>
                      <div><a style={{color:"white"}} href="tel:8839579796">+91 88395 79796</a></div>
                      <p style={{color:"white",marginTop:"5px"}}>&copy; All Rights Reserved</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;