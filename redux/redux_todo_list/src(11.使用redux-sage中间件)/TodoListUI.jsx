import React from "react";
import { Input, Button, List } from "antd";
const TodoListUI = props => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          value={props.inputValue}
          placeholder="todoList"
          style={{ width: "300px", marginRight: "20px" }}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleAddItem}>
          提交
        </Button>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                props.handleDelete(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodoListUI;
