import Axios from "axios";
import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM } from "../constants/basketConstants";
import Cookie from "js-cookie";

const addToBasket = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get('/api/products/' + productId); //TODO: test if this line is necessary?
        dispatch({ type: BASKET_ADD_ITEM, payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            category: data.category,
            countInStock: data.countInStock,
            qty,
        }});
        const { basket: { basketItems } } = getState();
        Cookie.set("basketItems", JSON.stringify(basketItems));
    } catch (error) {
        console.log(error.message);
    }
}

const removeFromBasket = (productId, qty) => async (dispatch, getState) => {
    try {
        dispatch({ type: BASKET_REMOVE_ITEM, payload: productId });
    } catch (error) {
        console.log(error.message);
    }
}

export { addToBasket, removeFromBasket };