import axios from 'axios'
import {
    constants
} from './index'

const detailAction = (res) => ({
    type: constants.DETAIL_ACTION,
    title: res.title,
    content: res.content
})
export const getDetailAction = (id) => {
    return dispatch => {
        axios.get('/api/detail.json?id=' + id).then(res => {
            dispatch(detailAction(res.data.data))
        })
    }
}