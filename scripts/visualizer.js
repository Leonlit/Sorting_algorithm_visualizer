let canvas = document.getElementById("visualizer");
let ctx = canvas.getContext('2d');
let width = 1

let newArr = null;
let lockOptions = false;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function drawSwap (arr, limiter, from, to) {
    await delay(10);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let index = 0;index < arr.length;index++) {
        ctx.fillStyle ="white";
        if (index == limiter) ctx.fillStyle ="green";
        else if (index == to) ctx.fillStyle ="blue";
        else if (index == from) ctx.fillStyle ="red";
        ctx.fillRect(index * (width + 1), canvas.height, width, -arr[index]);
    }
}

async function drawDivideSwap(left, pivot, right, offset) {
    let arr = [];
    if (pivot == null) {
        arr = [left, right];
    }else {
        arr = [...left, pivot, ...right];
    }
    await delay(10);
    ctx.clearRect((offset * (width + 1)), 0, arr.length * (width + 1), canvas.height);
    for (let index = 0; index < arr.length; index++) {
        ctx.fillStyle = "red";
        if (index == left.length) ctx.fillStyle = "green"
        ctx.fillRect((offset + index) * (width + 1), canvas.height, width, -arr[index]);
    }
    await delay(11);
    ctx.clearRect((offset * (width + 1)), 0, arr.length * (width + 1), canvas.height);
    for (let index = 0; index < arr.length; index++) {
        ctx.fillStyle = "white";
        ctx.fillRect((offset + index) * (width + 1), canvas.height, width, -arr[index]);
    }
}

async function drawSorted (arr) {
    await delay(200);
    console.log(arr);
    redrawSort(arr.slice(0));
    for (let index= 0;index < arr.length; index++) {
        await delay(1);
        ctx.fillStyle ="lightgreen";
        ctx.fillRect(index * (width + 1), canvas.height, width, -arr[index]);
    }
}

async function redrawSort (arr) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let index= 0;index < arr.length; index++) {
        ctx.fillStyle ="white";
        ctx.fillRect(index * (width + 1), canvas.height, width, -arr[index]);
    }
}

async function startSort () {
    console.log(lockOptions);
    if (!lockOptions) {
        if (newArr ==  null) {
            generateNewArray();
        }
        let type = parseInt(document.getElementById("option_algorithm").value);
        lockOptions = true;
        switch (type) {
            case 1:
                await bubbleSort(newArr);
            case 2:
                await insertionSort(newArr); 
                break;
            case 3:
                await selectionSort(newArr);
                break;
            case 4:
                await drawSorted(await quickSort(newArr));
                
                break;
            default:
                console.log("wrong options!!!");
        }
        lockOptions = false;
        newArr = null;
    }
}

function generateNewArray () {
    if (!lockOptions) {
        newArr = generateArray(150);
        redrawSort(newArr);
    }
}