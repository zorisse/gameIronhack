const sounds = [
    { src: './sound/gameOverMario.mp3' }
]

const gameOverSound = () => {
    var audio = new Audio;
    audio.src = './sound/gameOverMario.mp3'
    audio.play();
}



