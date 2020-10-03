import React from 'react';
import { Badge, Button, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { BsBagFill, BsHeartFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';

function AppNavbar(props) {

    const basket = useSelector(state => state.basket);
    const { basketItems } = basket;
    const basketTotal = basketItems.reduce((acc, cur) => acc + (parseInt(cur['qty']) || 0), 0);

    return <Navbar expand="lg" className="round-edge mx-4 my-3">
        <LinkContainer to="/">
            <Navbar.Brand>
                {/* <Image
                    src="/images/logo192.png"
                    width="35"
                    height="35"
                    alt="Golden Shoe"
                />{' '} */}
                <GiRunningShoe id="logo" />
                Golden Shoe
            </Navbar.Brand>
        </LinkContainer>
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
            <span className="d-block d-lg-none">
                <NavDropdown.Divider />
                <LinkContainer to="/favourites/">
                    <Nav.Link>Favourites</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/basket/">
                    <Nav.Link>Basket</Nav.Link>
                </LinkContainer>
            </span>
            
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mb-0 mb-sm-2 mb-lg-0 mr-sm-2" />
            <Button variant="outline-success" className="mb-2 mb-lg-0">Search</Button>
        </Form>
        <span className="navbar-page-icon d-none d-lg-block">
            <LinkContainer to="/favourites/">
                <Button variant="outline-danger">
                    <FaHeart />
                </Button>
            </LinkContainer>
            <LinkContainer to="/basket/">
                <Button variant="outline-primary">
                    <BsBagFill />
                    {" "}
                    <Badge variant="light">
                        { basketTotal > 0 ? basketTotal : null }
                    </Badge>
                    <span class="sr-only">{ basketTotal > 0 ? "" : "Zero" } items in basket</span>
                </Button>
            </LinkContainer>
        </span>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="navbar-nav" />
    </Navbar>
}

export default AppNavbar;