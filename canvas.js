/*Variable to get canvas element*/
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = 400;

/*Specifying a 2D context to the canvas object, so we can draw and more*/
let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0,0,canvas.width, canvas.height);

let drawColor = "black";
let drawWidth = "2";
let isDrawing = false;

/*Function to change the color of the pen when it is clicked*/
function changeColor(element){
    drawColor = element.style.background;
}

/*Create even listener to all movements of the mouse*/
canvas.addEventListener('mousedown', start, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', stop, false);
canvas.addEventListener('mouseout', stop, false);

/*Function to indicate drawing has started*/
function start(e){
    isDrawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    e.preventDefault();
}

/*Function to draw when mouse move */
function draw(e){
    if(isDrawing){
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.strokeStyle = drawColor;
        context.lineWidth = drawWidth;
        context.lineCap = "round";
        context.lineJoin = "round";
        context.stroke();
    }
    e.preventDefault();
}

/*Function to stop drawing */
function stop(event){
    if(isDrawing){
        context.stroke();
        context.closePath();
        isDrawing = false;
    }
    event.preventDefault();
}

/* Function to clear Canvas*/
let clearBtn = document.getElementById('clear-button');

clearBtn.addEventListener('click', function(){
    context.fillStyle = "white";
    context.clearRect(0,0,canvas.width, canvas.height);
    context.fillRect(0,0,canvas.width,canvas.height);
})

/* Functionality to erase button*/
let eraseBtn = document.getElementById('erase-button');

eraseBtn.addEventListener('click', function(){
    drawColor = "white";
})