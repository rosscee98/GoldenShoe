import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers";
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { basketReducer } from "./reducers/basketReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    basket: basketReducer
});

const basketItems = Cookie.getJSON("basketItems") || [];
const initialState = { basket: { basketItems } };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;