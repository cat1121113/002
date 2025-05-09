const openBtn = document.getElementById('openBtn');
const card = document.getElementById('card');
const envelope = document.getElementById('envelope');

openBtn.addEventListener('click', () => {
  card.classList.remove('hidden');
  envelope.classList.add('hidden');
});