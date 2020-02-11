import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { actionCreator } from "./store";
class Detail extends Component {
  render() {
    console.log();
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id);
  }
}
const mapStateProp = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});
const mapDispatchProp = dispatch => ({
  getDetailData(id) {
    dispatch(actionCreator.getDetailAction(id));
  }
});
export default connect(mapStateProp, mapDispatchProp)(Detail);
