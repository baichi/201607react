var Person = React.createClass({
    //获得初始状态 返回一个状态对象，这个状态对象的属性和值由你自己决定
    //状态是内部始化的，只能由内部改变
    getInitialState(){
      return {happy:true};
    },
    //为当前组件实例定义了一个函数属性
    handleClick(){
        //设置新的状态对象
        this.setState({happy:!this.state.happy});
        //状态一旦被改变会立刻重新渲染组件 会重新调用render方法
    },
    render(){
        console.log('render');
        var heart = this.state.happy?'高兴':'难过';
        return <div>
            {this.props.name} {heart}
            <button onClick={this.handleClick}>变心</button>
        </div>
    }
});

ReactDOM.render(<Person name="张三"></Person>,document.getElementById('app'));