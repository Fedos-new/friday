

const ADD_NEW_USER = 'addUserAC';

type InitialStateType = {
    name: string,
    password: string,
    checkPassword: string
}

const initialState: InitialStateType = {
    name: '',
    password: '',
    checkPassword: ''
}

export const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_NEW_USER:
            state.name = action.name
            state.password = action.password
            state.checkPassword = action.checkPassword
            return {...state}
        default:
            return state
    }
}

// actions

export const addUserAC = (name:string, password:string, checkPassword:string):addUserType => 
({type: 'addUserAC', name, password, checkPassword})

//thunks


type addUserType = {
    type: 'addUserAC',
    name:string, 
    password:string, 
    checkPassword:string
}

type ActionsType = addUserType