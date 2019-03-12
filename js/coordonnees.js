// draw canva rect 
function draw(distance) {
    const canvas = document.querySelector('#canvas')
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 1000, 40);
    // console.log(distance)

    //Je fait varier la couleur en fonction de distance, plus on est près plus on tant vers le rouge 
    ctx.fillStyle = `rgb(${255 - (distance - 30)},0,${0 + (distance - 30)})`
    ctx.fillRect(0, 0, distance * 2, 40);
}



//get the coordonnée and store them 


function coordonnee(charlieX, charlieY) {
    let screenLog = document.querySelector('#coord');

    document.addEventListener('mousemove', (e) => {
        var x = e.clientX;
        var y = e.clientY;
        // screenLog.innerText = `Screen X/Y: ${x}, ${y}`;

        // Calcul de la distance separant Charli de la souris

        let longueur = x - charlieX;
        let largeur = y - charlieY;
        let distance = Math.floor(
            Math.sqrt(
                (longueur ** 2) + (largeur ** 2)
            )
        )
        // Calcule de la largeur max d'un rectangle qui varie en focntion de la distance
        // distance max => 653 ; largeur max pour rect 280
        let distRect = distance * (280 / 1000);

        // dessine un rectangle 
        draw(distRect);

    });

}
