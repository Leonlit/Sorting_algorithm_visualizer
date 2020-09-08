'use strict'

async function HeapSort (arr, descending = false) {
    const size = arr.length;
    const functionObj = (descending) ? heapifyDsc : heapify;
    
    for (let index = Math.floor(size/2) - 1; index >= 0; index--) {
        await functionObj(arr, size, index);
    }
    for (let index = size - 1; index> 0;index--) {
        await drawSwap(arr.slice(0), index, index, 0);
        arr[0] += arr[index];
        arr[index] = arr[0] - arr[index];
        arr[0] = arr[0] - arr[index];
        await delay(delayTime);
        await functionObj(arr, index, 0);
    }
    await drawSorted(arr);
}

async function heapify (arr, size, currIndex) {
    let largest = currIndex;
    const left = 2 * currIndex + 1;
    const right = 2 * currIndex + 2;
    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== currIndex) {
        await delay(delayTime);
        await drawSwap(arr.slice(0), size, largest, currIndex);
        arr[currIndex] += arr[largest];
        arr[largest] = arr[currIndex] - arr[largest];
        arr[currIndex] = arr[currIndex] - arr[largest];
        await heapify(arr, size, largest);
    }
}

async function heapifyDsc (arr, size, currIndex) {
    let smallest = currIndex;
    const left = 2 * currIndex + 1;
    const right = 2 * currIndex + 2;
    if (left < size && arr[left] < arr[smallest]) {
        smallest = left;
    }
    if (right < size && arr[right] < arr[smallest]) {
        smallest = right;
    }
    if (smallest !== currIndex) {
        await delay(delayTime);
        await drawSwap(arr.slice(0), size, smallest, currIndex);
        arr[currIndex] += arr[smallest];
        arr[smallest] = arr[currIndex] - arr[smallest];
        arr[currIndex] = arr[currIndex] - arr[smallest];
        await heapifyDsc(arr, size, smallest);
    }
}