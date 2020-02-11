import React, { Component } from "react";
import ReactDOM from "react-dom";
import newCompents from "./newCompents";
// 声明App组件作为参数
class App extends Component {
  render() {
    return (
      <div>
        <h1>React</h1>
        <p>React.js是一个构建用户界面的库</p>
      </div>
    );
  }
}
// 点用newCompents函数传进去App组件 返回新组件
const NewApp = newCompents(App);
// 渲染新组件
ReactDOM.render(<NewApp />, document.querySelector("#root"));
