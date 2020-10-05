import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Form, Row, Spinner, Tooltip } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listFilteredProducts, listProductsInCategory } from '../actions/productActions';
import { AiOutlineHome } from 'react-icons/ai';
import ProductList from '../components/ProductList';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

function MensScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch();

    const [properties, setProperties] = useState([]);
    const [size, setSize] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 200]);

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    const sizeFilter = (arr) => size
        ? arr.filter(product => product.sizesAvailable.find(entry => entry.size === size))
        : arr;
    const propertyFilter = (arr) => (properties.length > 0)
        ? arr.filter(product => (properties.every(p => product.properties.indexOf(p) !== -1)))
        : arr;
    const costFilter = (arr) => arr.filter(product => 
        (product.price >= priceRange[0]) && (product.price <= priceRange[1]) 
    );

    useEffect(() => {
        dispatch(listProductsInCategory("Mens"));
        return () => {}
    }, [dispatch]);

    useEffect(() => {
        setProperties([]);
        setFilteredProducts(products);
        return () => {}
    }, [products]);

    //*********************//

    useEffect(() => {
        setFilteredProducts(costFilter(sizeFilter(propertyFilter(products))));
        return () => {}
    }, [properties, size, priceRange]);

    useEffect(() => {
        console.log(priceRange);
        return () => {}
    }, [priceRange])

    const handlePropertyChange = (isChecked, value) => {
        isChecked
            ? setProperties(properties => [...properties, value])
            : setProperties(properties => properties.filter(p => p !== value));
    };

    const handleSizeChange = (isChecked, value) => {
        if (isChecked) {
            setSize(value);
        }
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
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
            <Col className="bg-light-grey" sm={3} style={{'borderBottomLeftRadius': '1rem'}}>
                <h3>Filters</h3>
                <h4 className="text-muted">Colour</h4>
                <Form>
                    {
                        ["Black", "Blue", "Red", "Yellow", "Green"].map(colour => (
                            <Form.Check
                                key={ colour }
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
                                key={ i+1 }
                                name="sizeOptions"
                                label={ i+1 }
                                type="radio"
                                value={ i+1 }
                                onChange={ e => handleSizeChange(e.target.checked, i+1) }
                                defaultChecked={ e => properties.indexOf((i+1) !== -1) }
                            />
                        ))
                    }
                </Form>
                <hr />
                <h4 className="text-muted">Price</h4>
                {/* <Form id="rangeInput">
                    
                </Form> */}
                <Range 
                    min={ 0 }
                    max={ 200 }
                    defaultValue={ priceRange }
                    pushable={ true }
                    step={ 10 }
                    tipFormatter={ value => `£${value}` }
                    onAfterChange={ handlePriceChange }
                />
                <Form>
                    {
                        ["Under £50", "£50-75", "£75-£100", "£100-125", "£125-150", "Over £150"].map(price => (
                            <Form.Check
                                key={ price }
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
            <Col className="bg-dark-grey px-3 py-2 mt-0" sm={9} style={{'borderBottomRightRadius': '1rem'}}>
                {
                    loading
                        ? <Spinner className="mx-4" animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        : error
                            ? <h3 className="mx-4">{error}</h3> 
                            : <ProductList products={ filteredProducts } />
                }
            </Col>
            {/* </div> */}
        </Row>
        {/* </div> */}
    </Container>
}

export default MensScreen;