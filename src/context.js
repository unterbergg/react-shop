import {createContext, useReducer} from "react";
import {reducer} from "./reducer";

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    toastName: ''
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, initialState);

    value.clearToast = () => {
        dispatch({type: "CLEAR_TOAST"});
    }

    value.addItem = (item) => {
        dispatch({type:"ADD_ITEM", payload: item});
    }

    value.removeItem = (itemId) => {
        dispatch({type: "REMOVE_ITEM", payload: {id: itemId}})
    }

    value.increaseItem = (item) => {
        dispatch({type: "INCREASE_ITEM", payload: item})
    }

    value.decreaseItem = (item) => {
        dispatch({type: "DECREASE_ITEM", payload: item})
    }

    value.handleBasketShow = () => {
        document.querySelector('main.content').classList.toggle('is-basket-show');
        dispatch({type:"HANDLE_BASKET_SHOW"});
    }

    value.setGoods = (data) => {
        dispatch({type: "SET_GOODS", payload: data})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}