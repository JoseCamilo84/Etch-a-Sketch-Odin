const container = document.querySelector('#container');
const button = document.querySelector('button');

function createDiv() {
  const div = document.createElement('div');
  container.appendChild(div);
  
  div.addEventListener('mouseover', (e) => {
    e.target.style.background = randomColor();
  });
}

function createGrid(squaresPerSide = 256) {
  for (let i = 1; i <= squaresPerSide; i++) {
    createDiv();
  }
}

function removeSquares() {
  container.replaceChildren();
}

function randomColor() {
  const arrayHexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let positionArray = 0;
  let colorSquare = '#';
  
  for (let i = 0; i < 6; i++) {
    positionArray = Math.floor(Math.random() * arrayHexa.length);
    colorSquare += arrayHexa[positionArray];
  }
  return colorSquare;
}

button.addEventListener('click', () => {
  let numberSquares = parseInt(prompt('How many squares do you need?'));
  if (numberSquares > 100 || numberSquares < 1) return;
  document.documentElement.style.setProperty('--width-square', numberSquares);
  let squaresPerSide = numberSquares * numberSquares;
  removeSquares();
  createGrid(squaresPerSide);
});

createGrid();
