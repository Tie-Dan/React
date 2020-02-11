import * as actionType from './actionType'
import {
    fromJS
} from 'immutable'
import axios from 'axios'
const changeList = (data) => ({
    type: actionType.CHNAGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})
export const getFouseAction = () => ({
    type: actionType.SEARCH_FOCUES
})
export const getBlurACtion = () => ({
    type: actionType.SEARCH_BLUR
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            dispatch(changeList(res.data.data))
        }).catch(() => {
            console.log('error')
        })
    }
}
export const getMouseEnter = () => ({
    type: actionType.GET_MOUSE_ENTER
})
export const getMouseLeave = () => ({
    type: actionType.GET_MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: actionType.CHNAGE_PAGE,
    page
})