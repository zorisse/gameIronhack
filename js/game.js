// DATA
// images 
const images = [
    { src: './images/OTfytjA.jpg', x: [250, 300], y: [680, 730] },
    { src: './images/fort.jpg', x: [230, 240], y: [790, 810] },
    { src: '', x: [275, 287], y: [670, 700] },
    { src: '', x: [275, 287], y: [670, 700] },

]

// get money and time 
let player = {
    name: 'one ', time: 10, money: 30, gameover: false, idImage: 0
}






// Chrono 
var chronometer = new Chronometer(player.time, null);
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");

function printTime() {

    printMinutes();
    printSeconds();

    player.time = chronometer.currentTime;
    console.log(player.time);
}

function printMinutes() {
    var printMin = chronometer.twoDigitsNumber(chronometer.setMinutes());

    minUni.innerHTML = printMin[1];
    minDec.innerHTML = printMin[0];
}

function printSeconds() {
    var printSec = chronometer.twoDigitsNumber(chronometer.setSeconds());

    secDec.innerHTML = printSec[0];
    secUni.innerHTML = printSec[1];
}




function setStartChrono() {
    // lancer le chrono sur l'instance
    // lancer le chrono sur l'instance
    chronometer.minusOneSec();
    setInterval(printTime, 1000);
}


function addTime() {
    chronometer.currentTime += 10
    player.money -= 10

}

/////////////////////////////////////////////////////////////////////////////////////////////////
function checkPlayerGame() {

    if (player.gameover) {
        console.log("gameOver")

        canvaGameOver();
        gameOverSound();
        player.gameover = null
        setTimeout(() => document.location.reload(true), 10000)
    }

}

// help button


$('#help').click(() => {
    $('#waldoDistance').toggle();
    $('#help').toggle('hidden');
})

// intro
$('#start').hide();
$('.showAtGame').hide();
movingWaldo();
setTimeout(myStopFunction, 5000);
setTimeout(finaleIntroCanva, 5001);
setTimeout(() => $('#start').show()
    , 5001
)



// fonction game 

const game = (idImage) => {
    // choix de l'image 
    let image = images[idImage];
    $('.showAtIntro').hide();
    // start the game 
    $('#image').show();
    $('#image').attr('src', image.src)
    // help and time Show
    $('.showAtGame').show();
    coordonnee(image.x[0], image.y[0])
    $('#money').click(() => addTime());
    // lancer le chrono en fonction du time de player one 
    win(image, () => {
        player.idImage += 1;
        console.log("palyer id : " + player.idImage)
        game(player.idImage);
    })

}







// start Button game 
$('#start').click(() => {
    setStartChrono();
    game(player.idImage);

    var intervalGameOver = setInterval(
        () => {
            if (chronometer.currentTime === 0) {
                player.gameover = true;
                checkPlayerGame();
                clearInterval(intervalGameOver);
            }
        },

        1000)



})



