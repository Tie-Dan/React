import React from "react";
import ReactDOM from "react-dom";
// // 1.函数式组件
// const app = props => <h1>欢迎进入{props.name}的世界</h1>;
// // 2.给组件传递数据
// ReactDOM.render(app({ name: "react" }), document.querySelector("#root"));
// 另一种写法
const App = props => <h1>欢迎进入{props.name}的世界</h1>;

ReactDOM.render(<App name="react" />, document.querySelector("#root"));
