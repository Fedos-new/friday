const SET_SEARCH_NAME = 'SET_SEARCH_NAME';
const SET_MIN_MAX_PRICE_RANGE = 'SET_MIN_MAX_PRICE_RANGE';


const initialState = {
	items: [
		{id: '1', productName: 'car', price: 1000},
		{id: '2', productName: 'phone', price: 200},
		{id: '3', productName: 'model', price: 100},
		{id: '4', productName: 'window', price: 30}
	],
	settings: {
		minPrice: 1000,
		maxPrice: 9000,
		min: 1000,
		max: 9000,
		searchName: '',
		sortProducts: '',
		productTotalCount: 7,
		page: 1,
		pageCount: 10
	}
}

type ItemsType = {
	id: string;
	productName: string;
	price: number;
}
type SettingsType = {
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
			return  {
				...state,
				settings: {
					...state.settings,
					min: action.min,
					max: action.max
				}
			}
		}
		default:
			return state
	}
}

export const setSearchNameAC = (searchName: string) => ({type: SET_SEARCH_NAME, searchName } as const)
export const setMinMaxPriceRangeAC = (min: number, max: number) => ({type: SET_MIN_MAX_PRICE_RANGE, min, max } as const)

type ActionsType =
	ReturnType<typeof setSearchNameAC>
 | 	ReturnType<typeof setMinMaxPriceRangeAC>