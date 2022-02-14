import React, {useState} from "react";
import s from "./App.module.css";
import Button from "./Button";


export let Counter = () => {
    let startValue = 0
    let maxValue = 5

    let [value, setValue] = useState(startValue)

    const plusAddValue = () => setValue(value + 1)
    const resetValue = () => setValue(startValue)

    const disabledInc = () => value === maxValue
    const disabledReset = () => value === startValue

    return (
        <div className={s.counter}>
            <div>
                <div className={value === maxValue ? s.redNumber : s.outputBox}>{value}</div>
            </div>
            <Button name={'Inc'} callback={plusAddValue} disabled={disabledInc()}/>
            <Button name={'Reset'} callback={resetValue} disabled={disabledReset()}/>

        </div>
    );
}