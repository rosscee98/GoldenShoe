import { BASKET_ADD_ITEM, BASKET_INCREMENT_ITEM, BASKET_REMOVE_ITEM } from "../constants/basketConstants";

function basketReducer(state={ basketItems: [] }, action) {
    switch (action.type) {
        case BASKET_ADD_ITEM:
            var item = action.payload;
            var product = state.basketItems.find(x => (x.product === item.product) && (x.size === item.size));
            if (product) {
                return { basketItems: state.basketItems.map(x =>
                    ((x.product === item.product) && (x.size === item.size))
                        ? item
                        : x
                )};
            } else {
                return { basketItems: [...state.basketItems, item] };
            };
        case BASKET_INCREMENT_ITEM:
            var item = action.payload;
            var product = state.basketItems.find(x => (x.product === item.product) && (x.size === item.size));
            if (product) {
                item = {...item, qty: (product.qty === item.countInStock) ? product.qty : product.qty + 1};
                return { basketItems: state.basketItems.map(x =>
                    ((x.product === item.product) && (x.size === item.size))
                        ? item
                        : x
                )};
            } else {
                item.qty = 1;
                return { basketItems: [...state.basketItems, item] };
            };
        case BASKET_REMOVE_ITEM:
            return { basketItems: state.basketItems.filter(x => ((x.product !== action.payload.product) || (x.size !== action.payload.size))) }
        default:
            return state;
    }
}

export {basketReducer};