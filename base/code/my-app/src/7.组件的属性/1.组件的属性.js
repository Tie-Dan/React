import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

// class组件
class Title extends Component {
  render() {
    return <h1>欢迎进入{this.props.name}的世界</h1>;
  }
}
// 构造函数组件
const Content = props => {
  return <p>{props.name}是一个构建UI的库</p>;
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title name="React" />
        <Content name="React.js" />
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
