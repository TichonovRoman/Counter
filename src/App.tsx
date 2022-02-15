import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import s from './App.module.css'
import {Counter} from "./Counter";
import {Settings} from "./Settings";
import {Col, Container, Row} from "react-bootstrap";

function App() {

    let [error, setError] = useState(2)
    let [intermediateStartValue, setIntermediateStartValue] = useState(localStorage.getItem("startValue"))
    let [intermediateMaxValue, setIntermediateMaxValue] = useState(localStorage.getItem("maxValue"))



    return (
        <Container>
           <Row noGutters>
               <Col>
                   <Settings setError={setError}
                             setIntermediateStartValue={setIntermediateStartValue}
                             setIntermediateMaxValue = {setIntermediateMaxValue}



                   />
               </Col>


            </Row>
            <Row>
                <Col>
                    <Counter valueError={error}
                             intermediateStartValue = {intermediateStartValue}
                             intermediateMaxValue = {intermediateMaxValue}
                    />
                </Col>



            </Row>

        </Container>

    )

}

export default App;
