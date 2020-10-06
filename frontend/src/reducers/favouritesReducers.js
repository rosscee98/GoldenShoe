import {
  FAVOURITES_ADD_ITEM,
  FAVOURITES_REMOVE_ITEM,
} from '../constants/favouriteConstants'

function favouritesReducer(state = { favouriteItems: [] }, action) {
  switch (action.type) {
    case FAVOURITES_ADD_ITEM:
      var item = action.payload
      return { favouriteItems: [...state.favouriteItems, item] }
    case FAVOURITES_REMOVE_ITEM:
      return {
        favouriteItems: state.favouriteItems.filter(
          (x) => x.product !== action.payload.product,
        ),
      }
    default:
      return state
  }
}

export { favouritesReducer }
