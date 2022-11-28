function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addItem = Function.prototype
    } = props;

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p> {description} </p>
            </div>
            <div className="card-action">
                <button className="btn light-blue darken-3" onClick={() => addItem({
                    id, name, price
                })}>Купить</button>
                <span className="right" style={{ fontSize: '2rem' }}>{price} руб.</span>
            </div>
        </div>
    );
}

export {GoodsItem};