import { v1 } from "uuid"

const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type ProductType = {
    username: string;
    name: string;
    cardcount: number;
    updates: string;
    cards: number;
    operation: string;
}

type InitialStateType = {
    products: Array<ProductType>
}

const initialState: InitialStateType = {
    products: [
        {username: v1(), name: 'Alek1', cardcount: 4, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek2', cardcount: 41, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek3', cardcount: 14, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek4', cardcount: 3, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek5', cardcount: 7, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek6', cardcount: 23, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek7', cardcount: 51, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek8', cardcount: 6, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek9', cardcount: 44, updates: '27.01.2020', cards: 23, operation: 'some'},
        {username: v1(), name: 'Alek10', cardcount: 10, updates: '27.01.2020', cards: 23, operation: 'some'},
    ]
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