
function aud(src) {
    const audio = document.querySelector('#audio');
    audio.setAttribute('src', src);
    audio.autoplay = true;
    audio.load();
    console.log(`audio lancée`);
}









