var arr = [1,2,3];
/** 把一个老数组映射成一个新数组
 * item  是指每个元素
 * index 是指元素的索引
 * input 是指老数组
 */
var newArr = arr.map(function(item,index,input){
   return item*2;
})
console.log(arr);
console.log(newArr);