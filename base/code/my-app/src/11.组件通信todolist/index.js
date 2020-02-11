import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["大娃", "二娃"]
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addBtn.bind(this)}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    );
  }
  // 渲染方法
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <li>
          <TodoItem
            content={item}
            index={index}
            handleDelete={this.deleteItem.bind(this)}
          />
        </li>
      );
    });
  }
  // 事件方法
  inputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // });
    // 箭头函数写法  值必须保存一份因为异步的原因
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  // 增加方法
  addBtn() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
    this.setState(oldState => ({
      // oldState是没改变之前的状态
      list: [...oldState.list, oldState.inputValue],
      inputValue: ""
    }));
  }
  // 删除方法
  deleteItem(index) {
    // immutable 概念
    // state 不允许我们做任何的改变
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
