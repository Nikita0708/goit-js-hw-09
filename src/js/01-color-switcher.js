function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let timerI = null;

startButton.addEventListener('click', onButtonStart);
stopButton.addEventListener('click', onButtonStop);

function onButtonStart() {
    startButton.setAttribute('disabled', 'disabled');
    timerI = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onButtonStop() {
    startButton.removeAttribute('disabled', 'disabled')
    clearInterval(timerI);
    
}

