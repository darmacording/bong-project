document.getElementById('generate-btn').addEventListener('click', displayNumbers);

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
  const container = document.getElementById('lotto-container');
  container.innerHTML = ''; // Clear previous results

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
    
    container.appendChild(row);
  }
}

// Initial generation on load
window.onload = displayNumbers;
