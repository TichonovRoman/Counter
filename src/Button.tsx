import React from 'react';
import s from "./App.module.css";
import Button from "react-bootstrap/Button";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

const UniversalButton = (props: ButtonPropsType) => {
    return (
        <Button className={s.button}
                size="sm"
                disabled={props.disabled}
                onClick={props.callback}
                variant="primary">{props.name}</Button>
        // <button className={s.button}
        //         onClick={props.callback}
        //         disabled={props.disabled}>{props.name}</button>
    );
};

export default UniversalButton;