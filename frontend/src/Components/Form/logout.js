import React, { Component } from 'react'
import Modal from './modal'
import faxios,{ getuser } from '../../axios'

const user_type = {
    GST: 'Guest',
    VLT: 'Voluteer',
    EXE: 'Executive',
    MNG: 'Manager',
    HCO: 'Head Co-ordinator',
    OCO: 'Overall Co-ordinator',
    CAB: 'Campus Ambassador',
}

export default class otp extends Component {
    axios = faxios()
    user = getuser()

    componentDidMount() {
        console.log(this.user)        
    }

    _request_approval = e => {
        e.preventDefault()

        this.axios.get('/users/request_ca_approval/').then(d=>{
            let data = d.data
            alert('You have successfully applied for CA! When approved you will see a CA batch near your name. Also you can confirm it by clicking on your name on top right corner')
            this.user.applied = true
            sessionStorage['ecell_user'] = JSON.stringify(this.user)
            window.location = '/'
        }).catch(err=>{
            console.error(err.request.response)
        })
    }
    
    _logout = e => {
        sessionStorage['ecell_user'] = null
        window.location = '/'
    }
    
    render() {
        const apply_for_ca =
        <div>
            <hr/>
                <button onClick={this._request_approval} className="btn text-white btn-success login-button">Apply for CA</button>
            <hr/>
        </div>

        const applied_for_ca =                     
        <div>
            <hr/>
                <button disabled className="btn btn-warning login-button">Applied for CA</button>
            <hr/>
        </div> 

        return (
            <Modal id='logoutModal'>
                <div className="modal-body text-center mb-1">
                    <div className="details">
                        <div><span className="font-weight-bold">User: </span>{this.user.first_name.toUpperCase()} {this.user.last_name.toUpperCase()}</div>
                        <div><span className="font-weight-bold">Email: </span>{this.user.email}</div>
                        <div><span className="font-weight-bold">Member Type: </span>{user_type[this.user.user_type]}</div>
                    </div>
                    {this.user.applied ? applied_for_ca:apply_for_ca}
                    <div className="my-3 text-center">Are your sure want to logout?</div>
                    <div className="text-center mt-2">
                        <button onClick={this._logout} className="btn text-white btn-info login-button">Logout</button>
                        <button ref={ele=>this.close_btn=ele} type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </Modal>
        )
    }
}
