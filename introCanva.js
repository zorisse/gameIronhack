// draw canva on the iamge
$('img').hide();

const imageIntro = [
    { name: 'bouqin', src: './images/intro/bouquin.jpg' },
    { name: 'droite', src: './images/intro/droiteDroite.jpg' },
    { name: 'gauche', src: './images/intro/gaucheCanne.jpg' },
    { name: 'salut', src: './images/intro/salut.jpeg' }


]

var ctx = document.getElementById('introCanvas').getContext('2d');

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





// créer une fonction qui prend les images et les dessines aléatoirement sur le canva 



// on passe une source aléatoirement




















// var backgroundImage = {
//     img: img,
//     x: 0,
//     speed: -1,

//     move: function () {
//         this.x += this.speed;
//         this.x %= canvas.width;
//     },

//     draw: function () {
//         ctx.drawImage(this.img, this.x, 0);
//         if (this.speed < 0) {
//             ctx.drawImage(this.img, this.x + canvas.width, 0);
//         } else {
//             ctx.drawImage(this.img, this.x - this.img.width, 0);
//         }
//     },
// };

// function updateCanvas() {
//     backgroundImage.move();

//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     backgroundImage.draw();

//     requestAnimationFrame(updateCanvas);
// }

// start calling updateCanvas once the image is loaded
