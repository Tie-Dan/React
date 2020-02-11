import React from "react";
import "antd/dist/antd.css";

import store from "./store";
import TodoListUI from "./TodoListUI";
import {
  getAddItem,
  getDeleteItem,
  getInputChange,
  getAxiosListdata
} from "./store/actionCreators";
import axios from "axios";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    // subscribe 监听store的变化
    store.subscribe(this.handleStoreChange); // 注意要把方法绑定
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleAddItem={this.handleAddItem}
        handleDelete={this.handleDelete}
      />
    );
  }
  componentDidMount() {
    const aciton = getAxiosListdata();
    store.dispatch(aciton);
  }
  handleInputChange(e) {
    const action = getInputChange(e.target.value);
    store.dispatch(action);
  }
  // store发生变化 重新获取赋值
  handleStoreChange() {
    this.setState(store.getState());
  }
  // 增加一条信息
  handleAddItem() {
    const action = getAddItem();
    store.dispatch(action);
  }
  // 删除一条信息
  handleDelete(index) {
    const action = getDeleteItem(index);
    store.dispatch(action);
  }
}

export default TodoList;
