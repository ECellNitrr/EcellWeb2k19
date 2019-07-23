import React, { Component } from "react";
import faxios from "../../axios";
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';

export default class startupdetail extends Component {
    axios = faxios();
    state = {
        startup_detail: null,
        loading: true
    };

    componentDidMount() {
        this.startup_id = this.props.match.params.id;
        this.startup_year = this.props.match.params.year;
        console.log(this.startup_id,this.startup_year);

        this.axios.get(`/startups/list/${this.startup_year}/`).then(d => {
            let data = d.data.data;
            console.log(data)
            let startup_detail = data.find(
                startup => startup.id === Number(this.startup_id)
            );

            console.log({ data, startup_detail });
            this.setState({
                startup_detail,
                loading: false
            });
        });
    }

    render() {
        let startup_detail = null
        if (!this.state.loading) {
            const startup = this.state.startup_detail;
            startup_detail = (
                <div className="startup_detail">
                    
                    <div className="startup-item1">
                        <img alt='startup' className="shadow-lg p-3 mb-5 bg-white rounded startup-detail-pic" src={startup.pic} />
                    </div>
                    <div className="startup-item2">
                        <div className="startup-content">
                            <div className="startup-detail-name"><h4 className="s-name">{startup.name}</h4></div><br></br>
                            <div className="startup-details"><div dangerouslySetInnerHTML={{__html: startup.details}} /></div><br></br>
                            
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="startups">
                <Navbar/>
                    <div>
                        {this.state.loading ? "loading" : startup_detail}
                    </div> 
                <Footer/>
            </div>
        );
    }
}
