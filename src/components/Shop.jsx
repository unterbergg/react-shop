import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from "../config";

import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList"
import {Toast} from "./Toast";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setIsBasketShow] = useState(false);
    const [toastName, setToastName] = useState('');

    const addItem = (item) => {
        const itemIndex = order.findIndex((el) => el.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
        setToastName(item.name);
    }

    const decreaseItem = (item) => {
        const itemIndex = order.findIndex((el) => el.id === item);

        if (itemIndex > -1 && order[itemIndex].quantity > 1) {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity - 1,
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        } else {
            removeItem(item);
        }
    }

    const increaseItem = (item) => {
        const itemIndex = order.findIndex((el) => el.id === item);

        if (itemIndex > -1) {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem;
                }
            })

            setOrder(newOrder);
        }
    }

    const removeItem = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    }

    const handleBasketShow = () => {
        document.querySelector('main.content').classList.toggle('is-basket-show');
        setIsBasketShow(!isBasketShow);
    }

    const clearToast = () => {
        setToastName('');
    }

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json()).then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
        })
    }, [])

    return (
        <>
            <main className="container content">
                <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
                {loading ? <Preloader /> : <GoodsList goods={goods} addItem={addItem} />}

            </main>
            {
                isBasketShow &&
                <BasketList order={order}
                            handleBasketShow={handleBasketShow}
                            removeItem={removeItem}
                            decreaseItem={decreaseItem}
                            increaseItem={increaseItem}
                />
            }
            {toastName && <Toast name={toastName} clearToast={clearToast} />}
        </>
    );
}

export {Shop}