import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store";
class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetailData();
  }
}
const mapStateProp = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});
const mapDispatchProp = dispatch => ({
  getDetailData() {
    dispatch(actionCreator.getDetailAction());
  }
});
export default connect(mapStateProp, mapDispatchProp)(Detail);
