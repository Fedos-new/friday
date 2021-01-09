import axios from 'axios'

//api
export const requestAPI = {
    authTest(body:AuthTestType) {
        return axios.post('http://localhost:7542/2.0/', body)
            .then(res => res.data.info)
            .catch(error => error.response.data.errorText)
    }
}

//type
export type AuthTestType = {

}
