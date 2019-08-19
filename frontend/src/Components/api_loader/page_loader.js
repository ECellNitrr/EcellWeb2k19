import React, { Component } from 'react';
import './api_loader.css';

export default class api_loader extends Component {
    render() {
        return (

            <div className="d-flex justify-content-center h-100 align-items-center loader-wrapper">
                <div className="loader">
                    <div className="l_main">
                        <div className="l_square"><span></span><span></span><span></span></div>
                        <div className="l_square"><span></span><span></span><span></span></div>
                        <div className="l_square"><span></span><span></span><span></span></div>
                        <div className="l_square"><span></span><span></span><span></span></div>

                    </div>
                </div>
            </div>

        )
    }
}
