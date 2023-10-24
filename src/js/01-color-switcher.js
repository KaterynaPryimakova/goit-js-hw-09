import { getRandomHexColor } from './random-color';

const background = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChanging);

let changeId;

function changeColor() {
  background.style.backgroundColor = '#337763';
  startBtn.disabled = true;
  stopBtn.disabled = false;
  changeId = setInterval(() => {
    background.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChanging() {
  clearInterval(changeId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
