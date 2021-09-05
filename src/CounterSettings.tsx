import React, {useEffect, useState} from 'react';
import {Button} from "./Button";
import {InputsArea} from './InputsArea';

type CounterSettingsPropsType = {
    callBackSet: (start: number, finish: number) => void
    setWarning: (warning: boolean) => void
    warning: boolean
    error: boolean
    setError: (error: boolean) => void
}

export const CounterSettings: React.FC<CounterSettingsPropsType> = React.memo((props) => {
    const [startValue, setStartValue] = useState<number>(0)
    const [finishValue, setFinishValue] = useState<number>(1)

    useEffect(() => {
        let currentStartValue = localStorage.getItem('start-value');
        let currentFinishValue = localStorage.getItem('finish-value');
        if (currentStartValue && currentFinishValue) {
            setStartValue(JSON.parse(currentStartValue))
            setFinishValue(JSON.parse(currentFinishValue))
            props.callBackSet(JSON.parse(currentStartValue), JSON.parse(currentFinishValue))
        }
    }, [])

    return (
        <div className="counterWrapper">
            <InputsArea setStartValue={setStartValue}
                        setFinishValue={setFinishValue}
                        startValue={startValue}
                        finishValue={finishValue}
                        setWarning={props.setWarning}
                        error={props.error}
                        setError={props.setError}/>
            <div className={'buttons'}>
                <Button disabled={!props.warning || props.error} buttonName={'set'}
                        callBack={() => props.callBackSet(startValue, finishValue)}/>
            </div>
        </div>
    )
})