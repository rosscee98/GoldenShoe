import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TextLoop from 'react-text-loop'

function HomeScreen(props) {
  return (
    <Container className="px-4 pt-0 pb-3" fluid>
      <Carousel className="round-edge d-none d-md-block" interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/promo/mensboots.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="round-edge">
            <Link to="/mens">
              <h3>50% off men's boots</h3>
              <p>Valid during October</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/promo/womensheels.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="round-edge">
            <Link to="/womens">
              <h3>Women's heels</h3>
              <p>100's to choose from</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/promo/running.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="round-edge">
            <Link to="/womens">
              <h3>Women's running shoes</h3>
              <p>New range available</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr className="d-none d-md-block" />
      <div id="tagline">
        <h3>
          Find your next{' '}
          <TextLoop interval="3000" mask="true">
            <span>dancing</span>
            <span>5-a-side</span>
            <span>working late</span>
            <span>6am run</span>
            <span>munro bagging</span>
            <span>beach day</span>
          </TextLoop>{' '}
          shoes
        </h3>
        <p>
          Whatever lies ahead, dive in now and find the shoes that'll get you
          through.
        </p>
      </div>
    </Container>
  )
}

export default HomeScreen
