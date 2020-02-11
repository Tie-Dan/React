import React from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
class App extends React.Component {
  render() {
    return (
      <h1>
        <div className={classnames({ class1: true, class2: false })}>用法1</div>
        <div className={classnames("foo", "bar")}>用法2</div>
        <div className={classnames("foo", { bar: true })}>用法3</div>
        <div>更多参考官网</div>
      </h1>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
