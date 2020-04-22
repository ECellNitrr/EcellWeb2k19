import React, { Component, Fragment } from 'react'
import Parser from 'html-react-parser'
import faxios, { baseURL } from '../../../axios'
import './dashboard.scss'
import {Link} from 'react-router-dom';
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
        faxios().get(`/iportal/startup/?format=json&user=${this.props.auth.id}`)
            .then(d => {
                console.log(d.data.results)
                this.setState({
                    loading: false,
                    ideas: d.data.results
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

    let each_idea=this.state.ideas.map((idea)=>{
        return(

            <div style={{paddingTop:"20px"}} className="row" key={idea.id}>
                <div className="col-md-12">
                    
                    <div class="card">
                        <h5 class="card-header font-weight-bold">{idea.idea_in_a_nut_shell}</h5>
                        <div class="card-body">

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
                                <div>
                                    <em>{idea.idea_approved ? null : "(You will receive confirmation by E-mail and SMS once the verification is complete)"}</em>
                                </div>

                            </div>

                             <div>
                                {idea.can_hire_interns ? <Link to="/internship/startup/openings/" className='btn float-right font-weight-bold btn-primary'>Work Profile</Link> : <Link to="/internship/startup/openings/" className='btn float-right font-weight-bold btn-primary disabled'>Hire Interns</Link>}
                                {idea.idea_approved ? <Link to="/internship/startup/register/" className='btn float-right font-weight-bold btn-primary'>Startup Profile</Link> : <Link to="/internship/startup/register/" className='btn float-right font-weight-bold btn-primary disabled'>Startup Profile</Link>}

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
                    <button onClick={() => this.props.history.push('/internship/submit_idea/')} className="btn font-weight-bold align-self-center btn-primary">Submit More Ideas</button>
                </div>
            <br/><br/>
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
