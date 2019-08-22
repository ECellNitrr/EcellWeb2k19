import React, { Component } from 'react'
import faxios from '../../../axios'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { application_status } from '../../constants'

class applications_list extends Component {
    job_id = Number(this.props.match.params.job_id)

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    state = {
        job: {},
        applications: [],
    }

    componentDidMount() {
        faxios().get(`/iportal/job/${this.job_id}/`)
            .then(d => {
                const job = d.data
                console.log({ job })
                this.setState({ job })
            })

        faxios().get(`/iportal/job_application/?job=${this.job_id}`)
            .then(d => {
                let applications = d.data.results
                console.log(applications)

                applications = applications.map(application => {
                    application.created_at = new Date(application.created_at).toISOString().slice(0, 10)
                    return application
                })
                console.log({ applications })
                this.setState({ applications })
            })
    }


    render() {
        let jobs = this.state.applications.map((application, i) =>
            <tr key={application.id}>
                <th scope="row">{i + 1}</th>
                <td><Link className='text-primary font-weight-bold' to={`/internship/startup/application_detail/${application.id}/`} >
                    {application.applicant_obj.first_name} {application.applicant_obj.last_name}
                </Link></td>
                <td>{application_status[application.status]}</td>
                <td>{application.created_at}</td>
            </tr>
        )

        return (
            <div className="container">

                <div className='d-flex'>
                    <button onClick={() => this.props.history.goBack()} className="btn align-self-center btn-primary">GoBack</button>
                    <h1 className="text-center flex-grow-1 my-5">Applicants - {this.state.job.name}({this.state.job.job_type})</h1>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="font-weight-bold">#</th>
                            <th className="font-weight-bold">Name</th>
                            <th className="font-weight-bold">Status</th>
                            <th className="font-weight-bold">Applied on</th>
                        </tr>
                    </thead>
                    <tbody>{jobs}</tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(applications_list)