const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

let handleData = () => {
  if (event.target.value.trim() != "") {
    //Tu przez mentora zalecony trim oraz sprawdzenie, czy nie ma pustych znaków. To usuwa spację np po słowie wprowadzonym, żeby wykrzynik nie był przesunięty i puste pole się nie wyświetlało
    nameOutput.textContent = nameInput.value.trim(); //Tu tównież dodany trim
  } else {
    nameOutput.textContent = "Anonymous";
  }
};
nameInput.addEventListener("input", handleData);
