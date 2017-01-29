/**
 * Created by Acer on 2017/1/16.
 */
// var arr = [2,56,4,44,67,90,3,1];
var array = [1,2,3,4,5];
var temp,m =0;

Array.prototype.bubbleSort = function () {
    for(i=0;i<this.length;i++){
        var bool = true;
        for(j=0;j<this.length-1;j++){
            if (this[j]>this[j+1]){
                var temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
                bool = false;
            }
        }
        if (bool){
            break;
        }
        m++;
    }
    return this;
};
// arr.bubbleSort();
array.bubbleSort();
// console.log(arr+"，比较了"+m+"轮");
console.log(array+"，比较了"+m+"轮");

//如果写成一个单独的函数，而不是array的方法，那么类数组也可以用。
//就是把this改成arr就行。