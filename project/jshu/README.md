## 简书

### 1. 项目搭建

1. 使用styled-components布局
   - createGlobalStyle方法中使用reset css清除默认样式

2. createGlobalStyle方法是组件的形式使用

### 2. styled-components完成Header组件布局

1. 在src/common/header/**index.jsx**中创建Header组件
2. 在src//common/header/**style.js**中使用styled-components完成Header组件布局

### 3. 使用iconfont嵌入头部图标

1. 下载完图标以后iconfont.css中@font-face里面url的路径加一个./ 相对路径

2. 使用createGlobalStyle方法把iconfont.css改成iconfont.js全局样式
3. 把Aa换成图标 
4. 添加放大镜图标

### 4. 搜索框动画效果实现

1. 添加state属性focused
2. 通过获取失去焦点事件设置focused的true/false来显示搜索框

3. 使用react-transition-group实现动画效果

### 5. 使用react-redux进行应用数据的管理

1. 创建store
2. 创建reducer
3. 使用react-redux替换原来的写法
4. 把状态组件改成UI组件

### 6. 使用combineReducers完成对数据的拆分管理

​	如果一个文件代码超过300行肯定设计的有问题

1. 配置redux-devtools-extension
2. 把store拆分到header中
3. 用combineReducers组合store
4. 修改header中state的调用

### 7. actionCreators和actionType的拆分

1. 把reducer、actionCreators、actionType拆分出来汇总到store的index中暴露出去
2. 调用store中的index修改外部使用

### 8. 使用immutable.js来管理store中的数据

1. 安装immutable获取fromJS方法

2. 初始state用fromJS方法包裹

3. 在组件中获取用get方法

   ```js
   state.header.get('foucsed')
   ```

4. 在reducer中设置用set方法

   ```js
   // immutable对象的set方法,会结合之前immutable对象的值和set的值，返回一个新的对象
   	state.set('focused',true)
   ```

### 9. 使用redux-immutable统一数据格式

- 因为获取state的时候还不是immutable对象，可以使用redux-immutable把state变成immutable对象

1. 安装redux-immutable

2. 把combineReducers换成从redux-immutable

   ```js
   import { combineReducers } from "redux-immutable";
   ```

3. 使用immutable的getIn方法获取state

   ```js
   const mapStateProps = state => {
     return {
       focused: state.getIn(["header", "focused"])
     };
   };
   ```

### 10. 热门搜索样式布局

1. 完成热门搜索样式布局
2. 根据focused属性来决定是否显示

### 11. ajax获取推荐数据

1. 把header组件从UI组件改成普通组件
2. 安装redux-thunk 并且使用
3. 当失去焦点的时候调用actionCreator里的getList方法实现异步操作
4. public目录下定义模拟数据
5. 发送axios获取到数据(**因为获取的数据不是immutable所以要用fromJS方法包装**)给action然后派发action
6. 在reducer中使用state.set方法把数据赋值给list
7. 在header组件拿到lis使用map循环渲染数据

### 12. 代码优化微调

1. header使用this.props结构赋值
2. reducer使用switch语句

### 13. 热门搜索换页功能实现

- 渲染10条数据

1. 在store声明page,totalPage存当前页和总页数
2. 获取数据算出多少条赋值给action的totalPage
3. 在reducer中使用set方法修改stata的totalPage
4. header中获取page,根据page算出显示10条
5. 循环list显示10条数据（**list现在是immutable对象,用toJS方法转成js对象才能循环**）

- 换一换的显示隐藏

1. SearchInfo添加onMouseEnter和onMouseLeave事件

2. 在store添加mouseIn属性控制SearchInfo的显示隐藏

3. 触发事件>action>dispatch(action)>reducer来改变mouseIn的值,判断mouseIn为true/false来显示隐藏

   ```js
    if (focused || mouseIn) {
         return (
           <SearchInfo onMouseEnter={handlerMouseEnter}onMouseLeave={handlerMouseLeave} >
              	// ...
           </SearchInfo>  )};        
   ```

- 实现换一换

1. 组件中获取totalPage属性出入换一换事件函数page和totalPage进行判断显示页数
2. aciton存页数>dispatch(action)>reudcer>action.page改变store.page

- 优化
  1. 判断newList.length让换一换数据渲染 不然一上来就报错
  2. 把多个set换成merge

### 14. 换页旋转动画效果的实现

1. 添加换一换图标修改样式添加动画样式
2. 利用ref获取图标的dom节点
3. 每次用户点击的时候改变transform的rotate的值

### 15. 避免无意义的ajax请求

1. 点击换一换函数中传入list
2. 根据list.size是否等于0 来派发ajax请求

### 16. 如何在react中使用路由功能

1. 安装react-router-dom并使用

   ```js
   import { BrowserRouter, Route } from "react-router-dom";
   <BrowserRouter>
     <Route path="/" exact render={() => <div>home</div>}></Route>
     <Route path="/detail" exact render={() => <div>detail</div>}></Route>
   </BrowserRouter>
   ```

### 17. 首页组件的拆分

1. 分别创建组件Detail和Home

   ```js
   import Detail from "./pages/detail";
   import Home from "./pages/home";
   <BrowserRouter>
     <Route path="/" exact component={Home}></Route>
     <Route path="/detail" exact component={Detail}></Route>
   </BrowserRouter>
   ```

2. 完成Home组件样式，拆分Home组件为List、Recommend、Topic、Writer，并引入到Home

### 18. 首页专题区域布局及reducer的设计

1. 把Topic组件的样式放到外一层home的style里
2. Home/store/reducer定义TopicItem组件需要的数据
3. 把home下的reducer导出到index然后合到app下的reducer
4. 在Topic里面获取store中的数据循环渲染

### 19. 首页文章列表制作

1. 完成List的布局
2. 在home/store/reducer中定义ListItem组件需要的数据
3. 在List中获取store中的数据渲染ListItem组件

### 20. 首页推荐部分代码编写

1. 完成Recommend组件的样式布局
2. 在home/store/reducer中定义Recommend组件需要的数据
3. 在Recommend中获取store中的数据渲染RecommendWrapper组件

### 21. 首页异步数据获取

1. 把reducer的数据抽到api/home.json
2. 在home组件的ComponentDidMount中创建action发送ajax请求赋给action
3. 获取数据给aciton然后调用mapDispatchProps方法传进去让dispatch派发
4. reucer中利用merge设置store

### 22. 异步操作代码拆分优化

1. 把ComponentDidMount中的aciton抽取到actionCreator中导入index
2. 把action抽成单独函数，并且constants修改action
3. reducer中引入constans修改aciton.type

### 23. 实现加载更多功能

1. 在list组件完成实现加载更多样式
2. 异步操作获取数据赋值给创建的action
3. **reducer使用concat方法合成articleList和list**
4. **因为action里的list是重新请求的数据不是immutable对象所以得用fromJS重新包一下**
5. store中创建articlePage,获取page传递给点击函数拼接到接口
6. 并且page+1传给action添加nextPage属性，reducer中修改store

### 24. 返回顶部功能实现

1. 在home组件中完成回到顶部样式添加scrollTo事件
2. 用属性存到store控制回到顶部显示隐藏
3. ComponentDidMount绑定scroll事件,获取时间对象判断回到顶部显示隐藏
4. 优化reducer把复杂的计算抽成函数

### 25. 首页性能优化及路由跳转

1. 利用PureComponent替换Component
   - （**注意:PureComponent配合immtubale没问题如果直接用会遇到坑**）

2. 利用react-router-dom里的link跳转到详情页

### 26. 详情页面布局

1. 完成详情页面的布局

### 27. 使用redux管理详情页面数据

1. 创建store把详情页数据存到store
2. 在详情页面获取store渲染

### 28. 异步获取详情页面数据

1. 数据抽到api/detail.json发送axios请求获取
2. actionCreator创建action,reducer设置state

### 29. 页面路由参数的传递

1. 动态路由获取参数
2. 普通获取(localhiton.search)

### 30. 登陆页面布局

1. 完成登陆页面布局匹配路由

### 31. 登陆功能实现

1. 创建登陆饿store 
2. 在Header组件中根据login的属性是否显示登陆或者退出 登陆跳到login

3. 点击登陆按钮通过ref获取输入的账号密码传给actionCreator
4. 发送axios请求接口验证正确修改login

5. 获取login的状态判断重定向跳转首页

6. 点击退出修改reducer里的login的状态

### 32. 登陆鉴权

1. 创建写文章页面write组件添加路由
2. 根据store里的login判断是否重定向到login

### 33. 异步加载组件

1. 使用react-loadable进行异步组件加载

   ```js
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
   
   ```

2. 使用异步组件

   ```js
   import Detail from "./pages/detail/loadable";
   ```

3. 因为组建多包了一层路由不好使，可以使用

   ```js
   export default connect(mapStateProp, mapDispatchProp)(withRouter(Detail));
   ```

### 33. 项目上线



