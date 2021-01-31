import {ThunkAction} from 'redux-thunk';
import {AppRootState} from './store';
import {Dispatch} from 'redux';
import {cardsAPI} from '../dal/CardsAPI';

const SET_CARDS_PACK_ID = 'SET_CARDS_PACK_ID'
const SET_CARDS_PACK = 'SET_CARDS_PACK'
const SET_CARDS_ERROR = 'SET_CARDS_ERROR'

export type CardType = {
	answer: string | null
	question: string | null
	cardsPack_id: string | null
	grade: number | null
	rating: number | null
	shots: number
	type: string | null
	user_id: string | null
	created: string | null
	updated: string | null
	__v: number | null
	_id: string
}

type initialStateType = {
	cards: Array<CardType>
	cardsPackId: string
	error: string
}
const initialState: initialStateType = {
	cards: [
		{
			answer: null,
			question: null,
			cardsPack_id: null,
			grade: null,
			rating: null,
			shots: 0,
			type: null,
			user_id: null,
			created: null,
			updated: null,
			__v: null,
			_id: '',
		}
	],
	cardsPackId: '',
	error: ''
}

export const cardsReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case SET_CARDS_PACK_ID: {
			return {
				...state,
				cardsPackId: action.cardsPackId
			}
		}
		case SET_CARDS_PACK: {
			return {
				...state,
				cards: action.cards
			}
		}
		case SET_CARDS_ERROR: {
			return {
				...state,
				error: action.error
			}
		}
		default:
			return state
	}
}


export const setCardsPackIdAC = (cardsPackId: string) => ({type: SET_CARDS_PACK_ID, cardsPackId} as const)
export const setCardsPackAC = (cards: Array<CardType>) => ({type: SET_CARDS_PACK, cards} as const)
export const setCardsErrorAC = (error: string) => ({type: SET_CARDS_ERROR, error} as const)


type ActionsType =
	ReturnType<typeof setCardsPackIdAC>
	| ReturnType<typeof setCardsPackAC>
	| ReturnType<typeof setCardsErrorAC>

export type ThunkType = ThunkAction<void, AppRootState, Dispatch<ActionsType>, ActionsType>


export const getCardsTC = (): ThunkType => (dispatch, getState) => {
	const state = getState()
	const cardsPack_id = state.cards.cardsPackId

	cardsAPI.getCardsData(cardsPack_id)
		.then(res => {
			console.log(res.cards)
			dispatch(setCardsPackIdAC(cardsPack_id))
			dispatch(setCardsPackAC(res.cards))
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			// dispatch(setCardsErrorAC(error))
			dispatch(setCardsErrorAC('Please, choose a pack on the Packs page'))
		})
}

export const addCardTC = (cardsPack_id: string, question?: string, answer?: string): ThunkType => (dispatch, getState) => {
	const newCard = {
		cardsPack_id: cardsPack_id,
		question: question,
		answer: answer
	}
	cardsAPI.addNewCard(newCard)
		.then(() => {
			dispatch(getCardsTC())
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			dispatch(setCardsErrorAC(error))
		})
}

export const updateCardTC = (cardId: string, value: string, value2: string): ThunkType => (dispatch, getState) => {
	const updateCard = {
		_id: cardId,
		question: value,
		answer: value2
	}
	cardsAPI.updateCard(updateCard)
		.then(res => {
			dispatch(getCardsTC())
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			dispatch(setCardsErrorAC(error))
		})
}


export const deleteCardTC = (cardsPack_id: string): ThunkType => (dispatch, getState) => {

	cardsAPI.deleteCard(cardsPack_id)
		.then((res) => {
			dispatch(getCardsTC())
		})
		.catch(err => {
			const error = err.response
				? err.response.data.error
				: (err.message + ', more details in the console');
			dispatch(setCardsErrorAC(error))
		})
}