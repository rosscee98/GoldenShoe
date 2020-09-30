import React from 'react';
import { Breadcrumb, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function MensScreen(props) {
    return <Container id="mens-container" className="px-4 pt-0 pb-3" fluid>
        {/* className="round-edge"  */}
        <Breadcrumb>
            <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active="true">Mens</Breadcrumb.Item>
        </Breadcrumb>
        <div className="products-wrapper px-3 py-2 mt-0 round-edge-bottom">
            <ul className="products">
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button> */}
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
            </ul>
        </div>
    </Container>
}

export default MensScreen;