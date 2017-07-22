/**
 * Created by hanchuyi on 2017/7/13.
 */
function insertSort(array) {
    if(Object.prototype.toString.call(array).slice(8,-1)==='Array'){
        console.log(array)
        for(var j=1;j<array.length;j++){
            let key = array[j];
            let i = j - 1;
            while (i>=0&&array[i]>key){
                array[i+1] = array[i];
                i--;
            }
            array[i+1] = key;
        }
        console.log(array)
    }
}

// insertSort([5,2,4,6,1,3])

//原本 while里面 i>0，则导致数组中的第一个元素，总是取不到。因为数组的下标是从0开始的，所以改为i>=0;


function a(arr) {
    if (Object.prototype.toString.call(arr).slice(8,-1) === 'Array'){
        console.log('原始数组'+arr)

        for(let j = 1;j<arr.length;j++){
            let key = arr[j];
            let i = j -1;
            while (i>=0&&arr[i]>key){
                arr[i+1] = arr[i];
                i--;
            }
            arr[i+1] = key;
            console.log(arr)

        }
    }
}
// a([5,2,4,6,1,3])

function notUp(array) {
    if (Object.prototype.toString.call(array).slice(8,-1) === 'Array'){
        console.log('初始数组'+array)

        for(let j = 1;j<array.length;j++){
            let key = array[j];
            let i = j-1;
            while (i>=0&&array[i]<key){
                array[i+1] = array[i];
                i--;
            }
            array[i+1] = key;
            console.log(array)
        }
    }
}
// notUp([5,2,4,6,1,3])