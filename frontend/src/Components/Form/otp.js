import React, { Component } from 'react'
import Modal from './modal'
import faxios from '../../axios'
import Loader from "./loader";

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'



const styles ={
    resend_otp: {
        fontWeight: 'bold',
        color: 'skyblue',
        cursor: 'pointer'
    }
}

class otp extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }
    
    state = {
        err: false,
        success: false,
        resend : false,
        loader:false,
        errmsg:''
    }

    _verify_otp = e => {
        e.preventDefault()
        let user = this.props.auth

        this.setState({
            success:false,
            err: false,
            loader:true
        })

        if(this.otp.value.length<1){
            this.setState({
                success:false,
                err: true,
                errmsg: 'OTP is required',
                loader:false
            })
            return
        }


        faxios().post('/users/verify_otp/',{
            otp: this.otp.value
        }).then(d=>{
            let data = d.data
            console.log(data)

            this.setState({
                loader:false
            })
            this.props.updateUser({
                verified: true
            })
            this.close_btn.click()
        }).catch(err=>{
            this.setState({
                success:false,
                err: true,
                loader:false,
                errmsg:"The entered OTP is not valid!"
            })
            console.error(err)
        })
    }

    _resend_otp = () => {
        faxios().get('/users/resend_otp/').then(d=>{
            console.log(d.data)
            this.setState({resend: true})
        }).catch(e=>{
            console.error(e.request.response)
        })
    }
    
    
    render() {
        const errmsg = <div className="mt-3 text-danger font-weight-bold text-center">{this.state.errmsg}</div>
        const scsmsg = <div className="mt-3 text-success font-weight-bold text-center">Logged in as </div>

        const resend_otp =
            <div className="mt-2 text-center">
                Didn't receive OTP? <span onClick={this._resend_otp} style={styles.resend_otp} id="resend_otp">resend</span>
            </div>

        return (
            <Modal id='otpModal'>
                <div className="text-center mt-3">OTP may take upto 10mins to be delivered.</div>
                {this.state.err ? errmsg:null}
                {this.state.success ? scsmsg:null}
            
                <div className="modal-body mb-1">
                    <div className="md-form form-sm mb-4">
                        <i className="fas fa-envelope prefix"></i>
                        <input type="text" ref={ele=>this.otp = ele} className="form-control form-control-sm validate" placeholder="Please enter OTP received"></input>
                        <label data-error="wrong" data-success="right" htmlFor="mlr_10"></label>
                    </div>

                    {this.state.resend? null: resend_otp}        
                
                    <div className="text-center mt-2">
                        <button onClick={this._verify_otp}  id="verifyBtn" className="btn font-weight-bold text-white btn-info login-button">{this.state.loader ?<Loader/>:"Verify OTP" }</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn font-weight-bold btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, actions)(otp)
