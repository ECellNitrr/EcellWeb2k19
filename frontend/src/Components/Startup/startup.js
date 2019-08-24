import React, { Component } from 'react';
import faxios from '../../axios';
import { NavLink } from 'react-router-dom'
import './startup.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'
import { Link } from 'react-router-dom'
import Hero from '../../assets/startup.svg'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'

class Startup extends Component {
  state = {
    startups: [],
    loading: false
  }


  static propTypes = {
    auth: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
  }


  _to_startup = e => {
    e.preventDefault()

    if(!this.props.auth.loggedin){
      document.querySelector('#login-signup-btn').click()
      return
    }
    this.setState({ loading: true })

    faxios().get(`/iportal/startup/?user=${this.props.auth.id}`)
      .then(d => {
        const data = d.data
        console.log(data)

        if (data.count == 1) {
          const startup_id = data.results[0].id
          this.props.updateUser({ startup_id })
          this.props.history.push(`/internship/startup/`)
        } else {
          this.props.history.push(`/internship/startup/register/`)
        }
      })
  }

  _to_jobs = (e) =>{
    e.preventDefault()
    console.log('object',this.props.auth)

    if(this.props.auth.loggedin){
      this.props.history.push('/internship/jobs')
    }else{
      document.querySelector('#login-signup-btn').click()
    }
  }


  render() {
    return (
      <div className='startups'>
        <Navbar />


        <div className="container" style={{ paddingTop: "225px" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <img className="hero img-fluid" src={Hero} alt="hero"></img>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 d-flex "  >
              <div className="register shadow-lg p-3 mb-5 rounded">
                <div className="head1 ">
                  <span className="font-weight-bold" >Welcome to Startup Portal</span>
                </div>
                <div>
                  <button 
                    style={{ width: "250px", fontSize: "15px" }} 
                    className="btn font-weight-bold bg-white round" 
                    disabled={this.state.loading} 
                    onClick={this._to_startup}>
                    For Companies
                    {this.state.loading ? <i className="fa fa-spinner fa-spin mx-2 d-inline-block"></i> : null}
                  </button>
                  {/* <Link className="startup_dashboard_btn" to='/iportal/startup' style={{ display: "none" }}></Link> */}
                </div>

                <div>
                  <button style={{ width: "250px", fontSize: "15px" }} className="btn font-weight-bold bg-white round" onClick={this._to_jobs}>For Students</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, actions)(Startup)