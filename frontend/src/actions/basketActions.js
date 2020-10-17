import Axios from 'axios'
import Cookie from 'js-cookie'
import {
  BASKET_ADD_ITEM,
  BASKET_INCREMENT_ITEM,
  BASKET_REMOVE_ITEM,
} from '../constants/basketConstants'

const addToBasket = (productId, size, countInStock, qty) => async (
  dispatch,
  getState,
) => {
  try {
    const { data } = await Axios.get(`/api/products/${productId}`)
    dispatch({
      type: BASKET_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        category: data.category,
        availableSizes: data.availableSizes,
        size,
        countInStock,
        qty,
      },
    })
    const {
      basket: { basketItems },
    } = getState()
    Cookie.set('basketItems', JSON.stringify(basketItems))
  } catch (error) {
    console.log(error.message)
  }
}

const incrementInBasket = (productId, size, countInStock) => async (
  dispatch,
  getState,
) => {
  try {
    const { data } = await Axios.get(`/api/products/${productId}`)
    dispatch({
      type: BASKET_INCREMENT_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        category: data.category,
        availableSizes: data.availableSizes,
        size,
        countInStock,
      },
    })
    const {
      basket: { basketItems },
    } = getState()
    Cookie.set('basketItems', JSON.stringify(basketItems))
  } catch (error) {
    console.log(error.message)
  }
}

const removeFromBasket = (productId, size) => async (dispatch, getState) => {
  try {
    dispatch({
      type: BASKET_REMOVE_ITEM,
      payload: { product: productId, size },
    })
    const {
      basket: { basketItems },
    } = getState()
    Cookie.set('basketItems', JSON.stringify(basketItems))
  } catch (error) {
    console.log(error.message)
  }
}

export { addToBasket, incrementInBasket, removeFromBasket }
