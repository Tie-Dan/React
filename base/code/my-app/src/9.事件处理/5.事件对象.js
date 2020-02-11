import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "葫芦娃"
    };
    this.showAlert = this.showAlert.bind(this);
  }
  // 默认第一个参数
  showAlert(e) {
    console.log(e);
  }
  render() {
    //   <button onClick={(e) => this.showAlert(name, e)}>Delete Row</button>
    //   <button onClick={this.showAlert.bind(this, name)}>Delete Row</button>;
    return <button onClick={this.showAlert}>show alert</button>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
