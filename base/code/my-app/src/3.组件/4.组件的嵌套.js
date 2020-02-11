// 从 react 的包当中引入了 React 和 React.js 的组件父类 Component
// 还引入了一个React.js里的一种特殊的组件 Fragment
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Title extends Component {
  render() {
    return <h1>欢迎进入React的世界</h1>;
  }
}
class Content extends Component {
  render() {
    return <p>React.js是一个构建UI的库</p>;
  }
}
/** 由于每个React组件只能有一个根节点，所以要渲染多个组件的时候，需要在最外层包一个容器，如果使用div, 会生成多余的一层dom
class App extends Component {
  render () {
    return (
    	<div>
    		<Title />
        <Content />
      </div>
  	)
  }
}
**/
// 如果不想生成多余的一层dom可以使用React提供的Fragment组件在最外层进行包裹
class App extends Component {
  render() {
    return (
      <Fragment>
        <Title />
        <Content />
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
