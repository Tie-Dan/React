import {
    takeEvery,
    put
} from 'redux-saga/effects'
import {
    GET_INIT_LIST
} from '../store/actionTypes'
import {
    getListdata
} from './actionCreators'
import Axios from 'axios'

function* getInitList() {
    try {
        const res = yield Axios.get("http://localhost:3004/list")
        const action = getListdata(res.data)
        yield put(action)
    } catch (e) {
        console.log('网络请求失败' + e)
    }

}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}
export default mySaga