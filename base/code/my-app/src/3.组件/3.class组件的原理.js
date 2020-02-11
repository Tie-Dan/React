// 1. 导入Compnent内部组件
import React, { Component } from "react";
import ReactDOM from "react-dom";
// es6 class组件其实就是一个构造器 每次使用组件都相当于实例化组件
class App extends React.Component {
  render() {
    return <h1>欢迎进入{this.props.name}的世界</h1>;
  }
}

const app = new App({
  name: "react11"
}).render();

ReactDOM.render(app, document.getElementById("root"));
