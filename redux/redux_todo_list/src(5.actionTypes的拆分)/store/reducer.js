import {
    CHNAGE_INTUT_VALUE,
    ADD_ITEM,
    DELETE_ITEM
} from "./actionTypes";

const defaultState = {
    inputValue: '',
    list: [1, 2]
}
export default (state = defaultState, action) => {
    // input发生改变的store
    if (action.type === CHNAGE_INTUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    }
    // 添加一条信息
    if (action.type === ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    // 删除一条信息
    if (action.type === DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}