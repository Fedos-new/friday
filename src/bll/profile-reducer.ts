import {profileAPI} from "../dal/ProfileAPI";
import {Dispatch} from "react";
import {setIsLoggedInAC} from "./login-reducer";

const SET_USER_PROFILE = 'SET_USER_PROFILE';


const initialState: ProfileInitialStateType = {
    profile: {
        name: '',
        _id: '',
        avatar: '',
        created: '',
        updated: '',
        email: '',
        isAdmin: false,
        publicCardPacksCount: 0,
        rememberMe: false,
        verified: false,
        error: ''
    }
}

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.payload}
        default:
            return state
    }
}

// actions
export const setUserProfileAC = (payload: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload
    } as const
}
//thunks
export const setProfileTC = () => (dispatch: Dispatch<ActionsType>) => {
    return profileAPI.getProfile()
        .then(res => {
                dispatch(setUserProfileAC(res.data))
            dispatch(setIsLoggedInAC(true))
            }
        )
        .catch(e => {
            dispatch(setIsLoggedInAC(false))
        })
}


export type ProfileType = {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
}

export type ProfileInitialStateType = {
    profile: ProfileType
}

type ActionsType = any
