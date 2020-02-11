import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "app",
        id: "appRoot"
      },
      React.createElement("h1", { className: "title" }, "欢迎进入React的世界"),
      React.createElement("p", null, "React.js 是一个构建页面 UI 的库")
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
