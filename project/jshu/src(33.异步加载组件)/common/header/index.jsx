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
import { actionCreator as loginActionCreator } from "../../pages/login/store";
import { Link } from "react-router-dom";
class Header extends React.Component {
  getSearchList() {
    const {
      focused,
      list,
      page,
      handlerMouseEnter,
      handlerMouseLeave,
      handlechangePage,
      mouseIn,
      totalPage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    // 根据page算出显示10条数据
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handlerMouseEnter}
          onMouseLeave={handlerMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handlechangePage(page, totalPage, this.spin)}
            >
              <i ref={spin => (this.spin = spin)} className="iconfont spin">
                &#xe851;
              </i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
  render() {
    const {
      focused,
      handleInputFoucus,
      handleInputBlur,
      list,
      login,
      logout
    } = this.props;
    return (
      <div>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App </NavItem>
            {login ? (
              <NavItem className="right" onClick={logout}>
                退出
              </NavItem>
            ) : (
              <Link to="/login">
                <NavItem className="right">登陆</NavItem>
              </Link>
            )}

            <NavItem className="right">
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  className={focused ? "focused" : ""}
                  onFocus={() => handleInputFoucus(list)}
                  onBlur={handleInputBlur}
                ></NavSearch>
              </CSSTransition>
              <i
                className={focused ? "focused iconfont zoom" : "iconfont zoom"}
              >
                &#xe60b;
              </i>
              {this.getSearchList()}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="wrtting">
                <i className="iconfont">&#xe6e5;</i>
                写文章
              </Button>
            </Link>
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
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"])
  };
};
const mapDispatchProps = dispatch => {
  return {
    handleInputFoucus(list) {
      console.log(list);
      list.size === 0 && dispatch(headerAction.getList());
      dispatch(headerAction.getFouseAction());
    },
    handleInputBlur() {
      dispatch(headerAction.getBlurACtion());
    },
    handlerMouseEnter() {
      dispatch(headerAction.getMouseEnter());
    },
    handlerMouseLeave() {
      dispatch(headerAction.getMouseLeave());
    },
    // 点击换一换
    handlechangePage(page, totalPage, spin) {
      console.log(spin);
      // 每次点击转换角度
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      console.log(originAngle);
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

      if (page < totalPage) {
        dispatch(headerAction.changePage(page + 1));
      } else {
        dispatch(headerAction.changePage(1));
      }
    },
    logout() {
      dispatch(loginActionCreator.logout());
    }
  };
};
export default connect(mapStateProps, mapDispatchProps)(Header);
