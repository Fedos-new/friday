const SET_STATUS = 'APP/SET-STATUS';

const initialState: InitialStateType = {
    status: 'idle'
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded'

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}


export const setAppStatusAC = (status: RequestStatusType) => ({type: SET_STATUS, status} as const)
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>


type InitialStateType = {
    status: RequestStatusType
}

type ActionsType = any