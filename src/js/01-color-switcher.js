function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    colors: getRandomHexColor()
};

refs.startBtn.addEventListener('click',  start);
refs.stopBtn.addEventListener('click', stop);
      
function switchColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}
function  start() {
    switchId = setInterval(switchColor, 1000);
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled');
  }
function  stop() {
    clearInterval(switchId); 
    refs.stopBtn.setAttribute('disabled', true);
    refs.startBtn.removeAttribute('disabled');
  }
