import { combineReducers } from "redux-immutable";
import { HeaderReducer } from "../common/header/store";
export default combineReducers({
  header: HeaderReducer
});
