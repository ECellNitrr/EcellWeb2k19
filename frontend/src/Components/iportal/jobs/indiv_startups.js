import React, { Component } from 'react'
import faxios from '../../../axios'
import {Link} from 'react-router-dom'
import Navbar from '../navbar_iportal/navbar_ip'
import Footer from '../../Footer/footer'



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
                    <Link to={`/iportal/jobs/${this.state.startup_detail.id}/opening/${job.id}`} className="btn btn-primary">Know More</Link>
                </div>
            )
        })

        let indiv_startup_html= (startup) => {
            return(
                <div>
                <div class="jumbotron mdb-color lighten-2 white-text" style={{margin:"0"}}>
                <img src={startup.logo}></img><br></br>
                <h2 class="card-title h2">{startup.name}</h2>
                <p class="my-4 h6">{startup.sector}</p>
                <div class="d-flex">
                <div class="pb-2">
                 <p class="card-text">{startup.brief}</p>
                 <p class="card-text">{startup.description}</p>
                </div>
                </div>
                <hr class="my-4 rgba-white-light"/>

                <div class="pt-2">
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <a class="btn btn-outline-white " id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                            aria-controls="pills-home" aria-selected="true">More Info</a>
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-outline-white " id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
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



            </div>
            )
         }
        return (
            <div>
                <Navbar/>
                {indiv_startup_html(startup)}
                <Footer/>
            </div>
        )
    }
}
