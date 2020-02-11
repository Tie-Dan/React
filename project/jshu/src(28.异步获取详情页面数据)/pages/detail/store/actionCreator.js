import axios from 'axios'
import {
    constants
} from './index'
import {
    fromJS
} from "immutable"
const detailAction = (res) => ({
    type: constants.DETAIL_ACTION,
    title: res.title,
    content: res.content
})
export const getDetailAction = () => {
    return dispatch => {
        axios.get('/api/detail.json').then(res => {
            dispatch(detailAction(res.data.data))
        })
    }
}