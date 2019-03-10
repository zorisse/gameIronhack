const sounds = [
    { src: './sound/gameOverMario.mp3' }
]

const gameOverSound = () => {
    var audio = new Audio;
    audio.src = './sound/gameOverMario.mp3'
    audio.play();
}



const nextSound = () => {
    var audio = new Audio;
    audio.src = './sound/next.mp3'
    audio.play();
}

const timeSound = (gameOver) => {

    var x = document.getElementById("audio");

    if (gameOver) {
        x.setAttribute('src', './sound/chrono.mp3')
        x.autoplay = true;
        x.load();
    } else if (gameOver === false) {
        x.setAttribute('src', '')
        x.autoplay = false;
        x.paused = true;
    }

}

