/**
 * Created by Acer on 2017/1/17.
 */
function Queue() {
    var items = [];
    //向队列尾部添加一个或者多个元素
    this.enqueue = function (element) {
        items.push(element);
    };
    //删除队列的第一个元素并且返回被移除的元素
    this.dequeue = function () {
        return items.shift();
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return items.length ==0;
    };
    this.clear = function () {
        items = [];
    };
    this.size = function () {
        return items.length;
    };
    this.print = function () {
        console(items.toString());
    }

}
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
console.log(queue.front());
console.log(queue.size());
