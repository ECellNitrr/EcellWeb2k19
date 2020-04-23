import React, { Component, Fragment } from 'react'
import Pagination from "react-js-pagination";
import Parser from 'html-react-parser'

import faxios, { baseURL } from '../../../axios'
import './dashboard.scss'
import {withRouter} from 'react-router-dom';
import {compose} from 'redux'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../actions/authActions'


class ideadashboard extends Component {
    state = {
        loading: true,
        ideas: [],
        activePage: 1,
        totalStartups: 1,
        totalPages: 1  
    }

    

    static propTypes = {
        auth: PropTypes.object.isRequired,
        updateUser: PropTypes.func.isRequired,
    }

    handlePageChange = (pageNumber) => {
                console.log(`active page is ${pageNumber}`);
                
                this.setState({ loading: true })
                faxios().get(`/iportal/startup/?page=${pageNumber}&user=${this.props.auth.id}`).then(res => {
                let data = res.data.results
                this.setState({
                loading: false,
                activePage: pageNumber,
                ideas: data,
                totalStartups: res.data.count,
                totalPages: res.data.total_pages,
            })
        })
    }

    componentDidMount() {
        faxios().get(`/iportal/startup/?format=json&user=${this.props.auth.id}`)
            .then(d => {
                console.log(d.data.results)
                this.setState({
                    loading: false,
                    ideas: d.data.results,
                    activePage: d.data.current_page,
                    totalStartups: d.data.count
                })
            })
    }

   render() {
    if (this.state.loading && this.state.ideas.length===0) {
        return (
            <div className='container'>
                <h1 className="text-center mt-5"></h1>
                {this.state.loading ? <h1>loading</h1> : null}
            </div>
        )
    }

    var i=0;

    let edit = require('../../../assets/edit.svg')

    let each_idea=this.state.ideas.map((idea)=>{
        i++;
        return(

            <div style={{paddingTop:"20px"}} className="row" key={idea.id}>
                <div className="col-md-12">
                    
                    <div className="card">
                        <h5 className="card-header font-weight-bold text-primary"><a onClick={()=>{this.props.updateUser({startup_id:idea.id});this.props.history.push('/internship/submit_idea/edit_idea/')}}>{i}.&nbsp;{idea.idea_in_a_nut_shell}&nbsp;&nbsp;<img style={{height:"20px",width:"20px"}} src={edit}></img></a></h5>
                        <div className="card-body">

                            <div className="mb-2"><i className="font-weight-bold">Description :</i></div>
                            <div dangerouslySetInnerHTML={{ __html: idea.describe_idea }}></div>

                            <div className="mb-2"><i className="font-weight-bold">Innovation in this :</i></div>
                            <div dangerouslySetInnerHTML={{ __html: idea.innovation_in_this}}></div>

                            <div className="mb-2"><i className="font-weight-bold">End Product :</i>
                            </div>
                            <span>{idea.end_product}</span>

                            <div className="mb-2" style={{paddingTop:"10px"}}><i className="font-weight-bold">Beneficiaries :</i>
                            </div>
                            <span>{idea.beneficiaries}</span>

                            <div className="form-group">
                            <label className='font-weight-bold' style={{paddingTop:"10px"}}>Idea Approved : </label>
                                <span style={{paddingLeft:"10px"}}>{idea.idea_approved ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times text-danger"></i>}</span>
                                <div className="my-2">
                                    <em>{idea.idea_approved ? null :<i className="font-weight-bold">(You will receive confirmation by E-mail and SMS once the verification is complete, and the following options will get activated)</i>}</em>
                                </div>

                            </div>

                             <div className="text-center">
                                {idea.idea_approved ? <button onClick={()=>{this.props.updateUser({startup_id:idea.id});this.props.history.push('/internship/startup/register/')}} className='btn  font-weight-bold btn-primary'>Startup Profile</button> : <Fragment>
                                <span class="d-inline-block " tabIndex="0" data-toggle="tooltip" title="Allowed after verification"><button disabled className='btn  font-weight-bold btn-dark'>Startup Profile</button></span>
                                    </Fragment>}
                                {idea.can_hire_interns ? <button onClick={()=>{this.props.updateUser({startup_id:idea.id});this.props.history.push('/internship/startup/openings/')}} className='btn  font-weight-bold btn-success'>Work Profile</button> : <Fragment>
                                <span class="d-inline-block " tabIndex="0" data-toggle="tooltip" title="Allowed after verification"><button disabled className='btn  font-weight-bold btn-dark'>Work Profile</button></span>
                                    </Fragment>}
                                

                             </div>
                        </div>
                    </div>

                </div>      
            </div>
        )
    })

    return (
        <div className="pb-2"  style={{background:"lightgray",paddingTop:"",marginBottom:"-50px"}}>
            <div className='container jumbotron hoverable'>
                <div style={{float:"left"}}>
                    <button onClick={() => this.props.history.push('/internship/submit_idea/')} className="btn font-weight-bold align-self-center btn-info">Create New Ideas +</button>
                </div>
            <br/><br/>
            <div>

                    <div className="open text-center font-weight-bold my-5">
                        <h1 className="font-weight-bold">Idea Dashboard</h1>
                        <h6 className="font-weight-bold"><i>(Click on idea name to edit your idea)</i></h6>
                    </div>

                {/* <div className="d-flex my-5">

                <div className="text-center"> 
                    <h1 className=" text-center font-weight-bold">Idea Dashboard</h1>
                    <div className=" font-weight-bold"><i></i></div>
                </div>

               
                </div> */}



                {this.state.loading ? <h1>loading</h1> : null}

                {each_idea}
            

                {/* <div className="col-md-4 text-right my-5 d-flex" style={{justifyContent:"center",alignItems:"center"}}>
                    <img className='logo_img image-fluid align-self-center' style={{outline:"3px solid #EA4763",outlineOffset:"8px"}} src={logo_url} alt=""/>
                </div> */}

                
                <div className="d-flex justify-content-center my-5">
                    <Pagination activePage={this.state.activePage} itemsCountPerPage={14} totalItemsCount={this.state.totalStartups}
                        pageRangeDisplayed={10} itemClass='page-item' linkClass='page-link' onChange={this.handlePageChange} />
                </div>
            
            </div>
        </div>
        </div>
        )
    }
}


const mapStateToProps = (state) => state

export default compose(connect(mapStateToProps, actions),withRouter)(ideadashboard)
