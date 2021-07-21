import React from 'react'


type ButtonsPropsType = {
    buttonName: string
    callBack: () => void
    value: number
    disabled: boolean
}

export const Button: React.FC<ButtonsPropsType> = (props) => {
    return (
        <button disabled={props.disabled} className={'button'} onClick={props.callBack}>{props.buttonName}</button>
    )
}