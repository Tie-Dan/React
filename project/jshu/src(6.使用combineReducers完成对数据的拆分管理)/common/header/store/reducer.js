const defaultState = {
    focused: false
}
export const HeaderReducer = (state = defaultState, action) => {
    if (action.type === 'search_focues') {
        return {
            focused: true
        }
    }
    if (action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state
}