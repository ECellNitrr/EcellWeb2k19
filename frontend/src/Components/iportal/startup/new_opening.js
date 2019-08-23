import React, { Component } from 'react'

import faxios from '../../../axios'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Wysiwyg from '../../common/wysiwyg'
import Datetime from 'react-datetime'


class new_opening extends Component {
    job_id = Number(this.props.match.params.job_id)

    state = {
        errors: {},
        requesting: false,
        success: false,
        start_date: null,
        apply_by: null,
        initial_load: true,
    }

    componentDidMount() {
        if(!this.job_id){
            this.setState({initial_load: false})
            return
        }

        faxios().get(`/iportal/job/${this.job_id}/`)
            .then(d => {
                const data = d.data
                console.log(data)
                debugger

                this.name.value = data.name
                this.stipend.value = data.stipend
                this.location.value = data.location
                this.no_of_opening.value = data.no_of_opening
                this.job_type.value = data.job_type
                this.duration.value = data.duration


                this.about_the_job.set_value(data.about_the_job)
                this.skills_required.set_value(data.skills_required)
                this.who_can_apply.set_value(data.who_can_apply)
                this.perks.set_value(data.perks)

                this.setState({
                    apply_by: new Date(data.apply_by),
                    start_date: new Date(data.start_date),
                    initial_load: false,
                })
            })
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }


    _new_opening = e => {
        e.preventDefault()

        this.setState({
            requesting: false
        })

        let url = '/iportal/job/'
        let reqtype = faxios().post

        if (this.job_id) {
            url = `/iportal/job/${this.job_id}/`
            reqtype = faxios().put
        }

        reqtype(url, {
            "startup": this.props.auth.startup_id,
            "name": this.name.value,
            "stipend": this.stipend.value,
            "location": this.location.value,
            "no_of_opening": this.no_of_opening.value,
            "job_type": this.job_type.value,
            "duration": this.duration.value,

            "apply_by": this.state.apply_by,
            "start_date": this.state.start_date,

            "about_the_job": this.about_the_job.get_value(),
            "skills_required": this.skills_required.get_value(),
            "who_can_apply": this.who_can_apply.get_value(),
            "perks": this.perks.get_value(),
        }).then(d => {
            const data = d.data
            console.log(data)
            this.props.history.goBack()
        }).catch(d => {
            let data = d.response.data
            console.log(data)
            this.setState({ errors: data, requesting: false })
        })
    }

    _delete_opening = () => {
        faxios().delete(`/iportal/job/${this.job_id}/`)
            .then(d=>{
                this.props.history.goBack()
            })
    }

    render() {
        let error_html = {}
        Object.keys(this.state.errors).forEach((key) => {
            error_html[key] = this.state.errors[key].map((ele, i) =>
                <div key={i} className="text-danger">{ele}</div>
            )
        })


        return (
            <div className='container'>
                <div className="d-flex">
                    <button 
                        onClick={() => this.props.history.goBack()}
                        className="btn btn-warning align-self-center">Goback</button>
                    <h1 className="text-center flex-grow-1 my-5">
                        {this.job_id ? 'Edit Opening' : 'Create new Opening'}
                    </h1>
                    {this.job_id? <button 
                        onClick={this._delete_opening}
                        className="btn btn-danger align-self-center">Delete</button>:null}
                </div>

                {this.state.initial_load ? <div className="my-5">
                    <h1 className="text-center">
                        <i className="fa fa-spinner fa-spin"></i>
                    </h1>
                </div> : null}

                <form>
                    <div className="form-group">
                        <label>Opening name</label>
                        <input type="text" ref={ele => this.name = ele} className="form-control" />
                        {error_html['name']}
                    </div>
                    <div className="form-group">
                        <label>Stipend</label>
                        <input type="text" ref={ele => this.stipend = ele} className="form-control" />
                        {error_html['stipend']}
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="email" ref={ele => this.location = ele} className="form-control" />
                        {error_html['location']}
                    </div>
                    <div className="form-group">
                        <label>Apply by</label>
                        <Datetime value={this.state.apply_by} onChange={e => this.setState({ apply_by: e })} />
                        {error_html['apply_by']}
                    </div>
                    <div className="form-group">
                        <label>Start Date</label>
                        <Datetime value={this.state.start_date} onChange={e => this.setState({ start_date: e })} />
                        {error_html['state_date']}
                    </div>
                    <div className="form-group">
                        <label>No of Openings</label>
                        <input type="text" ref={ele => this.no_of_opening = ele} className="form-control" />
                        {error_html['no_of_opening']}
                    </div>
                    <div className="form-group">
                        <label>Duration</label>
                        <input type="text" ref={ele => this.duration = ele} className="form-control" />
                        {error_html['duration']}
                    </div>
                    <div className="form-group">
                        <label className='mr-2 d-inline-block'>Job type</label>
                        <select ref={ele => this.job_type = ele}>
                            <option value='Internship'>Internship</option>
                            <option value='Internship with job offer'>Internship with job offer</option>
                            <option value='Full time employee'>Full time employee</option>
                            <option value='Parttime'>Part time</option>
                            <option value='Freelance'>Freelance</option>
                        </select>
                        {error_html['job_type']}
                    </div>
                    <div className="form-group">
                        <label>About the job</label>
                        {error_html['about_the_job']}
                        <Wysiwyg onRef={ref => this.about_the_job = ref} />
                    </div>
                    <div className="form-group">
                        <label>Skills required</label>
                        {error_html['skills_required']}
                        <Wysiwyg onRef={ref => this.skills_required = ref} />
                    </div>
                    <div className="form-group">
                        <label>Who can apply</label>
                        {error_html['who_can_apply']}
                        <Wysiwyg onRef={ref => this.who_can_apply = ref} />
                    </div>
                    <div className="form-group">
                        <label>Perks</label>
                        {error_html['perks']}
                        <Wysiwyg onRef={ref => this.perks = ref} />
                    </div>


                    <div className="text-center">
                        <button disabled={this.state.requesting} onClick={this._new_opening} className="btn btn-primary">{this.state.requesting ? <i className="fa fa-spinner fa-spin"></i> : 'submit'}</button>
                    </div>
                </form>

            </div>

        )
    }
}



const mapStateToProps = (state) => state

export default connect(mapStateToProps)(new_opening)
