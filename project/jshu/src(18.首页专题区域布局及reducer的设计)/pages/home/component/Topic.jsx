import React, { Component } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";
class Topic extends Component {
  render() {
    const { list } = this.props;
    return (
      <TopicWrapper>
        {list.map(item => (
          <TopicItem key={item.get("id")}>
            <img
              className="topic-pic"
              src={item.get("imgUrl")}
              alt={item.get("title")}
            />
            社会热点
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}
const mapStateToProp = state => {
  // 因为数据是immutable对象
  return {
    list: state.get("home").get("topicList")
  };
};
export default connect(mapStateToProp, null)(Topic);
