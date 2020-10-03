import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb, Button, Container, Row, Spinner } from 'react-bootstrap';
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

    const handleAddToBasket = () => {
        props.history.push("/basket/" + props.match.params.id)
    }

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
        <div id="productWindow" className="bg-dark-grey px-3 py-2 mt-0 round-edge-bottom">
            {/* <Row> */}
            <div id="productImage" className="my-2 mr-2">
                {/* 768 */}
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
                {
                    product.countInStock < 20
                        ? <p style={{'color': 'red'}}>{ product.countInStock } left in stock</p>
                        : <div></div>
                }
                <Row className="justify-content-between px-3">
                    { product.countInStock > 0
                        ? <Button onClick={handleAddToBasket}>Add to cart</Button>
                        : <Button disabled>Unavailable</Button>
                    }
                    <h3 className="text-muted">£{ product.price }</h3>
                </Row>
            </div>
            {/* </Row> */}
        </div>
    </Container>
}

export default ProductScreen;