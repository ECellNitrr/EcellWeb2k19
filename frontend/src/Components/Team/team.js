import React, { Component } from "react";
import faxios from "../../axios";
import "./team.css";
import Navbar from "../Navbar/navbar";
// import Faculty from "./faculty";
import Footer from "../Footer/footer";

class team extends Component {
    axios = faxios();
    state = {
        members: {},
        loading: true
    };
    componentDidMount() {
        this.axios.get("/team/list/").then(fromserver => {
            const data = fromserver.data;
            delete data["me"];
            console.log(data);
            this.setState({
                members: data,
                loading: false
            });
        });
    }

    members_html = (title, members, type) => {
        members = members.map(member => (
            <div key={member.id} className='text-center'>
                <div>
                    {title === "Managers" || title === "Executives" ? null : (
                        <img
                            className="member-image shadow-lg p-3 mb-5 bg-white rounded"
                            src={member.image}
                            alt={member.name}
                            width="250"
                            height="250"
                        />
                    )}
                </div>
                <div>
                    <h6 className="member-name">{member.name}</h6>
                </div>
            </div>
        ));

        return (
            <div key={type}>
                <h2 className="position shadow p-3 mb-5 bg-white rounded">
                    {title}
                </h2>
                <div className="flex-container">{members}</div>
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
                case "Manager":
                    final_html["Manager"] = this.members_html(
                        "Managers",
                        members,
                        type
                    );
                    break;
                case "Executive":
                    final_html["Executive"] = this.members_html("Executives", members);
                    break;
                default:
                    console.log("default");
            }
        }

        // final_html = Object.keys(final_html).map(key => final_html[key]);

        return (
            <div className="team-whole">
                <Navbar />
                {final_html['Director']}
                {final_html['Head_Career_Development']}
                {final_html['Faculty_Incharge']}
                {final_html['Overall_Coordinator']}
                {final_html['Head_Coordinator']}
                {final_html['Manager']}
                {final_html['Executive']}
                <Footer />
            </div>
        );
    }
}

export default team;
