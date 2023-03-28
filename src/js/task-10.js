function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// pobieramy potrzebne elementy z DOM
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

// funkcja tworząca kolekcję elementów
function createBoxes(amount) {
  let size = 30; // początkowy rozmiar elementu
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
    size += 10; // zwiększamy rozmiar elementu o 10px
  }
}

// funkcja usuwająca kolekcję elementów
function destroyBoxes() {
  boxes.innerHTML = ''; // usuwamy zawartość div#boxes
}

// obsługa przycisków
createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
