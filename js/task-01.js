const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number od categories: ${numberOfCategories.length}`);

numberOfCategories.forEach((e) => {
  console.log(`Category: ${e.querySelector("h2").innerText}`);
  console.log(`Elements: ${e.getElementsByTagName("li").length}`);
});
