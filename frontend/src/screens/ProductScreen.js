import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {}
    }, [])

    return loading ? <h3 className="px-4">Loading...</h3> :
    error ? <h3 className="px-4">{error}</h3> :
    <div>
        <h3>ProductScreen</h3>
        <p>Name: { product.name }</p>
        <p>Image: { product.image }</p>
        <p>Price: { product.price }</p>
        <p>Category: { product.category }</p>
        <p>Count in stock: { product.countInStock }</p>
        <p>Description: { product.description }</p>
    </div>
}

export default ProductScreen;