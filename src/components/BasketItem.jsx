function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeItem = Function.prototype,
        decreaseItem = Function.prototype,
        increaseItem = Function.prototype,
    } = props;
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