import React, { useState } from "react";
import './css/BasketItem.css'

import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter'
import Button from "./Button";

const BasketItem = ({
    uid,
    title,
    description,
    price,
    qty,
    isDeleted = false
}) => {
    const [changeIsDeleted, setChangeIsDeleted] = useState(isDeleted);
    const itemClassName = isDeleted ? 'BasketItem BasketItem--deleted' : 'BasketItem'
    const deleteButton = isDeleted ? <Button value="Восстановить" onClickHandler={() => { setChangeIsDeleted(!changeIsDeleted) }}></Button>
        : <Button value="Удалить"></Button>
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