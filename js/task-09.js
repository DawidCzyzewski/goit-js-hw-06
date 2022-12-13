function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

const changeColor = () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorEl.textContent = newColor;
};

buttonEl.addEventListener("click", changeColor);
