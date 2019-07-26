import React, { Component } from 'react'
import Modal from './modal'
import faxios,{ getuser } from '../../axios'


export default class forgetPass extends Component{

    axios = faxios()
    state = {
        err: false,
        success: false
    }

    

    _forgetpass= e =>{
        e.preventDefault()
        this.setState({
            err: false,
            success: false
        })

        this.axios.post('users/forgot_password/',{
            email: this.email.value
        }).then(d=>{
            let data = d.data
            console.log(data)
            console.log(this.email.value)
            this.setState({
                err: false,
                success: true
            })

            this.email.value=''



            if(this.state.success){
                this.close_btn.click()            
                document.querySelector('#checkotp_toggle').click()
            }

            setTimeout(()=>{
                this.setState({
                    err: false,
                    success: false
                })
            },5000)

        }).catch(err=>{
            this.email.value=''
            console.error(err.request.response)
            this.setState({
                success:false,
                err: true
            })

            setTimeout(()=>{
                this.setState({
                    err: false,
                    success: false
                })
            },5000)
        })
    }

    render(){
        const errmsg = <div className="my-3 text-danger font-weight-bold text-center">Account with this email id doesn't exists. Kindly signup or retry with correct email address.</div>
        const scsmsg = <div className="my-3 text-success font-weight-bold text-center">An otp has been sent to your mobile number to reset your password, retry if not recieved.</div>
        return(
            
            <Modal id="forgetPasModal">
                <div className="text-center mt-3">OTP will be sent to the registered mobile number of the email provided below.</div>

                {this.state.err ? errmsg:null}
                {this.state.success ? scsmsg:null}
                <div className="modal-body mb-1">
                    <div className="md-form form-sm mb-5">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="email" ref={ele=>this.email = ele} className="form-control form-control-sm validate" placeholder="Your email"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    <div className="text-center mt-2">
                        <button onClick={this._forgetpass} className="btn text-white btn-info login-button">Send OTP</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
    
}