import React, { Component } from 'react'
import '../jobs/jobs.css'

export default class navbar_ip extends Component {
    render() {
        return (
            <div>
                
<header>

    <nav class="navbar fixed-top navbar-expand-lg navbar-dark default-color scrolling-navbar">
        <a class="navbar-brand" href=""><img width="80px" height="80px" src={require('../../../assets/logo-white.png')}></img></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div className="brand-head">Internship Portal</div>
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

       
            <ul class="navbar-nav mr-auto">
                
                <li class="nav-item">
                    <a class="nav-link font-weight-bold" style={{fontSize:"20px"}} href="#">My Account</a>
                </li>
            </ul>
            <ul class="navbar-nav nav-flex-icons" >
                <li class="nav-item">
                    <a class="nav-link"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="fab fa-twitter"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><i class="fab fa-instagram"></i></a>
                </li>
            </ul>
        </div>
    </nav>

</header>

</div>

        )
    }
}
