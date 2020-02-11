// 用来返回action的
import {
    CHNAGE_INTUT_VALUE,
    ADD_ITEM,
    DELETE_ITEM,
    GET_LIST_DATA,
    GET_INIT_LIST
} from './actionTypes'

// 获取
export const getInputChange = (value) => ({
    type: CHNAGE_INTUT_VALUE,
    value
})
// 增加
export const getAddItem = () => ({
    type: ADD_ITEM
})
// 删除
export const getDeleteItem = (index) => ({
    type: DELETE_ITEM,
    index
})
// 获取axios列表信息
export const getListdata = (data) => ({
    type: GET_LIST_DATA,
    data
})
// 匹配到redux-sage的异步操作的action
export const getInitList = () => ({
    type: GET_INIT_LIST
})