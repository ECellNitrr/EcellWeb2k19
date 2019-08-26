import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import faxios from '../../../axios'

import Pagination from "react-js-pagination";


export default class users_list extends Component {
    state = {
        startups: [],
        loading: true,
        activePage: 1,
        totalStartups: 1,
        totalPages: 1
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);

        this.setState({ loading: true })
        faxios().get(`/iportal/startup/?page=${pageNumber}`).then(res => {
            let data = res.data.results
            this.setState({
                loading: false,
                activePage: pageNumber,
                startups: data,
                totalStartups: res.data.count,
                totalPages: res.data.total_pages,
            })
        })
    }

    componentDidMount() {
        faxios().get('/iportal/startup/').then(res => {

            let data = res.data.results
            console.log(data)


            this.setState({
                startups:data,
                loading: false,
                activePage: res.data.current_page,
                totalStartups: res.data.count
            })
        })
    }

    _approve = (user) => {

        faxios().put(`/iportal/startup/${user.id}/`, {
            ...user,
            approved:true
        })

    }

    _dis_approve = (user) => {
        faxios().put(`/iportal/startup/${user.id}/`, {
            ...user,
            approved:false
        })
        
    }

    render() {
        const correct = <div className="text-success"><i className="fa fa-check"></i></div>
        const wrong = <div className="text-danger"><i className="fa fa-times"></i></div>

        const startup_html = this.state.startups.map((user, i) =>
            <tr key={i}>
                <td>{(this.state.activePage-1)*14 + i + 1}</td>
                <td><Link className='detail_link' to={`/internship/jobs/${user.id}`}>{user.name}</Link></td>
                <td><a className='detail_link' href={`mailto:${user.email}`}>{user.email}</a></td>
                
                <td>{user.approved ? correct : wrong}</td>
                <td>{user.approved ? <button onClick={()=>this._dis_approve(user)} className='badge badge-danger'>Disapprove</button> : <button onClick={()=>this._approve(user)} className='badge badge-success'>Approve</button>} </td>
            </tr>
        )

        return (
            <div className='users_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">Startup List</h2>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th><strong>Name</strong><i> (details)</i></th>
                            <th>Email</th>
                            
                            <th>Approve Status</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {startup_html}
                    </tbody>
                </table>
                {this.state.loading?<h3 className="text-center mt-3">...loading</h3>:null}
                <div className="d-flex justify-content-center my-5">
                <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={14}
                        totalItemsCount={this.state.totalStartups}
                        pageRangeDisplayed={10}
                        itemClass='page-item'
                        linkClass='page-link'
                        onChange={this.handlePageChange}
                />
                </div>
            </div>
        )
    }
}
