const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const message = document.getElementById('message');

noButton.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
  message.textContent = "I love you too ❤️";
  yesButton.style.display = "none";
  noButton.style.display = "none";
});
