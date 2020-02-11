import React from "react";
import { connect } from "react-redux";
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
const Header = props => {
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
            <CSSTransition in={props.focused} timeout={200} classNames="slide">
              <NavSearch
                className={props.focused ? "focused" : ""}
                onFocus={props.handleInputFoucus}
                onBlur={props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={props.focused ? "focused iconfont" : "iconfont"}>
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
};

const mapStateProps = state => {
  return {
    focused: state.focused
  };
};
const mapDispatchProps = dispatch => {
  return {
    handleInputFoucus() {
      const action = {
        type: "search_focues"
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur"
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateProps, mapDispatchProps)(Header);
