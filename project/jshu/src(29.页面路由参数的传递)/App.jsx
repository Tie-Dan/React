import React, { Component } from "react";
import GlobalStyle from "./style";
import GlobalStyleIcon from "./statics/iconfont/iconfont.js";
import Header from "./common/header";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalStyleIcon />

        {/* 如何使用路由 */}
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
