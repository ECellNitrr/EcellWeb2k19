import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'


export default class users_list extends Component {
    state = {
        ecell_users: []
    }

    componentDidMount() {
        faxios().get('/portal/users/').then(d => {
            this.setState({
                ecell_users: d.data.sort((a,b)=>b.id-a.id)
            })
        })
    }

    _to_cab = user => {
        faxios().put(`/portal/users/${user.id}/`, {
            ...user,
            user_type: 'CAB',
        }).then(d => {
            let ecell_users = this.state.ecell_users
            const uid = ecell_users.findIndex(temp => temp.id === user.id)
            console.log(uid)
            ecell_users[uid].user_type = 'CAB'

            this.setState({ ecell_users })
        })
    }


    _createUser = () => {
        this.props.history.push('/caportal/admin/create_user/')
    }


    render() {
        const correct = <div className="text-success"><i className="fa fa-check"></i></div>
        const wrong = <div className="text-danger"><i className="fa fa-times"></i></div>

        const ecell_users_html = this.state.ecell_users.map((user, i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td><Link className='detail_link' to={`/caportal/admin/users/${user.id}/`}>{user.username}</Link></td>
                <td>{user.verified ? correct : wrong}</td>
                <td>{user.applied ? correct : wrong}</td>
                <td>{user.otp}</td>
                <td>{user.user_type} {user.user_type === 'GST' ? <button onClick={() => this._to_cab(user)} className='badge badge-dark'>to CAB</button> : null} </td>
            </tr>
        )

        return (
            <div className='users_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">Users List</h2>
                    <div className="text-right">
                        <button onClick={this._createUser} className="btn btn-primary">create user <i className="fa fa-plus ml-2"></i> </button>
                    </div>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>verified</th>
                            <th>Applied</th>
                            <th>otp</th>
                            <th>User Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ecell_users_html}
                    </tbody>
                </table>
            </div>
        )
    }
}
