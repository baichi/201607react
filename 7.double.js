/**
 * 1. 定义初始状态
 */
var Input = React.createClass({
    getInitialState(){
        return {val:'请输入'};
    },
    //事件发生的时候，会把事件对象传过来
    handleChange(event){
        var val = event.target.value;
        this.setState({val});
    },
    render(){
        console.log('render');
        return <div>
            <input type="text" onChange={this.handleChange} value={this.state.val}/>
            <p>{this.state.val}</p>
        </div>
    }
});

ReactDOM.render(<Input/>,document.querySelector('#app'));