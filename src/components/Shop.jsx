import {useEffect, useContext} from 'react';
import {API_KEY, API_URL} from "../config";

import {ShopContext} from "../context";

import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList"
import {Toast} from "./Toast";

function Shop() {
    const {goods, loading, order, isBasketShow, toastName, setGoods} = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            }
        }).then(response => response.json()).then(data => {
            setGoods(data.featured);
        })
    }, [])

    return (
        <>
            <main className="container content">
                <Cart quantity={order.length} />
                {loading ? <Preloader /> : <GoodsList />}

            </main>
            {
                isBasketShow &&
                <BasketList />
            }
            {toastName && <Toast />}
        </>
    );
}

export {Shop}