import React, { Component } from 'react'

export default class signup extends Component {
    render() {
        return (
            <div className="tab-pane fade" id="panel8" role="tabpanel">
                <div className="modal-body">
                <div className="md-form form-sm mb-5">
                    <i className="fas fa-user prefix"></i>
                    <input type="text" id="mlr_12" className="form-control form-control-sm validate" placeholder="Your Name"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="md-form form-sm mb-5">
                    <i className="fas fa-phone prefix"></i>
                    <input type="tel" id="mlr_12" className="form-control form-control-sm validate" placeholder="Your Contact"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="md-form form-sm mb-5">
                    <i className="fas fa-envelope prefix"></i>
                    <input type="email" id="mlr_12" className="form-control form-control-sm validate" placeholder="Your email"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="md-form form-sm mb-5">
                    <i className="fas fa-lock prefix"></i>
                    <input type="password" id="mlr_13" className="form-control form-control-sm validate" placeholder="Your password"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_13"></label>
                </div>


                <div className="text-center form-sm mt-2">
                    <button className="btn btn-info">Sign up <i className="fas fa-sign-in ml-1"></i></button>
                </div>

                </div>
                
                <div className="modal-footer">
                <div className="options text-right">
                    <p className="pt-1">Already have an account? <a href="#" className="blue-text">Log In</a></p>
                </div>
                <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                </div>
          </div>
        )
    }
}
