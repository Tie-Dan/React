import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
  render() {
    return <h1>欢迎进入{this.props.children}的世界</h1>;
  }
}

const Content = props => {
  return <p>{props.children}</p>;
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title>
          <p>React</p>
        </Title>
        <Content>
          <i>React.js</i>是一个构建UI的库 <b>props.children获取的是一个数组</b>
        </Content>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
