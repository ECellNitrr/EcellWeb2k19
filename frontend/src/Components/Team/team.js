import React,{Component} from 'react';
import faxios from '../../axios';
import "./team.css";
import Navbar from '../Navbar/navbar';
import Faculty from './faculty';
import Footer from '../Footer/footer';

class team extends Component{
    axios = faxios();
    state = {
    student: {},
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
      /*console.log(member_types)*/

      for(const x in member_types){
          const member_type = member_types[x]
          members[member_type] = student.filter(member => member.member_type===member_type)
      }

      /*console.log(members)

      console.log(data);*/
      this.setState({
        student: members,
        loading: false
      });
    });
  }

  render() {
    
      /*console.log(this.state.student)*/
    let team_html = []
    for(const member_type in this.state.student){
        let student = this.state.student[member_type]
        if(member_type==="OC")
        {
            
            student = student.map(member => 
                <div>
                    <div>
                        <img className="member-image shadow-lg p-3 mb-5 bg-white rounded" src={member.image} alt={member.name} width="250" height="250"/>
                    </div>
                    <div>
                        <h6 className="member-name">{member.name}</h6>
                    </div>
                </div>
               
                    
            )
        
        const teams_html = <div key={member_type}>
            
            <div className="flex-container">
            <div>
            <h2 className="position shadow p-3 mb-5 bg-white rounded">Overall Coordinators</h2>
            </div>
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
                        <img className="member-image shadow-lg p-3 mb-5 bg-white rounded" src={member.image} alt={member.name} width="250" height="250"/>
                    </div>
                    <div>
                        <h6 className="member-name">{member.name}</h6>
                    </div>
                </div>
                    
            )
        
        const teams_html = <div key={member_type}>

            
            <div className="flex-container">
                <div ><h2 className="position-exec shadow p-3 mb-5 bg-white rounded">Head Coordinators</h2></div>
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
                        <h6 className="member-name-mng">{member.name}</h6>
                    </div>
                </div>
                    
            )
        
        const teams_html = <div key={member_type}>

            
            <div className="flex-container">
                <div ><h2 className="position-exec shadow p-3 mb-5 bg-white rounded">Managers</h2></div>
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
                    <h6 className="member-name-exec">{member.name}</h6>
                </div>
            </div>
                
                    
            )
        
        const teams_html = <div key={member_type}>

            <div className="flex-container">
            <div ><h2 className="position-exec shadow p-3 mb-5 bg-white rounded">Executives</h2></div>
            </div>
            <div className="flex-container">
                {student}
            </div>
        
           
            
            
        </div>
        
        team_html.push(teams_html)
        }
    }
        return(
            <div className="team-whole">
                <Navbar/>
                <Faculty/>
                <div className="team">{this.state.loading? 'Loading...':team_html[0]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[1]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[2]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[3]}</div>
                <Footer/>
            </div>
        )
    }
}

export default team;

