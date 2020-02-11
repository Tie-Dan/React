import React, { Component } from "react";
class User extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>User:{this.props.match.params.id}</div>;
  }
}

export default User;
