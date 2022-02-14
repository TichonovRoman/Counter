import s from "./App.module.css";
import Button from "./Button";
import React, {ChangeEvent, useEffect, useState} from "react";

type SettingsPropsType = {
    setError: (value: number) => void
}

export const Settings = (props: SettingsPropsType) => {

    let [maxValue, setMaxValue] = useState("0")
    let [startValue, setStartValue] = useState('0')

    let [startValueError, setStartValueError] = useState(false)
    let [maxValueError, setMaxValueError] = useState(false)

    useEffect(()=>{
        let valueAsString = localStorage.getItem("startValue")
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }


    },[])

    useEffect(()=>{
        let valueAsString = localStorage.getItem("maxValue")
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }


    },[])




    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let changeMaxValue = e.currentTarget.value;
        if (changeMaxValue === startValue || maxValue === startValue) {
            props.setError(0)
            setMaxValue(changeMaxValue)
            setStartValueError(true)
        } else {
            setMaxValue(changeMaxValue)
            props.setError(1)
            setStartValueError(false)
        }
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue1 = e.currentTarget.value;

        if (startValue1 < "0" || startValue1 === maxValue || startValue === maxValue) {
            props.setError(0)
            setStartValue(startValue1)
            setMaxValueError(true)
        } else {
            props.setError(1)
            setStartValue(startValue1)
            setStartValueError(false)
            setMaxValueError(false)
        }
    }


    const callback = () => {
        props.setError(2)
        localStorage.setItem("maxValue", maxValue.toString())
        localStorage.setItem("startValue", startValue.toString())
    }

    const setDisabledButton = () => {
        if (startValueError || maxValueError) return true
    }

    return (
        <div className={s.settings}>
            <div>
                <span>max value:</span> <input type={"number"}
                                               value={maxValue}
                                               onChange={onChangeMaxValueHandler}
                                               className={maxValue === startValue || startValueError ? s.redNumber : ""}

            />
            </div>
            <div>
                <span>start value:</span> <input type={"number"}
                                                 value={startValue}
                                                 onChange={onChangeStartValueHandler}
                                                 className={maxValue === startValue || maxValueError || startValueError ? s.redNumber : ""}

            />

            </div>

            <Button name={'Set'}
                    callback={callback}
                    disabled={startValueError || maxValueError}/>
        </div>

    )
}