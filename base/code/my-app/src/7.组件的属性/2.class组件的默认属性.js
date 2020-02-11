import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
  // 使用类创建的组件，直接在这里写static方法，创建defaultProps
  static defaultProps = {
    name: "React"
  };
  render() {
    return <h1>欢迎进入{this.props.name}的世界</h1>;
  }
}
class App extends Component {
  render() {
    return (
      <Fragment>
        <Title name="React" />
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
