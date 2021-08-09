import React from 'react';

type InputsAreaPropsType = {
    setStartValue: (value: number) => void
    setFinishValue: (value: number) => void
    startValue: number
    finishValue: number
}

export const InputsArea: React.FC<InputsAreaPropsType> = (props) => {
    return (
        <div className="inputAreaWrapper">
            <div className="inputArea">
                <div>max value</div>
                <div><input type='number'
                            onChange={(e) => props.setFinishValue(Number(e.currentTarget.value))}
                            value={props.finishValue}/></div>
            </div>
            <div className="inputArea">
                <div>min value</div>
                <div><input type='number'
                            onChange={(e) => props.setStartValue(Number(e.currentTarget.value))}
                            value={props.startValue}/>
                </div>
            </div>
        </div>
    )
}