import React, { Component } from 'react'
import Modal from './modal'
import faxios from '../../axios'
import Loader from "./loader";

export default class forgetPass extends Component{

    state = {
        err: false,
        success: false,
        loader:false,
        errmsg:''
    }

    /*HandleEnter = (event)=>{
        const submitButton =document.getElementById("logbtn");
        if(event.code=="Enter"){
            submitButton.click();
        }
    }*/

    componentDidMount(){
        let btn = document.getElementById("logbtn");
         btn.addEventListener("click",()=>{this.props.handleForgetMail(this.email.value)} );
         /*document.addEventListener('keypress', this.HandleEnter);*/
    }
    

    _forgetpass= e =>{
        e.preventDefault()
        this.setState({
            err: false,
            success: false,
            loader:true
        })

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
      


        faxios().post('users/forgot_password/',{
            email: this.email.value
        }).then(d=>{
            let data = d.data
            console.log(data)
            console.log(this.email.value)
            this.setState({
                err: false,
                success: true,
                loader:false
            })

            this.email.value=''



            if(this.state.success){
                this.close_btn.click()            
                document.querySelector('#checkotp_toggle').click()
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
                loader:false,
                errmsg:"Account with this email id doesn't exists. Kindly signup or retry with correct email address."
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
        const errmsg = <div className="my-3 text-danger font-weight-bold text-center">{this.state.errmsg}</div>
        const scsmsg = <div className="my-3 text-success font-weight-bold text-center"></div>
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
                        <button onClick={this._forgetpass} id="logbtn" className="btn font-weight-bold text-white btn-info login-button">{this.state.loader ?<Loader/>:"Send OTP" }</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn font-weight-bold btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
    
}