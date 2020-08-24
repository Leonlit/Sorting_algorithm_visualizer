let canvas = document.getElementById("visualizer");
let ctx = canvas.getContext('2d');
let width = 2;
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
console.log(canvas.height, canvas.width);

async function drawSwap (arr, limiter, from, to) {
    await delay(100);
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
    await delay(100);
    ctx.clearRect((offset * (width + 1)), 0, arr.length * (width + 1), canvas.height);
    for (let index = 0; index < arr.length; index++) {
        ctx.fillStyle = "red";
        if (index == left.length) ctx.fillStyle = "green"
        ctx.fillRect((offset + index) * (width + 1), canvas.height, width, -arr[index]);
    }
    await delay(110);
    ctx.clearRect((offset * (width + 1)), 0, arr.length * (width + 1), canvas.height);
    for (let index = 0; index < arr.length; index++) {
        ctx.fillStyle = "white";
        ctx.fillRect((offset + index) * (width + 1), canvas.height, width, -arr[index]);
    }
}

async function drawSorted (arr) {
    await delay(500);
    await redrawSort(arr.slice(0));
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