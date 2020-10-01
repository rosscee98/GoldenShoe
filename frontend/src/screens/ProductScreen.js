import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb, Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { detailsProduct } from '../actions/productActions';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function ProductScreen(props) {
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {}
    }, [])

    return loading ? <Spinner className="mx-4" animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner> :
    error ? <h3 className="mx-4">{error}</h3> :
    <Container className="content-container px-4 pt-0 pb-3" fluid>
        <Breadcrumb>
            <LinkContainer to="/">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </LinkContainer>
            <LinkContainer to={ "/" + product.category }>
                <Breadcrumb.Item>{ product.category }</Breadcrumb.Item>
            </LinkContainer>
            <Breadcrumb.Item active="true">{ product.name }</Breadcrumb.Item>
        </Breadcrumb>
        <div id="product-window" className="bg-gold px-3 py-2 mt-0 round-edge-bottom">
            <Row>
                {/* <Col xs={7} style={{'background-color': 'green'}}> */}
                <Col xs={6}>
                {/* <Col> */}
                    <ImageGallery 
                        showFullscreenButton={false}
                        useBrowserFullscreen={false}
                        showPlayButton={false}
                        showBullets={true}
                        thumbnailPosition={"left"}
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
                </Col>
                {/* <Col xs={5} style={{'background-color': 'blue'}}> */}
                <Col xs={5}>
                {/* <Col> */}
                    <div className="round-edge px-3 py-3 bg-white shadow-sm">
                        <h3>{ product.name }</h3>
                        <p className="text-muted">{ product.category }</p>
                        <p>{ product.description }</p>
                        {
                            product.countInStock < 20
                                ? <p style={{'color': 'red'}}>{ product.countInStock } left in stock</p>
                                : <div></div>
                        }
                        <Row className="justify-content-between px-3">
                            <Button>Add to cart</Button>
                            <h3 className="text-muted">£{ product.price }</h3>
                        </Row>
                        
                    </div>
                </Col>
            </Row>
        </div>
    </Container>
}

export default ProductScreen;