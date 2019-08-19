import React, { Component } from 'react'
import faxios from '../../../axios'

export default class job_detail extends Component {

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

            let job_det_name = this.props.match.params.job_title;
            let indi_jobs = this.state.jobs.filter(job=>{
                return job.name==job_det_name
             }
            )

            this.setState({
                jobs:indi_jobs
            })

            console.log(this.state.jobs)



        })
    }


    render() {
        
        let job_render= this.state.jobs[0]
        console.log(job_render)

        let jobs_html_tab = this.state.jobs.map(job=>(
            
            <div className="m-3 p-3 d-flex" style={{border:"3px solid black",justifyContent:"space-around"}} key={job.id} >
                    
                <div>{job.name}</div>
                <div>Stipend: {job.stipend}</div><br></br>

                <div>Duration: {job.duration}</div>
                <div>Start Date : {job.start_date.slice(0,10)}</div><br></br>
                
            </div>
        ))

        let jobs_html_detail = this.state.jobs.map(job=>(
            <div>
                <div>Posted On: {job.posted_on.slice(0,10)}</div><br></br>
                <div>About the job :<br></br> {job.about_the_job}</div><br></br><br></br>
                <div>Job Type : {job.job_type}</div><br></br><br></br>
                <div>Perks : {job.perks}</div><br></br>
                <div>Skills Required : {job.skills_required}</div><br></br>
                <div>Who can apply: {job.who_can_apply} </div><br></br><br></br>
                <div>No of openings: {job.no_of_opening}</div><br></br><br></br>
                <div>Apply By: {job.apply_by.slice(0,10)}</div><br></br><br></br>
                <div>Location: {job.location}</div>
            </div>

        ))

           
        

        let startup = this.state.startup_detail

        let indiv_startup_html= (startup) => {
            return(
                <div>
                    
                    <img src={startup.logo}></img><br></br>
                    {jobs_html_tab}
                    <div className="start-name font-weight-bold" style={{fontSize:"20px"}}>{startup.name}</div><br></br>
                    <div className="start-sect">{startup.sector}</div><br></br>
                    <div className="start-brief">{startup.brief}</div><br></br>
                    {jobs_html_detail}

                </div>
            )
        }

        return (
            <div>
               {indiv_startup_html(startup)}
               <div className="d-flex justify-content-center"><button className="btn btn-primary" >Apply Now</button></div>
            </div>
        )
    }
}
