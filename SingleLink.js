/**
 * Created by Acer on 2017/1/17.
 */
var Node = function (node) {
    this.value = node;
    this.next = null;
};
function SingleLink() {
    this.head = new Node(null);//设一个空的头结点
    this.size = 0;
}
SingleLink.prototype = {
    isEmpty:function () {
        if (this.size == 0){
            return true;
        }else {
            return false;
        }
    },
    getHead:function () {
        return this.head;
    },
    //不包括头结点
    size:function () {
        var h = this.head;
        var len = 0;
        while(h.next!=null){
            h = h.next;
            len++
        }
        return len;
    },
    //display
    display:function () {
        var currNode = this.getHead();
        while(currNode){
            console.log(currNode.next);
            currNode = currNode.next;
            }
    },
    //链表头部插入
    insertFront:function (node) {
        var t = new Node(node);
        t.next = this.head.next;
        this.head.next = t;
        this.size++;
    },
    //尾部插入
    insertTail:function (node) {
        var h = this.head;
        var t = new Node(node);
        while(h.next!=null){
            h = h.next;
        }
        h.next = t;
        this.size++;
    },
    //获取第n个结点，头结点为第0个结点
    getNodeByIndex:function (n) {
        var h = this.head;
        var i = 0;
        while(h.next!=null&&i<n){
            h = h.next;
            i++;
        }
        return h;
    },
    remove:function (position) {
        if(position<0){
            return false;
        }
        var preNode = this.getNodeByIndex(position-1);
        var t = preNode.next;
        preNode.next = preNode.next.next;
        t.next = null;
        this.size--;
    },
    add:function (position,element) {
       if (position>=0&&position<=this.size){
           var node =new Node(element);
           var current = this.head, index = 0,temp;
           if (position ==0){
               node.next = current;
               this.head = node;
           }else {

               while (index<position){
                   temp = current;
                   temp.next = node;
                   index++;
               }
               node.next = current;
               temp.next = node;
           }
           this.size++;

           return true;
       }else {
           return false;
       }


    }

};
var list = new SingleLink();
list.insertFront(20);
list.insertTail(10);
console.log(list.getHead());
console.log(list.getNodeByIndex(1));
console.log(list.isEmpty());
console.log("size是"+list.size);
list.insertFront(30);
console.log("插入了三个数的size是"+list.size);
list.remove(2);
console.log("删除了第二个数的size"+list.size);
console.log(list.display());
console.log("测试add");
list.add(0,50);
console.log(list.display());
// list.add(2,4);
// console.log(list.display());

