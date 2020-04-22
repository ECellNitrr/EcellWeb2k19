import React, { Component, Fragment } from 'react'
import Parser from 'html-react-parser'
import faxios, { baseURL } from '../../../axios'
import './dashboard.scss'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class ideadashboard extends Component {
    state = {
        loading: true,
        ideas: []
    }

    static propTypes = {
        auth: PropTypes.object.isRequired,
    }

    

    componentDidMount() {
        faxios().get(`/iportal/startup/?user=${this.props.auth.id}`)
            .then(d => {
                //console.log(d.data.results)

                let data = d.data
                
                this.setState({
                    loading: false,
                    ideas: [...this.state.ideas,data]
                })

                console.log(this.state.ideas)
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

        let each_idea=this.state.ideas.map((idea)=>{
            return(

                <div className="row" key={idea.id}>
                <div className="col-md-12">

                        <div className="form-group">
                            <label className='font-weight-bold'>Idea in a Nutshell : </label>
                            <span>{idea.idea_in_a_nut_shell}</span>
                        </div>

                        {/* <div className="form-group">
                            <label className='font-weight-bold'>Ideator Name : </label>
                            <span className="font-weight-bold">{idea.name}</span>
                        </div> */}

                        {/* <div className="form-group">
                            <label className='font-weight-bold'>Ideator Designation : </label>
                            <span className="font-weight-bold">{idea.ideator_designation}</span>
                        </div> */}

                        
                        
                        <div className="form-group">
                            <label className='font-weight-bold'>Description : </label>
                            <div dangerouslySetInnerHTML={{ __html: idea.describe_idea }}></div>
                        </div>
                        
                        <div className="form-group">
                            <label className='font-weight-bold'>Innovation in this : </label>
                            <div dangerouslySetInnerHTML={{ __html: idea.innovation_in_this}}></div>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>End Product : </label>
                            <span>{idea.end_product}</span>
                        </div>

                        <div className="form-group">
                            <label className='font-weight-bold'>Beneficiaries : </label>
                            <span>{idea.beneficiaries}</span>
                        </div>  
                        
                        <div className="form-group">
                            <label className='font-weight-bold'>Idea Approved : </label>
                            <span>{idea.idea_approved ? <i className="fa fa-check text-success"></i> : <i className="fa fa-times text-danger"></i>}</span>
                        </div>

                        </div>      
                    </div>
            )
        })

        return (
            <div className="pb-2"  style={{background:"lightgray",paddingTop:"",marginBottom:"-50px"}}>
                <div className='container jumbotron hoverable'>
                <div>
                    <div className="d-flex my-5">
                    <h1 className="text-center flex-grow-1 font-weight-bold">Idea Dashboard</h1>
                    {/* <button onClick={() => this.props.history.push('/internship/submit_idea/edit_idea/')} className="btn btn-danger font-weight-bold">Edit</button> */}
                    {/* {idea.can_hire_interns?null:<Fragment>
                        <button onClick={() => this.props.history.push('/internship/startup/register')} className="btn btn-success font-weight-bold">Register Startup</button>
                        </Fragment>} */}
                    </div>



                    {this.state.loading ? <h1>loading</h1> : null}

                    {each_idea}
                

                    {/* <div className="col-md-4 text-right my-5 d-flex" style={{justifyContent:"center",alignItems:"center"}}>
                        <img className='logo_img image-fluid align-self-center' style={{outline:"3px solid #EA4763",outlineOffset:"8px"}} src={logo_url} alt=""/>
                    </div> */}

                    
                   
                
                </div>
            </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => state

export default connect(mapStateToProps)(ideadashboard)
