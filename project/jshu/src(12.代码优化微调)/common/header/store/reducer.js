import * as actionType from "./actionType";
import {
    fromJS
} from "immutable";
const defaultState = fromJS({
    focused: false,
    list: []
});
export const HeaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.SEARCH_FOCUES:
            return state.set("focused", true);
        case actionType.SEARCH_BLUR:
            return state.set("focused", false);
        case actionType.CHNAGE_LIST:
            return state.set("list", action.data);
        default:
            return state;
    }
};