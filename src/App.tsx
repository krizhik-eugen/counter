import React, {useState} from 'react';
import './App.css';
import {Display} from './Display';
import {Button} from "./Button";


function App() {
    const startValue = 0
    const finishValue = 5

    const [value, setValue] = useState(startValue)

    const callBackInc = () => {
        value < finishValue && setValue(value + 1)
    }
    const callBackReset = () => {
        setValue(startValue)
    }

    return (
        <div className="counterWrapper">
            <Display finishValue={finishValue} value={value}/>
            <div className={'buttons'}>
                <Button disabled={value === finishValue} value={value} buttonName={'inc'}
                        callBack={() => callBackInc()}/>
                <Button disabled={value === startValue} value={value} buttonName={'reset'} callBack={callBackReset}/>
            </div>
        </div>
    );
}

export default App;
