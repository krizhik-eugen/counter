import React, {ChangeEvent} from 'react';

type InputsAreaPropsType = {
    setStartValue: (value: number) => void
    setFinishValue: (value: number) => void
    startValue: number
    finishValue: number
    setWarning: (messageWarning: boolean) => void
    error: boolean
    setError: (error: boolean) => void
}

export const InputsArea: React.FC<InputsAreaPropsType> = React.memo((props) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setFinishValue(Number(e.currentTarget.value))
        if (Number(e.currentTarget.value) === props.startValue || props.startValue < 0) {
            props.setError(true)
        } else {
            props.setWarning(true)
            props.setError(false)
        }
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
        if (Number(e.currentTarget.value) > 0 || Number(e.currentTarget.value) === 0) {
            props.setWarning(true)
            props.setError(false);
        } else if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) === props.finishValue) {
            props.setError(true)
        }
    }
    if (props.startValue === props.finishValue) {
        props.setError(true)
    }

    return (
        <div className="inputAreaWrapper">
            <div className="inputArea">
                <div>max value:</div>
                <div><input className={props.startValue === props.finishValue ? 'errorInput' : ''}
                            type='number'
                            onChange={onChangeMaxValueHandler}
                            value={props.finishValue}
                            min={props.startValue}/></div>
            </div>
            <div className="inputArea">
                <div>start value:</div>
                <div>
                    <input className={props.error ? 'errorInput' : ''}
                           type='number'
                           onChange={onChangeMinValueHandler}
                           value={props.startValue}
                           max={props.finishValue}
                    />
                </div>
            </div>
        </div>
    )
})