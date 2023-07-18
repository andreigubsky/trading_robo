
function showScala (){

graf.style.width = graf.offsetWidth +'px';
graf.style.height = graf.offsetHeight +'px';
let canvasWidth = graf.width = graf.offsetWidth * 2;
let canvasHeight = graf.height = graf.offsetHeight * 2;

drawLine(ctx, 0, canvasHeight - 50, canvasWidth, canvasHeight - 50, '#000000');
ctx.font = '20px Arial';

let leftPx = 0;
for (let i = 0; i <= 100; i++) {
  leftPx += 50;
  drawLine(ctx, leftPx, canvasHeight - 50, leftPx, canvasHeight - 40, '#000000');
  ctx.fillText(i, leftPx - 5, canvasHeight - 15);
}

function getCursorPosition(graf, event) {
    const rect = graf.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    //console.log("x: " + x + " y: " + y)
}
graf.addEventListener('mousemove', function(e) {
    getCursorPosition(graf, e)
})

}