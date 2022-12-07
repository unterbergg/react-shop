export function reducer(state, {type, payload}) {
    switch (type) {
        case "SET_GOODS" :
            return {
                ...state,
                goods: payload || [],
                loading: false
            }
        case "CLEAR_TOAST":
            return {
                ...state,
                toastName: ''
            }
        case "ADD_ITEM":{
            const itemIndex = state.order.findIndex((el) => el.id === payload.id);

            let newOrder = null;
            if (itemIndex < 0) {
                const newItem = {
                    ...payload,
                    quantity: 1
                }
                newOrder = [...state.order, newItem];
            } else {
                newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                    } else {
                        return orderItem;
                    }
                })
            }
            return {
                ...state,
                order: newOrder,
                toastName: payload.name
            }
        }
        case "REMOVE_ITEM":
            return {
                ...state,
                order: state.order.filter(el => el.id !== payload.id)
            }
        case "INCREASE_ITEM": {
            const itemIndex = state.order.findIndex((el) => el.id === payload);
            if (itemIndex > -1) {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity + 1,
                        }
                    } else {
                        return orderItem;
                    }
                })

                return {
                    ...state,
                    order: newOrder
                }
            } else {
                return {
                    ...state,
                    order: state.order
                }
            }
        }
        case "DECREASE_ITEM": {
            const itemIndex = state.order.findIndex((el) => el.id === payload);
            if (itemIndex > -1 && state.order[itemIndex].quantity > 1) {
                const newOrder = state.order.map((orderItem, index) => {
                    if (index === itemIndex) {
                        return {
                            ...orderItem,
                            quantity: orderItem.quantity - 1,
                        }
                    } else {
                        return orderItem;
                    }
                })

                return {
                    ...state,
                    order: newOrder
                }
            } else {
                return {
                    ...state,
                    order: state.order.filter(el => el.id !== payload.id)
                }
            }
        }
        case "HANDLE_BASKET_SHOW":
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }
        default:
            return state;
    }
}