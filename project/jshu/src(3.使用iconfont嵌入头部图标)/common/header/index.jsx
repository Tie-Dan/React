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
class Header extends Component {
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
              <NavSearch></NavSearch>
              <i className="iconfont">&#xe60b;</i>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Button className="reg">登陆</Button>
            <Button className="wrtting">写文章</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    );
  }
}

export default Header;
