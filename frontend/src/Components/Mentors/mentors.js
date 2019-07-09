import React, { Component } from "react";
import faxios from '../../axios'
import "./mentors.css";
import Navbar from "../Navbar/navbar";

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
            <div>
                <div>{mentor.name}</div>
                <img src={mentor.profile_pic} height='300' width='300' alt={mentor.name}/>
            </div>
            )
        
        const yearwise_html = <div key={year}>
            <h2>{year}</h2>
            {mentors}
        </div>
        mentors_html.push(yearwise_html)
    }

    return (
      <div>
        <Navbar />
        <div className="mentors">{this.state.loading? 'loading...':mentors_html}</div>
      </div>
    );
  }
}

export default mentors;
