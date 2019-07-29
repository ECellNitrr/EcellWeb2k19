import React, { Component } from 'react'
import faxios from '../../axios'
import Loader from "./loader";

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'


const styles ={
    forgetpas: {
        fontWeight: 'bold',
        color: 'skyblue',
        cursor: 'pointer'
    }
}

class login extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    state = {
        err: false,
        success: false,
        loader:false
    }

    _forget_pass= e =>{
        e.preventDefault()
        this.close_btn.click()            
        document.querySelector('#forgetPasModal_toggle').click()
    }
        
    _login = e => {
        e.preventDefault()
        this.setState({
            success:false,
            err: false,
            loader:true
        })


        faxios().post('/users/login/',{
            email: this.email.value,
            password: this.password.value,
        }).then(d=>{
            let data = d.data
            console.log(data)
            
            this.props.updateUser({
                ...data,
                loggedin: true
            })
            this.close_btn.click()            

            if(!data.verified){
                document.querySelector('#otpModal_toggle').click()
            }

            this.setState({
                loader:false
            })


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
                    <div className="mt-2 text-center">
                        <span onClick={this._forget_pass} style={styles.forgetpas} id="forgetpas" > Forgot Password?</span>
                    </div>
                    <div className="text-center mt-2">
                        <button onClick={this._login} id="loginbtn" className="btn text-white font-weight-bold btn-info login-button">{this.state.loader ?<Loader/>:"Log in" } <i className="fas fa-sign-in ml-1"></i></button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info font-weight-bold waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps, actions)(login)