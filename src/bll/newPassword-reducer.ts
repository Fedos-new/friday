

const SET_NEW_PASS = 'SET_NEW_PASS';

type InitialStateType = {
}

const initialState: InitialStateType = {

}

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_NEW_PASS:
            return {...state}
        default:
            return state
    }
}

// actions

//thunks




type ActionsType = any