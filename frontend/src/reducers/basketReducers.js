import { BASKET_ADD_ITEM, BASKET_REMOVE_ITEM, BASKET_SAVE_PAYMENT, BASKET_SAVE_SHIPPING } from "../constants/basketConstants";

function basketReducer(state={ basketItems: [], shipping: {}, payment: {} }, action) {
    switch (action.type) {
        case BASKET_ADD_ITEM:
            const item = action.payload;
            const product = state.basketItems.find(x => (x.product === item.product) && (x.size === item.size));
            if (product) {
                return { basketItems: state.basketItems.map(x =>
                    ((x.product === item.product) && (x.size === item.size))
                        ? item
                        : x
                )};
            } else {
                return { basketItems: [...state.basketItems, item] };
            };
        case BASKET_REMOVE_ITEM:
            return { basketItems: state.basketItems.filter(x => x.product !== action.payload) }
        // case BASKET_SAVE_SHIPPING:
        //     return {...state, shipping: action.payload}
        // case BASKET_SAVE_PAYMENT:
        //     return {...state, payment: action.payload}
        default:
            return state;
    }
}

export {basketReducer};