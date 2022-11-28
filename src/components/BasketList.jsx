import {BasketItem} from "./BasketItem";

function BasketList(props) {
    const {
        order = [],
        handleBasketShow = Function.prototype,
        removeItem = Function.prototype,
        decreaseItem = Function.prototype,
        increaseItem = Function.prototype,
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0);

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Корзина
                <span className="secondary-content" onClick={handleBasketShow}>
                    <i className="material-icons">close</i>
                </span>
            </li>
            {
                order.length ? order.map(item => (
                    <BasketItem
                        key={item.id}
                        removeItem={removeItem}
                        decreaseItem={decreaseItem}
                        increaseItem={increaseItem}
                        {...item}
                    />
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
        </ul>
    );
}

export {BasketList};