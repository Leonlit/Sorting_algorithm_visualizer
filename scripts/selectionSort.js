'use strict'
export function selectionSwap (arr, descending = false) {
    for (let position = 0; position < arr.length - 1; position++) {
        let currSwap = arr[position];
        let currSwapIndex = position;
        for (let element = position + 1; element< arr.length; element++) {
            if ((currSwap > arr[element] && !descending) || (descending && currSwap < arr[element])) {
                currSwap = arr[element];
                currSwapIndex = element;
            }
        }
        if (currSwapIndex == position) continue
        arr[position] += arr[currSwapIndex];
        arr[currSwapIndex] = arr[position] - arr[currSwapIndex];
        arr[position] = arr[position] - arr[currSwapIndex];
    }
    return arr;
}