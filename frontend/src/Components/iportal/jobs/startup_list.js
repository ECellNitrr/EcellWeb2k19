import React, { Component, Fragment } from 'react'
import faxios from '../../../axios'
import './jobs.css'
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom'
import {format_date} from '../../constants'

export default class startup_list extends Component {

    state = {
        startups: [],
        activePage: 1,
        totalStartups: 1,
        totalPages: 1,
        loading: true
    }


    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);

        this.setState({ loading: true })
        faxios().get(`/iportal/startup/?page=${pageNumber}&idea_approved=true&search=${this.search_box.value}`).then(res => {
            let data = res.data.results
            this.setState({
                loading: false,
                activePage: pageNumber,
                startups: data,
                totalStartups: res.data.count,
                totalPages: res.data.total_pages,
            })
        })
    }

    componentDidMount() {
        faxios().get('/iportal/startup/?idea_approved=true').then(res => {
            console.log(res);
            let data = res.data.results
            console.log(data)
            this.setState({
                loading: false,
                startups: data,
                activePage: res.data.current_page,
                totalStartups: res.data.count
            })
        })
    }


    _search = e => {
        e.preventDefault()

        this.setState({ loading: true })
        faxios().get(`/iportal/startup/?search=${this.search_box.value}`).then(res => {
            console.log(res);
            let data = res.data.results
            console.log(data)
            this.setState({
                loading: false,
                startups: data,
                activePage: res.data.current_page,
                totalStartups: res.data.count
            })
        })
    }

    


    render() {
        let no_logo = require('../../../assets/no-logo.svg')

        

        let startup_html = this.state.startups.map(startup => {
            
            let job_tab = startup.jobs
            console.log(job_tab)
            var i=0;
            let jobs = job_tab.map(job =>{
                i++;
                    return(
                            <div key={job.id} style={{fontSize:"15px"}}>{i}.&nbsp; <i className="font-weight-bold text-dark"> {job.name}</i> : {job.brief}</div>  
                    )
            })

            // if(job_tab.length===0){
            //     jobs = <span className="badge badge-light p-2" style={{fontSize:"15px",margin:"0px"}}> <div className="text-danger font-weight-bold">No Work Profiles</div> </span>
            // }

            return(
                <div className="jumbotron text-center hoverable p-4" key={startup.id}>
                <div className="row">
                    <div className="col-lg-3 offset-md-1 mx-3 my-3">
                        <div className="view overlay d-flex" style={{ alignItems: "center", justifyContent: "center" }}>
                            <img width="300px" height="300px" src={startup.logo ? startup.logo : no_logo} className="img-fluid" alt={startup.name}></img>
                            <Link style={{ display: "none" }} to={`/internship/jobs/${startup.name}/${startup.id}`}>
                                <div className="mask rgba-white-slight"></div>
                            </Link>
                        </div>

                        {startup.idea_in_a_nutshell!==""?<Fragment>
                            <div className="my-3 text-center font-weight-bold">
                                {startup.idea_in_a_nut_shell}
                            </div>
                        </Fragment>:null}

                        {true?<Fragment><Link className="btn font-weight-bold btn-primary" to={`/internship/jobs/${startup.id}`} >Read More</Link></Fragment>:null}

                    </div>

                    <div className="col-lg-8 text-md-left">
                        {/* <div className="green-text">
                            <h6 className="h6 pb-1"><i className="fas fa-laptop pr-1"></i> {startup.sector}</h6>
                        </div> */}

                        <div>
                            <div className="font-weight-bold mb-1">Beneficiaries:</div>
                            <p>{startup.beneficiaries}</p>
                        </div>

                        <div>
                            <div className="font-weight-bold">Innovation:</div>
                            <div dangerouslySetInnerHTML={{ __html:startup.innovation_in_this}}></div>
                        </div>

                        
                        {startup.can_hire_interns && job_tab.length!==0?<Fragment>
                            <div className="my-2">
                            <div className="font-weight-bold my-3">Work Profiles :</div>   
                            <div className="">{jobs}</div>   
                        </div><br></br>
                        </Fragment>:<Fragment>
                            
                            <div className="font-weight-bold">
                                Description:
                            </div>

                            <div>
                                <div dangerouslySetInnerHTML={{ __html: startup.describe_idea }}></div>
                            </div>

                        </Fragment>}

                        {/* <div><strong className="font-weight-bold">Contacts:</strong>
                            <p><strong>Mail</strong> : {startup.email}</p>
                            <p>Phone: {startup.contact}</p>
                        </div> */}
                        

                        {/* <p className="font-weight-normal"><strong>Updated on</strong>: {format_date(startup.updated_at)}</p> */}
                        {/* {startup.can_hire_interns?<Fragment><Link className="btn font-weight-bold btn-primary" to={`/internship/jobs/${startup.id}`} >Read More</Link></Fragment>:null} */}

                    </div>
                </div>
            </div>
            )
            })

        if(this.state.startups.length==0 && this.state.loading == false){
            startup_html = <h1 className="text-center my-5">
                Great startups and ideas coming soon...
            </h1>
        }

        return (
            <div id="outer-container" style={{ background: "lightgray" }}>
                <form className='text-center d-flex mb-5' style={{ maxWidth: "1100px", alignItems: "center", justifyContent: "center", margin: "auto" }}>
                    <input style={{height:"50px"}} className="form-control m-3" ref={ele => this.search_box = ele} placeholder="Search for Startups and Jobs" type="text" />
                    <button onClick={this._search} className="m-3 font-weight-bold btn btn-primary">Search</button>
                </form>
                <div className="container" style={{ paddingTop: "10% 0 0 0" }}>
                    {this.state.loading ?
                        <div className="my-5 text-center">
                            <i className="fa fa-2x fa-spinner fa-spin"></i>
                        </div>
                        : startup_html}
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={14}
                        totalItemsCount={this.state.totalStartups}
                        pageRangeDisplayed={10}
                        itemClass='page-item'
                        linkClass='page-link'
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}
