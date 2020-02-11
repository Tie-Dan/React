import * as actionType from "./actionType";
import { fromJS } from "immutable";
const defaultState = fromJS({
  focused: false
});
export const HeaderReducer = (state = defaultState, action) => {
  if (action.type === actionType.SEARCH_FOCUES) {
    return state.set("focused", true);
  }
  if (action.type === actionType.SEARCH_BLUR) {
    return state.set("focused", false);
  }
  return state;
};
