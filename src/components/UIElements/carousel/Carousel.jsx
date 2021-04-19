import React from "react";
import { Carousel } from "react-bootstrap";
import data from "../../../static/carousel.json";
import "./Carousel.css";

const AppCarousel = () => {
    return (
        <Carousel>
            {data.slides.map((slide, index) => {
                return (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carousel-img"
                            src={slide.imgUrl}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="carousel-title">
                                {slide.title}
                            </h3>
                            <p className="carousel-text">
                                {slide.description}
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default AppCarousel;
