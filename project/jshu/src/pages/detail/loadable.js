import React from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./"), // 引入要异步加载的组件
  loading() {
    // 加载过程
    return <div> 正在加载 </div>;
  }
});

export default () => {
  return <LoadableComponent />;
};
