/**
 * 在方法中的this代表当前组件的实例
 */
var Person = React.createClass({
    render(){
         return <div>
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
    <Person gender="男" name="张三"/>,
    document.getElementById('app')
);
