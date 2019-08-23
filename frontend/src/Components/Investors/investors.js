import React, { Component } from 'react';
import faxios from '../../axios'
import './investors.css';
import Loader from '../api_loader/api_loader'
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

class investors extends Component {

  
  state = {
    investors: [],
    loading: true
  }

  componentDidMount() {
      faxios().get(`/investors/`).then(res => {
        console.log(res)
        let data = res.data
        this.setState({
          investors: data,
          loading:false
        })

      })
  }

  render() {
    const investors = this.state.investors.sort((a,b)=>b.year-a.year)

    let investors_html = investors.map(investor =>
      <div className="wrapper" key={investor.name}>

        <div className="profile-card js-profile-card">

          <div className="profile-card__img">
            <img src={investor.profile_pic} alt={investor.name}></img>
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">{investor.name}</div>
            <div className="profile-card__txt"><strong>{investor.company}</strong></div>
            <div className="profile-card__year">INVESTOR {investor.year}</div>

            <div className="profile-card-loc">
              <span className="profile-card-loc__txt">
                {investor.description}
              </span>
            </div>

            <div className="profile-card-ctr">
              <a href={investor.social_media} target="_blank" ><button className="profile-card__button button--orange">Follow</button></a>
            </div>
          </div>

        </div>

      </div>

    )


    return (
      <div className="speaker">
        <Navbar />
        <div className="header1">Investors</div>
        <div className="container-fluid ctn7" style={{ maxWidth: "1500px" }}>
          {this.state.loading ? (<div style={{marginTop:"20%"}}><Loader/></div>):investors_html}
        </div>
        <Footer />
      </div>
    )
  }
}

export default investors;