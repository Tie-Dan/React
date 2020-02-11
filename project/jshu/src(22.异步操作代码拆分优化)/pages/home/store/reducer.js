import {
    fromJS
} from 'immutable'
import {
    constants
} from './index'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_ALL_DATA:
            return state.merge({
                "topicList": fromJS(action.topicList),
                "articleList": fromJS(action.articleList),
                "recommendList": fromJS(action.recommendList)
            })
        default:
            return state
    }
}