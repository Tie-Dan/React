import * as actionType from "./actionType";
import {
    fromJS
} from "immutable";
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false,
});
export const HeaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.SEARCH_FOCUES:
            return state.set("focused", true);
        case actionType.SEARCH_BLUR:
            return state.set("focused", false);
        case actionType.CHNAGE_LIST:
            return state.merge({
                "list": action.data,
                'totalPage': action.totalPage
            })
        case actionType.GET_MOUSE_ENTER:
            return state.set("mouseIn", true)
        case actionType.GET_MOUSE_LEAVE:
            return state.set("mouseIn", false)
        case actionType.CHNAGE_PAGE:
            return state.set("page", action.page)
        default:
            return state;
    }
};