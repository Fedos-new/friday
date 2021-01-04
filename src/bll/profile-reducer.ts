

const SET_USER_PROFILE = 'SET_USER_PROFILE';

type InitialStateType = {
}

const initialState: InitialStateType = {

}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state}
        default:
            return state
    }
}

// actions

//thunks




type ActionsType = any