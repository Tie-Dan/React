import React, { Component, Fragment } from "react";
import "./style.css";
import css from "./css";

class Style extends Component {
  render() {
    return (
      <Fragment>
        <div style={css.title}>hello</div>
        <div className="title">world</div>
      </Fragment>
    );
  }
}

export default Style;
