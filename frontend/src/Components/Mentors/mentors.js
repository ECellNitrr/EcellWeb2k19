import React, { Component } from "react";
import faxios from '../../axios'
import "./mentors.css";
import Navbar from "../Navbar/navbar";
import Footer from '../Footer/footer';

class mentors extends Component {
  axios = faxios();
  state = {
    mentors: {},
    loading: true
  };

  componentDidMount() {
    this.axios.get("/mentors/list/").then(fromserver => {
      console.log(fromserver);
      const data = fromserver.data;
      const mentors = data.mentors;
      const yearwise_mentors = {}

      let years = [];
      for(const x in mentors){
          const year = mentors[x].year
          if(years.indexOf(year)===-1){
              years.push(year)
          }
      }
      console.log(years)

      for(const x in years){
          const year = years[x]
          yearwise_mentors[year] = mentors.filter(mentor => mentor.year===year)
      }

      console.log(yearwise_mentors)

      this.setState({
        mentors: yearwise_mentors,
        loading: false
      });
    });
  }

  render() {
      console.log(this.state.mentors)
    let mentors_html = []

    for(const year in this.state.mentors){
        let mentors = this.state.mentors[year]
        mentors = mentors.map(mentor => 
            <div className="individual_mentors">
                <div><img className="mentors_pic shadow-lg p-3 mb-5 bg-white rounded" src={mentor.profile_pic} alt={mentor.name}/></div>
                <h3 className="mentors_name">{mentor.name}</h3>
                <p className="center2">{mentor.detail}</p>
            </div>
            )
        
        const yearwise_html = <div className="flex-container" key={year}>
          {mentors}
        </div>
        mentors_html.push(yearwise_html)
    }

    return (
      <div className="mentors">
        <Navbar />
        <div className="header4">PREVIOUS MENTORS</div>          
            <div className="container-fluid ctn13">
              {this.state.loading? 'loading...':mentors_html}
            </div>
                  
        <Footer/>

      </div>
      
    );
  }
}

export default mentors;
