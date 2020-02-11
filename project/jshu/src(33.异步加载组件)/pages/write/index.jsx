import React, { Component } from "react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
class Write extends Component {
  render() {
    const { loginState } = this.props;
    if (loginState) {
      return <div>写文章页面</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapStateProps = state => {
  return {
    loginState: state.getIn(["login", "login"])
  };
};

export default connect(mapStateProps, null)(Write);
