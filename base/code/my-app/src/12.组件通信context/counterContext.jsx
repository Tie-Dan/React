// counterContext.js
import React, { Component, createContext } from "react";

// 结构默认属性
const { Provider, Consumer: CountConsumer } = createContext();

// 创建父组件
class CountProvider extends Component {
  constructor() {
    super();
    // 状态
    this.state = {
      count: 1
    };
  }
  // 加
  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  // 减
  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  // 渲染
  render() {
    return (
      // 父组件用Provoder标签包裹并且通过value属性传值
      <Provider
        value={{
          count: this.state.count,
          increaseCount: this.increaseCount,
          decreaseCount: this.decreaseCount
        }}
      >
        {/* 显示所有的子组件 */}
        {this.props.children}
      </Provider>
    );
  }
}

export { CountProvider, CountConsumer };
