function createBoard() {
    for (let i = 0; i < 4; i++) {
        const row = document.createElement('div');
        row.classList.add(`row${i}`, 'row');
        const container = document.querySelector('.board');
        container.appendChild(row);

        for (let j = 0; j < 4; j++) {
            const section = document.createElement('div');
            section.classList.add('section');

            const container = document.querySelector(`.row${i}`);
            container.appendChild(section);
        }

    }
}

createBoard();