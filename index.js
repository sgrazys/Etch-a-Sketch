const containerEl = document.querySelector('.container');
const buttonEl = document.querySelector('.btn');

function increaseStep(step) {
	return step++;
}

function createTemplate(squareQuantity = 16) {
	const squareSize = containerEl.clientWidth / squareQuantity;

	for (let i = 0; i < squareQuantity ** 2; i++) {
		const divEl = document.createElement('div');

		divEl.classList.add('square');
		divEl.style.width = `${squareSize}px`;
		divEl.style.height = `${squareSize}px`;
		divEl.style.border = `0.1px solid black`;

		containerEl.appendChild(divEl);
	}
}

buttonEl.addEventListener('click', function () {
	containerEl.innerHTML = '';

	let gridSize;
	gridSize = +prompt('Enter the number of squares per side for the new grid (1-100):');

	while (!isFinite(gridSize) || gridSize <= 0 || gridSize > 100) {
		gridSize = +prompt('Please enter only valid values. Numbers from 1 up tp 100 (incl.))');
	}

	createTemplate(gridSize);
});

containerEl.addEventListener('mouseover', (e) => {
	const square = e.target;

	let randomColor = Math.floor(Math.random() * 16777215)
		.toString(16)
		.padEnd(6, 0);

	if (!square.style.backgroundColor) {
		square.style.backgroundColor = `#${randomColor}`;
	}

	if (square.classList.value !== 'square') {
		square.style.backgroundColor = '';
	}
});

createTemplate();
