import {useContext} from "react";
import {ShopContext} from "../context";

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity
    } = props;

    const {
        removeItem,
        decreaseItem,
        increaseItem
    } = useContext(ShopContext);
    
    return (
        <li className="collection-item" id={id}>
            {name}
            <span className="btn item-quantity" onClick={() => decreaseItem(id)}>
                -
            </span>
            x{quantity}

            <span className="btn item-quantity" onClick={() => increaseItem(id)}>
                +
            </span>

            = {price * quantity} руб.
            <span className="secondary-content" onClick={() => removeItem(id)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    );
}

export {BasketItem};