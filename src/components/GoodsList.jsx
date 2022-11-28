import {GoodsItem} from "./GoodsItem";

function GoodsList(props) {
    const {goods = [], addItem = Function.prototype} = props;

    if (!goods.length) {
        <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key={item.id} {...item} addItem={addItem} />
            ))}
        </div>
    );
}

export {GoodsList};