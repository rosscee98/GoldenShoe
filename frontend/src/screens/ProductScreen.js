import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { detailsProduct } from '../actions/productActions';
import { addOneToBasket, incrementInBasket } from '../actions/basketActions';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { AiOutlineHome } from 'react-icons/ai';

function ProductScreen(props) {
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const anySizesAvailable = product && (product.sizesAvailable && product.sizesAvailable.length);
    const sizeSelectionWithCount = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        sizeSelectionWithCount.current && sizeSelectionWithCount.current.focus();
        return () => {}
    }, []);

    useEffect(() => {
        if (anySizesAvailable) {
            sizeSelectionWithCount.current = `${ product.sizesAvailable[0].size },${ product.sizesAvailable[0].countInStock }`; 
        }
        return () => {}
    }, [anySizesAvailable]);

    // const handleAddToBasket = () => {
    //     props.history.push("/basket/" + props.match.params.id)
    // }

    const handleAddToBasket = (productId, sizeAndCount) => {
        var array = sizeAndCount.split(",");
        dispatch(incrementInBasket(productId, parseInt(array[0]), parseInt(array[1])));
    }

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
            <LinkContainer to={ "/" + product.category }>
                <Breadcrumb.Item>{ product.category }</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active="true">{ product.name }</Breadcrumb.Item>
        </Breadcrumb>
        <div id="productWindow" className="bg-dark-grey px-3 py-2 mt-0 round-edge-bottom">
            <div id="productImage" className="my-2 mr-2">
                <ImageGallery 
                    showFullscreenButton={false}
                    useBrowserFullscreen={false}
                    showPlayButton={false}
                    thumbnailPosition={window.screen.width > 768 ? "left" : "bottom"}
                    items={[
                        {
                            original: `${product.image}`,
                            thumbnail: `${product.image}`,
                        },
                        {
                            original: `${product.image}`,
                            thumbnail: `${product.image}`,
                        },
                        {
                            original: `${product.image}`,
                            thumbnail: `${product.image}`,
                        }
                    ]}
                />
            </div>
            <div id="productDesc" className="rounded px-3 py-3 my-2 bg-white shadow-sm">
                <h3>{ product.name }</h3>
                <p className="text-muted">{ product.category }</p>
                <p>{ product.description }</p>
                {/* {
                    product.countInStock < 20
                        ? <p style={{'color': 'red'}}>{ product.countInStock } left in stock</p>
                        : <div></div>
                } */}
                {
                    anySizesAvailable &&
                        <Form.Group>
                            <Form.Label className="text-muted">Size:</Form.Label>
                            <Form.Control as="select" onChange={(e) => sizeSelectionWithCount.current = e.target.value}>
                                {
                                    product.sizesAvailable.map(entry => {
                                        return <option key={ entry.size } value={ [entry.size, entry.countInStock] }>{ entry.size }</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                }
                <hr style={{'margin': '0'}}/>
                <Row className="justify-content-between px-3">
                    { anySizesAvailable
                        ? <Button onClick={() => handleAddToBasket(product._id, sizeSelectionWithCount.current)}>Add to cart</Button>
                        : <Button disabled>Unavailable</Button>
                    }
                    <h3 className="text-muted">£{ product.price }</h3>
                </Row>
            </div>
        </div>
    </Container>
}

export default ProductScreen;