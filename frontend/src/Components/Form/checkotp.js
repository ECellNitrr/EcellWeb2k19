import React, { Component } from 'react'
import Modal from './modal'
import faxios,{ getuser } from '../../axios'
import Loader from "./loader";

export default class forgetPass extends Component{

    axios = faxios()
    state = {
        err: false,
        success: false,
        loader:false
    }
    /*HandleEnter = (event)=>{
        const submitButton =document.getElementById("verifyOTPButton");
        if(event.code=="Enter"){
            submitButton.click();
        }
    }*/

    componentDidMount(){
        let btn = document.getElementById("verifyOTPButton");
         btn.addEventListener("click",()=>{this.props.handleOTPChange(this.otp.value)} );
         /*document.addEventListener('keypress', this.HandleEnter);*/
    }
    
    _check_otp= e =>{
        e.preventDefault()
        this.setState({
            err: false,
            success: false,
            loader:true
        })

        this.axios.post('users/check_otp/',{
            otp:this.otp.value,
            email:this.email.value
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



            if(this.state.success){
                this.close_btn.click()            
                document.querySelector('#changepass_toggle').click()
            }

            setTimeout(()=>{
                this.setState({
                    err: false,
                    success: false,
                    loader:false
                })
            },5000)

        }).catch(err=>{
            
            console.error(err.request.response)
            this.setState({
                success:false,
                err: true,
                loader:false
            })

            setTimeout(()=>{
                this.setState({
                    err: false,
                    success: false,
                    loader:false
                })
            },5000)
        })
    }

    render(){
        const errmsg = <div className="my-3 text-danger font-weight-bold text-center">Invalid OTP</div>
        const scsmsg = <div className="my-3 text-success font-weight-bold text-center">OTP verification Successful</div>
        return(
            
            <Modal id="checkOtpModal">
                <div className="text-center text-success font-weight-bold mt-3">An OTP has been sent to your registered mobile, please verify.</div>

                {this.state.err ? errmsg:null}
                {this.state.success ? scsmsg:null}
                <div className="modal-body mb-1">

                    <div className="md-form form-sm mb-5">
                        
                        <input type="hidden" value={this.props.emailToBeFilled} ref={ele=>this.email = ele} className="form-control form-control-sm validate" placeholder="Your email" disabled></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>
                    <div className="md-form form-sm mb-4">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="text" ref={ele=>this.otp = ele} className="form-control form-control-sm validate" placeholder="Please enter OTP received"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    <div className="text-center mt-2">
                        <button onClick={this._check_otp} id ="verifyOTPButton" className="btn text-white btn-info login-button">{this.state.loader ?<Loader/>:"Verify OTP" }</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
    
}