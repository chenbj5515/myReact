# What

这是一个用来记录学习build my own react过程的项目（https://pomb.us/build-your-own-react/）

# Why

build my own react这篇文章虽然极其优雅易读，但是对于读者来说，读懂是并不够的，我需要将代码落实到demo中并跑起来，并且要划分为清晰的小目标，每个小目标都有明确的输入和输出

# How

在build/webpack.base.js中的entry字段中替换stage后的数字来选择运行哪个阶段的demo，通过npm run dev运行，通过view in browser打开index.html即可看到效果

# Detail

## 第一阶段
配合babel把JSX转译为vNode，其中babel会把每个JSX转为React.createElement(type, props, child1, child2, ...)的形式。

其中React.createElement是babel默认绑定的处理函数，可以通过在JSX上一行加注释告诉babel替换为我们自定义的JSX转译函数

babel传的参数：
1. type即JSX对应的标签类型，如div
2. props是标签上的属性
3. child1, child2, ...剩余参数都是被转译函数转译后的标签的子元素

## 第二阶段
把vNode转为真实的DOM渲染到页面上

## 第三阶段
时间切片地把vNode转为Fiber，最后在commit阶段渲染到渲染到页面上

## 第四阶段（待补充）
之前都是只考虑首次渲染，也就是创建节点，这次考虑增量更新。