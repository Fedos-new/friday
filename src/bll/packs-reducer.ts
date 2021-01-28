import {Dispatch} from 'redux'
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";
import {PacksAPI} from "../dal/PacksAPI";

const SET_PACKS = 'packs/SET_PACKS';
// const SET_MY_ID = 'packs/SET_MY_ID';

const initialState: PacksType = {
    cardPacks: [
        {   cardsCount: null,
            created: null,
            deckCover: null,
            grade: null,
            more_id: null,
            name: null,
            path: null,
            private: false,
            rating: null,
            shots: null,
            type: null,
            updated: null,
            user_id: null,
            user_name: null,
            __v: null,
            _id: null
        },
    ],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: null,
    pageCount: null,
}

export const packsReducer = (state: PacksType = initialState, action: ActionsType): PacksType => {
    switch (action.type) {
        case SET_PACKS:
            return {
                ...state,
                cardPacks:  [...action.value]
            }
        default:
            return state
    }
}

// actions
export const setPacksAC = (value: Array<PackType>) => ({type: SET_PACKS, value} as const)

//thunks
export const getPacksTC = () => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC('loading'))
    PacksAPI.getPacks({pageCount:50})
        .then(res => dispatch(setPacksAC(res.data.cardPacks)))
}


//types
export type PacksType = {
    cardPacks: PackType[],
    cardPacksTotalCount: number | null
    maxCardsCount: number | null
    minCardsCount: number | null
    page: number | null
    pageCount: number | null
}
export type PackType = {
    cardsCount: number | null
    created: Date | null
    deckCover: string | null
    grade: number | null
    more_id: string | null
    name: string | null
    path: string | null
    private: boolean
    rating: number | null
    shots: number | null
    type: string | null
    updated: Date | null
    user_id: string | null
    user_name: string | null
    __v: number | null
    _id: string | null
}

type ActionsType = ReturnType<typeof setPacksAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
