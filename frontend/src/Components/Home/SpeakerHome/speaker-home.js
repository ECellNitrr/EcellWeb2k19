import React, { Component } from 'react';
import './speakerHome.css';
import faxios from '../../../axios';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
    

export default class Parallax extends Component {

      axios=faxios();
      state={
        speakers:[],
      }

      componentDidMount(){
        this.axios.get("/speakers/list/").then(res=>{
          const data = res.data
          const speakers = data.speakers;

          this.setState({
            speakers: speakers
          })

        })
      }

      render() {
        const params = {
          spaceBetween: 30,
      centeredSlides: true,
      loop:true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
		};
		
		console.log(this.state.speakers)

        const speakers_html = this.state.speakers.map(speaker=>
              <div className="container-fluid ctn-4" key={speaker.id}>
                  
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                      <p className="im-text"><img alt={speaker.name} className="image-3" src={speaker.profile_pic}></img></p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                      <h2 className="speaker-name">{speaker.name}</h2>
                      <h4 className="speaker-title">{speaker.company}</h4>
                      <p  className="speaker-text">{speaker.description}</p>
                      <div className="follow-link" ><a href={speaker.social_media}><button className="btn follow-btn">Follow</button></a></div>
                    </div>
                  </div>
              </div>
          )



        return (
         <div>
          <h2 className="heading-3">MEET OUR SPEAKERS</h2>
          <Swiper {...params}>
              {speakers_html}
          </Swiper>
          </div>
        )
      }
    }