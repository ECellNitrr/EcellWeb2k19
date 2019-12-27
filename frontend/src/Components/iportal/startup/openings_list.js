import React, { Component } from 'react'
import faxios from '../../../axios'
import { Link } from 'react-router-dom'
import './dashboard.scss'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class openings extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    state = {
        jobs: []
    }

    componentDidMount() {
        faxios().get(`/iportal/job/?startup=${this.props.auth.startup_id}`)
            .then(d => {
                const jobs=d.data.results
                console.log({jobs})
                this.setState({jobs})
            })
    }


    render() {
        let jobs = this.state.jobs.map((job,i) =>
            <tr key={job.id}>
                <th scope="row">{i+1}</th>
                <td><Link class='text-primary font-weight-bold' to={`/internship/startup/openings/${job.id}/`} >{job.name}</Link></td>
                <td>{job.job_type}</td>
                <td>{job.total_applicants}</td>
                <td>
                    <button onClick={()=> this.props.history.push(`/internship/startup/application/${job.id}/`)} className="btn py-1 px-2">list</button>
                </td>
            </tr>
        )

        return (
            <div className="container jumbotron hoverable" style={{backgroundColor:"white"}}>

                <div style={{float:"right"}} >
                    <button onClick={() => this.props.history.push('/internship/startup/openings/new/')} className="btn font-weight-bold align-self-center btn-primary">New Opening</button>
                </div><br></br>

                <div className='text-center'>
                    <h1 className="text-center font-weight-bold flex-grow-1 my-5 open">Openings</h1>
                </div>

                <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="font-weight-bold">#</th>
                            <th className="font-weight-bold">Opening Name</th>
                            <th className="font-weight-bold">Type</th>
                            <th className="font-weight-bold">No. Applied</th>
                            <th className="font-weight-bold">Applicants</th>
                        </tr>
                    </thead>
                    <tbody>{jobs}</tbody>
                </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(openings)