

const ADD_NEW_USER = 'ADD_NEW_USER';

type InitialStateType = {
}

const initialState: InitialStateType = {

}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {...state}
        default:
            return state
    }
}

// actions

//thunks




type ActionsType = any