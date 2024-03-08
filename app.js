const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

playBtn.addEventListener('click', () => {
    audio.play();
});

pauseBtn.addEventListener('click', () => {
    audio.pause();
});