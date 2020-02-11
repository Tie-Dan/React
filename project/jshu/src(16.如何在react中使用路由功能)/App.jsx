import React, { Component } from "react";
import GlobalStyle from "./style";
import GlobalStyleIcon from "./statics/iconfont/iconfont.js";
import Header from "./common/header/index";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalStyleIcon />
        <Header />
        <BrowserRouter>
          <Route path="/" exact render={() => <div>home</div>}></Route>
          <Route path="/detail" exact render={() => <div>detail</div>}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
