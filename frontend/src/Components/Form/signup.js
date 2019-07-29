import React, { Component } from 'react'
import fuser from '../../axios'
import Loader from "./loader";


// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import * as actions from '../../actions/authActions'


export default class signup extends Component {
    axios = fuser()
    state = {
        err: false,
        success: false,
        loader:false
    }

    static propTypes = {
    }

    _singup = e => {
        e.preventDefault()

        if(this.password.value.length<8){
            this.setState({
                success:false,
                err: true,
                errmsg: 'password should have minimum 8 characters'
            })
            return
        }

        this.setState({
            success:false,
            err: false,
            errmsg: '',
            loader:true
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
                err: false,
                loader:false
            })

            
            console.log(data)

            setTimeout(()=>{
                this.setState({
                    err: false,
                    success: false,
                    loader:false,
                    errmsg: "",
                })
            },5000)              
        
        }).catch(err=>{
            let errmsg = '' 
            console.error(err)
            let error = err.response.data

            try{
                errmsg = JSON.stringify(error.detail)
            } catch(e){
                errmsg = err
            }
            
            this.setState({
                success:false,
                err: true,
                errmsg: errmsg,
                loader:false
            })
            setTimeout(()=>{
                this.setState({
                    err: false,
                    success: false,
                    loader:false,
                    errmsg: "",
                })
            },5000)            
        })
    }

    render() {
        const errmsg = <div className="my-3 text-danger font-weight-bold text-center">{this.state.errmsg}</div>
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
                    <input type="text" ref={ele=>this.contact=ele} className="form-control form-control-sm validate" placeholder="Contact"></input>
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
                    <button disabled={this.state.success} id="signupBtn" onClick={this._singup} className="btn font-weight-bold text-white btn-info">{this.state.loader ?<Loader/>:"Sign up" } <i className="fas fa-sign-in ml-1"></i></button>
                    <button type="button" className="btn font-weight-bold btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>

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
