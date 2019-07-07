import React,{Component} from 'react';
import faxios from '../../axios';
import './speakers.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Daniel from '../../assets/speakers/2018/dr.jpg';
import anyone from '../../assets/speakers/2018/gk.jpg';
import someone from '../../assets/speakers/2018/kg.jpg';

class speaker extends Component{

  /*axios=faxios();
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

      this.setState={
        speaker: yearwise_speakers
      }

      console.log(yearwise_speakers);
      
    })
  }*/

  render(){
    return(
      <div className="speaker">
        <Navbar/>
        <div className="header">E-SUMMIT'19,&nbsp;NIT RAIPUR</div>
        <div className="head">MEET OUR SPEAKERS</div>
        <div className="head2">OUR SPEAKERS</div>
        {/*This is one container*/}
        <div className="container-fluid ctn7">

        <div class="wrapper">

  
          <div class="profile-card js-profile-card">
            <div class="profile-card__img">
              <img src={Daniel} alt="Daniel Ramamoorthy"></img>
            </div>

            <div class="profile-card__cnt js-profile-cnt">
              <div class="profile-card__name">Daniel Ramamoorthy</div>
              <div class="profile-card__txt"><strong>Startup Coach</strong></div>
              <div class="profile-card__year">SPEAKER 2018</div>

              <div class="profile-card-loc">
                <span class="profile-card-loc__txt">
                  An eclectic person who is a box of wonder, excelling the entrepreneurial domain: from being an entrepreneur and a motivational speaker, coaching others to being a world famous host and speaker!
                </span>
              </div>

              

              <div class="profile-card-ctr">
                <a href="#"><button class="profile-card__button button--orange">Follow</button></a>
              </div>
            </div>

          </div>

          </div>
          
        </div>
        {/*First container ends*/}

        {/*Second container starts*/}
        

        <div className="container-fluid ctn7">

          <div class="wrapper">


            <div class="profile-card js-profile-card">
              <div class="profile-card__img">
                <img src={anyone} alt="Daniel Ramamoorthy"></img>
              </div>

              <div class="profile-card__cnt js-profile-cnt">
                <div class="profile-card__name">Daniel Ramamoorthy</div>
                <div class="profile-card__txt"><strong>Startup Coach</strong></div>
                <div class="profile-card__year">SPEAKER 2018</div>

                <div class="profile-card-loc">
                  <span class="profile-card-loc__txt">
                    An eclectic person who is a box of wonder, excelling the entrepreneurial domain: from being an entrepreneur and a motivational speaker, coaching others to being a world famous host and speaker!
                  </span>
                </div>

                

                <div class="profile-card-ctr">
                  <a href="#"><button class="profile-card__button button--orange">Follow</button></a>
                </div>
              </div>

            </div>

            </div>
            
          </div>
          {/*second container ends*/}

          <div className="container-fluid ctn7">

          <div class="wrapper">


            <div class="profile-card js-profile-card">
              <div class="profile-card__img">
                <img src={someone} alt="Daniel Ramamoorthy"></img>
              </div>

              <div class="profile-card__cnt js-profile-cnt">
                <div class="profile-card__name">Daniel Ramamoorthy</div>
                <div class="profile-card__txt"><strong>Startup Coach</strong></div>
                <div class="profile-card__year">SPEAKER 2018</div>

                <div class="profile-card-loc">
                  <span class="profile-card-loc__txt">
                    An eclectic person who is a box of wonder, excelling the entrepreneurial domain: from being an entrepreneur and a motivational speaker, coaching others to being a world famous host and speaker!
                  </span>
                </div>

                

                <div class="profile-card-ctr">
                  <a href="#"><button class="profile-card__button button--orange">Follow</button></a>
                </div>
              </div>

            </div>

            </div>
            
          </div>
        <Footer/>
      </div>
    )
  }
}

export default speaker;