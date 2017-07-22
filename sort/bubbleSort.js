/**
 * Created by hanchuyi on 2017/7/13.
 */
//冒泡：坚定一个，和其余的比较,把这个过程中，相邻的两个之中，最大的一个移向右边
function bubbleSort(arr) {
    if(Object.prototype.toString.call(arr).slice(8,-1)==='Array'){
        console.log('初始数组'+arr)
        for(let j = 0;j<arr.length;j++){
            for (let i = 0;i<arr.length-j-1;i++){//最右边已经排好了j个，所以呢就不用去对比了
                if (arr[i]>arr[i+1]){
                    let temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                    console.log(arr)
                }
            }
        }
    }
}

let arr = [5,2,4,6,1,3];
bubbleSort(arr)

//改进的出发点：
//如果在第x个位置，出现了需要冒泡到最前面的元素，
//现在的算法会将第x个元素和第一个元素交换，交换过来的再和第二个交换，等等等，需要交换x-1次；
//那么，如果我们把x这个位置记住，是不是就可以

function bubbleSort(arr){
    var len=arr.length;
    for(var i=0;i<len;i++){
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){//相邻元素两两对比
                var temp=arr[j+1];//元素交换，用了一个中间变量
                arr[j+1]=arr[j];
                arr[j]=temp;
                console.log(arr)
            }
        }
    }
    return arr;
}
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(bubbleSort(arr));
