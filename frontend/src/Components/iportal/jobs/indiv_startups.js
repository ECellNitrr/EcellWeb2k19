import React, { Component } from 'react'
import faxios from '../../../axios'
import {Link} from 'react-router-dom'
//import Navbar from '../navbar_iportal/navbar_ip'
//import Footer from '../../Footer/footer'
import './jobs.css'
import { format_date } from '../../constants'



export default class indiv_startups extends Component {

    state={
        startup_detail:[],
        jobs:[],
        loading:true
    }

    componentDidMount(){
        const startup_id = this.props.match.params.startup_id;
        faxios().get(`/iportal/startup/${startup_id}/`).then(res=>{
            console.log(res)
            let data = res.data
            let jobs = data.jobs

            this.setState({
                startup_detail:data,
                jobs:jobs,
                loading:false
            })
            console.log(this.state.startup_detail)
            console.log(this.state.jobs)
        })
    }


    render() {

        let startup = this.state.startup_detail

        let jobs_html = this.state.jobs.map(job=>{
            if(this.state.jobs.length===0){

                return(<div>No Jobs Available</div>)

            }else{
                return(
                
                    <div className="my-4" key={job.id}>

                        <div class="card" style={{border:"2px solid green"}}>
                        <div class="card-header green text-white d-flex" style={{justifyContent:"space-between"}}>
                            <div ><h4 className="indiv_job font-weight-bold">{job.name}</h4></div>
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

                            <hr className="gray"></hr>
                            
                            <Link to={`/internship/jobs/${this.state.startup_detail.id}/opening/${job.id}`} style={{fontSize:"12px",float:"right"}} className="btn btn-danger font-weight-bold">View Details</Link> 
                        </div>
                        
                        </div>
                        <hr class="my-4 rgba-white-light"/>
                    </div>
                )
            }
        })

        let no_logo = require('../../../assets/no-logo.svg')
        let no_vacancies = require('../../../assets/no-vacancies.gif')

        let indiv_startup_html= (startup) => {
            return(
                <div>
                <div class="jumbotron hoverable" style={{marginBottom:"50px"}}>

                    <div className="container-fluid" style={{marginBottom:"40px"}}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 d-flex" style={{alignItems:"center",padding:"0px"}} >
                                <div>
                                    <h2 class="card-title font-weight-bold h2">{startup.name}</h2> 
                                    <div>
                                        <p class="font-weight-bold text-success"><i className="fas fa-laptop pr-1"></i> {startup.sector}</p>
                                    </div>
                                    <div><span className="font-weight-bold">Email : </span>{startup.email}</div>
                                    <div><span className="font-weight-bold">Contact : </span>{startup.contact}</div><br></br>
                                    <div><span className="font-weight-bold">Address : </span><br></br>{startup.address1}<br></br>{startup.address2}</div><br></br>
                                    <div><span className="font-weight-bold">District : </span>{startup.district}</div>
                                    <div><span className="font-weight-bold">Country : </span>{startup.country}</div>
                                    </div>
                            </div>
                            <hr className="my-4 rgba-white-light"/>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 d-flex" style={{justifyContent:"center"}}>
                                <img style={{maxWidth:"300px",objectFit:"contain"}} className="img-fluid" src={startup.logo ? startup.logo : no_logo} alt="img"></img>
                            </div>
                        </div>
                    </div>

                    {/* <img src={startup.logo}></img><br></br>
                    <h2 class="card-title h2">{startup.name}</h2> */}
                    
                    <div class="d-flex">
                        <div class="pb-2">
                        <p class="card-text"><span className="font-weight-bold">Brief: </span><br></br>{startup.brief}</p>
                        <div><span className="font-weight-bold">Description: </span></div>
                        <div className="card-text" dangerouslySetInnerHTML={{ __html:startup.description }}></div>
                        </div>
                    </div>

                    <hr class="my-4 rgba-white-light"/>
                    <div style={{marginBottom:"-30px",marginTop:"50px"}}>
                        <h3 className="font-weight-bold my-4 p-3 text-center" style={{border:"3px solid green", borderRadius:"5px",textTransform:"uppercase"}}>Job Openings</h3>
                        {jobs_html.length===0 ? <div className="d-flex justify-content-center py-5"><img className="img-fluid" src={no_vacancies}></img></div>:jobs_html}
                    </div>
                </div>
            </div>
            )
         }
        return (
            <div style={{background:"lightgray"}}>
                <div className="container-fluid" style={{maxWidth:"1400px"}}>

                {this.state.loading ?
                        <div className="my-5 text-center">
                            <i className="fa fa-2x fa-spinner fa-spin"></i>
                        </div>
                        : indiv_startup_html(startup)}
                    
                </div>
            </div>
        )
    }
}
