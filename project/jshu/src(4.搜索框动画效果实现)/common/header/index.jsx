import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import { CSSTransition } from "react-transition-group";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
    this.handleInputFoucus = this.handleInputFoucus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo />
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App </NavItem>
            <NavItem className="right">登陆</NavItem>
            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition
                in={this.state.focused}
                timeout={200}
                classNames="slide"
              >
                <NavSearch
                  className={this.state.focused ? "focused" : ""}
                  onFocus={this.handleInputFoucus}
                  onBlur={this.handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i
                className={this.state.focused ? "focused iconfont" : "iconfont"}
              >
                &#xe60b;
              </i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="wrtting">
              <i className="iconfont">&#xe6e5;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
  handleInputFoucus() {
    this.setState({
      focused: true
    });
  }
  handleInputBlur() {
    this.setState({
      focused: false
    });
  }
}

export default Header;
