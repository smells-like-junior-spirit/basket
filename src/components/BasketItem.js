import React from "react";
import './css/BasketItem.css'

import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter'

const BasketItem = ({
    uid,
    title,
    description,
    price,
    qty
}) => {
    return (
        <div className="BasketItem">
            <ItemInfo title={title} description={description}></ItemInfo>
            <ItemPrice value={price} currency={'Руб.'}></ItemPrice>
            <Counter value={qty} uid={uid}></Counter>
            <ItemPrice value={qty * price} currency={'Руб.'}></ItemPrice>
        </div>
    )
}

export default BasketItem;