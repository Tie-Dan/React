import {
  combineReducers
} from "redux-immutable";
import {
  HeaderReducer
} from "../common/header/store";
import {
  reducer as homeReducer
} from '../pages/home/store'
import {
  reducer as detailReducer
} from '../pages/detail/store'
export default combineReducers({
  header: HeaderReducer,
  home: homeReducer,
  detail: detailReducer
});