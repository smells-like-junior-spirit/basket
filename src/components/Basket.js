import React, { useState } from "react";
import "./css/Basket.css";

import BasketHeader from "./BasketHeader";
import BasketItem from "./BasketItem";
import BasketPromoInfo from "./BasketPromoInfo";
import BasketTotal from "./BasketTotal";
import BasketPromoCode from "./BasketPromoCode";
import Button from "./Button";

const Basket = ({ items }) => {
    const [itemsState, setItemsState] = useState(items);
    const countItemsInBasket = items.reduce((acc, next) => acc + next.qty, 0);
    const amountTotal = items.reduce(
        (acc, next) => acc + next.price * next.qty, 500
    );

    // const [isVisible, setIsVisible] = useState(isVisible);
    const changeVisibleBasketItem = ({ uid }) => {
        let newItemsState = Array.from(itemsState);
        let index = newItemsState.findIndex(item => item.uid === uid);
        if (newItemsState[index].isVisible == true) {
            newItemsState[index].isVisible = false;
        } else newItemsState[index].isVisible = true;
        setItemsState(newItemsState);
    }

    return (
        <div className="Basket">
            <BasketHeader count={countItemsInBasket} />

            <div className="Basket__items">
                {itemsState.map((item) => (
                    <BasketItem {...item} key={item.uid} itemsState={itemsState} setItemsState={setItemsState}
                        changeVisibleBasketItem={changeVisibleBasketItem} />
                ))}
                <BasketPromoInfo code={"REACTCODE"} />
                <BasketTotal value={amountTotal} currency={"Руб."} />
            </div>

            <BasketPromoCode code={""} />
            <Button
                value="Продолжить покупку"
                onClickHandler={() => alert("Продолжить")}
                className="btn-proceed"
            />
        </div>
    )
}

export default Basket