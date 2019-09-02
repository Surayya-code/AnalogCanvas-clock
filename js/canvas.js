let canvasLenght = 350;
let radius = canvasLenght / 2;

let canvas = document.getElementById("canvas");
canvas.height = canvasLenght;
canvas.width = canvasLenght;

let ctx = canvas.getContext("2d");
ctx.font = `${radius * 0.1}px Georgia`;
ctx.textAlign = "center";
ctx.textBaseLine =  "middle";


function drawClock(){
    ctx.clearRect(0, 0, canvasLenght, canvasLenght);
    
    ctx.beginPath();
    ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();


    ctx.translate(radius, radius);
    for(let i = 1; i<= 12; i++){
        let x = radius * 0.9 * Math.cos(((i * 30 - 90) * Math.PI) / 180);
        let y = radius * 0.9 * Math.sin(((i * 30 - 90) * Math.PI) / 180);
      
        ctx.fillText(i, x, y);
     }

     let currentTime = new Date();
     let seconds = currentTime.getSeconds();
     let minutes = currentTime.getMinutes();
     let hours = currentTime.getHours();

     let secondsAngle = (seconds - 15) * 6;
     let minutesAngle = (minutes - 15) * 6;
     let hoursAngle = (hours - 3 + minutes / 60) * 30;

     ctx.beginPath();
     drawClockHand(ctx, secondsAngle, radius * 0.75);
     drawClockHand(ctx, minutesAngle, radius * 0.85);
     drawClockHand(ctx, hoursAngle, radius * 0.6);
     ctx.stroke();
     ctx.closePath();


    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.translate(-radius, -radius);
}



function drawClockHand(ctx, angle, length){
    ctx.moveTo(0, 0);
    let a = length * Math.cos(angle * Math.PI / 180);
    let b = length * Math.sin(angle * Math.PI / 180);
    ctx.lineTo(a, b);
}

window.onload = setInterval(drawClock, 1000);