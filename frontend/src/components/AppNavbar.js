import React, { useState } from 'react';
import { Badge, Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { BsBagFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';

function AppNavbar(props) {

    const basket = useSelector(state => state.basket);
    const { basketItems } = basket;
    const basketTotal = basketItems.reduce((acc, cur) => acc + (parseInt(cur['qty']) || 0), 0);

    const favourites = useSelector(state => state.favourites);
    const { favouriteItems } = favourites;
    const favouritesTotal = favouriteItems.length;

    return <Navbar expand="lg" className="round-edge mx-4 my-3">
        <LinkContainer to="/">
            <Navbar.Brand>
                <GiRunningShoe id="logo" />
                Golden Shoe
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
            <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/mens">
                <Nav.Link>Mens</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/womens">
                <Nav.Link>Womens</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/kids">
                <Nav.Link>Kids</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/products">
                <Nav.Link>View all</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faq">
                <Nav.Link>FAQ</Nav.Link>
            </LinkContainer>
            <span className="d-block d-lg-none">
                <NavDropdown.Divider />
                <LinkContainer to="/favourites/">
                    <Nav.Link>Favourites { favouritesTotal > 0 ? `(${favouritesTotal})` : null }</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/basket/">
                    <Nav.Link>Basket { basketTotal > 0 ? `(${basketTotal})` : null }</Nav.Link>
                </LinkContainer>
            </span>
        </Nav>
        <span className="navbar-page-icon d-none d-lg-block">
            <LinkContainer to="/favourites/">
                <Button variant="outline-danger">
                    <FaHeart />
                    {" "}
                    <Badge>
                        { favouritesTotal > 0 ? favouritesTotal : null }
                    </Badge>
                    <span className="sr-only">{ favouritesTotal > 0 ? "" : "Zero" } items in favourites</span>
                </Button>
            </LinkContainer>
            <LinkContainer to="/basket/">
                <Button variant="outline-primary">
                    <BsBagFill />
                    {" "}
                    <Badge>
                        { basketTotal > 0 ? basketTotal : null }
                    </Badge>
                    <span className="sr-only">{ basketTotal > 0 ? "" : "Zero" } items in basket</span>
                </Button>
            </LinkContainer>
        </span>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbar-nav" />
    </Navbar>
}

export default AppNavbar;