import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from './sagas'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga)
export default store;