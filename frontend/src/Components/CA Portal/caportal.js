import React, { Component } from "react";
import "./caportal.css";
import Navbar from '../Navbar/navbar';
import Footer from "../Footer/footer";
import About from "./aboutca";
import Faq from "./faqs";
import Contact from "./contact";

class caportal extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="caportal">
                    <div>
                        <img
                            alt='cover'
                            className="landing"
                            src={require("../../assets/landing2.jpg")}
                        />
                    </div>
                </div>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                    {/* <a href="#" target="_blank"> */}
                        <button className="profile-card__button button--orange">
                            CA Portal will be live on Monday(22/07/2019)
                        </button>
                    {/* </a> */}
                </div>
                <div>{/*Do whatever you need to do here.*/}</div>
                <About />
                <Faq />
                <Contact />

                <Footer />
            </div>
        );
    }
}

export default caportal;
