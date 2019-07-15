import React, { Component } from "react";
import faxios from "../../axios";

export default class event_detail extends Component {
    axios = faxios();
    state = {
        event_detail: null,
        loading: true
    };
    
    componentDidMount() {
        this.event_id = this.props.match.params.id;
        console.log(this.event_id)

        this.axios.get("/events/list").then(d => {
            let data = d.data;
            let event_detail = data.events.find(event => event.id==this.event_id)
            
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
                    <div>{event.name}</div>
                    <div>
                        <img src={event.icon} />
                    </div>
                    <div>{event.details}</div>
                    <div>{event.time}</div>
                    <div>{event.venue}</div>
                    <div>{event.email}</div>
                </div>
            );
        }

        return <div>{this.state.loading ? "loading" : event_detail}</div>;
    }
}
