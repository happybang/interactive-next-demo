# interactive-next-demo
## 运行方法

```
node ./ssr.server.js
```
## 利用next.js 为基础做交互框架
```
让框架来做前后端分离，而不是开发者
```
## 解决问题：
### 面向全栈开发的同学，前后端分离会增加联调成本

1. 前后端共享state
2. action类型操作前后端相互调用
3. 使开发同学不用特别的在意该属性为客户端属性还是服务端属性，除非为了性能才会考虑区分。可用装饰器或者元数据之类的进行标注。


## routmap

1. 实现interactive-next
2. 实现作用域，用于减少交互回传
3. 业务层 数据层框架，结合最紧密的为Model

<img src="http://mjs.sinaimg.cn/umd/bazaar/2019-1-24/Xnip2019-01-24_00-32-29.jpg" />

<img src="http://mjs.sinaimg.cn/umd/bazaar/2019-1-24/Xnip2019-01-24_10-20-57.jpg"/>
