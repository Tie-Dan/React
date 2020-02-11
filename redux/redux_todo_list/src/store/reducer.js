const defaultState = {
    inputValue: 'ff',
    list: []
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'change_input_value':
            const newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState;
        case 'add_list':
            const newState1 = JSON.parse(JSON.stringify(state))
            newState1.list.push(newState1.inputValue)
            newState1.inputValue = ''
            return newState1;
        default:
            return state
    }

}