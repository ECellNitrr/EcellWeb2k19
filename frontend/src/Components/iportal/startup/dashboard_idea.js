import React, { Component, Fragment } from 'react'
import Parser from 'html-react-parser'
import faxios, { baseURL } from '../../../axios'
import './dashboard.scss'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class ideadashboard extends Component {
    state = {
        loading: true,
        startup: {},
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        faxios().get(`/iportal/startup/${this.props.auth.startup_id}/`)
            .then(d => {
                console.log(d.data)
                this.setState({
                    loading: false,
                    startup: d.data
                })
            })
    }

   


    render() {
        if (this.state.loading) {
            return (
                <div className='container'>
                    <h1 className="text-center mt-5"></h1>
                    {this.state.loading ? <h1>loading</h1> : null}
                </div>
            )
        }

        let logo_url = this.state.startup.logo ? this.state.startup.logo : require('../../../assets/no_pic.svg')

        return (
            <div className="pb-2"  style={{background:"lightgray",paddingTop:"",marginBottom:"-50px"}}>
                <div className='container jumbotron hoverable'>
                <div>
                    <div className="d-flex my-5">
                    <h1 className="text-center flex-grow-1 font-weight-bold">Idea Dashboard</h1>
                    {/* <button onClick={() => this.props.history.push('/internship/submit_idea/edit_idea/')} className="btn btn-danger font-weight-bold">Edit</button> */}
                    {this.state.startup.can_hire_interns?null:<Fragment>
                        <button onClick={() => this.props.history.push('/internship/startup/register')} className="btn btn-success font-weight-bold">Register Startup</button>
                        </Fragment>}
                    </div>



                {this.state.loading ? <h1>loading</h1> : null}

                <div className="row">

                    <div className="col-md-4 text-right my-5 d-flex" style={{justifyContent:"center",alignItems:"center"}}>
                        <img className='logo_img image-fluid align-self-center' style={{outline:"3px solid #EA4763",outlineOffset:"8px"}} src={logo_url} alt=""/>
                    </div>

                    <div className="col-md-12">

                        <div className="form-group">
                            <label className='font-weight-bold'>Idea in a Nutshell : </label>
                            <span>{this.state.startup.idea_in_a_nut_shell}</span>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>Ideator Name : </label>
                            <span className="font-weight-bold">{this.state.startup.name}</span>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>Ideator Designation : </label>
                            <span className="font-weight-bold">{this.state.startup.ideator_designation}</span>
                        </div>

                        {this.state.startup.ideator_designation==="Student"?<Fragment>
                            <div className="form-group">
                                <label className='font-weight-bold'>Mentor Name : </label>
                                <span className="font-weight-bold">{this.state.startup.mentor_name}</span>
                            </div>

                            <div className="form-group">
                                <label className='font-weight-bold'>Mentor Designation : </label>
                                <span className="font-weight-bold">{this.state.startup.mentor_designation}</span>
                            </div>
                        </Fragment>:null}
                        
                        <div className="form-group">
                            <label className='font-weight-bold'>Description : </label>
                            <span>{this.state.startup.describe_idea}</span>
                        </div>
                        
                        <div className="form-group">
                            <label className='font-weight-bold'>Innovation in this : </label>
                            <span>{this.state.startup.innovation_in_this}</span>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>End Product : </label>
                            <span>{this.state.startup.end_product}</span>
                        </div>
                        
                        <div className="form-group">
                            <label className='font-weight-bold'>Idea Approved : </label>
                            <span>{this.state.startup.idea_approved ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times text-danger"></i>}</span>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>Beneficiaries : </label>
                            <span>{this.state.startup.beneficiaries}</span>
                        </div>     
                    </div>
                   
                </div>
                </div>
            </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(ideadashboard)
