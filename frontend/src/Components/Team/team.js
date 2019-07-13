import React,{Component} from 'react';
import faxios from '../../axios';
import "./team.css";
import Navbar from '../Navbar/navbar';

class team extends Component{
    axios = faxios();
    state = {
    student: {},
    faculty: {},
    loading: true
  };
  componentDidMount() {
    this.axios.get("/team/list/").then(fromserver => {
      const data = fromserver.data;
      const student = data.student;
      const faculty = data.faculty;
      const members = {}

      let member_types = [];
      for(const x in student){
          const member_type = student[x].member_type
          if(member_types.indexOf(member_type)===-1){
              member_types.push(member_type)
          }
      }
      console.log(member_types)

      for(const x in member_types){
          const member_type = member_types[x]
          members[member_type] = student.filter(member => member.member_type===member_type)
      }

      console.log(members)

      console.log(data);
      this.setState({
        student: members,
        loading: false
      });
    });
  }

  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true
            }
          }
        ]
      };
      console.log(this.state.student)
    let team_html = []
    for(const member_type in this.state.student){
        let student = this.state.student[member_type]
        if(member_type==="OC")
        {
            
            student = student.map(member => 
                <div>
                <div>
                <img src={member.image} alt={member.name} width="200" height="200"/>
                </div>
                <div>
                <h6>{member.name}</h6>
                </div>
                </div>
               
                    
            )
        
        const teams_html = <div key={member_type}>
            
            <div>
            <br/><br/><br/>
            <h2>Overall Coordinators</h2>
            </div>
            <div className="flex-container">
            {student}
            </div>
            
           
            
            
        </div>
        
        team_html.push(teams_html)
        
            
        }
        else if(member_type==="HC")
        {
            
            student = student.map(member => 
                
                <div>
                <div>
                <img src={member.image} alt={member.name} width="200" height="200"/>
                </div>
                <div>
                <h6>{member.name}</h6>
                </div>
                </div>
                    
            )
        
        const teams_html = <div key={member_type}>

            
            <div className="flex-container">
            <span><h2>Head Coordinators</h2></span>
            </div>
            <div className="flex-container">
            {student}
            </div>
           
            
            
        </div>
        
        team_html.push(teams_html)
        
            
        }
        else if(member_type==="MNG")
        {
            
            student = student.map(member => 
                
                <div>
                <div>
                <h6>{member.name}</h6>
                </div>
                </div>
                    
            )
        
        const teams_html = <div key={member_type}>

            
            <div className="flex-container">
            <span><h2>Managers</h2></span>
            </div>
            <div className="flex-container">
            {student}
            </div>
           
            
            
        </div>
        
        team_html.push(teams_html)
        
            
        }
        else{

       
        
        student = student.map(member => 
                
            <div>
            <div>
            <h6>{member.name}</h6>
            </div>
            </div>
                
                    
            )
        
        const teams_html = <div key={member_type}>

            <div className="flex-container">
            <span><h2>Executives</h2></span>
            </div>
            <div className="flex-container">
            {student}
            </div>
        
           
            
            
        </div>
        
        team_html.push(teams_html)
        }
    }
        return(
            <div>
                <Navbar/>
                
                <div className="team">{this.state.loading? 'Loading...':team_html[0]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[1]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[2]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[3]}</div>

            </div>
        )
    }
}

export default team;

