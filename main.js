// Elements
const generateBtn = document.getElementById('generate-btn');
const themeBtn = document.getElementById('theme-btn');
const lottoContainer = document.getElementById('lotto-container');

// Theme Logic
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeBtn.addEventListener('click', () => {
  const targetTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', targetTheme);
  localStorage.setItem('theme', targetTheme);
  updateThemeIcon(targetTheme);
});

function updateThemeIcon(theme) {
  const icon = themeBtn.querySelector('.mode-icon');
  icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Lotto Logic
function getRandomNumbers() {
  const numbers = [];
  while (numbers.length < 6) {
    const num = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers.sort((a, b) => a - b);
}

function getColorClass(num) {
  if (num <= 10) return 'range-1';
  if (num <= 20) return 'range-11';
  if (num <= 30) return 'range-21';
  if (num <= 40) return 'range-31';
  return 'range-41';
}

function displayNumbers() {
  lottoContainer.innerHTML = ''; 

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = 'lotto-row';
    
    const numbers = getRandomNumbers();
    numbers.forEach(num => {
      const ball = document.createElement('div');
      ball.className = `ball ${getColorClass(num)}`;
      ball.textContent = num;
      row.appendChild(ball);
    });
    
    lottoContainer.appendChild(row);
  }
}

// Listeners
generateBtn.addEventListener('click', displayNumbers);

// Initial generation on load
window.onload = displayNumbers;
