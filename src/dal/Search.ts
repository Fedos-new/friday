import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	// baseURL: 'http://localhost:7542/2.0/',
	withCredentials: true
})


export const searchAPI = {
	getPacksData: async (
		packName: string, min: number, max: number, sortPacks: string, page: number = 1 , pageCount: number = 15,
	) => {
		const response = await instance.get(`cards/pack?pageCount=${pageCount}&page=${page}&packName=${packName}&sortPacks=${sortPacks}&min=${min}&max=${max}`)
		return response.data
	}
}
