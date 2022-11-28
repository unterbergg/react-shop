import {useEffect} from "react";

function Toast(props) {
    const {name = '', clearToast = Function.prototype} = props;

    useEffect(() => {
        const timerId = setTimeout(clearToast, 1000);

        return () => { clearTimeout(timerId); }
    }, [name])

    return <div id="toast-container">
        <span className="toast">
            {name} добавлен в корзину
        </span>
    </div>
}

export {Toast}