// draw canva on the iamge
//

const imageIntro = [
    { name: 'bouqin', src: './images/intro/1.png' },
    { name: 'droite', src: './images/intro/2.png' },
    { name: 'gauche', src: './images/intro/3.png' },
    { name: 'salut', src: './images/intro/4.png' },
    { name: 'where is waldo', src: './images/intro/whereiswaldo.png' },
    { name: 'gameOver', src: './images/intro/png/gameOver.png' },
    { name: 'gameOver', src: './images/intro/png/boom.png' },
]


let id1;
let id2;

var ctx = document.getElementById('introCanvas').getContext('2d');


//function 
function clearCanvas() {
    ctx.clearRect(0, 0, 800, 400);
}
function introCanvas() {
    let img = new Image();
    let numRandom = Math.floor(Math.random() * imageIntro.length)
    img.src = imageIntro[numRandom].src
    img.onload = () => {
        ctx.drawImage(img, Math.floor(Math.random() * 800), Math.floor(Math.random() * 400), 100, 100);
    };
    clearCanvas();
}
function movingWaldo() {
    id1 = setInterval(introCanvas, 350);
    id2 = setInterval(introCanvas, 350);
}
function myStopFunction() {
    clearInterval(id1);
    clearInterval(id2);

}



function finaleIntroCanva() {
    clearCanvas();
    let img = new Image();
    img.src = imageIntro[4].src
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 800, 400);
    }

}


function gameOverCanva() {
    clearCanvas();
    let img = new Image();
    img.src = imageIntro[5].src
    img.onload = () => {
        ctx.drawImage(img, 0, 0, 800, 400);
    }

}
















