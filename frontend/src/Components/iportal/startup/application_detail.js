import React, { Component } from 'react'
import faxios from '../../../axios'
import { application_status } from '../../constants'

export default class application_detail extends Component {
    app_id = Number(this.props.match.params.application_id)

    state = {
        application: {
            applicant_obj: {}
        }
    }

    componentDidMount() {
        faxios().get(`/iportal/job_application/${this.app_id}/`)
            .then(d => {
                let application = d.data
                console.log(application)
                this.setState({ application })
            })
    }

    _update_status = e => {
        e.preventDefault()

        faxios().patch(`/iportal/job_application/${this.app_id}/`,{
            status: this.status.value
        })
            .then(d => {
                let application = d.data
                console.log(application)

                this.props.history.goBack()
            })
    }


    render() {
        const { application } = this.state

        const application_status_html = Object.keys(application_status).map(status =>
            <option key={status} value={status}>{application_status[status]}</option>
        )

        return (
            <div className='container'>
                <div className="d-flex my-5">
                    <button className="btn btn-primary" onClick={() => this.props.history.goBack()}>Goback</button>
                    <h1 className="text-center flex-grow-1">Job Application</h1>
                </div>

                <div className="text-center">
                    <a href={application.resume} target='_blank' className="btn btn-primary">Resume</a>
                </div>

                <div>
                    <span className="font-weight-bold">Name: </span>
                    <span>{application.applicant_obj.first_name} {application.applicant_obj.last_name}</span>
                </div>

                <div>
                    <span className="font-weight-bold">Email: </span>
                    <span>{application.applicant_obj.email}</span>
                </div>

                <div>
                    <span className="font-weight-bold">Contact: </span>
                    <span>{application.applicant_obj.contact}</span>
                </div>

                <div>
                    <div className="font-weight-bold">How you are suitable for this job?: </div>
                    <div>{application.ques1}</div>
                </div>

                <div>
                    <div className="font-weight-bold">During what timeframe you are available for the job?</div>
                    <div>{application.ques2}</div>
                </div>

                <div className="text-center">
                    <select ref={ele => this.status = ele}>
                        {application_status_html}
                    </select>
                    <button onClick={this._update_status} className="btn btn-primary">Submit</button>
                </div>
            </div>
        )
    }
}
