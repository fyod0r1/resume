const printButtons = document.querySelectorAll('[data-print]');

for (const button of printButtons) {
  button.addEventListener('click', () => window.print());
}

const year = document.querySelector('[data-current-year]');
if (year) year.textContent = new Date().getFullYear();
