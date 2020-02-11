import {
    combineReducers
} from 'redux'
import HeaderReducer from '../common/header/store'
export default combineReducers({
    header: HeaderReducer
})