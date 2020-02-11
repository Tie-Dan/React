import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Topic from "./component/Topic";
import Writer from "./component/Writer";
import { connect } from "react-redux";
import { actionCreator } from "./store";
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4860/8aec44af6460ad75f6bb56caa9ab501c0cfb2ba4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.getAllData();
    this.bindEvent();
  }
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  bindEvent() {
    window.addEventListener("scroll", this.props.changeScroll);
  }
}
const mapStateProps = state => {
  return {
    showScroll: state.getIn(["home", "showScroll"])
  };
};
const mapDispatchProps = dispath => {
  return {
    getAllData() {
      dispath(actionCreator.getAllData());
    },
    changeScroll(e) {
      if (document.documentElement.scrollTop > 100) {
        dispath(actionCreator.toggleTopShow(true));
      } else {
        dispath(actionCreator.toggleTopShow(false));
      }
    }
  };
};
export default connect(mapStateProps, mapDispatchProps)(Home);
