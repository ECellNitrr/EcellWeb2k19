import React, { Component } from 'react'
import faxios from '../../../axios'
import './jobs.css'
import Pagination from "react-js-pagination";
import { thisExpression } from '@babel/types';
import {Link} from 'react-router-dom'

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
            
                <div className="indiv-startup" key={startup.id}>
                    <div className="start-name font-weight-bold" style={{fontSize:"20px"}}>{startup.name}</div>
                    <div className="start-sect">{startup.sector}</div><br></br>
                    <div className="start-brief">{startup.brief}</div><br></br>
                    
                    <div className="start-email">{startup.email}</div><br></br>
                    <Link to={`/iportal/jobs/${startup.id}`} >Know More</Link>
                    
                </div>
        ))

        return (
            <div>
                <div className="startup-flex" >
                    {startup_html}
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
            </div>
        )
    }
}
