import s from "./App.module.css";
import Button from "./Button";
import React, {ChangeEvent, useState} from "react";


export const Settings = () => {

    let [maxValue, setMaxValue] = useState("0")
    let [startValue, setStartValue] = useState('0')

const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(e.currentTarget.value)
}
const setStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(e.currentTarget.value)
}



    // const callback = () => {
//1. отправляется макс value и старт value}

    return (
        <div className={s.settings}>
            <div>
                <span>max value:</span> <input type={"number"}
                                               value={maxValue}
                                               onChange={setMaxValueHandler}/>
            </div>
            <div>
                <span>start value:</span> <input type={"number"}
                                                 value={startValue}
                                                 onChange={setStartValueHandler}/>

            </div>

            <Button name={'Set'} callback={() =>{}} disabled={false}/>
        </div>

    )
}