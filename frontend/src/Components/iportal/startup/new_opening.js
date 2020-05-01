import React, { Component,Fragment } from 'react'

import faxios from '../../../axios'
import './dashboard.scss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Wysiwyg from '../../common/wysiwyg'
import Datetime from 'react-datetime'

var yesterday = Datetime.moment().subtract(1, 'day');
var valid = function( current ){
    return current.isAfter( yesterday );
};


class new_opening extends Component {
    job_id = Number(this.props.match.params.job_id)

    state = {
        errors: {},
        requesting: false,
        success: false,
        start_date: null,
        err_num:[],
        validate:true,
        apply_by: null,
        max_chars:"",
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

                this.name.value = data.name
                this.stipend.value = data.stipend
                this.location.value = data.location
                this.no_of_opening.value = data.no_of_opening
                this.job_type.value = data.job_type
                this.duration.value = data.duration
                this.brief.value=data.brief

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
            requesting: true
        })

        if(this.name.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,0],
                validate:false,
                requesting: false
            })

            

            console.log("This runs 0")

            return
        }


        if(this.brief.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,1],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.stipend.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,2],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.location.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,3],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.state.apply_by===null){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,4],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.state.start_date===null){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,5],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.no_of_opening.value<=0 || this.no_of_opening.value===null){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,6],
                validate:false,
                requesting: false
            })
            return
        }

        if(this.duration.value.length<1){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,7],
                validate:false,
                requesting: false
            })
            return
        }


       

        if(!this.about_the_job.check_input()){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,8],
                validate:false,
                requesting: false
            })

            console.log("This runs 2")
            return
        }

        if(!this.skills_required.check_input()){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,9],
                validate:false,
                requesting: false
            })

            console.log("This runs 2")
            return
        }

        if(!this.who_can_apply.check_input()){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,10],
                validate:false,
                requesting: false
            })

            console.log("This runs 2")
            return
        }

        if(!this.perks.check_input()){
            this.setState({
                success:false,
                err_num:[...this.state.err_num,11],
                validate:false,
                requesting: false
            })

            console.log("This runs 2")
            return
        }

        console.log(this.state.validate)


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
            "brief":this.brief.value,
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

        let char_size=200-this.state.max_chars.length

        let idea_size_text=char_size>=0?char_size:<i className="font-weight-bold text-danger">Limit exceeded</i>;
        


        return (
                <div className='jumbo container hoverable jumbotron' style={{marginTop:""}}> 
                    <div >
                        <button 
                            onClick={() => this.props.history.goBack()}
                            className="btn btn-info font-weight-bold">Go back</button>
                        <h1 className="text-center open font-weight-bold flex-grow-1 my-5">
                            {this.job_id ? 'Edit Work Profile' : <Fragment>
                                    <div>Create new work profile</div>
                                    <div><h6><i className="font-weight-bold">(All fields are mandatory)</i></h6></div>
                                </Fragment>}
                        </h1>
                        {this.job_id? <button 
                            onClick={this._delete_opening}
                            className="btn btn-danger mb-4 font-weight-bold align-self-center" style={{position:"relative",left:"50%",transform:"translate(-50%,0)"}}>Delete</button>:null}
                    </div>

                    {this.state.initial_load ? <div className="my-5">
                        <h1 className="text-center">
                            <i className="fa fa-spinner fa-spin"></i>
                        </h1>
                    </div> : null}

                    <form>
                        <div className="form-group">
                            <label className="font-weight-bold">Work Profile Name</label>
                            <input type="text" ref={ele => this.name = ele} className="form-control" />
                            {this.state.err_num.indexOf(0)!=-1 && this.state.validate==false && this.name.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['name']} */}
                        </div>

                        <div className="form-group">
                        <label><label className="font-weight-bold">Brief</label>&nbsp;&nbsp;<i>(Chars allowed: &nbsp;{idea_size_text})</i></label>
                            
                            <input onChange={(e) => this.setState({max_chars: e.target.value})} type="text" ref={ele => this.brief = ele} className="form-control" />
                            {this.state.err_num.indexOf(1)!=-1 && this.state.validate==false && this.brief.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['name']} */}
                        </div>

                        <div className="form-group">
                            <label className="font-weight-bold">Stipend</label>
                            <input type="text" ref={ele => this.stipend = ele} className="form-control" />
                            {this.state.err_num.indexOf(2)!=-1 && this.state.validate==false && this.stipend.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['stipend']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Location</label>
                            <input type="email" ref={ele => this.location = ele} className="form-control" />
                            {this.state.err_num.indexOf(3)!=-1 && this.state.validate==false && this.location.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['location']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Apply by</label>
                            <Datetime isValidDate={ valid } value={this.state.apply_by} onChange={e => this.setState({ apply_by: e })} />
                            {this.state.err_num.indexOf(4)!=-1 && this.state.validate==false && this.state.apply_by===null ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['apply_by']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Start Date</label>
                            <Datetime isValidDate={ valid } value={this.state.start_date} onChange={e => this.setState({ start_date: e })} />
                            {this.state.err_num.indexOf(5)!=-1 && this.state.validate==false && this.state.start_date===null ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                            {/* {error_html['state_date']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">No of Openings</label>
                            <input type="number" ref={ele => this.no_of_opening = ele} className="form-control" />
                            {this.state.err_num.indexOf(6)!=-1 && this.state.validate==false && (this.no_of_opening.value<=0 || this.no_of_opening.value===null) ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required with valid input</div>
                            </Fragment>:null}
                            {/* {error_html['no_of_opening']} */}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Duration</label>
                            <input type="text" ref={ele => this.duration = ele} className="form-control" />
                            {/* {error_html['duration']} */}
                            {this.state.err_num.indexOf(7)!=-1 && this.state.validate==false && this.duration.value.length===0 ?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>
                            
                        <div className="form-group">
                            <label className='mr-2 font-weight-bold d-inline-block'>Job type</label>
                            <select className="form-control" ref={ele => this.job_type = ele}>
                                <option value='Internship'>Internship</option>
                                <option value='Internship with job offer'>Internship with job offer</option>
                                <option value='Full time employee'>Full time employee</option>
                                <option value='Parttime'>Part time</option>
                                <option value='Freelance'>Freelance</option>
                            </select>
                            {/* {error_html['job_type']} */}
                        </div>
                        <div className="form-group">

                            <label className="font-weight-bold">About the job</label>
                            {/* {error_html['about_the_job']} */}
                            <Wysiwyg onRef={ref => this.about_the_job = ref} />
                            {this.state.err_num.indexOf(8)!=-1 && this.state.validate==false && !this.about_the_job.check_input()?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Skills required</label>
                            {/* {error_html['skills_required']} */}
                            <Wysiwyg onRef={ref => this.skills_required = ref} />
                            {this.state.err_num.indexOf(9)!=-1 && this.state.validate==false && !this.skills_required.check_input()?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Who can apply</label>
                            {/* {error_html['who_can_apply']} */}
                            <Wysiwyg onRef={ref => this.who_can_apply = ref} />
                            {this.state.err_num.indexOf(10)!=-1 && this.state.validate==false && !this.who_can_apply.check_input()?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>
                        <div className="form-group">
                            <label className="font-weight-bold">Perks</label>
                            {/* {error_html['perks']} */}
                            <Wysiwyg onRef={ref => this.perks = ref} />
                            {this.state.err_num.indexOf(11)!=-1 && this.state.validate==false && !this.perks.check_input()?<Fragment>
                                <div className="font-weight-bold text-danger">This field is required</div>
                            </Fragment>:null}
                        </div>


                        <div className="text-center">
                            <div>{this.state.validate==false?<i className="font-weight-bold text-danger">(Some fields are empty or invalid, recheck and try agin)</i>:null}</div>
                            <button disabled={this.state.requesting} onClick={this._new_opening} className="btn btn-primary font-weight-bold">{this.state.requesting ? <i className="fa fa-spinner fa-spin"></i> : 'submit'}</button>
                        </div>
                    </form>

                </div>

        )
    }
}



const mapStateToProps = (state) => state

export default connect(mapStateToProps)(new_opening)
