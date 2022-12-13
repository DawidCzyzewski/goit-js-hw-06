const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

let handleData = () => {
  if (event.target.value) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};
nameInput.addEventListener("input", handleData);
