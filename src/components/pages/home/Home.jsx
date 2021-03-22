import React from "react";
import { default as Carousel } from "../../UIElements/carousel/Carousel";
import { Jumbotron, Container } from "react-bootstrap";

import data from "../../../static/home.json";

const Home = (pops) => {
    return (
        <div>
            <Carousel />
            <section>
                <div>
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
        </div>
    );
};

export default Home;
