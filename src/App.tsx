import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {incDisplayValueAC, resetDisplayValueAC, setErrorAC, setValuesAC, setWarningAC} from "./BLL/counter-reducer";

//раскомментировать код для реализации кнопки настроек и работы одного окна

function App() {
    const dispatch = useDispatch()
    const displayValue = useSelector<AppStateType, number>(store => store.counter.displayValue)
    const startValue = useSelector<AppStateType, number>(store => store.counter.startValue)
    const finishValue = useSelector<AppStateType, number>(store => store.counter.finishValue)
    const error = useSelector<AppStateType, boolean>(store => store.counter.error)
    const warning = useSelector<AppStateType, boolean>(store => store.counter.warning)

    const callBackInc = () => {
        displayValue < finishValue && dispatch(incDisplayValueAC())
    };
    const callBackReset = () => {
        dispatch(resetDisplayValueAC())
    };
    const setError = (error: boolean) => {
        dispatch(setErrorAC(error))
    };
    const setWarning = (warning: boolean) => {
        dispatch(setWarningAC(warning))
    };
    const callBackSet = (start: number, finish: number) => {
        dispatch(setValuesAC(start, finish))
    }

    /*const [startValue, setStartValue] = useState<number>(0)
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
        /!*setSettingsDisplayOn(false)*!/ //для работы в одном окне
    }

    /!*const [settingsDisplayOn, setSettingsDisplayOn] = useState<boolean>(false)*!/ //для работы в одном окне
*/
    
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
                /*setSettingsDisplayOn={setSettingsDisplayOn}*/ //для работы в одном окне

            />
            {/*}*/}
        </div>
    );
}

export default App;
