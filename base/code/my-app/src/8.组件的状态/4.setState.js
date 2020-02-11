import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    // 添加状态
    this.state = {
      name: "React",
      isBool: false
    };
  }
  // 添加监听事件
  handleBtnClick = () => {
    // 参数1是上一次的state, 参数2是props
    this.setState((prevState, props) => {
      return {
        isBool: !prevState.isBool
      };
    });
  };
  render() {
    return (
      <div>
        <h1>欢迎来到{this.state.name}的世界</h1>
        <button onClick={this.handleBtnClick}>
          {this.state.isBool ? "中了500万" : "一个大子儿也没有"}
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
