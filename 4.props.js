var style = {
    color:'red'
}
/**
 * 在方法中的this代表当前组件的实例
 */
var Person = React.createClass({
    //在render里增加行内样式的  <div style="color:red">
    //为元素增加className指定CSS的类,而不能用class,因为class是js的关键字
    render(){
         return <div className="bg" style={style}>
             {this.props.name}
             {this.props.gender}
         </div>
    }
});
/**
 * 1.组件名首字母必须大写
 * 2. 必须结束
 * 属性一般是由父组件使用此子组件的时候传入的
 * {gender:'男',name:'张三'}
 */
ReactDOM.render(
    <div>
        <Person gender="男" name="张三"/>
        <Person gender="女" name="李四"/>
        <Person gender="母" name="王五"/>
    </div>,
    document.getElementById('app')
);
