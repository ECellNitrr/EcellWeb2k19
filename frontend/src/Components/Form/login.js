import React, { Component } from 'react'
import faxios from '../../axios'

export default class login extends Component {

    
    render() {
        return (
            <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                <div className="modal-body mb-1">
                    <div className="md-form form-sm mb-5">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="email" id="mlr_10 user-email" className="form-control form-control-sm validate" placeholder="Your email"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    <div className="md-form form-sm mb-4">
                        <i className="fas fa-lock prefix"></i>
                        <input type="password" id="mlr_11 user-password" className="form-control form-control-sm validate" placeholder="Your password"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_11"></label>
                    </div>
                    <div className="text-center mt-2">
                        <button className="btn btn-info login-button">Log in <i className="fas fa-sign-in ml-1"></i></button>
                        <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>

                    {/* <div className="modal-footer">
                    <div className="options text-center text-md-right mt-1">
                        <p>Not a member? <a href="#" className="blue-text">Sign Up</a></p>
                        <p>Forgot <a href="#" className="blue-text">Password?</a></p>
                    </div>
                </div> */}
            </div>
        )
    }
}
