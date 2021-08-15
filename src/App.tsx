import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";

//раскомментировать код для реализации кнопки настроек и работы одного окна

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [finishValue, setFinishValue] = useState<number>(1)
    const [displayValue, setDisplayValue] = useState<number>(startValue)
    const [error, setError] = useState<boolean>(false)
    const [warning, setWarning] = useState<boolean>(false)

    useEffect(() => {
        let currentStartValue = localStorage.getItem('start-value');
        let currentFinishValue = localStorage.getItem('finish-value');
        if (currentStartValue && currentFinishValue) {
            setStartValue(JSON.parse(currentStartValue))
            setFinishValue(JSON.parse(currentFinishValue))
            setDisplayValue(JSON.parse(currentStartValue))
        }
    }, [])

    useEffect(() => {
            localStorage.setItem('start-value', JSON.stringify(startValue))
            localStorage.setItem('finish-value', JSON.stringify(finishValue))
        },
        [startValue, finishValue])

    const callBackInc = () => {
        displayValue < finishValue && setDisplayValue(displayValue + 1)
    }
    const callBackReset = () => {
        setDisplayValue(startValue)
    }

    const callBackSet = (start: number, finish: number) => {
        setStartValue(start);
        setFinishValue(finish);
        setDisplayValue(start)
        setWarning(false)
        /*setSettingsDisplayOn(false)*/
    }

    /*const [settingsDisplayOn, setSettingsDisplayOn] = useState<boolean>(false)*/

    return (
        <div className={'appWrapper'}>
            {/*{settingsDisplayOn ?*/}
                <CounterSettings
                callBackSet={callBackSet}
                setWarning={setWarning}
                warning={warning}
                error={error}
                setError={setError}

            />
                {/*:*/}
            <Counter
                startValue={startValue}
                finishValue={finishValue}
                value={displayValue}
                callBackInc={callBackInc}
                callBackReset={callBackReset}
                error={error}
                warning={warning}
                /*setSettingsDisplayOn={setSettingsDisplayOn}*/

            />
            {/*}*/}
        </div>
    );
}

export default App;
