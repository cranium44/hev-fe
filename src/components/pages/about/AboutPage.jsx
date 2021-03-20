import React from "react";
import ContactForm from "./ContactForm";

import data from "../../../static/about_us.json";
import "./AboutPage.css";

const AboutPage = (pops) => {
    return (
        <div>
            <div className="about__container">
                <img
                    className="about__logo"
                    src="/images/team-50.png"
                    alt="team logo"
                />
                <h2>{data.team.title}</h2>
                <div className="col-6">
                    <p>{data.team.body}
                    </p>
                </div>
                <div className="about__mission">
                    <div className="col-5 mission_container">
                        <img
                            className="about__logo"
                            src="/images/mission-50.png"
                            alt="mission logo"
                        />
                        <h3>{data.mission.title}</h3>
                        <p>
                            {data.mission.body}
                        </p>
                    </div>
                    <div className="col-5 vision_container">
                        <img
                            className="about__logo"
                            src="/images/vision-50.png"
                            alt="vision logo"
                        />
                        <h3>{data.vission.title}</h3>
                        <p>
                           {data.vission.body}
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
