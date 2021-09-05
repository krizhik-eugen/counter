import React from 'react';
import {Display} from "./Display";
import {Button} from "./Button";

type CounterPropsType = {
    startValue: number
    finishValue: number
    value: number
    callBackInc: () => void
    callBackReset: () => void
    error: boolean
    warning: boolean
    /* setSettingsDisplayOn: (settingsDisplayOn: boolean) => void*/
}

export const Counter: React.FC<CounterPropsType> = React.memo((props) => {
    return (
        <div className="counterWrapper">
            <Display error={props.error} finishValue={props.finishValue} value={props.value}
                     warningMessage={props.warning}/>
            <div className={'buttons'}>
                <Button disabled={props.value === props.finishValue || props.error || props.warning} buttonName={'inc'}
                        callBack={() => props.callBackInc()}/>
                <Button disabled={props.value === props.startValue || props.error || props.warning} buttonName={'reset'}
                        callBack={props.callBackReset}/>
                {/*<Button buttonName={'settings'} callBack={()=>(props.setSettingsDisplayOn(true))}/>*/}
            </div>
        </div>
    )
})