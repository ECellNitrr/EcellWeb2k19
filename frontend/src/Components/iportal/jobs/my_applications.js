import React, { Component } from 'react'
import faxios from '../../../axios'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { application_status } from '../../constants'

class applications_list extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    state = {
        applications: [],
    }

    componentDidMount() {
        faxios().get(`/iportal/job_application/?applicant=${this.props.auth.id}`)
            .then(d => {
                let applications = d.data.results
                console.log(applications)

                applications = applications.map(application => {
                    application.created_at = new Date(application.created_at).toISOString().slice(0, 10)
                    return application
                })

                applications = applications.sort((a,b)=>b.id-a.id)

                console.log({ applications })
                this.setState({ applications })
            })
    }


    render() {
        let applications = this.state.applications.map((application, i) =>
            <tr key={application.id}>
                <th scope="row">{i + 1}</th>
                <td>{application.startup_name}</td>
                <td>{application.opening_name}</td>
                <td>{application.status}</td>
                <td>{application.created_at}</td>
            </tr>
        )

        return (
            <div className="container">

                <div className='d-flex'>
                    <button onClick={() => this.props.history.goBack()} className="btn align-self-center btn-primary">GoBack</button>
                    <h1 className="text-center flex-grow-1 my-5">My Applications</h1>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="font-weight-bold">#</th>
                            <th className="font-weight-bold">Company</th>
                            <th className="font-weight-bold">Posting</th>
                            <th className="font-weight-bold">Status</th>
                            <th className="font-weight-bold">Applied on</th>
                        </tr>
                    </thead>
                    <tbody>{applications}</tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(applications_list)