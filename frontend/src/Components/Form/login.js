import React, { Component } from 'react'
import faxios from '../../axios'

export default class login extends Component {
    axios = faxios()
    state = {
        err: false,
        success: false
    }
        
    _login = e => {
        e.preventDefault()
        this.setState({
            success:false,
            err: false
        })

        this.axios.post('/users/login/',{
            // email: this.email.value,
            // password: this.password.value,
            email: 'naveen@gmail.com',
            password: 'jervismk2',
        }).then(d=>{
            let data = d.data
            console.log(data)
            
            sessionStorage['ecell_user'] = JSON.stringify(data)
            document.querySelector('#otpModal_toggle').click()
            
            this.setState({
                success:true,
                err: false
            })
            this.close_btn.click()            
        }).catch(err=>{
            console.error(err.request.response)
            this.setState({
                success:false,
                err: true
            })
        })
    }
    
    render() {
        const errmsg = <div className="my-3 text-danger font-weight-bold text-center">Please provide valid credentials!</div>
        const scsmsg = <div className="my-3 text-success font-weight-bold text-center">Your have successfully loggedin</div>

        return (
            <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
                {this.state.err ? errmsg:null}
                {this.state.success ? scsmsg:null}
            
                <div className="modal-body mb-1">
                    <div className="md-form form-sm mb-5">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="email" ref={ele=>this.email = ele} className="form-control form-control-sm validate" placeholder="Your email"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    <div className="md-form form-sm mb-4">
                        <i className="fas fa-lock prefix"></i>
                        <input type="password" ref={ele=>this.password = ele} className="form-control form-control-sm validate" placeholder="Your password"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_11"></label>
                    </div>
                    <div className="text-center mt-2">
                        <button onClick={this._login} className="btn text-white btn-info login-button">Log in <i className="fas fa-sign-in ml-1"></i></button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
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
