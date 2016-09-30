var Suggest = React.createClass({
    getInitialState(){
      return {data:[]}
    },
    handleChange(event){
        //调用接口并把结果转成li标签 数组放在ul内部
      var val = event.target.value;
      $.ajax({
          url:'https://www.baidu.com/su',
          method:'GET',
          async:true,
          jsonp:'cb',//指定传递回调函数名的参数名
          data:{wd:val},//转成一个查询字符串追加在url里面
          dataType:'jsonp',//指定的是返回的数据类型
          context:this,//指定sucess里的this 指针
          success:function(result){
              this.setState({
                  data:result.s.map(function(item,index,input){
                      return <li key={index} className="list-group-item">{item}</li>
                  })
              });
          }
      });
    },
    render(){
        return <div className="panel panel-success">
            <div className="panel-heading">
                <input onChange={this.handleChange} type="text" className="form-control"/>
            </div>
            <div className="panel-body">
                <ul className="list-group">
                    {
                        this.state.data
                    }
                </ul>
            </div>
        </div>
    }
});
ReactDOM.render(<Suggest></Suggest>,document.querySelector('#app'));