import axios from 'axios'
import {
    constants
} from './index'
import {
    fromJS
} from "immutable"
const getAllDataAction = ({
    topicList,
    articleList,
    recommendList
}) => ({

    type: constants.GET_ALL_DATA,
    topicList,
    articleList,
    recommendList

})
export const getAllData = () => {
    return dispatch => {
        axios.get("/api/home.json").then(res => {
            dispatch(getAllDataAction(res.data.data));
        });
    }
}
const addHomeList = (res, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(res),
    nextPage
})


export const getMoreList = (page) => {
    return dispatch => {
        axios.get("/api/homeList.json?page=" + page).then(res => {
            dispatch(addHomeList(res.data.data, page + 1))
        });
    }
}

export const toggleTopShow = (show) => {
    return {
        type: constants.TOGGLE_SHOW,
        show
    }

}