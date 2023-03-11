const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients"); // znajdujemy ul#ingredients
  ingredients.forEach((ingredient) => {
    const li = document.createElement("li"); // tworzymy nowy element li
      li.textContent = ingredient; // dodajemy tekst do li
        li.classList.add("item"); // dodajemy klasę item do li
          ul.appendChild(li); // dodajemy li do ul
});