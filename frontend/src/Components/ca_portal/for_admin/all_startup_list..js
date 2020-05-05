import React, { Component, Fragment } from 'react'
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
    
        faxios().put(`/iportal/startup/${user.id}/`, {...user,idea_approved:'approved'})
        .then(res=>{
            let startups=this.state.startups
            const appr_state= startups.findIndex(temp => temp.id === user.id)
            console.log(appr_state)
            startups[appr_state].idea_approved= 'approved'
            this.setState(startups)
        })
    
    }

    _dis_approve = (user) => {

        faxios().put(`/iportal/startup/${user.id}/`, {...user,idea_approved:'rejected'})
        .then(res=>{
            let startups=this.state.startups
            const appr_state= startups.findIndex(temp => temp.id === user.id)
            console.log(appr_state)
            startups[appr_state].idea_approved= 'rejected'
            this.setState(startups)
        })

    }

    _approve_intern = (user) => {

        faxios().put(`/iportal/startup/${user.id}/`, {...user,can_hire_interns:true})
        .then(res=>{
            let startups=this.state.startups
            const appr_state= startups.findIndex(temp => temp.id === user.id)
            console.log(appr_state)
            startups[appr_state].can_hire_interns= true
            this.setState(startups)
        })

    }


    _dis_approve_intern = (user) => {

        faxios().put(`/iportal/startup/${user.id}/`, {...user,can_hire_interns:false})
        .then(res=>{
                let startups=this.state.startups
                const appr_state= startups.findIndex(temp => temp.id === user.id)
                console.log(appr_state)
                startups[appr_state].can_hire_interns= false
                this.setState(startups)
            })
    }

    render() {
        const correct = <div className="text-success"><i className="fa fa-check"></i></div>
        const wrong = <div className="text-danger"><i className="fa fa-times"></i></div>
        
        const startup_html = this.state.startups.map((user, i) =>
            <tr key={i}>
                <td>{(this.state.activePage-1)*14 + i + 1}</td>
                {/* <td>
                    <Link target='_blank' className='detail_link' to={`/internship/jobs/${user.id}`}>{user.name} </Link> </td> <td>
                    <a className='detail_link' href={`mailto:${user.email}`}>{user.email}</a></td>
                
                <td>{user.idea_approved ? correct : wrong}</td>
                <td>{user.idea_approved ? <button onClick={()=>this._dis_approve(user)} className='badge
                        badge-danger'>Disapprove</button> : <button onClick={()=>this._approve(user)} className='badge
                        badge-success'>Approve</button>} </td> */}

                <td>
                    <div class="card">
                        <h5 class="card-header font-weight-bold">{user.idea_in_a_nut_shell}</h5>
                        <div class="card-body">
                            <div className="mb-2"><i className="font-weight-bold">Description :</i></div>
                            <div dangerouslySetInnerHTML={{ __html: user.describe_idea }}></div>
                             <div className="mb-2"><i className="font-weight-bold">Beneficiaries :</i> {user.beneficiaries}</div>
                             <div>
                                <Link target='_blank' className='detail_link btn btn-primary' to={`/internship/jobs/${user.id}`}>Read More </Link>
                                { (() => {
                                            switch (user.idea_approved) {
                                                case 'pending':
                                                    return  (
                                                                <Fragment>
                                                                    <button onClick={()=>this._approve(user)} className='btn float-right font-weight-bold btn-success'>Approve Idea</button>
                                                                    <button onClick={()=>this._dis_approve(user)} className='btn float-right font-weight-bold btn-danger'>Reject Idea</button>
                                                                </Fragment>
                                                            )
                                                case 'approved':
                                                    return  (
                                                                <Fragment>
                                                                    <button onClick={()=>this._dis_approve(user)} className='btn float-right font-weight-bold btn-danger'>Reject Idea</button>
                                                                    {
                                                                        user.can_hire_interns ? 
                                                                            <button onClick={()=>this._dis_approve_intern(user)} className='btn float-right font-weight-bold btn-danger'>Disapprove Work Profiles</button> 
                                                                            : <button onClick={()=>this._approve_intern(user)} className='btn float-right font-weight-bold btn-success'>Approve Work Profiles</button>
                                                                    }
                                                                </Fragment>
                                                            )
                                                case 'rejected':
                                                    return  (
                                                                <button onClick={()=>this._approve(user)} className='btn float-right font-weight-bold btn-success'>Approve Idea</button>                                                                
                                                            )
                                                default:
                                                    return null
                                            }
                                        })()
                                }
                                {/* {user.can_hire_interns ? <button onClick={()=>this._dis_approve_intern(user)} className='btn float-right font-weight-bold btn-danger'>Disapprove Work Profiles</button> : <button onClick={()=>this._approve_intern(user)} className='btn float-right font-weight-bold btn-success'>Approve Work Profiles</button>} */}
                                {/* {user.idea_approved==="pending" ? <button onClick={()=>this._dis_approve(user)} className='btn float-right font-weight-bold btn-danger'>Disapprove  Idea</button> : <button onClick={()=>this._approve(user)} className='btn float-right font-weight-bold btn-success'>Approve Idea</button>} */}

                             </div>
                        </div>
                    </div>
                </td>
                    
            </tr>
    )

        return (
            <div className='users_list container'>
                <div className="d-flex my-4">
                    <h2 className=" flex-grow-1 text-center">Idea List</h2>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th><strong>#</strong></th>
                            <th className="text-center"><strong>Ideas</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                        {startup_html}
                    </tbody>
                </table>
                {this.state.loading?<h3 className="text-center mt-3">...loading</h3>:null}
                <div className="d-flex justify-content-center my-5">
                    <Pagination activePage={this.state.activePage} itemsCountPerPage={14} totalItemsCount={this.state.totalStartups}
                        pageRangeDisplayed={10} itemClass='page-item' linkClass='page-link' onChange={this.handlePageChange} />
                </div>
            </div>
        )
    }
}