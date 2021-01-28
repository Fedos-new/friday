import {Dispatch} from "redux";
import { setProfileTC } from "./profile-reducer";

const SET_STATUS = 'APP/SET-STATUS';
const SET_ERROR = 'APP/SET_ERROR';
const SET_INITIALIZED = 'APP/SET_INITIALIZED';

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_INITIALIZED:
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}




export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS, status} as const)
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

export const setAppErrorAC = (error: RequestErrorType) => ({type: SET_ERROR, error} as const)
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>


export const initializedSuccessAC = (value: boolean) => {
    return {type: SET_INITIALIZED, value} as const
}

export const initializeAppTC = ()=> (dispatch: Dispatch<ActionsType>) => {
    const promise = dispatch(setProfileTC())
    Promise.all([promise])
        .then(() => {
                dispatch(initializedSuccessAC(true))
            }
        )
}




export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type RequestErrorType = string | null

type InitialStateType = {
    status: RequestStatusType,
    error: RequestErrorType,
    initialized: boolean
}

type ActionsType = any
