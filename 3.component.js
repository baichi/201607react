/**
 * 当在页面中引入了react.js之后，会在window下增加一个 React属性
 * 通过createClass方法可以创建一个自定义的组件
 *  这个自定义用法和普通的html标签一样用
 **/
var Message = React.createClass({
    //有一个返回值，表示此组件将被如何渲染
    render(){
        return <div><h1>hello</h1><h1>world</h1></div>
    }
});
//只有当调用render时候才会真正创建一个组件的实例
/**
 * 1. 方便引用精简代码
 * 2. 方便修改，如果要修改只改一片就可以了
 */
ReactDOM.render(
    <Message/>
    , document.getElementById('app')
);
ReactDOM.render(
    <Message/>
    , document.getElementById('app')
);
