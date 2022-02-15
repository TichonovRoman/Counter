import s from "./App.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";
import UniversalButton from "./Button";
import {Carousel, Form} from "react-bootstrap";

type SettingsPropsType = {
    setError: (value: number) => void
    setIntermediateMaxValue: (value: string | null) => void
    setIntermediateStartValue: (value: string | null) => void
}

export const Settings = (props: SettingsPropsType) => {

    let [maxValue, setMaxValue] = useState("0")
    let [startValue, setStartValue] = useState('0')

    let [startValueError, setStartValueError] = useState(false)
    let [maxValueError, setMaxValueError] = useState(false)

    useEffect(() => {
        let valueAsString = localStorage.getItem("startValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }


    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem("maxValue")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }


    }, [])


    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let changeMaxValue = e.currentTarget.value;
        if (changeMaxValue === startValue || changeMaxValue < startValue) {
            props.setError(0)
            setMaxValue(changeMaxValue)
            setMaxValueError(true)
            setDisabledButton(true)
            setStartValueError(true)
        } else {
            setMaxValue(changeMaxValue)
            props.setError(1)
            setStartValueError(false)
            setMaxValueError(false)
            setDisabledButton(false)
        }
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let startValue1 = e.currentTarget.value;

        if (startValue1 < "0" || startValue1 === maxValue || startValue1 > maxValue) {
            props.setError(0)
            setStartValue(startValue1)
            setDisabledButton(true)
            setMaxValueError(true)
        } else {
            props.setError(1)
            setStartValue(startValue1)
            setStartValueError(false)
            setMaxValueError(false)
            setDisabledButton(false)
        }
    }

    const [disabledButton, setDisabledButton] = useState(true)

    const callback = () => {

        props.setError(2)
        localStorage.setItem("maxValue", maxValue.toString())
        localStorage.setItem("startValue", startValue.toString())
        props.setIntermediateMaxValue(maxValue.toString())
        props.setIntermediateStartValue(startValue.toString())
        setDisabledButton(true)
    }


    return (
        <div className={s.settings}>
            <div>
                <span>max value:</span>
                <Form.Control
                    type="number"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    value={maxValue}
                    onChange={onChangeMaxValueHandler}
                    isInvalid={startValue > maxValue || maxValue === startValue || startValueError}
                />


            </div>
            <div>
                <span>start value:</span>
                <Form.Control
                    type="number"
                    placeholder="Disabled readonly input"
                    aria-label="Disabled input example"
                    value={startValue}
                    onChange={onChangeStartValueHandler}
                    isInvalid={startValue > maxValue || maxValue === startValue || maxValueError || startValueError}

                />

            </div>
            <UniversalButton name={'Set'}
                             callback={callback}
                             disabled={disabledButton || startValueError || maxValueError}/>
        </div>

    )
}