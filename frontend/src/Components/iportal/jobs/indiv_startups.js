import React, { Component } from 'react'
import faxios from '../../../axios'
import {Link} from 'react-router-dom'
import Navbar from '../navbar_iportal/navbar_ip'
import Footer from '../../Footer/footer'
import './jobs.css'



export default class indiv_startups extends Component {

    state={
        startup_detail:[],
        jobs:[]
    }

    componentDidMount(){
        const startup_id = this.props.match.params.startup_id;
        faxios().get(`/iportal/startup/${startup_id}/`).then(res=>{
            console.log(res)
            let data = res.data
            let jobs = data.jobs

            this.setState({
                startup_detail:data,
                jobs:jobs
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
                            <div ><h4 className="font-weight-bold">{job.name}</h4></div>
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
                                        <div style={{fontSize:"13px"}}>{job.start_date}</div>
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
                                        <div style={{fontSize:"13px"}}>{job.posted_on}</div>
                                    </div>

                                    <div className="text-center">
                                        <div style={{fontSize:"14px"}}><strong>Apply By</strong></div>
                                        <div style={{fontSize:"13px"}}>{job.apply_by}</div>
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
                            
                            <Link to={`/iportal/jobs/${this.state.startup_detail.id}/opening/${job.id}`} style={{fontSize:"12px",float:"right"}} className="btn btn-danger font-weight-bold">View Details</Link> 
                        </div>
                        </div>
                    </div>
                )
            }
        })

        let indiv_startup_html= (startup) => {
            return(
                <div>
                <div class="jumbotron hoverable" style={{margin:"0"}}>

                    <div className="container-fluid" style={{marginBottom:"40px"}}>
                        <div className="row">
                            <div className="col-6 d-flex" style={{alignItems:"center"}} >
                                <div>
                                    <h2 class="card-title h2">{startup.name}</h2> 
                                    <div>
                                        <p class="mx-2 text-success h5">{startup.sector}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-4 rgba-white-light"/>

                            <div className="col-6 d-flex" style={{justifyContent:"flex-end"}}>
                                <img width="300px" height="250px" className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"></img>
                            </div>
                        </div>
                    </div>

                    {/* <img src={startup.logo}></img><br></br>
                    <h2 class="card-title h2">{startup.name}</h2> */}
                    
                    <div class="d-flex">
                        <div class="pb-2">
                        <p class="card-text">{startup.brief}</p>
                        <p class="card-text">{startup.description}</p>
                        </div>
                    </div>
                    <hr class="my-4 rgba-white-light"/>

                    <div class="pt-2 ">
                        <ul class="nav nav-pills text-md-left ml-3 mt-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="btn btn-primary " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                aria-controls="pills-home" aria-selected="true">More Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-primary " id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                                aria-controls="pills-profile" aria-selected="false">Jobs Offered</a>
                            </li>
                        </ul>


                        <div class="tab-content pt-2 pl-1" id="pills-tabContent">
                            <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div>Email : {startup.email}</div>
                                <div>Contact: {startup.contact}</div><br></br>
                                <div>Address : <br></br>{startup.address1}<br></br>{startup.address2}</div><br></br>
                                <div>{startup.district}</div>
                                <div>{startup.country}</div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div>
                                    {jobs_html}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            )
         }
        return (
            <div style={{background:"lightgray"}}>
                <Navbar/>
                <div className="container-fluid" style={{maxWidth:"1400px",paddingTop:"150px"}}>
                    {indiv_startup_html(startup)}
                </div>
                <Footer/>
            </div>
        )
    }
}
