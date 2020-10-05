import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb, Button, Container, Form, Row, Spinner, Alert } from 'react-bootstrap';
import { detailsProduct } from '../actions/productActions';
import { addToFavourites, removeFromFavourites } from '../actions/favouriteActions';
import { incrementInBasket } from '../actions/basketActions';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { AiOutlineHome } from 'react-icons/ai';
import { RiHeartAddFill } from 'react-icons/ri';
import { IoMdHeartDislike } from 'react-icons/io';

function ProductScreen(props) {
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const anySizesAvailable = product && (product.sizesAvailable && product.sizesAvailable.length);
    const sizeSelectionWithCount = useRef();
    const [showBasketAlert, setShowBasketAlert] = useState(false);

    const favourites = useSelector(state => state.favourites);
    const { favouriteItems } = favourites;
    const currentlyFavourited = favouriteItems.find(x => x.product === props.match.params.id);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        sizeSelectionWithCount.current && sizeSelectionWithCount.current.focus();
        return () => {}
    }, [dispatch, props.match.params.id]);

    useEffect(() => {
        if (anySizesAvailable) {
            sizeSelectionWithCount.current = `${ product.sizesAvailable[0].size },${ product.sizesAvailable[0].countInStock }`; 
        }
        return () => {}
    }, [anySizesAvailable, product]);

    const handleAddToBasket = (productId, sizeAndCount) => {
        var array = sizeAndCount.split(",");
        dispatch(incrementInBasket(productId, parseInt(array[0]), parseInt(array[1])));
        setShowBasketAlert(true);
    }

    const handleToggleFavourite = (productId) => {
        (currentlyFavourited)
            ? dispatch(removeFromFavourites(productId))
            : dispatch(addToFavourites(productId));
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
                    showBasketAlert && 
                        <Alert className="mt-3 mb-0" variant="success" onClose={() => setShowBasketAlert(false)} dismissible>
                            Added to basket!
                        </Alert>
                }
                {
                    anySizesAvailable
                        ? <Form.Group className="mt-2">
                            <Form.Label className="text-muted">Size:</Form.Label>
                            <Form.Control as="select" onChange={(e) => sizeSelectionWithCount.current = e.target.value}>
                                {
                                    product.sizesAvailable.map(entry => {
                                        return <option key={ entry.size } value={ [entry.size, entry.countInStock] }>{ entry.size }</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                        : <div></div>
                }
                <Row className="justify-content-between px-3">
                    { anySizesAvailable
                        ? <Button onClick={ () => handleAddToBasket(product._id, sizeSelectionWithCount.current) }>Add to cart</Button>
                        : <Button disabled>Unavailable</Button>
                    }
                    {
                        currentlyFavourited
                            ? <Button
                                variant="outline-danger ml-2"
                                onClick={ () => handleToggleFavourite(product._id) }
                                active
                            >
                                <IoMdHeartDislike />
                            </Button>
                            : <Button
                                variant="outline-danger ml-2"
                                onClick={ () => handleToggleFavourite(product._id) }
                            >
                                <RiHeartAddFill />
                            </Button>
                            
                    }
                    <h3 className="text-muted ml-auto">£{ product.price }</h3>
                </Row>
            </div>
        </div>
    </Container>
}

export default ProductScreen;