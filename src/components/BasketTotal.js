import React from "react";
import "./css/BasketTotal.css"

import ItemPrice from "./ItemPrice";

const BasketTotal = ({ value, currency }) => {
    return (
        <div className="BasketTotal">
            <div className="BasketTotal_main">
                <h3 className="BasketTotal_title">Всего</h3>
                <p className="BasketTotal_description">(Руб.)</p>
            </div>
            <div className="BasketTotal_price">
                <ItemPrice value={value} currency={currency}></ItemPrice>
            </div>
        </div>
    )
}

export default BasketTotal;

