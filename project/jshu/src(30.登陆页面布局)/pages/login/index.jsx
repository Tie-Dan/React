import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
class Login extends Component {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" />
          <Input placeholder="密码" />
          <Button>登陆</Button>
        </LoginBox>
      </LoginWrapper>
    );
  }
}
const mapStateProps = state => {
  return {};
};
const mapDispatchProps = dispath => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(Login);
