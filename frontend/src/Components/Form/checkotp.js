import React, { Component } from 'react'
import Modal from './modal'
import faxios,{ getuser } from '../../axios'


export default class forgetPass extends Component{

    axios = faxios()
    state = {
        err: false,
        success: false
    }
    

    _check_otp= e =>{
        e.preventDefault()
        this.setState({
            err: false,
            success: false
        })

        this.axios.post('users/check_otp/',{
            otp:this.otp.value,
            email:this.email.value
        }).then(d=>{
            let data = d.data
            console.log(data)
            this.setState({
                err: false,
                success: true
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
                    success: false
                })
            },5000)

        }).catch(err=>{
            
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
        const errmsg = <div className="my-3 text-danger font-weight-bold text-center">Invalid OTP</div>
        const scsmsg = <div className="my-3 text-success font-weight-bold text-center">OTP verification Successful</div>
        return(
            
            <Modal id="checkOtpModal">
                <div className="text-center text-success font-weight-bold mt-3">An OTP has been sent to your registered mobile, please verify.</div>

                {this.state.err ? errmsg:null}
                {this.state.success ? scsmsg:null}
                <div className="modal-body mb-1">

                    <div className="md-form form-sm mb-5">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="email" ref={ele=>this.email = ele} className="form-control form-control-sm validate" placeholder="Your email"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>
                    <div className="md-form form-sm mb-4">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="text" ref={ele=>this.otp = ele} className="form-control form-control-sm validate" placeholder="Please enter OTP received"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    <div className="text-center mt-2">
                        <button onClick={this._check_otp} className="btn text-white btn-info login-button">Verify OTP</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
    
}