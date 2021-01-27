import {Dispatch} from 'redux'
import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "./app-reducer";

const GET_PACKS = 'GET_PACKS';

const initialState: PacksType = {
    cardPacks: [
        {   _id: "5eb6cef840b7bf1cf0d8122d",
            user_id: "5eb543f6bea3ad21480f1ee7",
            name: "no Name",
            path: "/def", // папка
            cardsCount: 25,
            grade: 0, // средняя оценка карточек
            shots: 0,// количество попыток
            rating: 0, // лайки
            type: "pack", // ещё будет "folder" (папка)
            created: "2020-05-09T15:40:40.339Z",
            updated: "2020-05-09T15:40:40.339Z",
            __v: 0
        },
        {   _id: "5eb6cef840b7bf34343343434343",
            user_id: "5eb543f6bea3ad21480f1ee9",
            name: "Name",
            path: "/def", // папка
            cardsCount: 25,
            grade: 0, // средняя оценка карточек
            shots: 0,// количество попыток
            rating: 0, // лайки
            type: "pack", // ещё будет "folder" (папка)
            created: "2020-05-09T15:40:40.339Z",
            updated: "2020-05-09T15:40:40.339Z",
            __v: 0
        }
    ],
    cardPacksTotalCount: null,
    maxCardsCount: null,
    minCardsCount: null,
    page: null,
    pageCount: null,
}

export const packsReducer = (state: PacksType = initialState, action: ActionsType): PacksType => {
    switch (action.type) {
        case GET_PACKS:
            return {
                ...state,
                cardPacks:  [...action.value]
            }
        default:
            return state
    }
}

// actions
export const getPackAC = (value: Array<PackType>) => ({type: GET_PACKS, value} as const)


//thunks


//types
export type PacksType = {
    cardPacks: PackType[],
    cardPacksTotalCount: number | null
    maxCardsCount: number | null
    minCardsCount: number | null
    page: number | null
    pageCount: number | null
}
type PackType = {
    _id: string
    user_id: string
    name: string
    path: string // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}

type ActionsType = ReturnType<typeof getPackAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
