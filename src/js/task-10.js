function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const textInput = document.querySelector('#controls>input');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', changeCreate);
buttonDestroy.addEventListener('click', changeDestroy);


function changeCreate(event) {
  const allBoxes = createBoxes(textInput.value);
  boxes.append(...allBoxes);

}

function changeDestroy(event) {
  boxes.innerHTML = ''
}

 
function createBoxes(amount) {
   const divBoxs = [];
  for (let i = 0; i < amount; i += 1)
  {
    const div = document.createElement('div')
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    divBoxs.push(div);
  }
  return divBoxs;
 
}
