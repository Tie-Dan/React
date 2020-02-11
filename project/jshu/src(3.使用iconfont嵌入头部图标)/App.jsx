import React, { Component, Fragment } from "react";
import GlobalStyle from "./style";
import GlobalStyleIcon from "./statics/iconfont/iconfont.js";
import Header from "./common/header/index";
class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalStyleIcon />
        <Header />
      </Fragment>
    );
  }
}

export default App;
