import React, { Component } from 'react'
import faxios from '../../../axios'
import {Link} from 'react-router-dom'



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



            return(
                <div className="m-3 p-3" style={{border:"3px solid black"}} key={job.id}>
                    <div>{job.name}</div>
                    <div>{job.job_type}</div><br></br>

                    <div>Duration: {job.duration}</div>
                    <div>Stipend: {job.stipend}</div><br></br>
                    <Link to={`/iportal/job/${this.state.startup_detail.id}/opening/${job.id}`} className="btn btn-primary">Know More</Link>
                </div>
            )
        })

        let indiv_startup_html= (startup) => {
            return(
                <div className="m-5">
                    <img src={startup.logo}></img><br></br>
                    <div className="start-name font-weight-bold" style={{fontSize:"20px"}}>{startup.name}</div><br></br>
                    <div className="start-sect">{startup.sector}</div><br></br>
                    <div className="start-brief">{startup.brief}</div><br></br>
                    <div className="start-brief">{startup.description}</div><br></br>
                    
                    
                    <div>
                        
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                                aria-controls="pills-home" aria-selected="true">More Info</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
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
                                <div className="d-flex">
                                    {jobs_html}
                                </div>
                            </div>
                                
                            </div>
                        </div>
                </div>

                


            )
         }

        return (
            <div>
                {indiv_startup_html(startup)}
            </div>
        )
    }
}
