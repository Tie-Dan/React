import React, { Component } from "react";
import GlobalStyle from "./style";
import GlobalStyleIcon from "./statics/iconfont/iconfont.js";
import Header from "./common/header/index";
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalStyleIcon />
        <Header />
      </Provider>
    );
  }
}

export default App;
