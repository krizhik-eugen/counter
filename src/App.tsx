import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";


function App() {
    /*const startValue = 0
    const finishValue = 5*/

    const [startValue, setStartValue] = useState(0)
    const [finishValue, setFinishValue] = useState(1)

    const [value, setValue] = useState(startValue)


    const callBackInc = () => {
        value < finishValue && setValue(value + 1)
    }
    const callBackReset = () => {
        setValue(startValue)
    }

    const callBackSet = (min: number, max: number) => {
        setStartValue(min);
        setFinishValue(max);
        setValue(min)
    }

    return (
        <div className={'appWrapper'}>
            <CounterSettings callBackSet={callBackSet} />
            <Counter
                startValue={startValue}
                finishValue={finishValue}
                value={value}
                callBackInc={callBackInc}
                callBackReset={callBackReset}/>

        </div>
    );
}

export default App;
