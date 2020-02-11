import React, { Component, Fragment } from "react";
//  高阶组件通俗点讲就是函数
const NewComponent = App => {
  // 函数要有返回值 返回新组件
  return class NewComponent extends Component {
    render() {
      return (
        <Fragment>
          {/* 调用传过来的组件 */}
          <App />
          <div>&copy;铁蛋儿出品 </div>
        </Fragment>
      );
    }
  };
};
// 高阶组件暴露出去
export default NewComponent;
