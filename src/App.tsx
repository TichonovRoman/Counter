import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import s from './App.module.css'
import Button from "./Button";
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {

    let [error, setError] = useState(2)

    return (
        <>
            <div>
                <Settings setError={setError}/>
            </div>
            <div>
                <Counter valueError={error}/>
            </div>

        </>

    )

}

export default App;
