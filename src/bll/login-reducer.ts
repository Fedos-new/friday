

const SET_USER_DATA = 'SET_USER_DATA';

type InitialStateType = {
}

const initialState: InitialStateType = {

}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state}
        default:
            return state
    }
}

// actions
// export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login,isAuth}} as const)

//thunks




type ActionsType = any