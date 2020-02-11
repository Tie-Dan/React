import React, { Component } from "react";
class TodoItem extends Component {
  render() {
    const { content } = this.props;
    return <div onClick={this.delebtn.bind(this)}>{content}</div>;
  }
  delebtn() {
    const { handleDelete, index } = this.props;
    handleDelete(index);
  }
}

export default TodoItem;
