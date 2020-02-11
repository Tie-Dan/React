const defaultState = {
    inputValue: '',
    list: [1, 2]
}
export default (state = defaultState, action) => {
    // input发生改变的store
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    // 添加一条信息
    if (action.type === 'add_item') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}