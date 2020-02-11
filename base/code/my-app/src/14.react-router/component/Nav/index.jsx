import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/home">Home页面</Link>
        </li>
        <li>
          <Link to="/detail">Mine页面</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
