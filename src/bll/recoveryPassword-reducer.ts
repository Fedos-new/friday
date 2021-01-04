

const DELETE_PREV_PASS = 'DELETE_PREV_PASS';

type InitialStateType = {
}

const initialState: InitialStateType = {

}

export const recoveryPasswordReducer  = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case DELETE_PREV_PASS:
            return {...state}
        default:
            return state
    }
}

// actions

//thunks




type ActionsType = any