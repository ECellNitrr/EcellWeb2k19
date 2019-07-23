import React, { Component } from "react";
import faxios from "../../axios";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

export default class event_detail extends Component{
    axios = faxios();
    state = {
        event_detail: null,
        loading: true
    };
    
    componentDidMount() {
        this.event_id = this.props.match.params.id;
        console.log(this.event_id)

        this.axios.get("/events/list/2019/").then(d => {
            let data = d.data.data;
            let event_detail = data.find(event => event.id===Number(this.event_id))
            
            console.log({ data,event_detail });
            this.setState({
                event_detail,
                loading: false
            });
        });
    }

    render() {
        let event_detail = null
        if (!this.state.loading) {
            const event = this.state.event_detail;
            event_detail = (
                <div className="event_detail">
                    
                    <div className="event-item1">
                        <img className="shadow-lg p-3 mb-5 bg-white rounded event-detail-pic" alt='event' src={event.icon} />
                    </div>
                    <div className="event-item2">
                        <div className="event-content">
                            <div className="event-detail-name"><h4 className="e-name shadow p-3 mb-5 bg-white rounded">{event.name}</h4></div><br></br>
                            <div className="event-venue" style={{color:'black'}}><i className="fas fa-map-marker-alt"></i>&nbsp;Venue:&nbsp;<span style={{color:'white'}}>{event.venue}</span></div><br></br>
                            <div className="event-time" style={{color:'black'}}><span><i className="far fa-clock"></i>&nbsp;Time:</span>&nbsp;<span style={{color:"white"}}>{event.time}</span></div><br></br>
                            <div className="event-details">{event.details}</div><br></br>
                            <div className="event-email"><i className="far fa-paper-plane"></i>&nbsp;Email:&nbsp;<a className="e-email" href={`mailto:${event.email}`}>{event.mail}</a></div>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="events">
                <Navbar/>
                    <div>
                        {this.state.loading ? "loading" : event_detail}
                    </div> 
                <Footer/>
            </div>
        );
    }
}
