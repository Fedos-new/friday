import {Dispatch} from 'redux';
import {newPasswordAPI} from '../components/newPassword/NewPasswordAPI';

const SET_ERROR = 'SET_ERROR'
const SET_SUCCESS = 'SET_SUCCESS'
const SET_STATUS = 'SET_STATUS'
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialStateType = {
	status: RequestStatusType
	error: string
	success: string
}

const initialState: InitialStateType = {
	status: 'idle',
	error: '',
	success: ''
}

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				error: action.error
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case SET_SUCCESS:
			return {
				...state,
				success: action.success
			}
		default:
			return state
	}
}

// actions
export const setErrorAC = (error: string) => {
	return {
		type: SET_ERROR,
		error
	} as const
}

export const setSuccessAC = (success: string) => {
	return {
		type: SET_SUCCESS,
		success
	} as const
}

export const setAppStatusAC = (status: RequestStatusType) => {
	return {
		type: SET_STATUS,
		status
	} as const
}


//thunks

export const sendNewPasswordTC = (newPassword: string, token: string) => (dispatch: Dispatch) => {
	dispatch(setAppStatusAC('loading'))
	newPasswordAPI.sendNewPassword(newPassword, token)
		.then(res => {
			dispatch(setSuccessAC(res.data.message))
			dispatch(setAppStatusAC('succeeded'))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console')
			dispatch(setErrorAC(error))
			dispatch(setAppStatusAC('failed'))
		})
}


type setErrorACType = ReturnType<typeof setErrorAC>
type setSuccessACType = ReturnType<typeof setSuccessAC>
type setAppStatusACType = ReturnType<typeof setAppStatusAC>

type ActionsType = setErrorACType | setSuccessACType | setAppStatusACType