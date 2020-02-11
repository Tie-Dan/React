import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import List from "./component/List";
import Recommend from "./component/Recommend";
import Topic from "./component/Topic";
import Writer from "./component/Writer";
import { connect } from "react-redux";
import axios from "axios";
class Home extends Component {
  componentDidMount() {
    axios.get("/api/home.json").then(res => {
      const { topicList, articleList, recommendList } = res.data.data;
      const action = {
        type: "get_all_data",
        topicList,
        articleList,
        recommendList
      };
      this.props.getAllData(action);
    });
  }
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
      </HomeWrapper>
    );
  }
}
const mapDispatchProps = dispath => {
  return {
    getAllData(action) {
      dispath(action);
    }
  };
};
export default connect(null, mapDispatchProps)(Home);
