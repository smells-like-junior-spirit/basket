import React from "react";
import './css/BasketHeader.css'

const BasketHeader = (props) => {
    return (
        <div className="BasketHeader">
            <div className="BasketHeader_h2">Заголовок h2</div>
            <span className="Basket_header_count">Всего типов товара: {props.count}</span>
        </div>
    )
}

export default BasketHeader;