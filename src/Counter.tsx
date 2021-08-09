import React from 'react';
import {Display} from "./Display";
import {Button} from "./Button";

type CounterPropsType = {
    startValue: number
    finishValue: number
    value: number
    callBackInc: () => void
    callBackReset: () => void
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className="counterWrapper">
            <Display finishValue={props.finishValue} value={props.value}/>
            <div className={'buttons'}>
                <Button disabled={props.value === props.finishValue} buttonName={'inc'}
                        callBack={() => props.callBackInc()}/>
                <Button disabled={props.value === props.startValue} buttonName={'reset'}
                        callBack={props.callBackReset}/>
            </div>
        </div>
    )
}