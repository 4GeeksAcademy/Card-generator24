import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener('DOMContentLoaded', function () {
  const topIcon = document.getElementById('topIcon');
  const centerValue = document.getElementById('centerValue');
  const bottomIcon = document.getElementById('bottomIcon');
  const generateBtn = document.getElementById('generateBtn');

  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  const icons = [
    { symbol: '♥', name: 'Corazones'},
    { symbol: '♦', name: 'Diamantes'},
    { symbol: '♣', name: 'Tréboles'},
    { symbol: '♠', name: 'Picas'}
  ];

  function generateRandomCard() {
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    return {
      value: randomValue,
      icon: randomIcon
    };
  }

  function updateCard(card) {
    if (!card) return;
    
    if (topIcon) topIcon.textContent = card.icon.symbol;
    if (centerValue) centerValue.textContent = card.value;
    if (bottomIcon) bottomIcon.textContent = card.icon.symbol;
  }

  let currentCard = generateRandomCard();
  updateCard(currentCard);

  if (generateBtn) {
    generateBtn.addEventListener('click', function () {
      currentCard = generateRandomCard();
      updateCard(currentCard);
    });
  }
});