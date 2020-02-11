import React, { Component } from "react";
import { connect } from "react-redux";
import { RecommendWrapper, RecommendItem } from "../style";
class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {this.props.list.map(item => {
          return (
            <RecommendItem key={item.get("id")} imgUrl={item.get("imgUrl")} />
          );
        })}
      </RecommendWrapper>
    );
  }
}
const mapState = state => {
  return {
    list: state.getIn(["home", "recommendList"])
  };
};
export default connect(mapState, null)(Recommend);
