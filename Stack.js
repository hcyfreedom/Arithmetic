/**
 * Created by Acer on 2017/1/17.
 */
function Stack(){
    var items = [];
    this.push = function (element) {
        items.push(element);
    };
    this.pop = function () {
        return items.pop();
    };
    this.peek = function () {
        return items[items.length-1];
    };
    this.isEmpty =  function () {
        return items.length == 0;
    };
    this.size = function () {
        return items.length;
    };
    this.clear = function () {
        items = [];
    };
    this.print =  function () {
        console.log(items.toString());
    };
    this.toString = function () {
        return items.toString();
    };
}

//测试
var stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size());
stack.pop(1);
console.log(stack.size());
console.log(stack.peek());