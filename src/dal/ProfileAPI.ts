import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const profileAPI = {
    getProfile() {
        return instance.post('/auth/me')
    }
}
