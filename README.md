# What

这是一个用来记录学习build my own react（https://pomb.us/build-your-own-react/）过程的项目

# Why

build my own react这篇文章虽然极其优雅易读，但是对于读者来说，读懂是并不够的，我需要将代码落实到demo中并跑起来，并且要划分为清晰的小目标，每个小目标都有明确的输入和输出

# How

在build/webpack.base.js中的entry字段中替换stage后的数字来选择运行哪个阶段的demo，通过npm run dev运行，通过view in browser打开index.html即可看到效果
