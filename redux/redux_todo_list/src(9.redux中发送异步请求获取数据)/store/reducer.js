import {
    CHNAGE_INTUT_VALUE,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST_DATA
} from "./actionTypes";

const defaultState = {
    inputValue: '',
    list: [1, 2]
}
export default (state = defaultState, action) => {
    // 获取axios数据改变state中的list
    if (action.type === GET_LIST_DATA) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
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