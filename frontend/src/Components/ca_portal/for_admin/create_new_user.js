import React, { Component, Fragment } from 'react'
import faxios from '../../../axios'


export default class user_details extends Component {
    user_id = this.props.match.params.user_id
    state = {
        error: null
    }


    _createUser = e => {
        e.preventDefault()
        this.setState({ error: null })

        faxios().post(`/portal/create_user/`, {
            email: this.email.value,
            first_name: this.first_name.value,
            last_name: this.last_name.value,
            user_type: this.user_type.value,
            contact: this.contact.value,
            applied: true,
            verified: true,
            password: this.password.value
        }).then(d => {
            console.log(d.data)
            this.props.history.goBack()
        }).catch(err => {
            console.log(err.response.data)
            this.setState({
                error: err.response.data.detail
            })
        })
    }



    render() {
        const err_msg = <div className='text-danger text-center'>{this.state.error}</div>

        return (
            <div className='user_detail container'>
                <div className="d-flex my-5 justify-content-between">
                    <button className='btn btn-warning' onClick={() => this.props.history.goBack()}>go back</button>
                    <h2>Create user</h2>
                    <div></div>
                </div>

                <form className=''>
                    {this.state.error ? err_msg : null}
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
                        <input className='form-control' placeholder='Contact' ref={ele => this.contact = ele} type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className='form-control' placeholder='email' ref={ele => this.email = ele} type="email" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className='form-control' placeholder='Password' ref={ele => this.password = ele} type="password" />
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
                    <div className="text-center">
                        <button onClick={this._createUser} className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
