import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import TextLoop from 'react-text-loop';

function HomeScreen(props) {
    return <Container className="px-4 pt-0 pb-3" fluid>
        <div className="carousel-wrapper d-none d-md-block">
            <Carousel className="round-edge" interval={5000} fade="true">
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="/images/promo/promo1.jpg"
                        alt="First slide"
                        // width={1392}
                        // height={640}
                    />
                    <Carousel.Caption className="d-block bg-dark">
                        <h3>50% off men's boots</h3>
                        <p>Valid while stocks last</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="/images/grey.jpg"
                        alt="Second slide"
                        // width={1392}
                        // height={640}
                    />
                    <Carousel.Caption className="bg-dark">
                        <h3>Women's shoes</h3>
                        <p>Get em here pals</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="/images/grey.jpg"
                        alt="Third slide"
                        // width={1392}
                        // height={640}
                    />
                    <Carousel.Caption className="bg-dark">
                        <h3>wee</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <hr className="d-none d-md-block"/>
        <h3 id="tagline">
            Find your next <TextLoop interval="5000" mask="true">
                <span>dance the night away</span>
                <span>5-a-side</span>
                <span>working late</span>
            </TextLoop> shoes
        </h3>
    </Container>
}

export default HomeScreen;