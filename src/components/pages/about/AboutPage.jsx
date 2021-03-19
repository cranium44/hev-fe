import React from "react";
import "./AboutPage.css";

const AboutPage = (pops) => {
    return (
        <div>
            <div className="about__container">
                <h2>Our Team</h2>
                <div className="col-6">
                    <p>
                        Nulla eget est id sem bibendum scelerisque. Ut tincidunt
                        mauris nulla, sit amet sollicitudin lorem molestie eu.
                        Vestibulum non aliquam enim, sed cursus tortor. Integer
                        molestie ultricies consectetur. Aliquam cursus vehicula
                        nisl et ullamcorper. Donec at dolor nisi. Vivamus ut sem
                        condimentum, porttitor tellus nec, efficitur diam. Sed
                        dictum, mi non accumsan luctus, tortor orci bibendum
                        magna, vel hendrerit turpis sem ac tellus. Integer ut
                        porttitor arcu. Maecenas tortor metus, ultricies sit
                        amet consectetur vel, viverra at diam. Aenean consequat
                        congue aliquam.
                    </p>
                </div>
                <div className="about__mission">
                    <div className="col-5 mission_container">
                        <h3>Our Mission</h3>
                        <p>
                            Sed vitae ante ut metus bibendum eleifend. Curabitur
                            convallis tristique arcu ultricies tristique.
                            Suspendisse congue est vel lorem congue convallis.
                            Phasellus vitae massa sit amet diam lacinia rhoncus
                            efficitur at ligula. Vestibulum gravida metus quis
                            egestas sollicitudin. Sed faucibus odio varius
                            vulputate pretium. Pellentesque auctor lectus in
                            fringilla facilisis. Donec fermentum lacinia quam,
                            eu commodo velit pellentesque vitae. Curabitur
                            auctor vitae orci at venenatis. Integer aliquet at
                            erat id accumsan. Proin tempor sit amet erat eu
                            rhoncus. Phasellus fermentum est eu erat auctor
                            dignissim. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Aenean luctus eros rhoncus
                            fermentum ornare.
                        </p>
                    </div>
                    <div className="col-5 vision_container">
                        <h3>Our Vision</h3>
                        <p>
                            Orci varius natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Fusce
                            eget felis ac est placerat vehicula id et ante.
                            Phasellus tempus, dolor et condimentum commodo,
                            purus quam tincidunt sem, eu feugiat mi ex eu ante.
                            Curabitur accumsan malesuada felis, vel ultricies
                            dui fermentum luctus. Duis vestibulum ultricies
                            enim, ut tempor eros luctus at. In sapien odio,
                            molestie eu euismod nec, vestibulum id nulla. Donec
                            convallis ligula enim, quis ultricies massa blandit
                            vitae. Pellentesque nec tellus non velit sodales
                            viverra. Nunc efficitur magna a est sollicitudin
                            blandit.
                        </p>
                    </div>
                </div>
                <div className="about__contact-form-container"></div>
            </div>
        </div>
    );
};

export default AboutPage;
