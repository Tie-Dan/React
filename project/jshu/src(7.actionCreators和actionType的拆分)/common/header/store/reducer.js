import * as actionType from './actionType'
const defaultState = {
    focused: false
}
export const HeaderReducer = (state = defaultState, action) => {
    if (action.type === actionType.SEARCH_FOCUES) {
        return {
            focused: true
        }
    }
    if (action.type === actionType.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state
}