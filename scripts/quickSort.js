'use strict'
export function quickSort (arr, descending = false,) {
    if (arr.length <= 1) return arr;
    if (arr.length == 2) {
        if (descending) {
            let tempArr = [Math.max(...arr), Math.min(...arr)];
            return tempArr;
        }else {
            let tempArr = [Math.min(...arr), Math.max(...arr)];
            return tempArr;
        }
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
    return [...quickSort(left, descending), pivot, ...quickSort(right, descending)];
}