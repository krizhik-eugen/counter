import React from 'react'


type ButtonsPropsType = {
    buttonName: string
    callBack: () => void
    disabled?: boolean
}

export const Button: React.FC<ButtonsPropsType> = React.memo((props) => {
    return (
        <button disabled={props.disabled} className={'button'} onClick={props.callBack}>{props.buttonName}</button>
    )
})