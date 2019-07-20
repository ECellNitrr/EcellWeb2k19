import React, { Component } from "react";
import "./speakerHome.css";
import faxios from "../../../axios";
import Swiper from "react-id-swiper";

export default class Parallax extends Component {
    axios = faxios();
    state = {
        speakers: [],
        loading: true
    };

    componentDidMount() {
        let count = 0;
        for (let i = 2016; i <= 2020; i++) {
            this.axios
                .get(`/speakers/list/${i}/`)
                .then(res => {
                    const data = res.data.data;

                    if (data.length > 0) {
                        this.setState({
                            speakers: [...this.state.speakers, ...data]
                        });
                    }
                })
                .finally(() => {
                    count += 1;
                    console.log(count)
                    if (count === 5) {
                        this.setState({
                            loading: false
                        });
                    }
                });
        }
    }

    render() {
        const params = {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            rebuildOnUpdate: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        };

        console.log(this.state.speakers);

        const speakers_html = this.state.speakers.map((speaker, i) => (
            <div className=" " key={i}>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                        <p className="im-text">
                            <img
                                alt={speaker.name}
                                className="image-3"
                                src={speaker.profile_pic}
                            />
                        </p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
                        <h2 className="speaker-name">{speaker.name}</h2>
                        <h4 className="speaker-title">{speaker.company}</h4>
                        <p className="speaker-text">{speaker.description}</p>
                        <div className="follow-link">
                            <a href={speaker.social_media}>
                                <button className="btn follow-btn">
                                    Follow
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ));

        const swiper_speaker = <Swiper {...params}>{speakers_html}</Swiper>;

        return (
            <div>
                <h2 className="heading-3 mt-5">MEET OUR SPEAKERS</h2>
                {this.state.loading ? "adf" : swiper_speaker}
            </div>
        );
    }
}
