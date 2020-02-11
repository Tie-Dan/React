import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      // es6语法 key值可以是变量
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { name, age } = this.state;
    return (
      <Fragment>
        <div>
          <label>
            <span>姓:</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>名:</span>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.handleInputChange}
            />
          </label>
          <p>
            欢迎您: {name}
            {age}
          </p>
        </div>
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
