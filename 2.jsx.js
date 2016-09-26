var persons = ['张三','张三','王五'];
/**
 * 向app的div 内部插入三个div ,子div里面放置名称
 * 如果想在html代码里的内部写JS代码，那么需要套一对大括号
 * {} 表示里面的代码是JS代码，一般会经过运行会返回一个东西。会被渲染出来
 * 类似于angular的表达式{{}}
 **/
/**
 * Each child in an array or iterator
 * should have a unique "key" prop.
 *
 */
ReactDOM.render(
     <div>
         {
            persons.map(function(item,index,input){
                return <div key={index}>{item}</div>
            })
         }
     </div>
    ,document.getElementById('app')
);