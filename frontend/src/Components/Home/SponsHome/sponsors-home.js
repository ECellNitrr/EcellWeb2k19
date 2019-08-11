import React, { Component } from "react";
import './sponsorHome.css';
import Slider from "react-slick";
import { Parallax } from 'react-parallax';
import faxios from '../../../axios';



export default class Responsive extends Component {

  axios=faxios();
  state={
    sponsors:[],
    loading:true
  }

  componentDidMount(){
    this.axios.get("/sponsors/list/2018/").then(res=>{
      const data = res.data.data;
      console.log(data)

      // random shuffling the sponsors
      for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }

      this.setState({
        sponsors:data,
        loading:false
      })
    })
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    console.log(this.state.sponsors)
    let sponsors_html=this.state.sponsors.map(sponsor=>
        
        <div className="col" key={sponsor.id}>
          <div className="cont" key={sponsor.id}>
              <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt={sponsor.name} className="spons-Image" src={sponsor.pic_url}></img></div>
              <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                      <h6 style={{ fontWeight: "800" }}>{sponsor.name}</h6>
                      <p className="ph-no">{sponsor.contact}</p>
                      <p>{sponsor.details}</p>
                      <p><a className="web" href={sponsor.website}>Website</a></p>
                  </div>
              </div>
          </div>
        </div>)


    return (
      <div className="spons">

        <Parallax blur={3} bgImage={require('../../../assets/spons.svg')} bgImageAlt="sponsors" strength={700}>
          {/* <div className="heading4-cont"><h2 className="heading-4">SPONSORS {this.state.year}</h2></div> */}
          <Slider {...settings}>
          
            {this.state.loading? <h1 className='text-center text-white w-100 my-5'>loading...</h1>:sponsors_html}

          </Slider>
        </Parallax>
      </div>
    );
  }
}
