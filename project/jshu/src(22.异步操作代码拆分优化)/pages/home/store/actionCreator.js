import axios from 'axios'
import {
    constants
} from './index'
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