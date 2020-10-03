import React, { useEffect } from 'react';
import { Breadcrumb, Card, Container, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { AiOutlineHome } from 'react-icons/ai';

function MensScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return () => {}
    }, [])

    return loading ? <Spinner className="mx-4" animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner> :
    error ? <h3 className="mx-4">{error}</h3> :
    <Container className="content-container px-4 pt-0 pb-3" fluid>
        <Breadcrumb>
            <LinkContainer to="/">
                <Breadcrumb.Item>
                    <AiOutlineHome />
                </Breadcrumb.Item>
                {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
            </LinkContainer>
            <Breadcrumb.Item active="true">Mens</Breadcrumb.Item>
        </Breadcrumb>
        <div className="bg-dark-grey px-3 py-2 mt-0 round-edge-bottom">
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
        </div>
    </Container>
}

export default MensScreen;