import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todoList"
            style={{ width: "300px", marginRight: "20px" }}
          />
          <Button type="primary">提交</Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            bordered
            dataSource={[]}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
