#React
 
 查找好多资料 走了好多弯路 能让新手快速上手的资料没找到 所以决定自己写一个  适合0基础快速上手  大神勿喷！！！
 （如对你有帮助 点个赞拜）
##组件的生命周期(必须了解) 
###创建期(五个阶段)
   1. `getDefaultProps`(获取默认属性)
     作用于组件类，只调用一次，返回对象用于设置默认的props，对于引用值，会在实例中共享。
   2.  `getInitialState` (获取默认状态)
     作用于组件的实例，在实例创建时调用一次，用于初始化每个实例的state，此时可以访问this.props。
   3.   `componentWillMount` (组件将要构建) 
   在完成首次渲染之前调用，此时仍可以修改组件的state。
   4.  `render` (组件渲染输出虚拟dom)
      必选的方法，创建虚拟DOM，该方法具有特殊的规则:
	*  只能通过this.props和this.state访问数据
	*  可以返回null、false或任何React组件
	* 只能出现一个顶级组件（不能返回数组）
	* 不能改变组件的状态
	* 不能修改DOM的输出
   5.  `componentDidMount`(组件渲染完成)
      真实的DOM被渲染出来后调用，在该方法中可通过this.getDOMNode()(也可以ReactDOM.findDOMNode(this))访问到真实的DOM元素。此时已可以使用其他类库来操作这个DOM。（在服务端中，该方法不会被调用）

###存在期

   1. `componentWillReceiveProps`(接受新的属性)
			组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。
``` javascript
	 componentWillReceiveProps: function(nextProps) {
	        if (nextProps.bool) {
		       this.setState({
	            bool: true
	        });
	    }
	}
```

 2. `shouldComponentUpdate`(组建是否应该更新)
	  **必须有返回值(return false/true) 
		第一个参数是新属性
		第二个参数是新状态
	  组件是否应当渲染新的props或state，返回false表示跳过后续的生命周期方法，通常不需要使用以避免出现bug。在出现应用的瓶颈时，可通过该方法进行适当的优化。
	  
 3. `componentWillUpdate` (组件将要被更新)
        第一个参数是新属性
		第二个参数是新状态
	 接收到新的props或者state后，进行渲染之前调用，此时不允许更新props或state。
 4. `render`(组件更新输出dom)
		 没有参数
		 这个阶段访问的都是旧的虚拟dom 
		只有之后的一个阶段访问的才是新的虚拟dom
 5.  `componentDidUpdate`(组件更新完成)
	 完成渲染新的props或者state后调用，此时可以访问到新的DOM元素。
###销毁期
   `componentWillUnmount`
组件被移除之前被调用，可以用于做一些清理工作，在componentDidMount方法中添加的所有任务都需要在该方法中撤销，比如创建的定时器或添加的事件监听器。