import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
})

//api
export const PacksAPI = {
    getPacks(params: any) {
        return instance.get(`cards/pack`+ (params.userId != null ? `/?user_id=${params.userId}&` : '/?')
            + (params.pageCount != null ? `pageCount=${params.pageCount}&` : '') )
    }
}

//type
