import * as actionType from './actionType'
import {
    fromJS
} from 'immutable'
import axios from 'axios'
export const getFouseAction = () => ({
    type: actionType.SEARCH_FOCUES
})
export const getBlurACtion = () => ({
    type: actionType.SEARCH_BLUR
})
export const changeList = (data) => ({
    type: actionType.CHNAGE_LIST,
    data: fromJS(data)
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