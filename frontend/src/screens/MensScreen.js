import React, { useEffect } from 'react';
import { Breadcrumb, Card, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function MensScreen(props) {
    // console.log(state);
    const productList = useSelector(state => state.productList);
    console.log('start');
    console.log(productList);
    console.log('end');
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {}
    }, [])

    return loading ? <h3 className="px-4">Loading...</h3> :
    error ? <h3 className="px-4">{error}</h3> :
    <Container id="mens-container" className="px-4 pt-0 pb-3" fluid>
        {/* className="round-edge"  */}
        <Breadcrumb>
            <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active="true">Mens</Breadcrumb.Item>
        </Breadcrumb>
        <div className="products-wrapper px-3 py-2 mt-0 round-edge-bottom">
            <ul className="products">
                {
                    products.map(product => {
                        return <li key={product._id}>
                            <Card className="product">
                                <Link to={ "/product/" + product._id }>
                                    <Card.Img variant="top" src={ product.image } />
                                </Link>
                                <Card.Body>
                                    <Link to={ "/product/" + product._id }>
                                        <Card.Title>{ product.name }</Card.Title>
                                        <Card.Subtitle className="text-muted">£{ product.price }</Card.Subtitle>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </li>
                    })
                }
            </ul>
            {/* <ul className="products">
                <li>
                    <Card className="product">
                        <Link to="/product/1">
                            <Card.Img variant="top" src="/images/products/mens/product1/img1.jpg" />
                        </Link>
                        <Card.Body>
                            <Link to="/product/1">
                                <Card.Title>Nike Air Force 1 '07</Card.Title>
                                <Card.Subtitle className="text-muted">£84.95</Card.Subtitle>
                            </Link>
                        </Card.Body>
                    </Card>
                </li>
            </ul> */}
        </div>
    </Container>
}

// const dispatch = useDispatch();

// useEffect(() => {
//     dispatch(listProducts());
//     return () => {}
// }, [])

export default MensScreen;