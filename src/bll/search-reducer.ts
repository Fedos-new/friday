const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
const SET_MIN_MAX_PRICE_RANGE = 'SET_MIN_MAX_PRICE_RANGE';
const SET_SORTING = 'SET_SORTING';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT_PER_PAGE = 'SET_COUNT_PER_PAGE';


const initialState = {
	items: [
		{id: '1', productName: 'car1', price: 1000},
		{id: '2', productName: 'phone', price: 200},
		{id: '3', productName: 'model', price: 100},
		{id: '4', productName: 'window1', price: 30},
		{id: '5', productName: 'flat', price: 200},
		{id: '6', productName: 'model2', price: 100},
		{id: '7', productName: 'note', price: 30},
		{id: '8', productName: 'cow1', price: 200},
		{id: '9', productName: 'pen22', price: 100},
		{id: '10', productName: 'food', price: 100},
		{id: '11', productName: 'car', price: 1000},
		{id: '12', productName: 'house', price: 200},
		{id: '13', productName: 'model3', price: 100},
		{id: '14', productName: 'window', price: 30},
		{id: '15', productName: 'yandex', price: 200},
		{id: '16', productName: 'model4', price: 100},
		{id: '17', productName: 'note', price: 30},
		{id: '18', productName: 'cow', price: 2900},
		{id: '19', productName: 'pen', price: 100},
		{id: '20', productName: 'food', price: 100},
	],
	settings: {
		minPrice: 1000,
		maxPrice: 9000,
		min: 1000,
		max: 9000,
		searchName: '',
		sortProducts: '',
		page: 0,
		pageCount: 5,
		productTotalCount: 20,
	}
}

export type ItemsType = {
	id: string;
	productName: string;
	price: number;
}
export type SettingsType = {
	minPrice: number;
	maxPrice: number;
	min: number;
	max: number;
	searchName: string;
	sortProducts: string;
	productTotalCount: number;
	page: number;
	pageCount: number;
}
type initialStateType = {
	items: Array<ItemsType>;
	settings: SettingsType;
}

export const searchReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case SET_SEARCH_NAME: {
			return {
				...state,
				settings: {
					...state.settings,
					searchName: action.searchName
				}
			}
		}
		case SET_MIN_MAX_PRICE_RANGE: {
			return {
				...state,
				settings: {
					...state.settings,
					min: action.min,
					max: action.max
				}
			}
		}
		case SET_SORTING : {
			return {
				...state,
				settings: {
					...state.settings,
					sortProducts: action.value
				}
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				settings: {
					...state.settings,
					page: action.value
				}
			}
		}
		case SET_COUNT_PER_PAGE: {
			return {
				...state,
				settings: {
					...state.settings,
					pageCount: action.value
				}
			}
		}
		default:
			return state
	}
}

export const setSearchNameAC = (searchName: string) => ({type: SET_SEARCH_NAME, searchName} as const)
export const setMinMaxPriceRangeAC = (min: number, max: number) => ({type: SET_MIN_MAX_PRICE_RANGE, min, max} as const)
export const setSortingAC = (value: string) => ({type: SET_SORTING, value} as const)
export const setCurrentPageAC = (value: number) => ({type: SET_CURRENT_PAGE, value} as const)
export const setCountPerPageAC = (value: number) => ({type: SET_COUNT_PER_PAGE, value} as const)

type ActionsType =
	ReturnType<typeof setSearchNameAC>
	| ReturnType<typeof setMinMaxPriceRangeAC>
	| ReturnType<typeof setSortingAC>
	| ReturnType<typeof setCurrentPageAC>
	| ReturnType<typeof setCountPerPageAC>