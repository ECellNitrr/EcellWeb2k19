import React, { Component } from 'react'
import faxios from '../../../axios'
import Loader from '../../Form/loader'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'

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


    render() {
        
        

        let jobs_html_tab = (job)=>{
            
            return(
                <div className="m-3 p-3 d-flex" style={{border:"3px solid black",justifyContent:"space-around"}} key={job.id} >
                    
                <div>{job.name}</div>
                <div>Stipend: {job.stipend}</div><br></br>

                <div>Duration: {job.duration}</div>
                <div>Start Date : {job.start_date}</div><br></br>
                
                </div>
            )
        }

        let jobs_html_detail =(job)=>{
            
            return(
            <div>
                <div>Posted On: {job.posted_on}</div><br></br>
                <div>About the job :<br></br> {job.about_the_job}</div><br></br><br></br>
                <div>Job Type : {job.job_type}</div><br></br><br></br>
                <div>Perks : {job.perks}</div><br></br>
                <div>Skills Required : {job.skills_required}</div><br></br>
                <div>Who can apply: {job.who_can_apply} </div><br></br><br></br>
                <div>No of openings: {job.no_of_opening}</div><br></br><br></br>
                <div>Apply By: {job.apply_by}</div><br></br><br></br>
                <div>Location: {job.location}</div>
            </div>

            )
        }

           
        

        let startup = this.state.startup_detail

        let indiv_startup_html= (startup) => {
            return(
                <div>
                    
                    <img src={startup.logo}></img><br></br>
                    {jobs_html_tab(this.state.jobs)}
                    <div className="start-name font-weight-bold" style={{fontSize:"20px"}}>{startup.name}</div><br></br>
                    <div className="start-sect">{startup.sector}</div><br></br>
                    <div className="start-brief">{startup.brief}</div><br></br>
                    {jobs_html_detail(this.state.jobs)}

                </div>
            )
        }

        return (
            <div>
               {indiv_startup_html(startup)}
               <div className="d-flex justify-content-center"><button className="bg-white" style={{border:"none"}} >{this.state.loading?<Loader/>:this.state.applied?(<button className="btn btn-primary"disabled >{this.state.msg}</button>):(<button className="btn btn-primary" >{this.state.msg}</button>)}</button></div>
               {/* <div className="d-flex justify-content-center"><button className="btn btn-primary" >{this.state.msg}</button></div> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => state
export default connect(mapStateToProps, actions)(job_detail)
