import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers'
import { basketReducer } from './reducers/basketReducers'
import { favouritesReducer } from './reducers/favouritesReducers'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  basket: basketReducer,
  favourites: favouritesReducer,
})

const basketItems = Cookie.getJSON('basketItems') || []
const favouriteItems = Cookie.getJSON('favouriteItems') || []
const initialState = { basket: { basketItems }, favourites: { favouriteItems } }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
)

export default store
