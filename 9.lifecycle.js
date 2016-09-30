var Message = React.createClass({
    //获取 默认属性
    getDefaultProps(){
        console.log('1. getDefaultProps 获取默认属性');
        return  {name:'无名氏'};
    },
    getInitialState(){
        console.log('2. getInitialState 获取初始状态');
        return {heart:'高兴'}
    },
    componentWillMount(){
        console.log('3.componentWillMount 组件将要被挂载对应的DOM元素内部');
    },
    render(){
        console.log('4.render 加载');
        return <div>
            {this.props.name}:{this.state.heart}
        </div>
    },
    componentDidMount(){
        console.log('5.componentDidMount 挂载之后');
    }
});

ReactDOM.render(<Message name="xxx"></Message>,document.querySelector('#app'));