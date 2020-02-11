import {
    fromJS
} from 'immutable'
import {
    constants
} from './index'
const defaultState = fromJS({
    login: false
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.LOGINACTION:
            return state.set("login", action.value)
        case constants.LOGOUT:
            return state.set("login", action.value)
        default:
            return state
    }
}