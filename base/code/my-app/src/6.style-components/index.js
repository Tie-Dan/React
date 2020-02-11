import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  /* 应用于Wrapper组件本身和Wrapper组件里的所有html标签 */
  color: pink;

  /* 应用于Wrapper组件里的h3标签 */
  h3 {
    color: red;
  }

  /* 应用于Wrapper组件里的className为blue的html标签 */
  .blue {
    color: blue;
  }
  /* 应用于className为blue的Thing组件 */
  &.blue {
    color: blue;
  }
`;

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          我是Wrapper黑色背景
          <h3>我是标题</h3>
          <p className="blue">蓝色p标签</p>
        </Wrapper>
        <Wrapper className="blue">我是第二个Wrapper</Wrapper>
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
