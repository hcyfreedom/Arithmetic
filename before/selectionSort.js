/**
 * Created by Acer on 2017/1/17.
 */
var selectionSort = function (arr) {
    var minVal,temp;
    for(var i=0;i<arr.length-1;i++){
        minVal = i;
        for(var j=i+1;j<arr.length;j++){
            if (arr[j]<arr[minVal]){
                minVal = j;
            }

        }
        temp = arr[i];
        arr[i] = arr[minVal];
        arr[minVal] = temp;
        console.log(arr+"</br>");
    }
};
var arr = [10,2,22,3,6,89,54,14,25];
console.log("原来的数组是"+arr);
selectionSort(arr);
console.log("快速排序后"+ arr);