import {combineReducers} from "redux";
import {createStore} from "redux";
import {counterReducer} from "./counter-reducer";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer)

store.subscribe(() => {
    localStorage.setItem('start-value', JSON.stringify( store.getState().counter.startValue))
    localStorage.setItem('finish-value', JSON.stringify( store.getState().counter.finishValue))
})

export type AppStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store


