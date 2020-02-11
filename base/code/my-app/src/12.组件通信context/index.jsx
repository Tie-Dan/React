import React, { Component } from "react";
import ReactDOM from "react-dom";
import { CountProvider, CountConsumer } from "./counterContext";
// // 定义CountButton组件
const CountButton = props => {
  return (
    <CountConsumer>
      {({ increaseCount, decreaseCount }) => {
        const { type } = props;
        const handleClick = type === "increase" ? increaseCount : decreaseCount;
        const btnText = type === "increase" ? "+" : "-";
        return <button onClick={handleClick}>{btnText}</button>;
      }}
    </CountConsumer>
  );
};

// 定义count组件，用于显示数量
const Count = prop => {
  return (
    <CountConsumer>
      {({ count }) => {
        return <span>{count}</span>;
      }}
    </CountConsumer>
  );
};

class App extends Component {
  render() {
    return (
      <CountProvider>
        <CountButton type="decrease" />
        <Count />
        <CountButton type="increase" />
      </CountProvider>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
