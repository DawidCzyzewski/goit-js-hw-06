const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listWrapper = document.getElementById("ingredients");

const addItems = ingredients.forEach((element) => {
  const newListElement = document.createElement("li");
  newListElement.classList.add("item");
  newListElement.textContent = element;
  listWrapper.append(newListElement);
});
