const inputElement = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

const changeFontSize = () => {
  textElement.style.fontSize = `${inputElement.value}px`;
};

inputElement.addEventListener("input", changeFontSize);
