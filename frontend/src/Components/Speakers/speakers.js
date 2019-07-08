import React,{Component} from 'react';
import faxios from '../../axios'
import './speakers.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

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

      console.log(yearwise_speakers)
      this.setState({
        speaker: yearwise_speakers
      })
      
    })
  }

  render(){
    console.log(this.state.speaker)
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
                <a href={speaker.social_media}><button className="profile-card__button button--orange">Follow</button></a>
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