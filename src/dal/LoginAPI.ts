import axios from 'axios'


export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,

})

//api
export const authAPI = {
    login(parameters: LoginParamsType) {
        return instance.post('auth/login', parameters)
    },
    logout() {
        return instance.delete('auth/login')
    }
}

//type
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
}
