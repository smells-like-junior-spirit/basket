import React, { useState } from "react";
import "./css/Counter.css"

import Button from "./Button";

const Counter = ({ value, uid }) => {

    const [qty, setQty] = useState(value);

    const qtyButtonAdd = () => {
        setQty(qty + 1);
    }

    const qtyButtonSub = () => {
        setQty(qty - 1 > 0 ? qty - 1 : 0);
    }

    const qtyInputChange = (ev) => {
        let qty = parseInt(ev.target.value);

        if (qty < 0 || isNaN(qty)) {
            qty = 0;
        }

        setQty(qty);
    }

    return (
        <div className="Counter">
            <div className="Counter_into">

                <Button
                    value="-"
                    onClickHandler={qtyButtonSub}
                ></Button>

                <input
                    className="Counter_input"
                    value={qty}
                    onChange={qtyInputChange}
                ></input>

                <Button
                    value="+"
                    onClickHandler={qtyButtonAdd}
                ></Button>
            </div>
        </div >
    )
}

export default Counter;