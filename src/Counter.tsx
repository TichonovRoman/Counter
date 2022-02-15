import React, {useState} from "react";
import s from "./App.module.css";

import UniversalButton from "./Button";
import Button from "react-bootstrap/Button";
import {ButtonGroup, Form} from "react-bootstrap";


type CounterPropsType = {
    valueError: number
    intermediateStartValue: string | null
    intermediateMaxValue: string | null

}

export let Counter = (props: CounterPropsType) => {

    let startValue = props.intermediateStartValue
    let maxValue = props.intermediateMaxValue

    let [value, setValue] = useState(localStorage.getItem("startValue"))

    const plusAddValue = () => {
        if (value) {
            let valueAsString = JSON.parse(value) + 1
            value && setValue(valueAsString.toString())
        }

    }
    const resetValue = () => setValue(startValue)

    const disabledInc = () => value === maxValue || props.valueError === 0 || props.valueError === 1
    const disabledReset = () => value === startValue || props.valueError === 0 || props.valueError === 1

    const valueFulfill = () => {
        if (typeof value === "string") {return value}
    }

    const message = () => {

        if (props.valueError === 0) return <div>Incorrect value!</div>
        else if (props.valueError === 1) return <div>Enter values and press `set`</div>
        else if (props.valueError === 2) return  <Form.Control
            type="text"
            placeholder="Disabled readonly input"
            aria-label="Disabled input example"
            isInvalid = {value === maxValue}
            readOnly
            value = {valueFulfill()}
        />

    }


    return (
        <div className={s.counter}>
            <div>
                {message()}
            </div>
            <ButtonGroup className="mb-2">
            <UniversalButton name={'Inc'} callback={plusAddValue} disabled={disabledInc()}/>
            <UniversalButton name={'Reset'} callback={resetValue} disabled={disabledReset()}/>
            </ButtonGroup>

        </div>
    )
}
