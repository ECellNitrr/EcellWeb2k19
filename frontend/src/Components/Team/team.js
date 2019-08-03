import React, { Component } from "react";
import faxios from "../../axios";
import "./team.css";
import Navbar from "../Navbar/navbar";
// import Faculty from "./faculty";
import Footer from "../Footer/footer";
import Loader from '../api_loader/api_loader'
import {Link} from 'react-router-dom';



class team extends Component {
    axios = faxios();
    state = {
        members: {},
        loading: true
    };
    componentDidMount() {
        const year = this.props.match.params.year;
        this.axios.get(`/team/list/${year}/`).then(fromserver => {
            const data = fromserver.data.data;
            console.log(data)
            /*delete data["me"];*/

            let members_dict={
                Director:[],
                Head_Career_Development:[],
                Faculty_Incharge:[],
                Overall_Coordinator:[],
                Head_Coordinator:[],
                Manager_pr:[],
                Manager_tech:[],
                Manager_des:[],
                Manager_doc:[],
                Manager_spons:[],
                Executive_pr:[],
                Executive_tech:[],
                Executive_des:[],
                Executive_doc:[],
                Executive_spons:[]     
            }

            data.forEach(members => {
                if(members.member_type==="DIR"){
                    members_dict["Director"].push(members)
                }

                if(members.member_type==="HCD"){
                    members_dict["Head_Career_Development"].push(members)
                }

                if(members.member_type==="FCT"){
                    members_dict["Faculty_Incharge"].push(members)
                }

                if(members.member_type==="OCO"){
                    members_dict["Overall_Coordinator"].push(members)
                    
                }

                if(members.member_type==="HCO"){
                    members_dict["Head_Coordinator"].push(members)
                }

                if(members.member_type==="MNG" && members.domain==="pr"){
                    members_dict["Manager_pr"].push(members)
                }

                if(members.member_type==="MNG" && members.domain==="tech"){
                    members_dict["Manager_tech"].push(members)
                }

                if(members.member_type==="MNG" && members.domain==="design"){
                    members_dict["Manager_des"].push(members)
                }

                if(members.member_type==="MNG" && members.domain==="doc"){
                    members_dict["Manager_doc"].push(members)
                }

                if(members.member_type==="MNG" && members.domain==="spons"){
                    members_dict["Manager_spons"].push(members)
                }

                if(members.member_type==="EXC" && members.domain==="pr"){
                    members_dict["Executive_pr"].push(members)
                }

                if(members.member_type==="EXC" && members.domain==="tech"){
                    members_dict["Executive_tech"].push(members)
                }

                if(members.member_type==="EXC" && members.domain==="design"){
                    members_dict["Executive_des"].push(members)
                }

                if(members.member_type==="EXC" && members.domain==="doc"){
                    members_dict["Executive_doc"].push(members)
                }

                if(members.member_type==="EXC" && members.domain==="spons"){
                    members_dict["Executive_spons"].push(members)
                }


            });

            console.log(members_dict)

            this.setState({
                members: members_dict,
                loading: false
            });
        });
    }

    
    

    members_html = (title, members, type) => {
        members = members.map(member => (
            <div key={member.id} className='text-center'>
                <div>
                    {title === "Head of Career Development" ||title === "Director" ||title === "Faculty Incharge" ||title === "Overall Co-ordinators" ||title === "Head Co-ordinators" ? (
                    <div>
                            <div>
                                <img
                                className="member-image shadow-lg p-3 mb-5 bg-white rounded"
                                src={member.image}
                                alt={member.name}
                                width="270"
                                height="270"
                                ></img>
                                
                            </div>
                        <div>
                            <h6 className="member-name">{member.name}</h6>
                        </div>

                        <div className="domain">
                            {member.domain==="pr"?<p style={{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}}><i>(Public Relation and Marketing)</i></p>:null}
                            {member.domain==="tech"?<p style={{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}}><i>(Technical Team)</i></p>:null}
                            {member.domain==="design"?<p style={{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}}><i>(Design Team)</i></p>:null}
                            {member.domain==="spons"?<p style={{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}}><i>(Sponsorship Team)</i></p>:null}
                            {member.domain==="doc"?<p style={{fontSize:"20px",marginBottom:"25px",marginTop:"-25px"}}><i>(Documentation Team)</i></p>:null}
                        </div>
                    </div>
                        
                    ):<div>
                        <h6 className="member-name">{member.name}</h6>
                     </div>}
                </div>
            </div>
        ));

        return (
            <div key={type}>
                
                {title === "Head_Career_Development" ||title === "Director" ||title === "Faculty Incharge" ||title === "Overall Co-ordinators" ||title === "Head Co-ordinators" ? (
                    <h2 style={{marginTop:"70px"}} className="position shadow p-3 mb-5 bg-white rounded">
                        {title}
                    </h2>
                ):(
                    <h2 style={{marginTop:"70px"}} className="position-exec shadow p-3 mb-5 bg-white rounded">
                        {title}
                    </h2>
                )}
                
                <div className="flex-containerrr justify-content-center">{members}</div>
            </div>
        );
    };

    render() {

       

        let final_html = {};

        for (let type in this.state.members) {
            let members = this.state.members[type];

            switch (type) {
                case "Director":
                    final_html["Director"] = this.members_html(
                        "Director",
                        members,
                        type
                    );
                    break;
                case "Head_Career_Development":
                    final_html["Head_Career_Development"] = this.members_html(
                        "Head of Career Development",
                        members,
                        type
                    );
                    break;
                case "Faculty_Incharge":
                    final_html["Faculty_Incharge"] = this.members_html(
                        "Faculty Incharge",
                        members,
                        type
                    );
                    break;
                case "Overall_Coordinator":
                    final_html["Overall_Coordinator"] = this.members_html(
                        "Overall Co-ordinators",
                        members,
                        type
                    );
                    break;
                case "Head_Coordinator":
                    final_html["Head_Coordinator"] = this.members_html(
                        "Head Co-ordinators",
                        members,
                        type
                    );
                    break;
                case "Manager_pr":
                    final_html["Manager_pr"] = this.members_html(
                        "Public Relation and Marketing Managers",
                        members,
                        type
                    );
                    break;
                case "Manager_tech":
                    final_html["Manager_tech"] = this.members_html(
                        "Technical Team Managers ",
                        members,
                        type
                    );
                    break;

                case "Manager_des":
                    final_html["Manager_des"] = this.members_html(
                        "Design Team Managers ",
                        members,
                        type
                    );
                    break;

                case "Manager_doc":
                    final_html["Manager_doc"] = this.members_html(
                        "Documentation Team Manager ",
                        members,
                        type
                    );
                    break;

                case "Manager_spons":
                    final_html["Manager_spons"] = this.members_html(
                        "Sponsorship and Brand Management Managers ",
                        members,
                        type
                    );
                    break;
                case "Executive_pr":
                    final_html["Executive_pr"] = this.members_html("Public Relation and Marketing Executives", members);
                    break;

                case "Executive_tech":
                    final_html["Executive_tech"] = this.members_html("Technical Team Executives", members);
                    break;

                case "Executive_des":
                    final_html["Executive_des"] = this.members_html("Design Team Executives", members);
                    break;

                case "Executive_doc":
                    final_html["Executive_doc"] = this.members_html("Documentation Team Executives", members);
                    break;

                case "Executive_spons":
                    final_html["Executive_spons"] = this.members_html("Sponsorship and Brand Management Executives", members);
                    break;
                default:
                    console.log("default");
            }
        }

        let this_year=this.props.match.params.year;
        // final_html = Object.keys(final_html).map(key => final_html[key]);

        return (
            <div className="team-whole">
                <Navbar />
                <div className="team-div"><Link className="team-links shadow p-3 mb-5 bg-white rounded" to='/team/yearwise'>Previous Year Teams</Link></div>
                {this.state.loading ? (<div style={{marginTop:"10%"}}><Loader/></div>):(
                <div>
                
                {this_year==="2019" ? final_html['Director']:null}
                {this_year==="2019" ? final_html['Head_Career_Development']:null}
                {this_year==="2019" ? final_html['Faculty_Incharge']:null}
                {this_year==="2013" ? null :final_html['Overall_Coordinator']}
                {final_html['Head_Coordinator']}
                {this_year==="2019" ? final_html['Manager_pr']:null}
                {this_year==="2019" ? final_html['Manager_tech']:null}
                {this_year==="2019" ? final_html['Manager_des']:null}
                {this_year==="2019" ? final_html['Manager_doc']:null}
                {this_year==="2019" ? final_html['Manager_spons']:null}
                {this_year==="2019" ? final_html['Executive_pr']:null}
                {this_year==="2019" ? final_html['Executive_tech']:null}
                {this_year==="2019" ? final_html['Executive_des']:null}
                {this_year==="2019" ? final_html['Executive_doc']:null}
                {this_year==="2019" ? final_html['Executive_spons']:null}
                </div>) }
                <div className="team-div"><Link className="team-links shadow p-3 mb-5 bg-white rounded" to='/team/yearwise'>Previous Year Teams</Link></div>
                <Footer />
            </div>
        );
    }
}

export default team;
