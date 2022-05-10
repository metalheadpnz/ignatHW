import axios from "axios";

export const requestsAPI = {
    postValue(accessValue: boolean) {
        return axios.post
        ('https://neko-cafe-back.herokuapp.com/auth/test', { success: accessValue})
    }
}