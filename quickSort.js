/**
 * Created by Acer on 2017/1/16.
 */
var quickSort = function (arr) {
        if (arr.length<2){
            return arr;
        }
        var tempBase = Math.floor(arr.length/2);//找一个基准数，就是中间那一个
        var temp = arr.splice(tempBase,1)[0];//把基准从数组中分离出来。
        var left = [];
        var right = [];
        for(i=0;i<arr.length;i++){
            if (arr[i]<temp){
                left.push(arr[i]);
            }else {
                right.push(arr[i]);
            }
        }
        return quickSort(left).concat([temp],quickSort(right));

};
var arr = [2,56,4,44,67,90,3,1];
console.log(quickSort(arr));

var arr = [2,56,4,44,67,90,3,1];
var tempBase = Math.floor(arr.length/2);//找一个基准数，就是中间那一个
var temp = arr.splice(tempBase,1)[0];
console.log(temp);
console.log([temp]);

var a = [1,2,3];var b = 6; var c = [7,7,8];var arr = a.concat(b,c);console.log(arr);