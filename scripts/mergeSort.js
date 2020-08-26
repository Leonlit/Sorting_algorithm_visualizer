'use strict'
async function mergeSort (arr, descending=false, offset=0) {
    if (arr.length == 1) return arr;
    let divider = arr.length >> 1 | 0;
    if (divider == 0) divider++;
    
    let left = await mergeSort(arr.splice(0, divider), descending, offset);
    arr = await mergeSort(arr, descending, offset + divider);
    await delay(delayTime);
    await drawDivideSwap(left, arr[0], arr.slice(1, arr.length), offset);
    return merge (left, arr, descending);
}

function merge (left, right, descending) {
    let merged = [];
    while (left.length && right.length) {
        if ((left[0] > right[0] && !descending ) || (left[0] < right[0] && descending )) {
            merged.push(right[0]);
            right.shift();
        }else {
            merged.push(left[0]);
            left.shift();
        }
    }

    while (left.length) {
        merged.push(left[0]);
        left.shift();
    }

    while (right.length) {
        merged.push(right[0]);
        right.shift();
    }
    return merged;
}

