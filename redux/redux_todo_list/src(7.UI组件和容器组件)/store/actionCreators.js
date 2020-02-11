// 用来返回action的
import {
    CHNAGE_INTUT_VALUE,
    ADD_ITEM,
    DELETE_ITEM
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