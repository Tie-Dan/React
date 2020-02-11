import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
// cnpm i prop-types
// 引入prop-types
import PropTypes from "prop-types";
// class组件
class Content extends React.Component {
  render() {
    return <div>welcome,{this.props.name}的世界</div>;
  }
}
// 检查props类型
Content.propTypes = {
  name: PropTypes.string //是否是字符串 还可以设置为object、fnc、bool等
};

ReactDOM.render(<Content name={123} />, document.querySelector("#root"));
