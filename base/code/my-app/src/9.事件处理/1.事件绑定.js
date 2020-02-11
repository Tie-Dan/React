import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "葫芦娃"
    };
  }
  showAlert = () => {
    console.log(this.state.name);
  };
  render() {
    return <button onClick={this.showAlert}>show alert</button>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
