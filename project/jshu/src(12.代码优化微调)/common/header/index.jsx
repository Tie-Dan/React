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
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from "./style";
import { CSSTransition } from "react-transition-group";
import { headerAction } from "./store";
class Header extends React.Component {
  getSearchList() {
    const { focused, list } = this.props;
    if (focused) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {list.map(item => {
              return <SearchInfoItem key="item">{item}</SearchInfoItem>;
            })}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const { focused, handleInputFoucus, handleInputBlur } = this.props;
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
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={handleInputFoucus}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i className={focused ? "focused iconfont" : "iconfont"}>
                &#xe60b;
              </i>
              {this.getSearchList()}
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
}

const mapStateProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"])
  };
};
const mapDispatchProps = dispatch => {
  return {
    handleInputFoucus() {
      dispatch(headerAction.getList());
      dispatch(headerAction.getFouseAction());
    },
    handleInputBlur() {
      dispatch(headerAction.getBlurACtion());
    }
  };
};
export default connect(mapStateProps, mapDispatchProps)(Header);
