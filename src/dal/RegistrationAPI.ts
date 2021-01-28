import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	withCredentials: true
})

//api
export const registrationAPI = {
	registration(parameters:RegistrationParamsType ) {
		return instance.post('auth/register',parameters)
	}
}

//type
export type RegistrationParamsType = {
	email: string
	password: string
}
