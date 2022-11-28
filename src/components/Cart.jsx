function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props;

    return <div className="cart light-blue darken-3 white-text" onClick={handleBasketShow}>
        <i className="material-icons">shopping_cart</i>
        <span className="cart-quantity">{quantity ? quantity : null}</span>
    </div>
}

export {Cart};