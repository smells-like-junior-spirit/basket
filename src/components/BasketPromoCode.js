import React from "react";
import "./css/BasketPromoCode.css"

import Button from "./Button"

const BasketPromoCode = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit')
    }
    return (
        <div className="BasketPromoCode">
            <form onSubmit={handleSubmit}>
                <input
                    className="BasketPromoCode_input"
                    placeholder="Промокод"
                ></input>
                <Button value='Применить' onClickHandler={() => alert('Применить')} ></Button>
            </form>
        </div>
    )
}

export default BasketPromoCode;