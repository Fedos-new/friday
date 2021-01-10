import axios from 'axios'


export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,

})

//api
export const authAPI = {
    login(parameters: LoginParamsType) {
        return instance.post('auth/login', parameters)
    }
}

//type
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
}
