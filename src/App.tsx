import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import s from './App.module.css'
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {Col, Container, Form, Row, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {

    let [error, setError] = useState(2)
    let [intermediateStartValue, setIntermediateStartValue] = useState(localStorage.getItem("startValue"))
    let [intermediateMaxValue, setIntermediateMaxValue] = useState(localStorage.getItem("maxValue"))



    return (
        <>
            <Stack gap={0} className="col-md-5 mx-auto">
                <Settings setError={setError}
                          setIntermediateStartValue={setIntermediateStartValue}
                          setIntermediateMaxValue = {setIntermediateMaxValue}
                />
                <Counter valueError={error}
                         intermediateStartValue = {intermediateStartValue}
                         intermediateMaxValue = {intermediateMaxValue}
                />

            </Stack>
          </>

    )

}

export default App;
