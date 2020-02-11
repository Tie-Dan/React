import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  // 定义状态
  state = {
    name: "React",
    isBool: false
  };
  // 渲染
  render() {
    return (
      <div>
        <h1>欢迎来到{this.state.name}的世界</h1>
        <button>
          {// 根据状态来决定显示隐藏
          this.state.isBool ? "我想要兰博基尼" : "只有一辆奥拓"}
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
