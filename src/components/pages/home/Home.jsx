import React from "react";
import { default as Carousel } from "../../UIElements/carousel/Carousel";
import { Jumbotron, Container } from "react-bootstrap";

const Home = (pops) => {
    return (
        <div>
            <Carousel />
            <section>
                <div>
                    <Jumbotron fluid>
                        <Container>
                            <h1>Fluid jumbotron</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante ac mi tincidunt iaculis a a neque. Donec ac laoreet quam. Duis feugiat metus magna, sit amet lacinia diam dapibus eu. Praesent ac rutrum arcu. Integer nulla metus, sodales id nisl sit amet, commodo varius neque. Sed eu libero ut enim malesuada malesuada. Pellentesque a turpis convallis, feugiat purus a, venenatis justo. Vivamus mattis, risus non molestie facilisis, lorem libero facilisis mi, eu elementum risus orci condimentum lacus. In condimentum eleifend nulla. Phasellus a lectus in magna pretium congue. Morbi mattis gravida rhoncus. Pellentesque lacinia porttitor nulla, sed eleifend magna dictum at. Sed sem nunc, pretium eget sapien eleifend, vestibulum pellentesque lectus. Aliquam tincidunt eros ac elementum sagittis. Sed sagittis dapibus aliquam. Sed fringilla facilisis odio, vel ornare orci bibendum at. 
                            </p>
                        </Container>
                    </Jumbotron>
                </div>
            </section>
        </div>
    );
};

export default Home;
