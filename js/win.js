


function win(image, successCallback) {
    let xMin = image.x[0]
    let xMax = image.x[1]
    let yMin = image.y[0]
    let yMax = image.y[1]
    console.log('xmin : =>' + xMin + 'xMAx=>' + xMax)
    document.addEventListener('click', (e) => {

        var x = e.screenX;
        var y = e.screenY;
        console.log(`x : ${x} , y : ${y}`)
        // si click x inbetween [xmin et max ]et y inbetween [ymin et y max ] then you win 

        if (x > xMin && x < xMax && y > yMin && y < yMax) {
            console.log('you win')
            successCallback();
        }

    });

}


function gameOver() {
    if (chronometer.currentTime > 0) {
        // check game over 
        player.gameover = false;
    } else
        console.log(player.gameover)
}




function canvaGameOver() {
    $('#image').hide();
    $('#introCanvas').show();
    gameOverCanva()
}