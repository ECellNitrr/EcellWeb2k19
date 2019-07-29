import React, { Component } from 'react'
import faxios from '../../../axios'


export default class user_details extends Component {
    user_id = this.props.match.params.user_id

    state = {}

    componentDidMount() {
        console.log(this.props)

        faxios().get(`/portal/users/${this.user_id}/`).then(d => {
            let user = d.data


            this.username.value = user['username']
            this.first_name.value = user['first_name']
            this.last_name.value = user['last_name']
            this.contact.value = user['contact']
            this.user_type.value = user['user_type']
            this.applied.checked = user['applied']
            this.verified.checked = user['verified']

            this.setState(d.data)
        })
    }

    _updateUser = e => {
        e.preventDefault()

        faxios().put(`/portal/users/${this.user_id}/`, {
            ...this.state,
            username: this.username.value,
            first_name: this.first_name.value,
            last_name: this.last_name.value,
            user_type: this.user_type.value,
            applied: this.applied.checked,
            verified: this.verified.checked,
        }).then(d => {
            console.log(d.data)

            this.props.history.goBack()
        })
    }

    _deleteUser = e => {
        e.preventDefault()

        faxios().delete(`/portal/users/${this.user_id}/`).then(d => {
            console.log(d.data)
            this.props.history.goBack()
        })
    }


    render() {
        return (
            <div className='user_detail container'>
                <div className="d-flex my-5 justify-content-between">
                    <button className='btn btn-warning' onClick={() => this.props.history.goBack()}>go back</button>
                    <h2>User details</h2>
                    <div></div>
                </div>

                <form className=''>
                    {/* {this.state.error ? err_msg : null} */}
                    <div className="form-group">
                        <label>Email:</label>
                        <input className='form-control' placeholder='Username' ref={ele => this.username = ele} disabled type="text" />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input className='form-control' placeholder='First Name' ref={ele => this.first_name = ele} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input className='form-control' placeholder='Last Name' ref={ele => this.last_name = ele} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Contact:</label>
                        <input className='form-control' placeholder='contact' ref={ele => this.contact = ele} type="text" />
                    </div>
                    <div className="form-group">
                        <label>User type:</label>
                        <select className='form-control' ref={ele => this.user_type = ele}>
                            <option value="GST">GST</option>
                            <option value="VLT">VLT</option>
                            <option value="EXE">EXE</option>
                            <option value="MNG">MNG</option>
                            <option value="HCO">HCO</option>
                            <option value="OCO">OCO</option>
                            <option value="CAB">CAB</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input className='form-check-input' placeholder='contact' ref={ele => this.applied = ele} type="checkbox" />
                        <label className='form-check-label'>Applied:</label>
                    </div>
                    <div className="form-check">
                        <input className='form-check-input' placeholder='contact' ref={ele => this.verified = ele} type="checkbox" />
                        <label className='form-check-label'>Verified:</label>
                    </div>
                    <div className="text-center mt-3">
                        <button onClick={this._deleteUser} className="btn btn-danger">Delete</button>
                        <button onClick={this._updateUser} className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
