import React from 'react';

type DisplayPropsType = {
    value: number
    finishValue: number
    error: boolean
    warningMessage: boolean
}

export const Display: React.FC<DisplayPropsType> = React.memo((props) => {
    return (
        <div className={'display'}>
            {props.error ? <span className={'displayError'}>Incorrect values</span> :
                props.warningMessage ? <span className={'displayWarning'}>Enter correct values and press 'set'</span> :
                    <span className={props.value === props.finishValue ? 'displayRed' : ''}>{props.value}</span>}
        </div>
    )
})