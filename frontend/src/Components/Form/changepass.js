import React, { Component } from 'react'
import Modal from './modal'
import faxios from '../../axios'
import Loader from "./loader";

export default class changePass extends Component{

    axios = faxios()
    state = {
        err: false,
        success: false,
        loader:false
    }
    /*HandleEnter = (event)=>{
        const submitButton =document.getElementById("changePassBtn");
        if(event.code=="Enter"){
            submitButton.click();
        }
    }

    componentDidMount(){
        document.addEventListener('keypress', this.HandleEnter);
    }*/

    _changepass= e =>{
        e.preventDefault()
        this.setState({
            err: false,
            success: false,
            loader:true
        })

        this.axios.post('users/change_password/',{
            email: this.email.value,
            otp:this.otp.value,
            password:this.password.value
        }).then(d=>{

            let data = d.data
            console.log(data)

            this.setState({
                err: false,
                success: true,
                loader:false
            })

            this.email.value=''
            this.otp.value=''
            this.password.value=''

        }).catch(err=>{
            console.error(err.request.response)
            this.setState({
                err: true,
                success: false,
                loader:false
            })
        })
    }

    render(){
        const errmsg = <div className="my-3 text-danger font-weight-bold text-center">Invalid OTP</div>
        const scsmsg = <div className="my-3 text-success font-weight-bold text-center">Password successfully changed. Please Login</div>
        return(
            
            <Modal id="changePasModal">
                <div className="text-center mt-3 font-weight-bold">Please set your new passsword</div>

                {this.state.err ? errmsg:null}
                {this.state.success ? scsmsg:null}

                <div className="modal-body mb-1">
                    <div className="md-form form-sm mb-5">
                        
                        <input type="hidden" value={this.props.emailToBeFilled}  ref={ele=>this.email = ele} className="form-control form-control-sm validate" placeholder="Your email" disabled></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    <div className="md-form form-sm mb-4">
                        
                        <input type="hidden" value={this.props.otpToBeFilled} ref={ele=>this.otp = ele} className="form-control form-control-sm validate" placeholder="Please enter OTP received"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    <div className="md-form form-sm mb-4">
                        <i className="fas fa-lock prefix"></i>
                        <input type="password" ref={ele=>this.password = ele} className="form-control form-control-sm validate" placeholder="Your new password"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_11"></label>
                    </div>

                    <div className="text-center mt-2">
                        <button disabled={this.state.success} id="changePassBtn" onClick={this._changepass} className="btn text-white btn-info login-button">{this.state.loader ?<Loader/>:"Change Password" }</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
    
}