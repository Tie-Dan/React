import React from "react";
import { Input, Button, List } from "antd";
class TodoListUI extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            value={this.props.inputValue}
            placeholder="todoList"
            style={{ width: "300px", marginRight: "20px" }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleAddItem}>
            提交
          </Button>
          <List
            style={{ marginTop: "10px", width: "300px" }}
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item
                onClick={() => {
                  this.props.handleDelete(index);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default TodoListUI;
