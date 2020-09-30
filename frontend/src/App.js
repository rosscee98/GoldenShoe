import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Container, Form, FormControl, ListGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import MensScreen from './screens/MensScreen';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar expand="lg" className="round-edge mx-4 my-3">
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="/images/logo192.png"
                width="35"
                height="35"
                alt="Golden Shoe"
              />{' '}
              Golden Shoe
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Mens" id="dropdown-mens">
                <LinkContainer to="/mens?kind=trainers">
                  <NavDropdown.Item>Trainers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/mens?kind=shoes">
                  <NavDropdown.Item>Shoes</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/mens?kind=boots">
                  <NavDropdown.Item>Boots</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/mens">
                  <NavDropdown.Item>View all</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Womens" id="dropdown-womens">
                <LinkContainer to="/womens?kind=trainers">
                  <NavDropdown.Item>Trainers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/womens?kind=shoes">
                  <NavDropdown.Item>Shoes</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/womens?kind=boots">
                  <NavDropdown.Item>Boots</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/womens">
                  <NavDropdown.Item>View all</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Kids" id="dropdown-kids">
                <LinkContainer to="/kids?kind=trainers">
                  <NavDropdown.Item>Trainers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kids?kind=shoes">
                  <NavDropdown.Item>Shoes</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kids?kind=boots">
                  <NavDropdown.Item>Boots</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/kids">
                  <NavDropdown.Item>View all</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/mens" component={MensScreen} />
        <footer className="footer mt-auto">
          <Row className="justify-content-center">
            <ul>
              <li className="list-inline-item"><Link to="/"><i className="fa fa-twitter" /></Link></li>
              <li className="list-inline-item"><Link to="/"><i className="fa fa-facebook" /></Link></li>
              <li className="list-inline-item"><Link to="/"><i className="fa fa-instagram" /></Link></li>
            </ul>
          </Row>
          All rights reserved.
        </footer>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Router>
  );
}

export default App;