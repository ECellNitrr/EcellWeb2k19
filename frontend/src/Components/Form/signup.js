import React, { Component } from 'react'
import fuser from '../../axios'

export default class signup extends Component {
    axios = fuser()
    state = {
        err: false,
        success: false
    }
        
    _singup = e => {
        e.preventDefault()
        this.setState({
            success:false,
            err: false
        })

        this.axios.post('/users/register/',{
            first_name: this.first_name.value,
            last_name: this.last_name.value,
            email: this.email.value,
            contact: this.contact.value,
            password: this.password.value,
        }).then(d=>{
            let data = d.data
            
            this.first_name.value = ''
            this.last_name.value = ''
            this.email.value = ''
            this.contact.value = ''
            this.password.value = ''
            
            this.setState({
                success:true,
                err: false
            })
            console.log(data)
        
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
        const scsmsg = <div className="my-3 text-success font-weight-bold text-center">Your have successfully registered! Please proceed to login</div>
                 
        return (
            <div className="tab-pane fade" id="panel8" role="tabpanel">
                <div className="modal-body">

                {this.state.err ? errmsg:null}
                {this.state.success ? scsmsg:null}
                {/* {errmsg} */}
                <div className="md-form form-sm mb-5">
                    <i className="fas fa-user prefix"></i>
                    <input ref={ele=>this.first_name=ele} type="text"  className="form-control form-control-sm validate" placeholder="First Name"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="md-form form-sm mb-5">
                    <i className="fas fa-user prefix"></i>
                    <input ref={ele=>this.last_name=ele} type="text"  className="form-control form-control-sm validate" placeholder="Last Name"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="md-form form-sm mb-5">
                    <i className="fas fa-phone prefix"></i>
                    <input ref={ele=>this.contact=ele} type="tel"  className="form-control form-control-sm validate" placeholder="Contact"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="md-form form-sm mb-5">
                    <i className="fas fa-envelope prefix"></i>
                    <input ref={ele=>this.email=ele} type="email"  className="form-control form-control-sm validate" placeholder="Email"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="md-form form-sm mb-5">
                    <i className="fas fa-lock prefix"></i>
                    <input ref={ele=>this.password=ele} type="password" id="mlr_13" className="form-control form-control-sm validate" placeholder="Password (min 8 chars)"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_13"></label>
                </div>


                <div className="text-center form-sm mt-2">
                    <button onClick={this._singup} className="btn text-white btn-info">Sign up <i className="fas fa-sign-in ml-1"></i></button>
                    <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>

                </div>
            </div>
                
                {/* <div className="modal-footer">
                <div className="options text-right">
                    <p className="pt-1">Already have an account? <a href="#" className="blue-text">Log In</a></p>
                </div>
                </div> */}
          </div>
        )
    }
}
