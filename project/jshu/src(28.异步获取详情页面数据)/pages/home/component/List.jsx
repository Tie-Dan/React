import React, { Component } from "react";
import { connect } from "react-redux";
import { ListInfo, ListItem, LoadMore } from "../style";
import { actionCreator } from "../store";
import { Link } from "react-router-dom";
class List extends Component {
  render() {
    const { list, gethandleMore, page } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
            <Link key={index} to="/detail">
              <ListItem>
                <img className="pic" src={item.get("imgUrl")} alt="123" />
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("desc")}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore
          onClick={() => {
            gethandleMore(page);
          }}
        >
          更多文字
        </LoadMore>
      </div>
    );
  }
}
const mapState = state => {
  return {
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"])
  };
};
const mapDisProps = dispatch => {
  return {
    gethandleMore(page) {
      dispatch(actionCreator.getMoreList(page));
    }
  };
};
export default connect(mapState, mapDisProps)(List);
