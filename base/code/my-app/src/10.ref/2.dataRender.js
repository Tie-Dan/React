import React, { Component } from "react";

class DataRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      title: "<b>hello</b>",
      list: ["a", "b", "c"]
    };
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.state.title }}></div>;
  }
}

export default DataRender;
