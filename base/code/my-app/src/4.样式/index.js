import React from "react";
import ReactDOM from "react-dom";
import Style from "./style";
class App extends React.Component {
  render() {
    return <Style />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
