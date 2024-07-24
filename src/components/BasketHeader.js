import React from "react";
import './css/BasketHeader.css'

const BasketHeader = (props) => {
    return (
        <div className="BasketHeader">
            <div className="BasketHeader_h2">Корзина</div>
            <div className="Basket_header_count">Всего типов товаров: {props.count}</div>
        </div>
    )
}

export default BasketHeader;