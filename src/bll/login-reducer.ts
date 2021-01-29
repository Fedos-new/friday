import {Dispatch} from 'redux'
import {authAPI, LoginParamsType} from "../dal/LoginAPI";
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";

const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';


const initialState: InitialStateType = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.value
            }
        default:
            return state
    }
}

// actions
export const setIsLoggedInAC = (value: boolean) => ({type: SET_IS_LOGGED_IN, value} as const)

//thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(rej => {
            dispatch(setAppErrorAC(rej.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(rej => {
            dispatch(setAppErrorAC(rej.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}


type InitialStateType = {
    isLoggedIn: boolean
}
type ActionsType = ReturnType<typeof setIsLoggedInAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
