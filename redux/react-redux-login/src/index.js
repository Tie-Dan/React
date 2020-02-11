import React from 'react';
import ReactDOM from 'react-dom';

import logger from "redux-logger"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"

import rootReducer from "./reducers"

import routes from "./routes"
import { BrowserRouter as Router } from "react-router-dom"

import NavigationBar from "./components/NavigationBar"
import FlashMessagesList from "./components/flash/FlashMessagesList"
import setAuthorizationToken from "./utils/setAuthorizationToken"
import { setCurrentUser } from "./actions/login"
import jwtDecode from "jwt-decode"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}


ReactDOM.render(
    <Provider store={ store }>
        <Router routes={ routes }>
            <NavigationBar />
            <FlashMessagesList />
            { routes }
        </Router>
    </Provider>
    , 
    document.getElementById('root'));