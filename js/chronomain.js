// var chronometer = new Chronometer(180, null);
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");

function printTime() {

    printMinutes();
    printSeconds();
    player.time = chronometer.currentTime;


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
    chronometer.minusOneSec();
    let intervale2 = setInterval(printTime, 1000);

    if (chronometer.currentTime === 0) {
        chronometer.stopClick();
        chronometer.resetClick();
        clearInterval(intervale2);
    }


}
// setInterval(printMilliseconds, 1);

function setResetBtn() {
    chronometer.resetClick();
}

