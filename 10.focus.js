var Focus = React.createClass({
    handleClick(){
        //通过引用名可以引用到对应的DOM元素
         this.refs.myTxt.focus();
    },
    render(){
        return <div>
            <input ref="myTxt" type="text"/>
            <button onClick={this.handleClick}>得到焦点</button>
        </div>
    }
});
ReactDOM.render(<Focus></Focus>,document.querySelector('#app'));