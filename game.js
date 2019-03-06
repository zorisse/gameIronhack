// game

// DATA
const images = [
    { src: './images/OTfytjA.jpg', x: [275, 287], y: [690, 710] },
    { src: './images/fort.jpg', x: [245, 255], y: [745, 755] },
    { src: '', x: [275, 287], y: [670, 700] },
    { src: '', x: [275, 287], y: [670, 700] },

]

// intro
$('#start').hide();
movingWaldo();
setTimeout(myStopFunction, 5000);
setTimeout(finaleIntroCanva, 5001);
setTimeout(() => $('#start').show()
    , 5001
)



// start Button game 
$('#start').click(() => {
    // choix de l'image 
    let image = images[0];
    // hide canvas intro 
    $('#introCanvas').hide();
    $('#start').hide();
    // start the game 
    $('#image').show();
    $('#image').attr('src', image.src)
    // help 

    coordonnee(image.x[0], image.y[0])


})


