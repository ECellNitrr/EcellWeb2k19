import React, { Component } from 'react'
import faxios from '../../axios'

export default class leaderboard extends Component {
    state = {
        users: [],
        loading: true
    }


    componentDidMount() {
        faxios().get('/portal/users/').then(d => {
            let users = d.data.sort((a,b)=>b.total_points-a.total_points)
            users.map(user=>{
                let created_at = new Date(user.created_at)
                user.created_at = created_at.toDateString()
                return user
            })
            
            console.log(users)
            this.setState({
                users,
                loading: false
            })
        }).catch(err=>console.error(err))
    }



    render() {
        let ranklist_html = this.state.users.map((user,i) =>
            <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.first_name.toUpperCase()} {user.last_name.toUpperCase()}</td>
                <td>{user.total_points}</td> 
            </tr>
        )

        return (
            <div className='ranklist_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">Leaderboard</h2>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Campus Ambassador</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranklist_html}
                    </tbody>
                </table>
                {this.state.loading ? <h3 className="text-center mt-3">...loading</h3> : null}
            </div>
        )
    }
}
