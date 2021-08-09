import React, {useEffect, useState} from 'react';


export const Test = () => {
    const [value, setValue] = useState<number>(0)
    useEffect(()=>{let stringValue = localStorage.getItem('counterValue');
        if (stringValue) {
            let newValue = JSON.parse(stringValue)
            setValue(newValue)}}, []) //оставляем массив пустой, чтобы после перезагрузке страницы один раз попасть в useEffect
    useEffect(()=> {localStorage.setItem('counterValue', JSON.stringify(value))},[value]) //добавляем в [] value, чтобы при каждом изменении value попадть в useEffet


    const incHandler = () => setValue(value + 1);
    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }
    const getFromLocalStorageHandler = () => {
        let stringValue = localStorage.getItem('counterValue');
        if (stringValue) {
            let newValue = JSON.parse(stringValue)
            setValue(newValue)
        }
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>

        </div>
    )
}
