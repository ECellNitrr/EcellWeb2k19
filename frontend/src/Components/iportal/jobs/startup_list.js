import React, { Component } from 'react'
import faxios from '../../../axios'
import './jobs.css'
import Pagination from "react-js-pagination";
import { Link } from 'react-router-dom'

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
        faxios().get(`/iportal/startup/?page=${pageNumber}`).then(res => {
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
        faxios().get('/iportal/startup/').then(res => {
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
        let no_logo = require('../../../assets/no_pic.svg')

        let startup_html = this.state.startups.map(startup => (


            <div className="jumbotron text-center hoverable p-4" key={startup.id}>
                <div className="row">
                    <div className="col-lg-4 offset-md-1 mx-3 my-3">
                        <div className="view overlay">
                            <img src={startup.logo? startup.logo: no_logo} className="img-fluid" alt="Sample image for first version of blog listing"></img>
                            <Link to={`/internship/jobs/${startup.name}/${startup.id}`}>
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
                        <p className="font-weight-normal"><a><strong>Location</strong> : {startup.country}</a><br></br><strong>Updated at</strong>: {startup.updated_at.slice(0, 10)}</p>
                        <Link className="btn btn-primary" to={`/internship/jobs/${startup.id}`} >Read More</Link>

                    </div>
                </div>
            </div>
        ))

        return (
            <div id="outer-container" style={{ background: "lightgray", paddingTop: '150px' }}>
                <form className='text-center'>
                    <input ref={ele => this.search_box = ele} placeholder="Search for Startups and Jobs" type="text" />
                    <button onClick={this._search} className="btn btn-primary">Search</button>
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
                        itemsCountPerPage={15}
                        totalItemsCount={this.state.totalStartups}
                        pageRangeDisplayed={10}
                        itemClass = 'page-item'
                        linkClass = 'page-link'
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}
