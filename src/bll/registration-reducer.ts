import {Dispatch} from "redux";
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {registrationAPI, RegistrationParamsType} from "../dal/RegistrationAPI";

const ADD_NEW_USER = 'addUserAC';

const initialState: InitialStateType = {
    isRegistration: false
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {
               ...state,
                isRegistration: action.isRegistration
            }
        default:
            return state
    }
}

// actions

export const addUserAC = (isRegistration: boolean) =>({type: ADD_NEW_USER, isRegistration} as const)

//thunks

export const registrationTC = (data: RegistrationParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    registrationAPI.registration(data)
        .then(res => {
            dispatch(addUserAC(true))
            dispatch(setAppStatusAC('succeeded'))

        })
        .catch(rej => {
            dispatch(setAppErrorAC(rej.response.data.error))
            dispatch(setAppStatusAC('succeeded'))
        })
}


export type ActionsType = ReturnType<typeof addUserAC>
    |SetAppErrorActionType
    | SetAppStatusActionType


type InitialStateType = {
    isRegistration: boolean
}