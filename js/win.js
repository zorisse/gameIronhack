


function win(image, successCallback) {
    let xMin = image.x[0]
    console.log('xmin : =>' + xMin)
    let xMax = image.x[1]
    let yMin = image.y[0]
    let yMax = image.y[1]

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
    if (chronometer.currentTime >= 0) {
        // chexk game over 
        player.gameover = false;

    } else if (chronometer.currentTime <= 0) {
        player.gameover = true;
        canvaGameOver();
        setTimeout(() => document.location.reload(true), 10000)

    }

}




function canvaGameOver() {
    $('#image').hide();
    $('#introCanvas').show();
    gameOverCanva()
}