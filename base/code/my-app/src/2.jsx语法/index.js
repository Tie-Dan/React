import React from "react";
import ReactDOM from "react-dom";
// jsx语法 写在{}
const app = (
  <h1 style={{ background: "red", width: "200px" }}>
    {/* 注释必须加双括号 */}
    数字:{123}
    字符串:{"hello"}
    布尔值：{(true, false)}
    数组:{[1, 2, 3, 4]}
  </h1>
  // <div>
  // 根结点只能有一个
  // </div>
);

ReactDOM.render(app, document.querySelector("#root"));
