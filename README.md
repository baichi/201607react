## 1. 安装bower
bower 是一个前端框架管理器 jquery angular bootstrap
npm  node包管理器 mime gulp
bower是一个全局的命令行工作，需要通过npm 全局安装
npm在安装node的时候会自动安装
```
npm install bower -g
```


## 2. 安装 react babel 
```
bower install react babel 
```
react就是我们要安装的模块
babel相当于一个翻译，因为浏览器并不能识别react代码，所以需要通过babel帮助我们进行翻译，把react原生代码翻译成浏览器能识别的javascript代码。

> bower install之后会在当前项目下增加一个bower_components的文件夹。
里面放着我们安装的模块

> 我们要把bower_component添加到git的忽略列表里面
我们只需要把依赖的模块告诉别人就可以，别人可以自行安装





