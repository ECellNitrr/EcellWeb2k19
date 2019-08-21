import React, { Component } from 'react'
import faxios from '../../../axios'
import './jobs.css'
import Pagination from "react-js-pagination";
import { thisExpression } from '@babel/types';
import {Link} from 'react-router-dom'
import Navbar from '../navbar_iportal/navbar_ip'
import Footer from '../../Footer/footer'

export default class startup_list extends Component {

    state={
        startups:[],
        activePage:1,
        totalStartups:1,
        totalPages:1
    }


    handlePageChange=(pageNumber)=> {
        console.log(`active page is ${pageNumber}`);
        

        faxios().get(`/iportal/startup/?page=${pageNumber}`).then(res=>{
            let data= res.data.results
            this.setState({
                activePage:pageNumber,
                startups:data,
                totalStartups:res.data.count,
                totalPages:res.data.total_pages
            })
        })
      }

    componentDidMount(){
        faxios().get('/iportal/startup/').then(res=>{
            console.log(res);
            let data = res.data.results
            console.log(data)
            this.setState({
                startups:data,
                activePage:res.data.current_page,
                totalStartups:res.data.count
            })
        })
    }

    render() {

        

        let startup_html= this.state.startups.map(startup => (


                <div className="jumbotron text-center hoverable p-4" key={startup.id}>
                <div className="row">
                    <div className="col-lg-4 offset-md-1 mx-3 my-3">
                    <div className="view overlay">
                        <img src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg" className="img-fluid" alt="Sample image for first version of blog listing"></img>
                        <Link to={`/iportal/jobs/${startup.name}/${startup.id}`}>
                        <div className="mask rgba-white-slight"></div>
                        </Link>
                    </div>
                    </div>
                    
                    <div className="col-lg-7 text-md-left ml-3 mt-3">  
                        <div className="green-text">
                            <h6 className="h6 pb-1"><i className="fas fa-desktop pr-1"></i> {startup.sector}</h6>
                        </div>

                        <h4 className="h4 mb-4">{startup.name}</h4>

                        <p className="font-weight-normal">{startup.brief}</p>
                        <p className="font-weight-normal"><a><strong>Location</strong> : {startup.country}</a><br></br><strong>Updated at</strong>: {startup.updated_at.slice(0,10)}</p>
                        <Link className="btn btn-primary" to={`/iportal/jobs/${startup.id}`} >Read More</Link>

                    </div>
                </div>
                </div>
            
                // <div className="indiv-startup" key={startup.id}>
                //     <div className="start-name font-weight-bold" style={{fontSize:"20px"}}>{startup.name}</div>
                //     <div className="start-sect">{startup.sector}</div><br></br>
                //     <div className="start-brief">{startup.brief}</div><br></br>
                    
                //     <div className="start-email">{startup.email}</div><br></br>
                //     <Link to={`/iportal/jobs/${startup.name}/${startup.id}`} >Know More</Link>
                    
                // </div>
        ))

        return (
            <div>
                <Navbar/>
                <div className="container-fluid"style={{maxWidth:"1600px",marginTop:"200px"}}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3">

                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-7 col-lg-9">
                            {startup_html}
                        </div>
                    </div>
                    
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={15}
                    totalItemsCount={this.state.totalStartups}
                    pageRangeDisplayed={10}
                    onChange={this.handlePageChange}
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}
