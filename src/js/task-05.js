
const textInput = document.querySelector('[id="name-input"]');
const output = document.querySelector('[id="name-output"]');

textInput.addEventListener("input", (event) => {
 output.textContent = event.currentTarget.value;
 if(output.textContent === "") {
    output.textContent = "Anonymous"};
  
});