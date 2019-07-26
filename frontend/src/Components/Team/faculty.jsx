import React,{Component} from 'react';
import faxios from '../../axios';
import "./team.css";
import Navbar from '../Navbar/navbar';

class faculty extends Component{
    axios = faxios();
    state = {
    faculty: {},
    loading: true
  };
  componentDidMount() {
    this.axios.get("/team/list/").then(fromserver => {
      const data = fromserver.data;
      const faculty = data.faculty;
      const members = {}

      let member_types = [];
      for(const x in faculty){
          const member_type = faculty[x].member_type
          if(member_types.indexOf(member_type)===-1){
              member_types.push(member_type)
          }
      }
      /*console.log(member_types)*/

      for(const x in member_types){
          const member_type = member_types[x]
          members[member_type] = faculty.filter(member => member.member_type===member_type)
      }

      /*console.log(members)

      console.log(data);*/
      this.setState({
        faculty: members,
        loading: false
      });
    });
  }

  render() {
    
      /*console.log(this.state.faculty)*/
    let team_html = []
    for(const member_type in this.state.faculty){
        let faculty = this.state.faculty[member_type]
        if(member_type==="HCD")
        {
            
            faculty = faculty.map(member => 
                <div>
                    <div className="member-image-div">
                        <img className="member-image shadow-lg p-3 mb-5 bg-white rounded" src={member.image} alt={member.name} width="280" height="280"/>
                    </div>
                    <div>
                        <h6 className="member-name">{member.name}</h6>
                    </div>
                </div>
               
                    
            )
        
        const teams_html = <div key={member_type}>
            
            <div className="flex-container">
            <div>
                <h2 className="position shadow p-3 mb-5 bg-white rounded">Head of Career Development Cell</h2>
            </div>
            </div>
            <div className="flex-container">
            {faculty}
            </div>
            
           
            
            
        </div>
        
        team_html.push(teams_html)
        
            
        }
        else if(member_type==="DIR")
        {
            
            faculty = faculty.map(member => 
                
                <div>
                <div className="member-image-div">
                    <img className="member-image shadow-lg p-3 mb-5 bg-white rounded" src={member.image} alt={member.name} width="280" height="280"/>
                </div>
                <div>
                    <h6 className="member-name">{member.name}</h6>
                </div>
                </div>
                    
            )
        
        const teams_html = <div key={member_type}>

            <br/><br/><br/>
            <div className="flex-container">
            <div><h2 className="position shadow p-3 mb-5 bg-white rounded">Director NIT Raipur</h2></div>
            </div>
            <div className="flex-container">
            {faculty}
            </div>
           
            
            
        </div>
        
        team_html.push(teams_html)
        
            
        }
        else
        {
            
            faculty = faculty.map(member => 
                <div>
                <div className="member-image-div">
                <img className="shadow-lg p-3 mb-5 bg-white rounded member-image" src={member.image} alt={member.name} width="280" height="280"/>
                </div>
                <div>
                    <h6 className="member-name">{member.name}</h6>
                </div>
                </div>
               
                    
            )
        
        const teams_html = <div key={member_type}>
            
            <div className="flex-container">
            <div>
            
            <h2 className="position shadow p-3 mb-5 bg-white rounded">Faculty Incharge</h2>
            </div>
            </div>
            <div className="flex-container">
            {faculty}
            </div>
            
           
            
            
        </div>
        
        team_html.push(teams_html)
        
            
        }
        
        
       
    }
        return(
            <div>
                <Navbar/>
                
                <div className="team1">{this.state.loading? 'Loading...':team_html[2]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[1]}</div>
                <div className="team">{this.state.loading? 'Loading...':team_html[0]}</div>
            </div>
        )
    }
}

export default faculty;

