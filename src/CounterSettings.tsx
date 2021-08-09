import React, {useState} from 'react';
import {Button} from "./Button";
import { InputsArea } from './InputsArea';

type CounterSettingsPropsType = {
    callBackSet: (min: number, max: number) => void
}

export const CounterSettings: React.FC<CounterSettingsPropsType> = (props) => {
    const [startValue, setStartValue] = useState(0)
    const [finishValue, setFinishValue] = useState(1)

    return (
        <div className="counterWrapper">
            <InputsArea setStartValue={setStartValue} setFinishValue={setFinishValue} startValue={startValue} finishValue={finishValue}/>
            <div className={'buttons'}>
                <Button /*disabled={props.value === props.finishValue}*/ buttonName={'set'}
                        callBack={() => props.callBackSet(startValue,finishValue)}/>
            </div>
        </div>
    )
}