import React, { Component } from 'react';
import faxios from '../../axios';
import { NavLink } from 'react-router-dom'
import './startup.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'
import {Link} from 'react-router-dom'
import Hero from '../../assets/startup.svg'

class Startup extends Component {
  axios = faxios()
  state = {
    startups: [],
    loading:true
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
                <Link style={{width:"250px", fontSize:"15px"}} className="btn font-weightbold bg-white round" to='/iportal/startup'>Register as Startup</Link>
              </div>

              <div>
                <Link style={{width:"250px", fontSize:"15px"}} className="btn bg-white round" to='/iportal/jobs'>Register for Jobs</Link>
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

export default Startup;