const inputData = document.querySelector("#validation-input");
const inputLength = parseInt(inputData.getAttribute("data-length"));

const checkValue = () => {
  if (inputData.value.trim().length === inputLength) {
    inputData.classList.remove("invalid");
    inputData.classList.add("valid");
  } else {
    inputData.classList.remove("valid");
    inputData.classList.add("invalid");
  }
};
inputData.addEventListener("blur", checkValue);
