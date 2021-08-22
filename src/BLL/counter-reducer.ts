const initialState = {
    displayValue: 0,
    startValue: 0,
    finishValue: 0,
    error: false,
    warning: false,
}
type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case "INC-DISPLAY-VALUE":
            return {
                ...state, displayValue: state.displayValue + 1
            }
        case "RESET-DISPLAY-VALUE":
            return {
                ...state, displayValue: state.startValue
            }
        case 'SET-ERROR':
            return {...state, error: action.error}
        case 'SET-WARNING':
            return {...state, warning: action.warning}
        case 'SET-SETTINGS-VALUES':
            return {
                ...state,
                startValue: action.startValue,
                finishValue: action.finishValue,
                displayValue: action.startValue,
                warning: false
            }

        /*case "SET-VALUES-FROM-LOCAL-STORAGE":
            return {
                ...state, displayValue: action.value
            }*/


        default:
            return state
    }
}

export const incDisplayValueAC = () => {
    return {type: 'INC-DISPLAY-VALUE'} as const
}

export const resetDisplayValueAC = () => {
    return {type: 'RESET-DISPLAY-VALUE'} as const
}

export const setErrorAC = (error: boolean) => {
    return {type: 'SET-ERROR', error} as const
}
export const setWarningAC = (warning: boolean) => {
    return {type: 'SET-WARNING', warning} as const
}

export const setValuesAC = (startValue: number, finishValue: number) => {
    return {
        type: 'SET-SETTINGS-VALUES',
        startValue,
        finishValue,
    } as const
}
export const setValuesFromLocalStorageAC = (value: number) => {
    return {type: 'SET-VALUES-FROM-LOCAL-STORAGE', value} as const
}


export type IncDisplayValueAT = ReturnType<typeof incDisplayValueAC>
export type ResetDisplayValueAT = ReturnType<typeof resetDisplayValueAC>
export type SetErrorAT = ReturnType<typeof setErrorAC>
export type SetWarningAT = ReturnType<typeof setWarningAC>
export type SetValuesAT = ReturnType<typeof setValuesAC>

export type SetValuesFromLocalStorageAT = ReturnType<typeof setValuesFromLocalStorageAC>

export type ActionType = IncDisplayValueAT
    | SetValuesFromLocalStorageAT
    | ResetDisplayValueAT
    | SetErrorAT
    | SetWarningAT
    | SetValuesAT