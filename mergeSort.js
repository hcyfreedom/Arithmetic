/**
 * Created by Acer on 2017/1/17.
 */
//合并划分好的子数组
var merge = function (left,right) {
    var temp = [];
    while (left.length>0&&right.length>0){
        if (left[0]>right[0]){
            temp.push(right.shift());
        }else {
            temp.push(left.shift())
        }
    }
    return temp.concat(left).concat(right);
};
//划分数组
var mergeSort = function (arr) {
    if (arr.length ==1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = arr.slice(0,mid);
    var right = arr.slice(mid);

    return merge(mergeSort(left),mergeSort(right));
};
var arr = [1,2,45,0,4,66,777,1,87,32];
console.log(mergeSort(arr));