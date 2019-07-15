import React, { Component } from "react";
import './sponsorHome.css';
import Slider from "react-slick";
import { Parallax } from 'react-parallax';
import faxios from '../../../axios';



export default class Responsive extends Component {

  axios=faxios();
  state={
    sponsors:{},
    loading:true,
    year:2018
  }

  componentDidMount(){
    this.axios.get("/sponsors/list/").then(res=>{
      const data = res.data;
      const spons = data.spons;
      const year=2018;
      const dict_year={};

      spons.forEach((particular)=>{
        let type = particular.section_name;
        let sub_array = particular.sponsors;

        let filtered_sub_array=sub_array.filter((individual_sponsors)=>{
          return(individual_sponsors.year===year);
        });

        dict_year[type]=filtered_sub_array;
      });

      this.setState({
        sponsors:dict_year,
        loading:false
      })
    })
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

    let sponsors_html=[];
    for(const section in this.state.sponsors){
      let sponsors = this.state.sponsors[section]
      sponsors=sponsors.map(sponsor=>
        
        <div className="col" key={sponsor.id}>
          <div className="cont">
              <div className="front shadow-lg p-3 mb-5 bg-white rounded"><img alt={sponsor.name} className="spons-Image" src={sponsor.pic}></img></div>
              <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                  <div className="inner">
                      <h6 style={{ fontWeight: "800" }}>{sponsor.name}</h6>
                      <p className="ph-no">{sponsor.contact}</p>
                      <p>{sponsor.details}</p>
                      <p><a className="web" href={sponsor.website}>Website</a></p>
                  </div>
              </div>
          </div>
        </div>

        )

        sponsors_html.push(sponsors)
    }

    return (
      <div className="spons">

        <Parallax blur={3} bgImage={require('../../../assets/spons.jpg')} bgImageAlt="sponsors" strength={700}>
          <div className="heading4-cont"><h2 className="heading-4">SPONSORS {this.state.year}</h2></div>
          <Slider {...settings}>
          
            {this.state.loading? <h1 className='text-center text-white w-100 my-5'>loading...</h1>:sponsors_html}

          </Slider>
        </Parallax>
      </div>
    );
  }
}
