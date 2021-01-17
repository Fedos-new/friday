const SET_STATUS = 'APP/SET-STATUS';
const SET_ERROR = 'APP/SET_ERROR';

const initialState: InitialStateType = {
    status: 'idle',
    error: null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS, status} as const)
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

export const setAppErrorAC = (error: RequestErrorType) => ({type: SET_ERROR, error} as const)
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type RequestErrorType = string | null

type InitialStateType = {
    status: RequestStatusType,
    error: RequestErrorType
}

type ActionsType = any