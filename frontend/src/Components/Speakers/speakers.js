import React,{Component} from 'react';
import faxios from '../../axios';
import './speakers.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Daniel from '../../assets/speakers/2018/dr.jpg';
import anyone from '../../assets/speakers/2018/gk.jpg';
import someone from '../../assets/speakers/2018/kg.jpg';

class speaker extends Component{

  axios=faxios();
  state={
    speaker:{}
  }

  componentDidMount(){
    this.axios.get("/speakers/list/").then(res=>{

      const data= res.data
      const speakers= data.speakers;
      const yearwise_speakers={}
      let years= [];
      for(const x in speakers){
        const year = speakers[x].year
        if(years.indexOf(year)===-1){
          years.push(year);
        }
      }

      for(const x in years){
        const year = years[x]
        yearwise_speakers[year] = speakers.filter(speakers => speakers.year===year)
      }
      this.setState({
        speaker: yearwise_speakers
      })
      
    })
  }

  render(){

    let speakers_html=[]

    for(const year in this.state.speaker){
      let speakers= this.state.speakers[year]
      speakers=speakers.map(speaker=>
        
        <div className="container-fluid ctn7" key={speaker.id} >

        <div class="wrapper">

  
          <div class="profile-card js-profile-card">
            <div class="profile-card__img">
              <img src={speaker.profile_pic} alt={speaker.name}></img>
            </div>

            <div class="profile-card__cnt js-profile-cnt">
              <div class="profile-card__name">{speaker.name}</div>
              <div class="profile-card__txt"><strong>{speaker.company}</strong></div>
              <div class="profile-card__year">SPEAKER {speaker.year}</div>

              <div class="profile-card-loc">
                <span class="profile-card-loc__txt">
                  {speaker.description}
                </span>
              </div>

              <div class="profile-card-ctr">
                <a href={speaker.social_media}><button class="profile-card__button button--orange">Follow</button></a>
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
        <div className="header">E-SUMMIT'19,&nbsp;NIT RAIPUR</div>
        <div className="head">MEET OUR SPEAKERS</div>
        <div className="head2">OUR SPEAKERS</div>
        {speakers_html}
        <Footer/>
      </div>
    )
  }
}

export default speaker;