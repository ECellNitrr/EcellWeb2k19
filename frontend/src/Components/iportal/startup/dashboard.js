import React, { Component } from 'react'
import Parser from 'html-react-parser'
import faxios, { baseURL } from '../../../axios'
import './dashboard.scss'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class dashboard extends Component {
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
                    <h1 className="text-center flex-grow-1 font-weight-bold" style={{color:"#333333",textTransform:"uppercase"}}>Dashboard</h1>
                    <button onClick={() => this.props.history.push('/iportal/startup/edit/')} className="btn btn-danger font-weight-bold">edit</button>
                    </div>



                {this.state.loading ? <h1>loading</h1> : null}

                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <label className='font-weight-bold'>Name : </label>
                            <span>{this.state.startup.name}</span>
                        </div>
                        <div className="form-group">
                            <label className='font-weight-bold'>Email : </label>
                            <span>{this.state.startup.email}</span>
                        </div>
                        <div className="form-group">
                            <label className='font-weight-bold'>Approved : </label>
                            <span>{this.state.startup.approved ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times text-danger"></i>}</span>
                        </div>
                        <div className="form-group">
                            <label className='font-weight-bold'>Contact : </label>
                            <span>{this.state.startup.contact}</span>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>Sector : </label>
                            <span className="font-weight-bold">{this.state.startup.sector}</span>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>Address Line 1 : </label>
                            <span>{this.state.startup.address1}</span>
                        </div>
                        <div className="form-group">
                            <label className='font-weight-bold'>Address Line 2 : </label>
                            <span>{this.state.startup.address2}</span>
                        </div>

                        
                        
                        
                        
                    </div>
                    <div className="col-md-4 text-right">
                        <img className='logo_img image-fluid align-self-center' style={{outline:"3px solid #EA4763",outlineOffset:"8px"}} src={logo_url} alt=""/>
                    </div>
                </div>

                <div className="form-group">
                    <label className='font-weight-bold'>Brief : </label>
                    <span>{this.state.startup.brief}</span>
                </div>

                <div className="form-group">
                    <label className='font-weight-bold'>Description : </label>
                    <div dangerouslySetInnerHTML={{ __html: this.state.startup.description }}></div>
                </div>

                <div className="form-group">
                    <label className='font-weight-bold'>District : </label>
                    <span>{this.state.startup.district}</span>
                </div>

                <div className="form-group">
                    <label className='font-weight-bold'>State : </label>
                    <span>{this.state.startup.state}</span>
                </div>

                <div className="form-group">
                    <label className='font-weight-bold'>Country : </label>
                    <span>{this.state.startup.country}</span>
                </div>
                </div>
            </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(dashboard)
