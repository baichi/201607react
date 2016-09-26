/**
 * 1. 在引入react-dom.js之后会在window下增加一个ReactDOM属性
 * 也就是说会增加这样一个全局变量
 *
 **/
/**
 * jsx = javascript+xml(html)
 *
 * 1参数  是要渲染的内容 也就是要插入到DOM元素内部的标签
 * 2参数  画布，要渲染到哪个DOM元素的内容
 */

ReactDOM.render(
    <h1>珠峰培训</h1>,
    document.getElementById('app')
);