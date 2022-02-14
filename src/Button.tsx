import React from 'react';
import s from "./App.module.css";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.button}
                onClick={props.callback}
                disabled={props.disabled}>{props.name}</button>
    );
};

export default Button;