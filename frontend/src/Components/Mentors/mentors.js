import React, { Component } from "react";
import faxios from '../../axios'
import "./mentors.css";
import Navbar from "../Navbar/navbar";
import Footer from '../Footer/footer';
import Loader from '../api_loader/api_loader'

class mentors extends Component {
 
  state = {
    mentors: {},
    loading: true,
    mentors_19:[]
  };

  componentDidMount(){
    for(let i=2016; i<=2018;i++){
      faxios().get(`/mentors/list/${i}/`).then(res=>{
        console.log(res)
        let  data = res.data.data
        if(data.length>0){
          this.setState({
            loading: false,
            mentors: {
              ...this.state.mentors,
              [i]: data
            }
          })
        }
      })
    }

    faxios().get('/mentors/list/2019/').then(res=>{
        let data = res.data.data
          console.log(data)
          this.setState({
            mentors_19:data
          })
      }
    )
  }

  


  render() {
    console.log(this.state.mentors)
    let mentors_html = []

    for(const year in this.state.mentors){
        let mentors = this.state.mentors[year]
        mentors = mentors.map(mentor => 
            <div className="individual_mentors" key={mentor.id}>
                <div className="mentors_pic_div"><img className="mentors_pic shadow-lg p-3 mb-5 bg-white rounded" src={mentor.profile_pic_url} alt={mentor.name}/></div>
                <h3 className="mentors_name">{mentor.name}</h3>
                <p className="center2">{mentor.detail}</p>
            </div>
            )
        
        const yearwise_html = <div className="flex-containerr" key={year}>
          {mentors}
        </div>
        mentors_html.push(yearwise_html)
    }

    let mentor19Html= []

    const mentors_19 = this.state.mentors_19

    console.log(mentors_19)

    let mentors_19_html = mentors_19.map(mentor => 
      <div className="individual_mentors" key={mentor.id}>
          <div className="mentors_pic_div"><img className="mentors_pic shadow-lg p-3 mb-5 bg-white rounded" src={mentor.profile_pic_url} alt={mentor.name}></img></div>
          <h3 className="mentors_name">{mentor.name}</h3>
          <p className="center2">{mentor.detail}</p>
      </div>
      )

      const mentor19 = <div className="flex-containerr">
        {mentors_19_html}
      </div>

      mentor19Html.push(mentor19)
  

    return (
      <div className="mentors">
        <Navbar />
        

            <div className="header4">MENTORS 2019</div>          
            <div className="container-fluid ctn13">
              {this.state.loading? (<div style={{marginTop:"20%"}}><Loader/></div>):mentor19Html}
            </div>

            <div className="header44">PREVIOUS MENTORS</div>          
            <div className="container-fluid">
              {this.state.loading? (<div style={{marginTop:"10%"}}><Loader/></div>):mentors_html}
            </div>
                  
        <Footer/>

      </div>
      
    );
  }
}

export default mentors;
