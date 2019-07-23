import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./sponsors.css";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import faxios from "../../axios";

class Sponsors extends Component {
    state = {
        years: [],
        loading: true
    };

    componentDidMount() {
        faxios()
            .get("/sponsors/sponsors_years/")
            .then(d => {
                console.log(d.data);

                this.setState({
                    years: d.data,
                    loading: false
                });
            });
    }

    render() {
        const spons_years = this.state.years.map(year => (
            <div>
                <Link key={year} to={`/sponsors/${year}`}>
                    <button className="btn">Sponsors {year}</button>
                </Link>
            </div>
        ));

        return (
            <div className="sponsors">
                <Navbar />
                <div className="header1">OUR SPONSORS</div>
                {this.state.loading ? (
                    <div className="mt-4">loading</div>
                ) : (
                    <div className="container-fluid ctn11"><div>{spons_years}</div></div>
                )}
                <Footer />
            </div>
        );
    }
}

export default Sponsors;
