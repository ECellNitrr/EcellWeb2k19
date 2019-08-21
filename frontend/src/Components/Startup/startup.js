import React, { Component } from 'react';
import faxios from '../../axios';
import { NavLink } from 'react-router-dom'
import './startup.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'
import {Link} from 'react-router-dom'
import Hero from '../../assets/startup.svg'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions/authActions'

class Startup extends Component {
  axios = faxios()
  state = {
    startups: [],
    loading:true
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    updateUser: PropTypes.func.isRequired,
  }

  // componentDidMount() {
  //   this.axios.get(`/startups/full_list/`).then(res => {
  //     console.log(res)
  //     let data = res.data
  //     if (data.length > 0) {
  //       this.setState({
  //         loading: false,
  //         startups: [
  //           ...this.state.startups,
  //           ...data
  //         ]
  //       })
  //     }
  //   })
  // }

  _route_func1=()=>{
    if(this.props.auth.loggedin){
      document.querySelector('.startup_dashboard_btn').click()
    }else{
      alert("Please login to continue")
    }
  }

  _route_func2=()=>{
    if(this.props.auth.loggedin){
      document.querySelector('.startup_detail_btn').click()
    }else{
      alert("Please login to continue")
    }
  }

  render() {


    

    // const startups = this.state.startups.map(startup =>
    //   <div className="startup" key={startup.id}>
    //     <div className="cont1">
    //       <div className="front1 shadow-lg p-3 mb-5 bg-white rounded"><img className="startup-pic"  src={startup.pic_url} alt={startup.name} /></div>
    //       <div className="back2 shadow-lg p-3 mb-5 bg-white rounded">
    //         <div className="inner1">
    //           <h4 className="startup-name" style={{ fontWeight: "800" }}>{startup.name}</h4>
    //           <div className="image-text"><NavLink className="startup-detail-link" to={`/startups/${startup.year}/${startup.id}`}>Know More!</NavLink></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )

    return (
      <div className='startups'>
        <Navbar />
        {/* <div className="container-fluid ctn16">
          <h2 className="header6">Our Startups</h2>
          <div className="list">
            {this.state.loading ? (<Loader/>):(startups)}
          </div>
        </div> */}

        <div className="container" style={{paddingTop:"200px"}}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
              <img className="hero" src={Hero} alt="hero" height="400" width="600"/>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="container-fluid register">
              <div className="head1">
              <span>Welcome to Startup Portal</span>
              </div>
              <div>
                <button style={{width:"250px", fontSize:"15px"}} className="btn font-weight-bold bg-white round" onClick={this._route_func1}>Register as Startup</button>
                <Link className="startup_dashboard_btn" to='/iportal/startup' style={{display:"none"}}></Link>
              </div>

              <div>
                <button style={{width:"250px", fontSize:"15px"}} className="btn font-weight-bold bg-white round" onClick={this._route_func2}>Register for Jobs</button>
                <Link className="startup_detail_btn" to='/iportal/jobs' style={{display:"none"}}>Register for Jobs</Link>
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