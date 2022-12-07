import {useContext} from "react";
import {ShopContext} from "../context";

function Cart(props) {
    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext);

    const quantity = order.length;
    return <div className="cart light-blue darken-3 white-text" onClick={handleBasketShow}>
        <i className="material-icons">shopping_cart</i>
        <span className="cart-quantity">{quantity ? quantity : null}</span>
    </div>
}

export {Cart};