// 1. 导入Compnent内部组件
import React, { Component } from "react";
import ReactDOM from "react-dom";
// 2. 声明App组件
class App extends React.Component {
  render() {
    return <h1>欢迎进入{this.props.name}的世界</h1>;
  }
}
ReactDOM.render(<App name="react" />, document.querySelector("#root"));
