'use strict'
export function insertionSort (arr, descending=false) {
    for (let position = 1 ; position < arr.length; position++) {
        let swapIndex;
        const currItem = arr[position];
        for (let element = position - 1; element >= 0 ; element--) {
            const currIterationItem = arr[element];
            if ((currItem < currIterationItem && !descending) || (currItem > currIterationItem && descending) ) {
                if (element == 0) {
                    swapIndex = 0;
                }else {
                    swapIndex = element
                }
            }else if ((currItem >= currIterationItem && !descending) || (currItem <= currIterationItem && descending)) {
                break;
            }else {
                swapIndex =0;
            }
        }
        if (swapIndex != undefined) {
            const currItem = arr[position];
            for (let swap = position; swap > swapIndex ;swap--) {
                arr[swap] = arr[swap-1];
            }
            arr[swapIndex] = currItem;
        }
    }
    return arr;
}