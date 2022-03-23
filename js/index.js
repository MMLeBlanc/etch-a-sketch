function createBoard(x) {
    for (let i = 0; i < x; i++) {
        const row = document.createElement('div');
        row.classList.add(`row${i}`, 'row');
        const container = document.querySelector('.board');
        container.appendChild(row);

        for (let j = 0; j < x; j++) {
            const section = document.createElement('div');
            section.classList.add('section');

            const container = document.querySelector(`.row${i}`);
            container.appendChild(section);
        }
    }
}

function addHover() {
    const squareHover = document.querySelectorAll('.section');
    squareHover.forEach(square => {
        square.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = 'lightgrey';
        });
    });
}

createBoard(4, 4);
addHover();

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    const squares = document.querySelectorAll('.section');
    squares.forEach(e => {
        e.style.backgroundColor = 'white';
    });
    let response = window.prompt("Please enter number of squares per side:");
    const board = document.querySelector('.board');
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    createBoard(Number(response));
    addHover();
});