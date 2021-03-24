import React from "react";
import { default as Carousel } from "../../UIElements/carousel/Carousel";
import { Jumbotron, Container } from "react-bootstrap";

import data from "../../../static/home.json";
import './Home.css'

const Home = (pops) => {
    return (
        <div>
            <Carousel />
            <section>
                <div className="home__details-container">
                    {data.data.map((item, index) => {
                        return (
                            <Jumbotron fluid key={index}>
                                <Container>
                                    <h1>{item.title}</h1>
                                    <p>{item.body}</p>
                                </Container>
                            </Jumbotron>
                        );
                    })}
                </div>
            </section>
            <section className="home__supplier-section">
                <h3>We supply to</h3>
                <div className="home__suppliers">
                    {
                        data.suppliers.map((supplier, index) => {
                            return(
                                <div className="home__supplier">
                                    <img className="supplier-logo" src={supplier.imgSrc} alt={supplier.name}/>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;
