import React, { Component } from 'react'
import faxios from '../../axios'
import Loader from "./loader";


import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'


class signup extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    state = {
        err: false,
        success: false,
        loader:false
    }

    static propTypes = {
    }

    _singup = e => {
        e.preventDefault()

        this.setState({
            success:false,
            err: false,
            errmsg: '',
            loader:true
        })

        if(this.first_name.value.length<1){
            this.setState({
                success:false,
                err: true,
                errmsg: 'First Name is required',
                loader:false
            })
            return
        }

        if(this.last_name.value.length<1){
            this.setState({
                success:false,
                err: true,
                errmsg: 'Last Name is required',
                loader:false
            })
            return
        }

        if(this.contact.value.length<1){
            this.setState({
                success:false,
                err: true,
                errmsg: 'Contact is required',
                loader:false
            })
            return
        }

        let contact_value = this.contact.value

        let verify_contact = (contact) =>{

            let re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
            return re.test(String(contact));
        }

        if(verify_contact(contact_value)===false){
            this.setState({
                success:false,
                err: true,
                errmsg: 'Contact is invalid',
                loader:false
            })
            return
        }

        if(this.email.value.length<1){
            this.setState({
                success:false,
                err: true,
                errmsg: 'Email is required',
                loader:false
            })
            return
        }

        

        let email_value= this.email.value

        let verify_email=(email)=>{
            let re = /\S+@\S+\.\S+/;
            return re.test(String(email).toLowerCase());
        }

        if(verify_email(email_value)===false){
            this.setState({
                success:false,
                err: true,
                errmsg: 'Email is invalid',
                loader:false
            })
            return
        }

        if(this.password.value.length<8){
            this.setState({
                success:false,
                err: true,
                errmsg: 'Password should have minimum 8 characters',
                loader:false
            })
            return
        }

       

        faxios().post('/users/register/',{
            first_name: this.first_name.value,
            last_name: this.last_name.value,
            email: this.email.value,
            contact: this.contact.value,
            password: this.password.value,
        }).then(d=>{
            let data = d.data
            console.log(data)
            
            this.first_name.value = ''
            this.last_name.value = ''
            this.email.value = ''
            this.contact.value = ''
            this.password.value = ''
            
            this.setState({
                err: false,
                loader:false
            })

            this.props.updateUser({
                ...data,
                loggedin: true
            })
            this.close_btn.click()   
            document.querySelector('#otpModal_toggle').click()
            

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
            
            try{
                let error = err.response.data
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
                <br/>
                <div className="form-group d-flex form-sm mb-5">
                    <i className="fas fa-user prefix input-group-text"></i>
                    <input ref={ele=>this.first_name=ele} type="text"  className="form-control form-control-sm validate" placeholder="First Name"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="form-group d-flex form-sm mb-5">
                    <i className="fas fa-user prefix input-group-text"></i>
                    <input ref={ele=>this.last_name=ele} type="text"  className="form-control form-control-sm validate" placeholder="Last Name"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="form-group d-flex form-sm mb-5">
                    <i className="fas fa-phone prefix input-group-text"></i>
                    <input type="text" ref={ele=>this.contact=ele} className="form-control form-control-sm validate" placeholder="Contact"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="form-group d-flex form-sm mb-5">
                    <i className="fas fa-envelope prefix input-group-text"></i>
                    <input ref={ele=>this.email=ele} type="email"  className="form-control form-control-sm validate" placeholder="Email"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_12"></label>
                </div>

                <div className="form-group d-flex form-sm mb-5">
                    <i className="fas fa-lock prefix input-group-text"></i>
                    <input ref={ele=>this.password=ele} type="password" id="mlr_13" className="form-control form-control-sm validate" placeholder="Password (min 8 chars)"></input>
                    <label data-error="wrong" data-success="right" htmlFor="mlr_13"></label>
                </div>


                <div className="text-center form-sm mt-2">
                    <button disabled={this.state.success} id="signupBtn" onClick={this._singup} className="btn font-weight-bold text-white btn-info">{this.state.loader ?<Loader/>:"Sign up"}</button>
                    &nbsp;
                    <button ref={ele=>this.close_btn=ele} type="button" className="btn font-weight-bold btn-outline-info ml-auto" data-dismiss="modal">Close</button>

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



const mapStateToProps = (state) => state

export default connect(mapStateToProps, actions)(signup)