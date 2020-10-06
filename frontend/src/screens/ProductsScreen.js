import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts, listProductsInCategory } from '../actions/productActions';
import { AiOutlineHome } from 'react-icons/ai';
import ProductList from '../components/ProductList';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function ProductsScreen(props) {
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const [filteredProducts, setFilteredProducts] = useState([]);
    const dispatch = useDispatch();

    const [properties, setProperties] = useState([]);
    const [size, setSize] = useState(null);
    const [priceRange, setPriceRange] = useState([0, 200]);

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);
    
    const searchQuery = props.location.search
        ? props.location.search.split("=")[1]
        : null;

    const sizeFilter = (arr) => size
        ? arr.filter(product => product.sizesAvailable.find(entry => entry.size === size))
        : arr;
    const propertyFilter = (arr) => (properties.length > 0)
        ? arr.filter(product => (properties.every(p => product.properties.indexOf(p) !== -1)))
        : arr;
    const costFilter = (arr) => arr.filter(product => 
        (product.price >= priceRange[0]) && (product.price <= priceRange[1]) 
    );
    const searchQueryFilter = (arr) => searchQuery
        ? arr.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : arr;

    useEffect(() => {
        props.category
            ? dispatch(listProductsInCategory(props.category))
            : dispatch(listProducts());
        return () => {}
    }, [dispatch]);

    useEffect(() => {
        setProperties([]);
        setFilteredProducts(products);
        return () => {}
    }, [products]);

    useEffect(() => {
        setFilteredProducts(searchQueryFilter(costFilter(sizeFilter(propertyFilter(products)))));
        return () => {}
    }, [properties, size, priceRange, searchQuery]);

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
        { console.log(searchQuery) }
        <Breadcrumb>
            <LinkContainer to="/">
                <Breadcrumb.Item>
                    <AiOutlineHome />
                </Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active="true">{ props.category ? props.category : "All products" }</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="round-edge-bottom m-0">
            <Col id="filterContainer" className="bg-light-grey pt-2" md={3}>
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
                                //defaultChecked={ e => properties.indexOf(colour !== -1) }
                                defaultChecked={ false }
                            />
                        ))
                    }
                </Form>
                <hr className="py-1" />
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
                                defaultChecked={ false }
                            />
                        ))
                    }
                </Form>
                <hr className="py-1" />
                <h4 className="text-muted">Price</h4>
                <p>£10 - £200</p>
                <div className="mb-4 px-2">
                    <Range 
                        min={ 10 }
                        max={ 200 }
                        defaultValue={ priceRange }
                        pushable={ true }
                        step={ 10 }
                        tipFormatter={ value => `£${value}` }
                        onAfterChange={ handlePriceChange }
                    />
                </div>
            </Col>
            <Col id="productContainer" className="bg-dark-grey px-3 py-2 mt-0" md={9}>
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
        </Row>
    </Container>
}

export default ProductsScreen;