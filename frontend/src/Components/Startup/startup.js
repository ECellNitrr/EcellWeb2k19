import React, { Component } from 'react';
import faxios from '../../axios';
import { NavLink } from 'react-router-dom'
import './startup.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'


class Startup extends Component {
  axios = faxios()
  state = {
    startups: [],
    loading:true
  }

  componentDidMount() {
    this.axios.get(`/startups/full_list/`).then(res => {
      console.log(res)
      let data = res.data
      if (data.length > 0) {
        this.setState({
          loading: false,
          startups: [
            ...this.state.startups,
            ...data
          ]
        })
      }
    })
  }


  render() {
    const startups = this.state.startups.map(startup =>
      <div className="startup" key={startup.id}>
        <div className="cont1">
          <div className="front1 shadow-lg p-3 mb-5 bg-white rounded"><img className="startup-pic" src={startup.pic_url} alt={startup.name} /></div>
          <div className="back2 shadow-lg p-3 mb-5 bg-white rounded">
            <div className="inner1">
              <h4 className="startup-name" style={{ fontWeight: "800" }}>{startup.name}</h4>
              <div className="image-text"><NavLink className="startup-detail-link" to={`/startups/${startup.year}/${startup.id}`}>Know More!</NavLink></div>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div className='startups'>
        <Navbar />
        <div className="container-fluid ctn16">
          <h2 className="header6">Our Startups</h2>
          <div className="list">
            {this.state.loading ? (<Loader/>):(startups)}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Startup;