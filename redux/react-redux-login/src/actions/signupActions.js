import axios from 'axios'

export const userSignupRequest = (userData) =>{
    // thunk
    return dispatch =>{
        return axios.post("/api/users",userData)
    }
}

export const isUserExists = (username) =>{
    return dispatch =>{
        return axios.get(`/api/users/${username}`,username)
    }
}