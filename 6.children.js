var Family = React.createClass({
    render(){
       return <ul>
           <li>
               {this.props.children}
           </li>
           {
              /* this.props.children.map(function(item,index,input){
                    return <li>{item}</li>
               })*/

           }
       </ul>
    }
});
ReactDOM.render(<Family name="中国">
    <span>大毛</span>
    <span>二毛</span>
    <span>小毛</span>
</Family>,
document.querySelector('#app')
);