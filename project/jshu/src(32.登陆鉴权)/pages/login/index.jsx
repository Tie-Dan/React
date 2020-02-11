import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { actionCreator } from "./store";
import { Redirect } from "react-router-dom";
class Login extends Component {
  render() {
    const { loginState, login } = this.props;
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              ref={input => {
                this.password = input;
              }}
            />
            <Button
              onClick={() => {
                login(this.account.value, this.password.value);
              }}
            >
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapStateProps = state => {
  return {
    loginState: state.getIn(["login", "login"])
  };
};
const mapDispatchProps = dispath => {
  return {
    login(account, password) {
      dispath(actionCreator.login(account, password));
    }
  };
};
export default connect(mapStateProps, mapDispatchProps)(Login);
