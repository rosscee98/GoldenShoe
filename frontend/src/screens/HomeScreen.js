import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function HomeScreen(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src="/images/grey.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>50% off men's boots</h3>
                <p>Valid while stocks last</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src="/images/grey.jpg"
                alt="Second slide"
            />
            <Carousel.Caption>
                <h3>Women's shoes</h3>
                <p>Get em here pals</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
}

export default HomeScreen;