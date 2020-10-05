import axios from 'axios';
import { PRODUCT_DETAILS_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstants';

const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
    } 
}

const listProductsInCategory = (category) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data.filter(product => product.category.toLowerCase() === category.toLowerCase())
        });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
    } 
}

const listFilteredProducts = (properties, category) => async (dispatch) => {
    try {
        properties = properties.map(p => p.toLowerCase());
        dispatch({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products");
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: (properties.length === 0)
            ? data.filter(product => product.category.toLowerCase() === category.toLowerCase())
            : data.filter(product => 
                (product.category.toLowerCase() === category.toLowerCase()) &&
                !(product.properties.every(property => properties.indexOf(property.toLowerCase()) === -1)))
            // this one returns an item if it meets any of the properties - needs to be if it's ALL the properties!
        });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAILURE, payload: error.message });
    } 
}

const detailsProduct = (productId) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get('/api/products/' + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_DETAILS_FAILURE, payload: error.message });
    }
}

export { listProducts, listProductsInCategory, listFilteredProducts, detailsProduct };