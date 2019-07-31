import React, { Component } from 'react';
import './api_loader.css';

export default class api_loader extends Component {
    render() {
        return (
            
                <div class="loader">
                    <div class="l_main">
                        <div class="l_square"><span></span><span></span><span></span></div>
                        <div class="l_square"><span></span><span></span><span></span></div>
                        <div class="l_square"><span></span><span></span><span></span></div>
                        <div class="l_square"><span></span><span></span><span></span></div>
                        
                    </div>
                </div>
            
        )
    }
}
