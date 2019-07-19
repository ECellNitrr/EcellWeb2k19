import React,{Component} from 'react';
import faxios from '../../axios'
import './speakers.css';

import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

class speaker extends Component{

  axios=faxios();
  state={
    speaker:{},
    loading:true
  }

  componentDidMount(){
    for(let i=2016; i<=2020;i++){
      this.axios.get(`/speakers/list/${i}/`).then(res=>{
        let  data = res.data.data
        this.setState({
          speaker: {
            ...this.state.speaker,
            [i]: data
          }
        })
        console.log()
      })
    }
  }

  render(){
    let speakers_html=[]

    for(const year in this.state.speaker){
      let speakers= this.state.speaker[year]
      speakers=speakers.map(speaker=>
        
        <div className="container-fluid ctn7" key={speaker.id} >
        <div className="wrapper">

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
        </div>
        )

        const yearwise_html= <div key={year}>
          {speakers}
        </div>

        speakers_html.push(yearwise_html)
    }

    return(
      <div className="speaker">
        <Navbar/>
        <div className="header1">SPEAKERS</div>
        {speakers_html}
        <Footer/>
      </div>
    )
  }
}

export default speaker;