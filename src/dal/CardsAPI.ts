import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	// baseURL: 'http://localhost:7542/2.0/',
	withCredentials: true
})


export const cardsAPI = {
	// getCardsData: async (cardAnswer?: string, cardQuestion?: string, cardsPack_id: string, pageCount?: number, min?: number, max?: number, sortCards?: string, page?: number ) => {
	getCardsData: async (cardsPack_id: string, pageCount: number = 50, page: number = 1) => {
		const response = await instance.get(`cards/card?cardsPack_id=${cardsPack_id}&pageCount=${pageCount}&page=${page}`)
		return response.data
	}
}