// créer un timer de 3 minutes 
// Constructor
function Chronometer(currentTime) {
    this.currentTime = currentTime;
    this.intervalId = null;
}

Chronometer.prototype.minusOneSec = function () {
    this.intervalId = setInterval(() => {
        this.currentTime -= 1;
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
};

Chronometer.prototype.setSeconds = function () {
    let secondes = Math.floor(this.currentTime % 60);
    return secondes;
};

Chronometer.prototype.twoDigitsNumber = function (e) {
    e = e.toString();
    if (e.length < 2) {
        return `0${e}`;
    } else {
        return `${e}`;
    }
};

// Chronometer.prototype.setTime = function () {

// };



Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 180;
};

  // Chronometer.prototype.splitClick = function () {

  // };

