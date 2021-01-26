import {Dispatch} from 'redux';
import {AppRootState} from './store';
import {searchAPI} from '../dal/Search';
import {ThunkAction} from 'redux-thunk';
import {RequestStatusType} from './newPassword-reducer';

const SET_PACKS = 'SET_PACKS'
const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
const SET_MIN_MAX_PRICE_RANGE = 'SET_MIN_MAX_PRICE_RANGE';
const SET_MIN_COUNT_MAX_COUNT = 'SET_MIN_COUNT_MAX_COUNT';
const SET_SORTING = 'SET_SORTING';
const SET_PACKS_STATUS = 'SET_PACKS_STATUS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_PER_PAGE = 'SET_COUNT_PER_PAGE';
const SET_TOTAL_PACKS_COUNT = 'SET_TOTAL_PACKS_COUNT';
const SET_ERROR_PACKS_MESSAGE = 'SET_ERROR_PACKS_MESSAGE';


// const initialState = {
// 	items: [
// 		{id: '1', productName: 'car1', price: 1000},
// 		{id: '2', productName: 'phone', price: 200},
// 		{id: '3', productName: 'model', price: 100},
// 		{id: '4', productName: 'window1', price: 30},
// 		{id: '5', productName: 'flat', price: 200},
// 		{id: '6', productName: 'model2', price: 100},
// 		{id: '7', productName: 'note1', price: 30},
// 		{id: '8', productName: 'cow1', price: 200},
// 		{id: '9', productName: 'pen22', price: 100},
// 		{id: '10', productName: 'food', price: 100},
// 		{id: '11', productName: 'car', price: 1000},
// 		{id: '12', productName: 'house', price: 200},
// 		{id: '13', productName: 'model3', price: 100},
// 		{id: '14', productName: 'window', price: 30},
// 		{id: '15', productName: 'yandex', price: 200},
// 		{id: '16', productName: 'model4', price: 100},
// 		{id: '17', productName: 'note', price: 30},
// 		{id: '18', productName: 'cow', price: 2900},
// 		{id: '19', productName: 'pen', price: 100},
// 		{id: '20', productName: 'food2', price: 100},
// 	],
// 	settings: {
// 		minPrice: 0,
// 		maxPrice: 100,
// 		min: 0,
// 		max: 100,
// 		searchName: '',
// 		sortProducts: '',
// 		page: 1,
// 		pageCount: 15,
// 		productTotalCount: 20,
// 	}
// }

type initialStateType = {
	cardPacks: Array<PackType>
	searchName: string
	min: number
	max: number
	sortPacks: string
	page: number
	packsPerPage: number
	currentPage: number
	totalPacksCount: number
	minCardsCount: number
	maxCardsCount: number
	error: string
	status: RequestStatusType
}

const initialState: initialStateType = {
	cardPacks: [],
	searchName: '',
	min: 0,
	max: 24,
	sortPacks: '',
	page: 1,
	packsPerPage: 10,
	currentPage: 1,
	totalPacksCount: 0,
	minCardsCount: 0,
	maxCardsCount: 24,
	error: '',
	status: 'idle'
}

// export type ItemsType = {
// 	id: string;
// 	productName: string;
// 	price: number;
// }
// export type SettingsType = {
// 	minPrice: number;
// 	maxPrice: number;
// 	min: number;
// 	max: number;
// 	searchName: string;
// 	sortProducts: string;
// 	productTotalCount: number;
// 	page: number;
// 	pageCount: number;
// }
// type initialStateType = {
// 	items: Array<ItemsType>;
// 	settings: SettingsType;
// }
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


export const searchReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case SET_SEARCH_NAME: {
			return {
				...state,
				searchName: action.searchName
			}
		}
		case SET_MIN_MAX_PRICE_RANGE: {
			return {
				...state,
				min: action.min,
				max: action.max
			}
		}
		case SET_SORTING : {
			return {
				...state,
				sortPacks: action.value
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				page: action.value
			}
		}
		case SET_COUNT_PER_PAGE: {
			return {
				...state,
				packsPerPage: action.value
			}
		}
		case SET_TOTAL_PACKS_COUNT: {
			return {
				...state,
				totalPacksCount: action.value
			}
		}
		case SET_MIN_COUNT_MAX_COUNT: {
			return {
				...state,
				minCardsCount: action.minCardsCount,
				maxCardsCount: action.maxCardsCount
			}
		}
		case SET_PACKS: {
			return {
				...state,
				cardPacks: action.cardPacks
			}
		}
		case SET_PACKS_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case SET_ERROR_PACKS_MESSAGE: {
			return {
				...state,
				error: action.value
			}
		}
		default:
			return state
	}
}

export const setPacksAC = (cardPacks: Array<PackType>) => ({type: SET_PACKS, cardPacks} as const)
export const setSearchNameAC = (searchName: string) => ({type: SET_SEARCH_NAME, searchName} as const)
export const setMinMaxPriceRangeAC = (min: number, max: number) => ({type: SET_MIN_MAX_PRICE_RANGE, min, max} as const)
export const setMinMaxCardsCountAC = (minCardsCount: number, maxCardsCount: number) => ({
	type: SET_MIN_COUNT_MAX_COUNT,
	minCardsCount,
	maxCardsCount
} as const)
export const setSortingAC = (value: string) => ({type: SET_SORTING, value} as const)
export const setCurrentPageAC = (value: number) => ({type: SET_CURRENT_PAGE, value} as const)
export const setCountPerPageAC = (value: number) => ({type: SET_COUNT_PER_PAGE, value} as const)
export const setTotalPacksCountAC = (value: number) => ({type: SET_TOTAL_PACKS_COUNT, value} as const)
export const setStatusAC = (status: RequestStatusType) => ({type: SET_PACKS_STATUS, status} as const)
export const setErrorAC = (value: string) => ({type: SET_ERROR_PACKS_MESSAGE, value} as const)


type ActionsType =
	ReturnType<typeof setSearchNameAC>
	| ReturnType<typeof setMinMaxPriceRangeAC>
	| ReturnType<typeof setSortingAC>
	| ReturnType<typeof setCurrentPageAC>
	| ReturnType<typeof setCountPerPageAC>
	| ReturnType<typeof setTotalPacksCountAC>
	| ReturnType<typeof setMinMaxCardsCountAC>
	| ReturnType<typeof setPacksAC>
	| ReturnType<typeof setStatusAC>
	| ReturnType<typeof setErrorAC>

export type ThunkType = ThunkAction<void, AppRootState, Dispatch<ActionsType>, ActionsType>

export const getPacksTC = (): ThunkType => {

	return (dispatch, getState) => {

		const state = getState()
		const searchName = state.search.searchName
		const min = state.search.min
		const max = state.search.max
		const sortPacks = state.search.sortPacks
		const currentPage = state.search.page
		const packsOnPage = state.search.packsPerPage

		dispatch(setStatusAC('loading'))
		searchAPI.getPacksData(searchName, min, max, sortPacks, currentPage, packsOnPage,)
			.then(response => {
				console.log(response)
				dispatch(setPacksAC(response.cardPacks))

				dispatch(setTotalPacksCountAC(response.cardPacksTotalCount))
				// dispatch(setMinMaxPriceRangeAC(response.minCardsCount, response.maxCardsCount))
				// dispatch(setMinMaxCardsCountAC(response.minCardsCount, response.maxCardsCount))
				if(!response.cardPacks.length) {
					dispatch(setErrorAC('Something went wrong.. Please, try again.'))
				}
			})
			.catch((err) => {
				const error = err.response
					? err.response.data.error
					: (err.message + ', more details in the console');
				console.log(error)
				dispatch(setErrorAC(error))
			})
			.finally(() => {
				dispatch(setStatusAC('succeeded'))
			})
	}
}