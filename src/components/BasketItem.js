import React, { useState } from "react";
import './css/BasketItem.css'

import ItemInfo from './ItemInfo'
import ItemPrice from './ItemPrice'
import Counter from './Counter'
import Button from "./Button";
import { isVisible } from "@testing-library/user-event/dist/utils";

const BasketItem = ({
    uid,
    title,
    description,
    price,
    qty,
    isVisible,
    itemsState,
    setItemsState,
    changeVisibleBasketItem,
}) => {
    const itemClassName = isVisible ? 'BasketItem' : 'BasketItem BasketItem--deleted'
    const deleteButton = isVisible ? <Button value="Удалить" onClickHandler={() => { changeVisibleBasketItem({ uid }) }}></Button>
        : <Button value="Восстановить" onClickHandler={() => { changeVisibleBasketItem({ uid }) }} uid={uid}></Button>
    return (
        <div className={itemClassName}>
            <ItemInfo title={title} description={description}></ItemInfo>
            <ItemPrice value={price} currency={'Руб.'}></ItemPrice>
            <Counter value={qty} uid={uid} itemsState={itemsState} setItemsState={setItemsState}></Counter>
            <ItemPrice value={qty * price} currency={'Руб.'}></ItemPrice>
            <div className="spaceDeleteButton">{deleteButton}</div>
        </div>
    )
}

export default BasketItem;