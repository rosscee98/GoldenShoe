import Axios from "axios";
import Cookie from "js-cookie";
import { FAVOURITES_ADD_ITEM, FAVOURITES_REMOVE_ITEM } from "../constants/favouriteConstants";
import { useSelector } from 'react-redux';

// const addToBasket = (productId, size, countInStock, qty) => async (dispatch, getState) => {
//     try {
//         const { data } = await Axios.get('/api/products/' + productId);
//         dispatch({ type: BASKET_ADD_ITEM, payload: {
//             product: data._id,
//             name: data.name,
//             image: data.image,
//             price: data.price,
//             category: data.category,
//             availableSizes: data.availableSizes,
//             size,
//             countInStock,
//             qty,
//         }});
//         const { basket: { basketItems } } = getState();
//         Cookie.set("basketItems", JSON.stringify(basketItems));
//     } catch (error) {
//         console.log(error.message);
//     }
// }

const addToFavourites = (productId) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get('/api/products/' + productId);
        dispatch({ type: FAVOURITES_ADD_ITEM, payload: { 
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            category: data.category
        }});
        const { favourites: { favouriteItems } } = getState();
        Cookie.set("favouriteItems", JSON.stringify(favouriteItems));
    } catch (error) {
        console.log(error.message);
    }
}

const removeFromFavourites = (productId) => async (dispatch, getState) => {
    try {
        dispatch({ type: FAVOURITES_REMOVE_ITEM, payload:
            { product: productId }
        });
        const { favourites: { favouriteItems } } = getState();
        Cookie.set("favouriteItems", JSON.stringify(favouriteItems));
    } catch (error) {
        console.log(error.message);
    }
}

export { addToFavourites, removeFromFavourites };