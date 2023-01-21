let counterValue = 0;

const buttonDecrement = document.querySelector('[data-action = "decrement"]');
const buttonIncrement = document.querySelector('[data-action = "increment"]');
const currentValue = document.querySelector('[id="value"]');

const increaseNumber = () => {
    counterValue += 1;
    currentValue.textContent = counterValue;

}
const decreaseNumber = () => {
    counterValue -= 1;
    currentValue.textContent = counterValue;
};
buttonIncrement.addEventListener("click" , increaseNumber);
buttonDecrement.addEventListener("click" , decreaseNumber);
