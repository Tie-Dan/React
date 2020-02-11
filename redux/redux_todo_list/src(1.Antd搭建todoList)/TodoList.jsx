import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];
class TodoList extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            placeholder="todoList"
            style={{ width: "300px", marginRight: "20px" }}
          />
          <Button type="primary">提交</Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            bordered
            dataSource={data}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;
