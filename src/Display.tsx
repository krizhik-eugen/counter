import React from 'react';

type DisplayPropsType = {
    value: number
    finishValue: number
}

export const Display: React.FC<DisplayPropsType> = (props) => {
    return (
        <div className={props.value === props.finishValue ? 'display displayRed' : 'display'}>
            {props.value}
        </div>
    )
}