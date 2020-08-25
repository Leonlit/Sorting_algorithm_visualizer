'use strict'
async function quickSort (arr, descending = false, offset=0) {
    if (arr.length <= 1) return arr;
    if (arr.length == 2) {
        let tempArr;
        if (descending) {
            tempArr = [Math.max(...arr), Math.min(...arr)];
        }else {
            tempArr = [Math.min(...arr), Math.max(...arr)];
        }
        await delay(halfDelayTime);
        await drawDivideSwap(tempArr[0], null, tempArr[1], offset);
        return tempArr;
    }
    let pivot = arr[arr.length - 1];
    let left = [], right = [];
    for (let index = 0 ; index < arr.length - 1; index++){
        let currItem = arr[index];
        if (currItem >= pivot){
            if (descending) {
                left.push(currItem)
            }else {
                right.push(currItem);
            }
        }else {
            if (descending) {
                right.push(currItem);
            }else {
                left.push(currItem);
            }
        }
    }
    await delay(halfDelayTime);
    await drawDivideSwap(left, pivot, right, offset);
    return [...(await quickSort(left, descending, offset)), pivot, ... (await quickSort(right, descending, offset + left.length + 1))];
}