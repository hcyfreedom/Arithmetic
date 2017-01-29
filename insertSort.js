/**
 * Created by Acer on 2017/1/16.
 */
Array.prototype.insertSort = function (x) {
    this[this.length] = 100000;
    for (var i = 0;i<this.length;i++){
        if (this[i]>=x){
            for(var j = this.length;j>i;j--){
                this[j] = this[j-1];
            }
            this[i] = x;
            break;
        }
    }
    return this;
};
var arr = [1,2,3,4,6];
arr.insertSort(5);
console.log(arr);