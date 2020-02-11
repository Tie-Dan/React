import axios from 'axios'
import {
    constants
} from './index'
const loginAction = () => ({
    type: constants.LOGINACTION,
    value: true
})
export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})
export const login = (account, password) => {
    return dispatch => {
        axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
            if (res.data.data) {
                dispatch(loginAction())
            }
        })

    }
}