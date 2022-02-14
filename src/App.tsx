import React, {useState} from 'react';
import logo from './logo.svg';
import './App.module.css';
import s from './App.module.css'
import Button from "./Button";
import {Counter} from "./Counter";
import {Settings} from "./Settings";

function App() {
return (
    <>
        <div>
            <Settings/>
        </div>
        <div>
            <Counter/>
        </div>

    </>

    )

}

export default App;
