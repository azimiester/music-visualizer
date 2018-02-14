const scss = require("../static/style.scss");
import Sound from './Sound';

let context = new (window.AudioContext || window.webkitAudioContext)();


document.addEventListener('mousemove', cursor);
var stick = document.querySelector('.stick');
var glow1 = document.querySelector('.stick .glow-1');
var glow2 = document.querySelector('.stick .glow-2');
var notes = document.querySelectorAll('.note');

notes.forEach((note) => {
    note.addEventListener('mouseenter', () => {
        playSound(note);
        showGlow();
        setTimeout(hideGlow, 300);
    })
    note.addEventListener('mouseleave', hideGlow);
})

function playSound(note) {
    let sound = new Sound(context);
    let value = note.dataset.frequency;
    sound.play(value);
    sound.stop();
}

function showGlow() {
    glow1.style.animationPlayState = "running";
    glow2.style.animationPlayState = "running";
    glow1.classList.remove('hidden');
    glow2.classList.remove('hidden');
}

function hideGlow() {
    glow1.style.animationPlayState = "paused";
    glow2.style.animationPlayState = "paused";
    glow1.classList.add('hidden');
    glow2.classList.add('hidden');
}

function cursor(e) {
    stick.style.top = e.clientY - 12 + "px";
    stick.style.left = e.clientX + 12 + "px";
}