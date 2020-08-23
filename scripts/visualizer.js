let canvas = document.getElementById("visualizer");
let ctx = canvas.getContext('2d');

bubbleSort(generateArray(300))

function drawSwap (arr, from, to) {
    for (let index = 0; index < arr.length; index++) {
        setTimeout(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let index = 0;index < arr.length;index++) {
                ctx.fillStyle ="white";
                if (index == from) ctx.fillStyle ="red";
                if (index == to) ctx.fillStyle="green";
                ctx.fillRect(index * 2, canvas.height, 1, -arr[index]/5);
            }
            drawSwap(arr, to, from);
        }, 1);
    }
}

function drawSearch (arr, holder, comparer) {
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let index = 0;index < arr.length;index++) {
            ctx.fillStyle ="white";
            if (index == holder) ctx.fillStyle ="black";
            if (index == comparer) ctx.fillStyle="blue";
            ctx.fillRect(index * 1, canvas.height, 1, -arr[index]/3);
        }
    }, 0.01);
}

function swap (arr, first, second) {

}