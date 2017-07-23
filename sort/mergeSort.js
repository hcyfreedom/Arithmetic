/**
 * Created by hanchuyi on 2017/7/14.
 * @file 归并排序
 */
function mergeSort(arr) {
    let len = arr.length;
    if(len <=1){
        return arr;
    }else{
        let middle = Math.floor(len/2);
        let left = arr.slice(0,middle);
        let right = arr.slice(middle);
        return merge(mergeSort(left),mergeSort(right));
    }

}
function merge(left,right) {
        let result = [];
        while (left.length&&right.length){
            left[0] <= right[0] ? result.push(left.shift()) : result.push(right.shift());
        }
        while (left.length){
            result.push(left.shift());
        }
        while (right.length){
            result.push(right.shift());
        }
    return result;
}
let arr = [5,2,4,7,1,3,2,6];
// let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log("最终结果"+mergeSort(arr));

