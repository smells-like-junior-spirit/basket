import React from "react";
import './css/BasketItem.css'

import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter'
import ItemDelete from './ItemDelete'
import Button from "./Button";

const BasketItem = ({
    uid,
    title,
    description,
    price,
    qty,
    isDeleted = false
}) => {
    const itemClassName = isDeleted ? 'BasketItem BasketItem--deleted' : 'BasketItem'
    const deleteButton = isDeleted ? <Button value="Восстановить"></Button> : <ItemDelete></ItemDelete>
    return (
        <div className={itemClassName}>
            <ItemInfo title={title} description={description}></ItemInfo>
            <ItemPrice value={price} currency={'Руб.'}></ItemPrice>
            <Counter value={qty} uid={uid}></Counter>
            <ItemPrice value={qty * price} currency={'Руб.'}></ItemPrice>
            <div className="spaceDeleteButton">{deleteButton}</div>
        </div>
    )
}

export default BasketItem;