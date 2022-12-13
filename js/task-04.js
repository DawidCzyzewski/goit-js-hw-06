const buttonSubtract = document.querySelector('[data-action="decrement"]');
const buttonAdd = document.querySelector('[data-action="increment"]');
let counterValue = parseInt(document.querySelector("#value").textContent);
let newNumber = document.querySelector("#value");

const increment = () => {
  counterValue++;
  newNumber.textContent = `${counterValue}`;
};

const decrement = () => {
  counterValue--;
  newNumber.textContent = `${counterValue}`;
};

buttonSubtract.addEventListener("click", decrement);
buttonAdd.addEventListener("click", increment);
