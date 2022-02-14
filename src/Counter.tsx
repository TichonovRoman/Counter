import React, {useState} from "react";
import s from "./App.module.css";
import Button from "./Button";

type CounterPropsType = {
    valueError: number

}

export let Counter = (props: CounterPropsType) => {
    let startValue = localStorage.getItem("startValue")
    let maxValue = localStorage.getItem("maxValue")

    let [value, setValue] = useState(startValue)

    const plusAddValue = () => {
        if(value) {let valueAsString = JSON.parse(value) + 1
            value && setValue(valueAsString.toString())
        }

        }
    const resetValue = () => setValue(startValue)

    const disabledInc = () => value === maxValue || props.valueError === 0 || props.valueError === 1
    const disabledReset = () => value === startValue || props.valueError === 0 || props.valueError === 1

    const message = () => {

        if (props.valueError === 0) return <div>Incorrect value!</div>
        else if (props.valueError === 1) return <div>Enter values and press `set`</div>
        else if (props.valueError === 2) return <div className={value === maxValue ? s.redNumber : s.outputBox}>{value}</div>

    }


    return (
        <div className={s.counter}>
            <div>
                {message()}
            </div>
            <Button name={'Inc'} callback={plusAddValue} disabled={disabledInc()}/>
            <Button name={'Reset'} callback={resetValue} disabled={disabledReset()}/>

        </div>
    )
}
