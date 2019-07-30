import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Modal from './modal'
import faxios from '../../axios'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../../actions/authActions'

const user_type = {
    GST: 'Guest',
    VLT: 'Voluteer',
    EXE: 'Executive',
    MNG: 'Manager',
    HCO: 'Head Co-ordinator',
    OCO: 'Overall Co-ordinator',
    CAB: 'Campus Ambassador',
}

class logout extends Component {
    state = {}

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired
    }

    componentDidMount() {

        faxios().get('/users/get_user_details/').then(d => {
            let data = d.data
            this.props.updateUser(data)
            console.log(data.user_type)
        })
    }

    _request_approval = e => {
        e.preventDefault()

        faxios().get('/users/request_ca_approval/').then(d => {
            alert('You have successfully applied for CA! You can confirm it by clicking on your name on top right corner')

            this.props.updateUser({
                applied: true
            })
        }).catch(err => {
            console.error(err)
        })
    }

    _verify_otp = e => {
        this.close_btn.click()
        document.querySelector('#otpModal_toggle').click()
    }

    _logout = e => {
        this.props.updateUser({ loggedin: false })
        this.close_btn.click()
    }

    _go_to_portal = e => {
        this.close_btn.click()
        this.props.history.push('/caportal')
    }

    render() {
        const apply_for_ca =
            <div>
                <hr />
                <button onClick={this._request_approval} className="btn text-white btn-success login-button">Apply for CA</button>
                <hr />
            </div>

        const applied_for_ca =
            <div>
                <hr />
                <button disabled className="btn btn-warning login-button">Applied for CA</button>
                <hr />
            </div>

        const phone_no_verified = this.props.auth.verified ? null : <span onClick={this._verify_otp} id='phnoverified_btn'>click to verify phone no</span>

        let button_to_show = this.props.auth.applied ? applied_for_ca : apply_for_ca

        if (this.props.auth.user_type !== 'GST') {
            button_to_show =
                <div>
                    <hr />
                    <button onClick={this._go_to_portal} className="btn btn-primary login-button">Go to CA Portal</button>
                    <hr />
                </div>
        }

        return (
            <Modal id='logoutModal'>
                <div className="modal-body text-center mb-1">
                    <div className="details">
                        <div><span className="font-weight-bold">User: </span>{this.props.auth.first_name} {this.props.auth.last_name}</div>
                        <div><span className="font-weight-bold">Email: </span>{this.props.auth.email}</div>
                        <div><span className="font-weight-bold">Member Type: </span>{user_type[this.props.auth.user_type]}</div>
                        <div>{phone_no_verified}</div>
                    </div>
                    {button_to_show}
                    <div className="my-3 text-center">Are your sure want to logout?</div>
                    <div className="text-center mt-2">
                        <button onClick={this._logout} className="btn font-weight-bold text-white btn-info login-button">Logout</button>
                        <button ref={ele => this.close_btn = ele} type="button" className="btn font-weight-bold btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
}



const mapStateToProps = (state) => state

export default compose(connect(mapStateToProps, actions),withRouter)(logout)