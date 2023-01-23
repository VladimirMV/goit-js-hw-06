function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonChangeColor = document.querySelector('.change-color');
const output = document.querySelector('.color');
const body = document.querySelector('body');

buttonChangeColor.addEventListener('click', changeColor);

function changeColor(event) {
  let colorRandom = getRandomHexColor();
  body.style.backgroundColor = colorRandom;
  output.textContent = colorRandom;
  
   
}