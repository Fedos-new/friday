import {Dispatch} from 'redux';
import {passwordRecoveryAPI} from '../dal/PasswordRecoveryAPI';

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

export const recoveryPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case SET_ERROR:
			return {
				...state,
				error: action.error
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
export const sendEmailTC = (email: string) => (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'))
	passwordRecoveryAPI.sendEmail(email)
		.then(res => {
			console.log(res)
			debugger
			if (res.status === 200) {
        // dispatch(setSuccessAC(res.data.info))
        dispatch(setAppStatusAC('succeeded'))
      }
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