import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousel.css'

const AppCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="/img_one.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="carousel-title">First slide label</h3>
                    <p className="carousel-text">
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="/img_two.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-title">Second slide label</h3>
                    <p className="carousel-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src="/img_three.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-title">Third slide label</h3>
                    <p className="carousel-text">
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default AppCarousel;
