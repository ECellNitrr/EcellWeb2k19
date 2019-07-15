import React, { Component } from "react";
import faxios from "../../axios";

export default class startupdetail extends Component {
    axios = faxios();
    state = {
        startup_detail: null,
        loading: true
    };

    componentDidMount() {
        this.startup_id = this.props.match.params.id;
        console.log(this.startup_id);

        this.axios.get("/startups/list").then(d => {
            let data = d.data;
            let startup_detail = data.startups.find(
                startup => startup.id == this.startup_id
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
                    <div>{startup.name}</div>
                    <div>
                        <img src={startup.pic} />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: startup.details}} />
                </div>
            );
        }

        return <div>{this.state.loading ? "loading" : startup_detail}</div>;
    }
}
