import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">
          <img src="/images/logo192.png" width="35" height="35" alt="Golden Shoe" />
          <p>Golden Shoe</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
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
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/product/:id" component={ProductScreen} />
    </Router>
  );
}

export default App;