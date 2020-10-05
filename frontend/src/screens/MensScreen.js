import React, { useEffect, useState } from 'react';
import { Breadcrumb, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listFilteredProducts, listProducts, listProductsInCategory } from '../actions/productActions';
import { AiOutlineHome } from 'react-icons/ai';
import ProductList from '../components/ProductList';

function MensScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const [properties, setProperties] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(properties);
        dispatch(listProductsInCategory("Mens"));
        return () => {}
    }, [])

    useEffect(() => {
        dispatch(listFilteredProducts(properties, "Mens"));
        console.log(properties);
        return () => {}
    }, [properties])

    const handlePropertyChange = (selected, value) => {
        console.log(properties);
        console.log(selected, value);
        selected
            ? setProperties(properties => [...properties, value])
            : setProperties(properties => properties.filter(p => p !== value));
    }

    return <Container className="content-container px-4 pt-0 pb-3" fluid>
        <Breadcrumb>
            <LinkContainer to="/">
                <Breadcrumb.Item>
                    <AiOutlineHome />
                </Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active="true">Mens</Breadcrumb.Item>
        </Breadcrumb>
        {/* <div className="round-edge-bottom" style={{'display': 'flex', 'flex-wrap': 'wrap'}}> */}
        {/* <div className="round-edge-bottom"> */}
        <Row className="round-edge-bottom m-0">
            {/* <div className="bg-light-grey" style={{'border-top': '.1rem solid lightgrey', 'border-right': '.1rem solid lightgrey', 'flex': '1 1 20rem'}}> */}
            {/* <div className="bg-light-grey"> */}
            <Col className="bg-light-grey" sm={3} style={{'border-bottom-left-radius': '1rem'}}>
                <h3>Filters</h3>
                <h4 className="text-muted">Colour</h4>
                <Form>
                    {
                        ["Black", "Blue", "Red", "Yellow", "Green"].map(colour => (
                            <Form.Check
                                label={ colour }
                                type="checkbox"
                                value={ colour }
                                onChange={ e => handlePropertyChange(e.target.checked, colour) }
                                defaultChecked={ e => properties.indexOf(colour !== -1) }
                            />
                        ))
                    }
                </Form>
                <hr />
                <h4 className="text-muted">Size</h4>
                <Form>
                    {
                        [...Array(12).keys()].map(i => (
                            <Form.Check
                                label={ i+1 }
                                type="checkbox"
                                value={ i+1 }
                                onChange={ e => handlePropertyChange(e.target.checked, i+1) }
                                defaultChecked={ e => properties.indexOf((i+1) !== -1) }
                            />
                        ))
                    }
                </Form>
                <hr />
                <h4 className="text-muted">Price</h4>
                <Form>
                    {
                        ["Under £50", "£50-75", "£75-£100", "£100-125", "£125-150", "Over £150"].map(price => (
                            <Form.Check
                                label={ price }
                                type="checkbox"
                                value={ price }
                                onChange={ e => handlePropertyChange(e.target.checked, price) }
                                defaultChecked={ e => properties.indexOf(price !== -1) }
                            />
                        ))
                    }
                </Form>
            </Col>
            {/* </div> */}
            {/* <div className="bg-dark-grey px-3 py-2 mt-0"> */}
            <Col className="bg-dark-grey px-3 py-2 mt-0" sm={9} style={{'border-bottom-right-radius': '1rem'}}>
                {
                    loading
                        ? <Spinner className="mx-4" animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        : error
                            ? <h3 className="mx-4">{error}</h3> 
                            : <ProductList products={ products } />
                }
            </Col>
            {/* </div> */}
        </Row>
        {/* </div> */}
    </Container>
}

export default MensScreen;