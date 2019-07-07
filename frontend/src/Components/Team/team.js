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
      console.log(this.state.student)
    let team_html = []
    for(const member_type in this.state.student){
        let student = this.state.student[member_type]
        
        student = student.map(member => 
                
                <div class="design">
                <div className="col-md-2">
                <img src={member.image} height='200' width='200' alt={member.name}/>
                <p>{member.name}</p>
                </div>
                </div>
                    
            )
        
        const teams_html = <div key={member_type}>

            
            <h2>{member_type}</h2>
            <div className="row">
            {student}
            </div>
           
            
            
        </div>
        team_html.push(teams_html)
    }
        return(
            <div>
                <Navbar/>
                <div className="team">{this.state.loading? 'Loading...':team_html}</div>
            </div>
        )
    }
}

export default team;

