

const rangeInput = document.querySelector('input[type="range"]')
 
const textInput = document.querySelector('[id="text"]')
 
rangeInput.addEventListener('input', e =>
    textInput.style.fontSize = `${e.target.value}px`)
