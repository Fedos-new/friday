import {profileAPI} from '../dal/ProfileAPI';
import {Dispatch} from 'react';
import {setIsLoggedInAC} from './login-reducer';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_MY_ID = 'SET_MY_ID'

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
	},
	myId: null
}

export const profileReducer = (state: ProfileInitialStateType = initialState, action: ActionsType): ProfileInitialStateType => {
	switch (action.type) {
		case SET_USER_PROFILE:
			return {...state, profile: action.payload}
		case SET_MY_ID: {
			return {
				...state,
				myId: action.myId
			}
		}
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
export const setMyIdAC = (myId: string | null) => ({type: SET_MY_ID, myId} as const)

//thunks
export const setProfileTC = () => (dispatch: Dispatch<ActionsType>) => {
	return profileAPI.getProfile()
		.then(res => {
		    dispatch(setMyIdAC(res.data._id))
				dispatch(setUserProfileAC(res.data))
				dispatch(setIsLoggedInAC(true))
			}
		)
		.catch(rej => {
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
	myId: string | null
}

type ActionsType = ReturnType<typeof setMyIdAC>
	| ReturnType<typeof setIsLoggedInAC>
	| ReturnType<typeof setUserProfileAC>

