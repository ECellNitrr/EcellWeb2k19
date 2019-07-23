import React, { Component } from "react";
import "./sponsors.css";
import faxios from "../../axios";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import HeaderLinks from "./header_links";

class Sponsors extends Component {
    axios = faxios();
    state = {
        sponsors: [],
        loading: true
    };

    componentDidMount() {
        const year = this.props.match.params.year;
        this.axios.get(`/sponsors/list/${year}/`).then(res => {
            console.log(res);
            let data = res.data.data;
            this.setState({
                loading: false,
                sponsors: data,
                year 
            });
        });
    }

    render() {
        let sponsors_html = this.state.sponsors.map(sponsor => (
            <div className="col mx-3" key={sponsor.id}>
                <div className="cont">
                    <div className="front shadow-lg p-3 mb-5 bg-white rounded">
                        <img
                            alt={sponsor.name}
                            className="spons-Image"
                            src={sponsor.pic}
                        />
                    </div>
                    <div className="back shadow-lg p-3 mb-5 bg-white rounded">
                        <div className="inner">
                            <h6 style={{ fontWeight: "800" }}>
                                {sponsor.name}
                            </h6>
                            <p className="ph-no">{sponsor.contact}</p>
                            <p>{sponsor.details}</p>
                            <p>
                                <a className="web" href={sponsor.website}>
                                    Website
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ));

        return (
            <div className="sponsors">
                <Navbar />
                <div
                    className="container-fluid"
                    style={{ maxWidth: "1200px", paddingTop: "300px" }}
                >
                    <HeaderLinks />
                </div>

                <div className="header1">SPONSORS {this.state.year}</div>
                <div
                    className="container-fluid ctn9"
                    style={{ maxWidth: "1200px", paddingTop: "0px" }}
                >
                    {this.state.loading ? (
                        <h1 className="text-center text-white w-100 my-5">
                            loading...
                        </h1>
                    ) : (
                        sponsors_html
                    )}
                </div>

                <div
                    className="container-fluid"
                    style={{ maxWidth: "1200px", paddingTop: "50px" }}
                >
                    <HeaderLinks />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Sponsors;
