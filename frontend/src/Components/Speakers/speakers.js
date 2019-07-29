import React, { Component } from 'react';
import faxios from '../../axios'
import './speakers.css';

import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

class speaker extends Component {

  axios = faxios();
  state = {
    speakers: [],
    loading: true
  }

  componentDidMount() {
      this.axios.get(`/speakers/full_list/`).then(res => {
        console.log(res)
        let data = res.data
        this.setState({
          speakers: data
        })

      })
  }

  render() {
      <div className="wrapper" key={speaker.name}>

        <div className="profile-card js-profile-card">
          <div className="profile-card__img">
            <img src={speaker.profile_pic} alt={speaker.name}></img>
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">{speaker.name}</div>
            <div className="profile-card__txt"><strong>{speaker.company}</strong></div>
            <div className="profile-card__year">SPEAKER {speaker.year}</div>

            <div className="profile-card-loc">
              <span className="profile-card-loc__txt">
                {speaker.description}
              </span>
            </div>

            <div className="profile-card-ctr">
              <a href={speaker.social_media} target="_blank" ><button className="profile-card__button button--orange">Follow</button></a>
            </div>
          </div>

        </div>

      </div>

    


    return (
      <div className="speaker">
        <Navbar />
        <div className="header1">SPEAKERS</div>
        <div className="container-fluid ctn7" style={{ maxWidth: "1500px" }}>
          {speakers_html}
        </div>
        <Footer />
      </div>
    )
  }
}

export default speaker;