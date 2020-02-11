### 1. 使用Antd实现TodoList页面布局



### 2. 创建redux中的store

1. 安装redux 
2. 创建store
3. 创建reducer
4. 在todolist组件中获取store 
   - store赋值给state属性

### 3. action和reducer的编写

​	![img](https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3122364568,1648353381&fm=26&gp=0.jpg)

1. 配置chrome插件reudx-devtools-extension

​       https://github.com/zalmoxisus/redux-devtools-extension#usage

2. 创建aciton
   - store.dispatch(action)

3. 创建reducer

4. 使用store.subscribe监听store变化

5. 创建添加一条的action和reducer

### 4.  使用redux实现删除功能

1. 绑定删除事件
2. store.dispatch(action)
3. 判断reducer 

### 5. ActionTypes的拆分

1. 把aciton的值定义成常量从外部引入

   如果action的type值是字符串，出错很难找。但是如果是外部因为的常量写错就会报undefined

### 6. 使用actionCreator统一创建action

1. 创建actionCreator.js 
2. 声明函数返回需要的action
3. 在todolist组件中调用函数把aciton替换掉

### 7. redux的概念总结

**Redux的使用的三大原则：**

- Single Source of Truth(唯一的数据源)

- State is read-only(状态是只读的)

- Changes are made with pure function(数据的改变必须通过纯函数完成)

  > 什么是纯函数:
  >
  > 纯函数指的是 给定固定的输入就一定会有固定的输出，而且不会有任何副作用。
  >
  > 不固定的话像日期对象、ajax请求、异步操作就不是纯函数了
  >
  > 副作用是对接受的参数进行修改。我们可以复制一份修改复制的 

**redux的API：**

- createStore  创建store
- store.dispatch 派发action
- store.getState 获取store
- store.subscribe 监听store的变化

### 8. UI组件和容器组件

>  UI负责渲染、容器组件负责逻辑

1. 创建TodoListUI组件
2. 在TodoList组件中调用TodoListUI组件并传入所需要的方法和属性

### 9. 无状态组件

> 无状态组件就是只有一个render函数，一版UI组件就用无状态组件性能比普通组件要高，
>
> 因为无状态组件就是一个函数,而普通组件是class类 自己本身有很多生命周期函数要执行。

1. TodoListUI组件改成无状态组件
2. 把this.props改成props

### 10. redux中发送异步请求获取数据

1. 在componentDidMount中发送axios请求获取数据
2. 把数据传给action 并且派发acion
3. 修改reducer把数据赋值给store

### 11. 使用redux-thunk实现axios请求

1. 安装redux-thunk模块
2. applyMiddleware中引入模块
3. 配置扩展程序在浏览器显示redux

4. redux-thunk的使用

   > 没使用redux-thunk之前 action 只能返回一个对象
   >
   > 使用了redux-thunk之后 action 可以返回一个函数（这个action在外部让store.dispatch派发相当于执行这个函数）
   >
   > 异步操作就可以在 action 返回的函数中操作 
   >
   > 返回的函数默认接受参数 dispatch 
   >
   > 用dispatch来派发异步结果的action

### 12. 什么是redux的中间件

![img](https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3844382121,1394721866&fm=26&gp=0.jpg)

> 没有中间件之前我们是action>dispatch>store的操作流程
>
> 中间件就是对dispatch进行了封装
>
> 以前直接返回一个对象 现在是返回一个函数 这个函数里可以执行其他操比如异步操作
>
> 最后再回到action让dispatch派发到store

### 13. redux-saga中间件的使用

1. 代码恢复到不使用redux-thunk之前

2. 下载并使用redux-saga

   ```js
   import { createStore, applyMiddleware } from 'redux'
   import createSagaMiddleware from 'redux-saga'
   
   import reducer from './reducers'
   import mySaga from './sagas'
   
   // create the saga middleware
   const sagaMiddleware = createSagaMiddleware()
   // mount it on the Store
   const store = createStore(
     reducer,
     applyMiddleware(sagaMiddleware)
   )
   // then run the saga
   sagaMiddleware.run(mySaga)
   ```

3. redux-sage要求saga返回的函数必须是generator函数（注意:不然会报错）

   ```js
   // sagas.js
   function* mySaga() {
   	// TODO
   }
   export default mySaga
   ```

4. 使用takeyEvery函数配置aciton

   > 以前只有在reducer能匹配action,现在经过配置redux-sage。takeyEvery函数也可以匹配action

   1. 创建action能匹配takeEvery函数中的type
   2. 引入redux-sage/effects获取takeEvery函数
      - takeEvery函数的第一个参数是匹配type
      - takeEvery函数的第二个参数是回调函数

   3. 回调函数(最好是generator函数)中获取axios数据

      1. 把获取到的数据赋值给aciton
      2. 使用put(redux-sage/effects)方法派发action

      3. try...catch处理请求错误

### 14. 使用react-redux完成todolist

1. 安装react-redux 
2. 使用Provider包含TodoList组件传入store

3. 使用connect方法连接TodoList

   connect方法包含两个参数也是两个方法

   - mapStateProps 
   - mapDispatchProps

   1. 使用mapStateProps映射inputValue属性
   2. 使用mapDispatchProps映射onChange的方法
   3. 匹配reducer完成input改变的功能

   4. mapDispatchProps映射onClick的方法
   5. 匹配reducer完成列表添加
   6. 使用mapStateProps映射list
   7. 循环list输出列表

   8. 优化把Todolis改成无状态组件,action抽出

