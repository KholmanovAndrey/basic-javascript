"use strict";

/*
 Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
 Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
 Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10
};

const game = {
    settings,
    xKey: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    yKey: [8, 7, 6, 5, 4, 3, 2, 1],
    tagColor: '#505050',
    containerElement: null,

    /**
     * Инициирует все значения.
     */
    init(){
        this.containerElement = document.getElementById('game');
    },

    /**
     * Запуск.
     */
    run(){
        this.init();
        this.render();
    },

    /**
     * Отображает в ячейках игровую информацию.
     */
    render(){
        for (let row = 0; row < this.settings.rowsCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            for (let col = 0; col < this.settings.colsCount; col++) {
                const cell = document.createElement('td');
                if (col >= 1 && col < 9 && (row === 0 || row === this.settings.rowsCount - 1)) {
                    cell.textContent = this.xKey[col - 1];
                }

                if (row >= 1 && row < 9 && (col === 0 || col === this.settings.colsCount - 1)) {
                    cell.textContent = this.yKey[row - 1];
                }

                if (this.isCellBlack(row, col)) {
                    cell.style.backgroundColor = this.tagColor;
                }
                trElem.appendChild(cell);
            }
        }
    },

    /**
     * Определяет является ли ячейка черная
     * @param {int} row - номер строки
     * @param {int} col - номер колонки
     * @returns {boolean} true если черная
     */
    isCellBlack(row, col) {
        return ((col % 2 === 0 && row % 2 !== 0) ||
            (col % 2 !== 0 && row % 2 === 0)) &&
            row !== 0 && row !== this.settings.rowsCount - 1 &&
            col !== 0 && col !== this.settings.colsCount - 1;
    }
};

game.run();
