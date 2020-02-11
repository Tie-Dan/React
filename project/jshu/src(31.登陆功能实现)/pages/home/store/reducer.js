import {
    fromJS
} from 'immutable'
import {
    constants
} from './index'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
})
const getAllData = (state, action) => {
    return state.merge({
        "topicList": fromJS(action.topicList),
        "articleList": fromJS(action.articleList),
        "recommendList": fromJS(action.recommendList)
    })
}
const addHomeList = (state, action) => {
    return state.merge({
        "articleList": state.get("articleList").concat(action.list),
        "articlePage": action.nextPage
    })
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_ALL_DATA:
            return getAllData(state, action)
        case constants.ADD_HOME_LIST:
            return addHomeList(state, action)
        case constants.TOGGLE_SHOW:
            return state.set('showScroll', action.show)
        default:
            return state
    }
}