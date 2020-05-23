import React, { Component } from 'react'
import faxios from '../../../axios'
import { application_status } from '../../constants'

export default class application_detail extends Component {
    app_id = Number(this.props.match.params.application_id)

    state = {
        application: {
            applicant_obj: {},
            college:""
        }
    }

    componentDidMount() {
        faxios().get(`/iportal/job_application/${this.app_id}/`)
            .then(d => {
                let application = d.data
                // console.log(d.data.applicant_obj,"YEh wala")
                this.setState({ 
                    application,
                    college: d.data.college
                })
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
        const { application,college } = this.state

        const application_status_html = Object.keys(application_status).map(status =>
            <option key={status} value={status}>{application_status[status]}</option>
        )

        return (
            <div className='container jumbotron hoverable'>
            
                <div style={{marginBottom:"50px"}}>
                    <button style={{float:"left"}} className="btn btn-primary font-weight-bold" onClick={() => this.props.history.goBack()}>Go back</button>
                </div><br></br>

                <div>
                <div className="text-center my-3">    
                    <h1 className="text-center font-weight-bold flex-grow-1">Job Application</h1>
                </div>

                <div className="text-center">
                    <a href={application.resume} target='_blank' className="btn my-3 btn-danger font-weight-bold">Resume</a>
                </div>

                <div className="my-3">
                    <span className="font-weight-bold">Name: </span>
                    <span>{application.applicant_obj.first_name} {application.applicant_obj.last_name}</span>
                </div>

                <div className="my-3">
                    <span className="font-weight-bold">Email: </span>
                    <span>{application.applicant_obj.email}</span>
                </div>

                <div className="my-3">
                    <span className="font-weight-bold">Contact: </span>
                    <span>{application.applicant_obj.contact}</span>
                </div>

                <div className="my-3">
                    <div className="font-weight-bold">College Name </div>
                    <span>{college}</span>
                </div>

                <div className="my-3">
                    <div className="font-weight-bold">How you are suitable for this job?: </div>
                    <div dangerouslySetInnerHTML={{__html:application.ques1}}></div>
                </div>

                <div className="my-3">
                    <div className="font-weight-bold">During what timeframe you are available for the job?</div>
                    <div dangerouslySetInnerHTML={{__html:application.ques2}}></div>
                </div>

                <div className="my-3 d-flex justify-content-center">
                    <div>
                    <select style={{maxWidth:"300px",border:"2px solid gray"}} className="text-center my-4 form-control" ref={ele => this.status = ele}>
                        {application_status_html}
                    </select>
                    <button onClick={this._update_status} className="btn btn-success font-weight-bold">Submit</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
