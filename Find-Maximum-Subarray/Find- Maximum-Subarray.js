/**
 * Created by hanchuyi on 2017/7/19.
 */

function findMaxCrossingSubArray(base,arr) {
    let len = arr.length;
    let high = len -1;
    let mid = Math.floor(len/2);
    let leftMaxSum =Number.NEGATIVE_INFINITY , rightMaxSum = Number.NEGATIVE_INFINITY;

    let leftSum =0, rightSum = 0;
    let MaxLeft = mid;
    let MaxRight = mid;
    if (len <= 1){
        return [0 + base , len + base, arr[0]];
    }
    for(let i = mid; i >=0; i--){
        leftSum += arr[i];
        if (leftSum > leftMaxSum){
            leftMaxSum = leftSum;
            MaxLeft = i;
        }
    }
    for(let j = mid + 1; j <=high; j++){
        rightSum += arr[j];
        if(rightSum > rightMaxSum){
            rightMaxSum = rightSum;
            MaxRight = j;
        }
    }
    return [MaxLeft + base, MaxRight + base, (leftMaxSum + rightMaxSum)];
}

function findMaxMumSubArray(base, arr){
    let len = arr.length;
    if(len <= 1){
        return [0 + base, len + base, arr[0]];
    }else {
        let mid = Math.floor(len/2);
        let leftArray = arr.slice(0,mid);
        let rightArray = arr.slice(mid);
        let leftMaxSum = findMaxMumSubArray(base, leftArray);
        let rightMaxSum = findMaxMumSubArray(base+mid, rightArray);
        let acrossMaxSum = findMaxCrossingSubArray(base, arr);
        if(leftMaxSum[2] > rightMaxSum[2] && leftMaxSum[2] > acrossMaxSum[2]){
            return leftMaxSum;
        }
        if (rightMaxSum[2] > leftMaxSum[2] && rightMaxSum[2] > acrossMaxSum[2]) {
            return rightMaxSum;
        }
        return acrossMaxSum;
    }
}

let arr =  [ -11, 34, 37, 30, -42, 4, 16, 47, 36, 19 ];
let result = findMaxMumSubArray(0, arr);
console.log(arr)
console.log('最大子数组下标为'+result[0]+','+result[1]+",和是"+result[2])