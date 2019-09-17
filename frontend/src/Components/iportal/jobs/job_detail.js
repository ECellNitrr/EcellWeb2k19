import React, { Component, Fragment } from 'react'
import faxios from '../../../axios'
import Loader from '../../Form/loader'
import {Link} from 'react-router-dom'
import './jobs.css'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'
import { format_date } from '../../constants'


class job_detail extends Component {

    state={
        startup_detail:[],
        jobs:[],
        loading:true,
        msg:'',
        applied:false
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    

    componentDidMount(){
        const startup_id = this.props.match.params.startup_id;
        const job_id=this.props.match.params.job_id

        faxios().get(`/iportal/startup/${startup_id}/`).then(res=>{
            console.log(res)
            let data = res.data

            this.setState({
                startup_detail:data,
            })
            console.log(this.state.startup_detail)
        })

        faxios().get(`/iportal/job/${job_id}/`).then(res=>{
            let data = res.data
            console.log(data)
            this.setState({
                jobs:data
            })
        })


       

        faxios().get(`/iportal/job_application/?job=${job_id}&applicant=${this.props.auth.id}`).then(res=>{
            console.log(res)
            console.log(job_id)
            console.log(this.props.auth.id)
            let data = res.data;

            if(data.count===0){
                this.setState({
                    loading:false,
                    msg:'Apply Now',
                    applied:false
                })
            }

            if(data.count===1){
                this.setState({
                    loading:false,
                    msg:'Applied',
                    applied:true
                })
            }
        })

    }

    _job_apply_ = () =>{
        document.querySelector('.job_apply_btn').click()
    }


    render() {
        
        

        let jobs_html_tab = (job)=>{
            
            return(
                <div className="my-4" key={job.id}>

                        <div class="card">
                        <div class="card-header green text-white d-flex" style={{justifyContent:"space-between"}}>
                            <div ><h4 className=" indiv_job font-weight-bold">{job.name}</h4></div>
                            <div style={{fontSize:"15px"}} className="badge badge-dark p-2">{job.job_type}</div>
                        </div>
                        <div class="card-body">
                            <div>
                                <div className="mb-2"><strong>Location : </strong>{job.location}</div>
                                <hr className="gray"></hr>

                                {/*For Desktop*/}
                                <div className="d-flex job_flex">
                                    <div className="text-center">
                                        <div style={{fontSize:"14px"}}><strong>Start Date</strong></div>
                                        <div style={{fontSize:"13px"}}>{format_date(job.start_date)}</div>
                                    </div>

                                    <div className="text-center">
                                        <div style={{fontSize:"14px"}}><strong>Duration</strong></div>
                                        <div style={{fontSize:"13px"}}>{job.duration}</div>
                                    </div>

                                    <div className="text-center">
                                        <div style={{fontSize:"14px"}}><strong>Stipend</strong></div>
                                        <div style={{fontSize:"13px"}}>{job.stipend}</div>
                                    </div>

                                    <div className="text-center">
                                        <div style={{fontSize:"14px"}}><strong>Posted On</strong></div>
                                        <div style={{fontSize:"13px"}}>{format_date(job.posted_on)}</div>
                                    </div>

                                    <div className="text-center">
                                        <div style={{fontSize:"14px"}}><strong>Apply By</strong></div>
                                        <div style={{fontSize:"13px"}}>{format_date(job.apply_by)}</div>
                                    </div>
                                </div>

                                {/*For Mobile*/}

                                <div className="job_flex2">
                                    <div className="">
                                        <div style={{fontSize:"13px"}}><strong>Start Date : </strong>{job.start_date}</div>
                                        
                                    </div>

                                    <div className="">
                                        <div style={{fontSize:"13px"}}><strong>Duration : </strong>{job.duration}</div>
                                        
                                    </div>

                                    <div className="">
                                        <div style={{fontSize:"13px"}}><strong>Stipend : </strong>{job.stipend}</div>
                                        
                                    </div>

                                    <div className="">
                                        <div style={{fontSize:"13px"}}><strong>Posted On : </strong>{job.posted_on}</div>
                                    </div>

                                    <div className="">
                                        <div style={{fontSize:"13px"}}><strong>Apply By :</strong>{job.apply_by}</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
            )
        }

        let jobs_html_detail =(job)=>{
            
            return(
            <div>
                <div><strong className="font-weight-bold">Posted On :</strong> {format_date(job.posted_on)}</div><br></br>
                <div><strong className="font-weight-bold">About the job :</strong><br></br> <div dangerouslySetInnerHTML={{ __html:job.about_the_job }}></div></div><br></br>
                <div><span className="font-weight-bold">Perks :</span><br></br> <div dangerouslySetInnerHTML={{ __html:job.perks }}></div></div><br></br>
                <div><span className="font-weight-bold">Skills Required : </span><br></br> <div dangerouslySetInnerHTML={{ __html:job.skills_required }}></div></div><br></br>
                <div><span className="font-weight-bold">Who can apply :</span><br></br> <div dangerouslySetInnerHTML={{ __html:job.who_can_apply }}></div> </div><br></br>
                <div><span className="font-weight-bold">No of openings :</span> {job.no_of_opening}</div><br></br>
                <div><span className="font-weight-bold">Apply By : </span> {format_date(job.apply_by)}</div><br></br>
            </div>

            )
        }

           
        

        let startup = this.state.startup_detail

        let indiv_startup_html= (startup) => {
            return(
                <div>
                    <div className="start-name font-weight-bold" style={{fontSize:"20px"}}>{startup.name}</div><br></br>
                    <div className="start-sect font-weight-bold text-success">{startup.sector}</div><br></br>
                    <div className="start-brief">{startup.brief}</div><br></br>
                    {jobs_html_detail(this.state.jobs)}

                </div>
            )
        }

        return (
            <div>
                {this.state.loading ?<div className="my-5 text-center">
                            <i className="fa fa-2x fa-spinner fa-spin"></i>
                        </div> : <Fragment>
                    <div  style={{background:"lightgray",marginTop:"-60px"}}>
                        <div className="container-fluid" style={{maxWidth:"1200px"}}>
                            {jobs_html_tab(this.state.jobs)}
                        </div>
                        <div className="container-fluid" style={{maxWidth:"1200px"}}>

                            <div class="jumbotron">
                                {indiv_startup_html(startup)}            
                                <hr class="my-4"></hr>

                                <div className="d-flex justify-content-center"><button className="bg-white" style={{border:"none"}} >{this.state.loading?<Loader/>:this.state.applied?(<button className="btn btn-success font-weight-bold"disabled >{this.state.msg}</button>):(<button onClick={this._job_apply_} className="btn btn-primary font-weight-bold" >{this.state.msg}</button>)}</button></div>
                                <Link className="job_apply_btn" style={{display:"none"}} to={`/internship/jobs/application/${this.props.match.params.job_id}`}></Link>
                            </div>

                        </div>
                    </div>
                </Fragment>}
            </div>
        )
    }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, actions)(job_detail)
