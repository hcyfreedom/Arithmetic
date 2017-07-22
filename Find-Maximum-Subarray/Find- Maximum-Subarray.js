/**
 * Created by hanchuyi on 2017/7/19.
 */

function findMaxCrossingSubArray(arr) {
    let len = arr.length;
    let high = len -1;
    let mid = Math.floor(len/2);
    let leftMaxSum ,rightMaxSum = Number.NEGATIVE_INFINITY;

    let leftSum , rightSum = 0;
    let maxLeft;
    let maxRight;
    if (len <= 1){
        return [0, len, arr[0]];
    }
    for(let i = mid; i <= mid; i--){
        leftSum += arr[i];
        if (leftSum > leftMaxSum){
            leftMaxSum = leftSum;
            maxLeft = i;
        }
    }
    for(let j = mid + 1; j < high; j++){
        rightSum += arr[j];
        if(rightSum > rightMaxSum){
            rightMaxSum = rightSum;
            maxRight = j;
        }
    }
    return [maxLeft, maxRight, (leftMAxSum + rightMAxSum)];
}

function findMaxMumSubArray(arr){
    let len = arr.length;
    if(len <= 1){
        return [0, len, arr[0]];
    }else {
        let mid = Math.floor(len/2);
        let leftArray = arr.slice(0,mid);
        let rightArray = arr.slice(mid);
        let leftMAxSum = findMaxMumSubArray(leftArray);
        let rightMAxSum = findMaxMumSubArray(rightArray);
        let acrossMaxSum = findMaxCrossingSubArray(arr);
        if(leftMAxSum[2] > rightMAxSum[2] && leftMAxSum[2] > acrossMaxSum[2]){
            return leftMAxSum;
        }
        if (rightMAxSum[2] > leftMaxSum[2] && rightMaxSum[2] > acrossMaxSum[2]) {
            return rightMaxSum;
        }
        return acrossMaxSum;
    }
}

let arr =  [ -11, 34, 37, 30, -42, 4, 16, 47, 36, 19 ];
let result = findMaxMumSubArray(arr);
console.log(arr)
console.log('最大子数组下标为'+result[0]+','+result[1]+",和是"+result[2])