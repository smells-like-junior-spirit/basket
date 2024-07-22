import React from "react";
import "./css/Button.css"

const Button = ({ onClickHandler, value, className }) => {
    return (
        <button className={'btn ' + className} onClick={onClickHandler}>
            {value}
        </button>
    )
}

export default Button;