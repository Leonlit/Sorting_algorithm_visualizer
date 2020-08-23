'use strict'
function bubbleSort (arr, descending=false) {
    for (let position = 0; position < arr.length; position++) {
        for (let element = 0 ; element < arr.length - position - 1; element++) {
            drawSearch(arr.slice(0), arr.length - position, element);
            const currItem = arr[element];
            const nextItem = arr[element + 1];
            if ((currItem > nextItem && descending == false) || (currItem < nextItem && descending == true)) {
                arr[element] += nextItem;
                arr[element + 1] = arr[element] - nextItem;
                arr[element] = arr[element] - arr[element + 1];
            }
        }
    }
    return arr;
}